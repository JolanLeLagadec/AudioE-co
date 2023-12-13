
import Image from 'next/image'
import React from 'react'
import ButtonAddCart from '../ButtonAddCart'
import db from '@/lib/db/db'
import GoBack from './GoBack'
import MayAlsoLike from './MayAlsoLike'


//export const dynamicParams = true

    const products = await db.product.findMany({
        select: {
            id: true,
            category: true
        }
    })

   

// export const generateStaticParams = async () => { // On génère les paramètres en static pour build les différentes pages au moment du build, et non à la demande, comportement par défaut avec les routes dynamiques.
//   return products.map(product => ({
//         params: {
//         category: product.category.name,
//         product: product.id.toString()
//         }
//     }))
   
// }

export default async function PageProduct({ params }) {

    const { productId } = params

    const id = parseInt(productId)
    const product = await db.product.findFirst({
        where: { id },
        include: {
            category: true
        }
    })

    const removePublicFromUrl = (url) => {
        return url.replace('public', '')
    }
    const newUrl = removePublicFromUrl(product.imageUrl)

    return (

        <div className='py-8 mx-auto container  '>      
            <div className='flex flex-col items-center justify-center  w-full '>
                <div className='flex flex-col items-center justify-center gap-5 md:gap-24 md:flex-row text-left mt-32 relative'>
                <GoBack />
                <Image
                    src={newUrl}
                    width={400}
                    height={400}
                    alt={product.name}
                    className='rounded-xl  md:basis-2/3 lg:basis-0 lg:w-[450px]'
                />
                <div className='flex flex-col  justify-center items-start  gap-4 md:gap-6 lg:gap-10 md:basis-1/3 mt-6 lg:mt-0'>
                    <h1 className='text-3xl font-bold uppercase lg:text-3xl w-[20rem] lg:w-[25rem]'>{product.name}</h1>
                    <p className='w-[25rem] md:w-[20rem] leading-7 text-neutralBlack opacity-75 lg:w-[30rem]'>{product.description}</p>
                    <span className='text-black font-extrabold text-md'>$ {product.price}</span>
                    <ButtonAddCart productId= {productId} />
                </div>
                     
                </div>   
                <div className='flex justify-center items-center 12 md:w-1/2 md:text-center container mx-auto mt-12 p-10'>
                    <div className='flex flex-col gap-5'>
                    <h1 className='text-neutralBlack uppercase text-3xl font-semibold'>features</h1>
                    <p className='opacity-75 text-neutralBlack leading-7 md:w-[40rem]'>{product.features}</p>
                    </div>
                
                </div>   
                <MayAlsoLike id={id} />
                
                      
            </div>
        </div>
    )
}
