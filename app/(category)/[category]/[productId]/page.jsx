import Button from '@/components/ui/Button'
import Image from 'next/image'
import React from 'react'
import ButtonAddCart from '../ButtonAddCart'
import db from '@/lib/db/db'
import GoBack from './GoBack'

export default async function PageProduct({ params }) {

    const { productId } = params

    const id = parseInt(productId)
    const product = await db.product.findFirst({
        where: { id },
        include: {
            category: true
        }
    })
    console.log(product)

    const removePublicFromUrl = (url) => {
        return url.replace('public', '')
    }
    const newUrl = removePublicFromUrl(product.imageUrl)

    return (

        <div className='py-8 mx-auto container  '>      
            <div className='flex  items-center justify-center  w-full '>
                <div className='flex flex-col items-center justify-center gap-5 md:gap-24 md:flex-row text-left mt-32 relative'>
                <GoBack />
                <Image
                    src={newUrl}
                    width={400}
                    height={400}
                    alt={product.name}
                    className='rounded-xl  md:basis-2/3 lg:basis-0 lg:w-[450px]'
                />
                <div className='flex flex-col  justify-center items-start gap-4 md:gap-6 lg:gap-10 md:basis-1/3 mt-6 lg:mt-0'>
                    <h1 className='text-3xl font-bold uppercase lg:text-4xl w-[20rem] lg:w-[25rem]'>{product.name}</h1>
                    <p className='w-[25rem] md:w-[20rem] leading-7 text-neutralBlack opacity-75 lg:w-[30rem]'>{product.description}</p>
                    <span className='text-black font-extrabold text-md'>$ {product.price}</span>
                    <ButtonAddCart />

                </div>

                </div>
            
               
            </div>
        </div>
    )
}
