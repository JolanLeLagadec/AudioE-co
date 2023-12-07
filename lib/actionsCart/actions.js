'use server'
import { cookies } from "next/dist/client/components/headers";
import db from "../db/db";

const currentUser = await auth();
const { id } = currentUser;


export const getCart = async () => {
    let cart;
    if(currentUser){
         cart = await db.cart.findFirst({
            where: {userId: id},
            data: {
                include: {
                    items: {
                        include: { product: true}
                    }
                }
            }
        })
    } else {
      const cartId = cookies().get('localCartId')?.value
       cart = cartId ? await db.cart.findFirst({
        where: {id: cartId},
        data: {
            include: {
                items: true
            }
        }
      }) : null
    }

    if(!cart){
        return null
    }
    return {
        ...cart,
        size: cart.items.reduce((acc, item) => acc + item.quantity, 0),
        subtotal: cart.items.reduce((acc, item) => acc + item.quantity * item.product.price)
    }
};

export const createCart = async () => {
  if (currentUser) {
    await db.cart.create({
      data: {
        userId: id,
      },
    });
  } else {
   const anoCart = await db.cart.create({
        data: {}
    })
    cookies().set('localCartId', anoCart.id)
  }
};

export const mergeCarts = async (id) => {

    const localCartId = cookies().get("localCartId")?.value
    const localCart = localCartId ? await db.cart.findFirst({
        where: {id: localCartId},
        include: {items: true}
    }) : null

    if(!localCart){
        return null
    }

    const userCart = await db.cart.findFirst({
        where: {userId: id},
        include: {items: true}
    })

    await db.$transaction(async(tx) => {
        if(userCart){
            const mergedItems = mergeCartItems(userCart.cartItem, localCart.cartItem)
            await tx.cartItem.deleteMany({
                where: {cartId: userCart.id}
            })
            await tx.cart.update({
                where: { id: userCart.id},
                data: {
                    items: {
                        createMany: {
                            data: mergedItems.map((item) => ({
                                productId: item.productId,
                                quantity: item.quantity
                            }))
                        }
                    }
                }
            })
            await tx.cart.create({
                where: {id},
                data: {
                    items: {
                        createMany: {
                            data: localCart.items.map((item) => ({
                                productId: item.productId,
                                quantity: item.quantity
                            }))
                        }
                    }
                }
            })
            await tx.cart.delete({
                where: {id: localCart.id}
            })
        }
    })
    cookies().set("localCartId", '')
}

const mergeCartItems = (...cartItems) => {
    return cartItems.reduce((acc, items) => {
        items.foreach((item) => {
            const existingItem = acc.find(i => i.productId === item.productId)
            if(existingItem){
                existingItem.quantity += item.quantity
            } else {
                acc.push(item)
            }
            return acc
        })
       
    }
)}
