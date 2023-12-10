"use server";
import { cookies } from "next/dist/client/components/headers";
import db from "../db/db";
import { auth } from "@/app/auth";


export const getCart = async () => {
  const currentUser = await auth();

  let cart;
  if (currentUser) {
    cart = await db.cart.findFirst({
      where: { userId: currentUser?.id },
      include: {
        items: {
          include: { product: true },
        },
      },
    });
  } else {
    const cartId = parseInt(cookies().get("localCartId")?.value);
    cart = cartId
      ? await db.cart.findFirst({
          where: { id: cartId },
          include: {
            items: {
                include: {product: true}
            }
          },
        })
      : null;
  }

  if (!cart) {
    return null;
  }
  return {
    ...cart,
    size: cart.items.reduce((acc, item) => acc + item.quantity, 0),
    subtotal: cart.items.reduce(
      (acc, item) => acc + item.quantity * item.product.price,
      0
    ),
  };
};

export const createCart = async () => {
  const currentUser = await auth();

  let newCart

  if (currentUser) {
   newCart = await db.cart.create({
      data: {
        userId: currentUser.id,
      },
    });
  } else {
    newCart = await db.cart.create({
      data: {},
    });
    cookies().set("localCartId", newCart.id);
  }
  return {
    ...newCart,
    items: [],
    subtotal: 0,
    size: 0
  }
};

export const mergeCarts = async (id) => {



  const localCartId = parseInt(cookies().get("localCartId")?.value)
  const localCart = localCartId
    ? await db.cart.findFirst({
        where: { id: localCartId },
        include: { items: true },
      })
    : null;

  if (!localCart) {
    return null;
  }
  
  const userCart = await db.cart.findFirst({
    where: { userId: id },
    include: { items: true },
  });
 

  await db.$transaction(async (tx) => {
    if (userCart) {
      
      const mergedItems = mergeCartItems(userCart.items, localCart.items);
      await tx.cartItem.deleteMany({
        where: { cartId: userCart.id },
      });
      await tx.cart.update({
        where: { id: userCart.id },
        data: {
          items: {
            createMany: {
              data: mergedItems.map((item) => ({
                productId: item.productId,
                quantity: item.quantity,
              })),
            },
          },
        },
      });
    } else {
    
      try {
        
       const newCart =  await tx.cart.create({   
          data: {
            userId: id,
            items: {
              createMany: {
                data: localCart.items.map((item) => ({
                  productId: item.productId,
                  quantity: item.quantity,
                })),
              },
            },
          }
        })
     
      }catch(e){
        console.error
      }
     
      }    
      await tx.cart.delete({
        where: { id: localCart.id },
      });
      cookies().set("localCartId", "");
  });

};

const mergeCartItems = (...cartItems) => {
  return cartItems.reduce((acc, items) => {
    items.forEach((item) => {
      const existingItem = acc.find((i) => i.productId === item.productId);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        acc.push(item);
      }
    });
    return acc;
  });
};
