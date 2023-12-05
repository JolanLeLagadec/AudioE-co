import Image from 'next/image'
import React from 'react'
import imagebestgearMobile from '@/public/assets/shared/mobile/image-best-gear.jpg'
import imagebestgearTablet from '@/public/assets/shared/tablet/image-best-gear.jpg'
import imagebestgearDesktop from '@/public/assets/shared/desktop/image-best-gear.jpg'

export default function AudioGear() {
  return (
    <div className='mx-auto container mt-16'>
    <div className='flex flex-col lg:flex-row-reverse items-center justify-center w-full xxl:-space-x-10 p-6'>
      <Image
        width={400}
        height={400}
        src={imagebestgearMobile}
        alt='info'
        className=' md:hidden w-full rounded-xl max-w-[500px]'
      />
      <Image
        width={400}
        height={400}
        src={imagebestgearTablet}
        alt='info'
        className='hidden md:block lg:hidden w-full rounded-xl'
      />
      <Image
        width={550}
        height={400}
        src={imagebestgearDesktop}
        alt='info'
        className='hidden lg:block  rounded-xl lg:w-[500px] xl:w-[550px]'
      />
      <div className='flex flex-col items-center lg:items-start justify-center gap-6 text-center lg:text-left xl:w-2/3 w-full '>
      <p className='text-5xl text-black font-bold max-w-[450px] md:max-w-[600px] uppercase  mt-6 py-5 leading-[3.5rem] '>Bringing you the <span className='text-darkOrange'>best</span> audio gear</p>
      <p className='font-light w-[21rem] leading-7 md:w-3/4'>Located at the heart of New York City, Audiophile is the premier store for high end headphones,
        earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
        rooms available for you to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place to buy your portable
        audio equipment.</p>    
      </div>
     
    </div>
  </div>
  )
}
