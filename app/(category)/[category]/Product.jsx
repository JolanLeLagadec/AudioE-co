import Button from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Product({ data, reverse, cat }) {

    const { imageUrl, id, description, name} = data

    const removePublicFromUrl = ( url ) => {
        return url.replace('public','')
    }
    const newUrl = removePublicFromUrl(imageUrl)

    const productClass = reverse ? 'md:flex-row-reverse' : 'md:flex-row'

  return (

<div className='py-8'>
    <div className={`flex flex-col items-center justify-center gap-5 lg:gap-24 text-center md:text-left ${productClass}`}>
        <Image
        src={newUrl}
        width={400}
        height={400}
        alt={name}
        className='rounded-xl md:basis-2/3 lg:w-[450px]'
         />
         <div className='flex flex-col items-center justify-center md:items-start gap-4 md:gap-6 lg:gap-10 md:basis-1/3'>
            <h1 className='text-3xl font-bold uppercase lg:text-4xl w-[20rem] lg:w-[25rem]'>{name}</h1>
            <p className='w-[30rem] md:w-[20rem] leading-7 text-neutralBlack opacity-75'>{description}</p>
            <Link href={`/${cat}/${id}`}><Button variant='primary'>SEE PRODUCT</Button></Link>

         </div>
    </div>
    </div>
  )
}
