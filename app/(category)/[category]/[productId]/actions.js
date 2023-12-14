import db from "@/lib/db/db"

export const threeProduct = async (id) => {
    // Récupérer tous les IDs à l'exception de l'ID spécifié
    const allProductIds = await db.product.findMany({
        where: {
            id: { not: id }
        },
        select: { id: true } 
    });

    // Mélanger et prendre trois IDs aléatoires
    const shuffledIds = allProductIds.sort(() => 0.5 - Math.random());
    const selectedIds = shuffledIds.slice(0, 3).map(product => product.id);

    // Récupérer les détails des produits pour les IDs sélectionnés
    const products = await db.product.findMany({
        where: {
            id: { in: selectedIds }
        },
        include: {
            category: true
        }
    });

    return products;
}

export const incrementQuantity = async () => {

}