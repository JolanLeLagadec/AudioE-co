
import Button from '@/components/ui/Button'
import React from 'react'
import { threeProduct } from './actions'
import Link from 'next/link'
import Image from 'next/image'

export default async function MayAlsoLike({ id }) {

    const products = await threeProduct(id)

    return (
        <div>
            <h1 className='font-semibold text-3xl text-center py-4'>You may also like</h1>
            <div className='flex flex-col justify-center items-center lg:flex-row  gap-8 md:gap-10 lg:gap-14  mt-6  '>   
                {
                    products.map((product) => (
                        <div key={product.id} className='flex flex-col  items-center justify-center gap-4 '>
                            <Image
                                src={product.imageUrl.replace('public', '')}
                                width={300}
                                height={300}
                                alt={product.name}
                                className='min-h-[300px]'
                            />
                            <h1 className='text-3xl font-bold uppercase lg:text-4xl lg:w-[20rem] text-center lg:min-h-[5rem] '>{product.name}</h1>
                            <Link href={`/${product.category.name}/${product.id}`}><Button variant='primary' className='mb-5'>SEE PRODUCT</Button></Link>
                        </div>


                    ))
                }

            </div>
        </div>
    )
}
