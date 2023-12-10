"use server";
import { createCart, getCart } from "@/lib/actionsCart/actions";
import db from "@/lib/db/db";
import { revalidatePath } from "next/cache";

export const deleteCart = async (id) => {
  await db.cart.delete({
    where: {
      id
    }
  })
}

export const getProducts = async (cat) => {
  const catProducts = await db.category.findMany({
    where: {
      name: cat,
    },
    include: {
      product: true,
    },
  });

  return catProducts;
};

export const incrementQuantity = async (qte, id) => {
const productId = parseInt(id)
  const cart = await getCart() ?? await createCart();
 
  // On vérifie d'abord si il existe un panier, si non on le créer. Dans notre fonction on retourne un panier vide donc on pourra l'utuliser directement.
  // Ensuite on vérifie si on a déjà l'item dans notre panier
  // Si on a l'item mais que sa qte est de 0 alors on le supprime de notre panier
  // Sinon si on a l'item on update la qte
  // Si on a pas l'item on créer un nouvel item avec sa qte et son id
  const isInCart = cart.items.find((item) => productId === item.product.id);
 

  if (qte === 0) {
    if (isInCart) {
     await db.cart.update({
        where: { id: cart.id },
        data: {
          items: {
            delete: {
              id: isInCart.id,
            },
          },
        },
      });
    }
  } else {
    if (isInCart) {
     await db.cart.update({
        where: { id: cart.id },
        data: {
          items: {
            update: {
              where: { id: isInCart.id },
              data: {
                quantity: qte,
              },
            },
          },
        },
      });
    }
    else {
       await db.cart.update({
            where: {id: cart.id},
            data: {
                items: {
                    create: {
                        productId,
                        quantity: qte
                    }
                }
            }
        })
      }
  } 
 
 
};
