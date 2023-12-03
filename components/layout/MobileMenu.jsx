'use client'
import useMenu from '@/hooks/useMenu'
import Image from 'next/image'
import React from 'react'
import headPhones from '@/public/assets/headphones-nobg.png'
import earPhones from '@/public/assets/earphones-nobg.png'
import speaker from '@/public/assets/speaker-nobg.png'
import Link from 'next/link'
import ButtonShop from '../ui/ButtonShop'


export default function MobileMenu() {

  const menu = useMenu()


  return (
    <div className={` z-40 lg:hidden h-screen  ${menu.isOpen ? 'bg-opacity-80 bg-neutralBlack  ' : 'hidden'} `}>
      <div   className=' z-40 bg-white rounded-b-xl '>
        <div className='flex flex-col gap-4 md:flex-row items-center justify-center px-3 py-16'>
          <div className=' bg-gray flex flex-col items-center  gap-4 w-[20rem] drop-shadow-lg  rounded-lg '>    
          <Image
           className='-mt-12 drop-shadow-2xl '
           src={headPhones}
           width={75}
           height={75}
           alt='headphones'
           />
           <div className='flex flex-col items-center gap-4 mt-2 py-4'>
            <h1 className='text-sm font-semibold'>HEADPHONES</h1>
            <Link href='/headphones'><ButtonShop /></Link>

          </div>
          </div>
          <div className='relative bg-gray flex flex-col items-center gap-4 w-[20rem] drop-shadow-lg  rounded-lg mt-12'>    
          <Image
           className='-mt-12 drop-shadow-2xl '
           src={speaker}
           width={75}
           height={75}
           alt='headphones'
           />
           <div className='flex flex-col items-center gap-4 mt-2 py-4'>
            <h1 className='text-sm font-semibold'>SPEAKERS</h1>
            <Link href='/speaker'><ButtonShop /></Link>

          </div>
          </div>
          <div className='relative bg-gray flex flex-col items-center justify-end gap-4 w-[20rem] drop-shadow-lg mt-12 rounded-lg '>    
          <Image
           className='-mt-12 drop-shadow-2xl '
           src={earPhones}
           width={75}
           height={75}
           alt='headphones'
           />
           <div className='flex flex-col items-center gap-4 mt-2 py-4'>
            <h1 className='text-sm font-semibold'>EARPHONES</h1>
            <Link href='/earphones'><ButtonShop /></Link>

          </div>
          </div>
          

        </div>

      </div>

    </div>
  )
} 
