import db from "@/lib/db/db"

export const getProducts = async (cat) => {
    const catProducts = await db.category.findMany({
        where: {
           name: cat
          },
            include: {
                product: true
            }
        })

    return catProducts
}