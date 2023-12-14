import Header from '@/components/Header'
import React from 'react'
import Product from './Product'
import { getProducts } from './actions'
import db from '@/lib/db/db'

const products = await db.product.findMany({
    select: {
        id: true,
        category: true
    }
})
console.log(products)

export default async function Category({ params }) {

    const { category } = params

    const catProducts = await getProducts(category)
    
    const products = catProducts.map(cat => cat.product)

    return (
        <div>
            <main className='min-h-screen '>
                <Header label={category} />
                <div className='p-4 flex flex-col items-center mt-6 gap-8 mb-14'>
                    {
                        products[0]?.map((product, index) => (
                            <div key={product.id}>
                                <Product data={product} reverse={index % 2 === 1} cat={category} />
                            </div>
                        ))
                    }

                </div>
            </main>
        </div>
    )
}
