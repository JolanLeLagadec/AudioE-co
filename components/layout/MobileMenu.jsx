'use client'
import useMenu from '@/hooks/useMenu'
import Image from 'next/image'
import React from 'react'
import headPhones from '@/public/assets/headphones-nobg.png'
import earPhones from '@/public/assets/earphones-nobg.png'
import speaker from '@/public/assets/speaker-nobg.png'
import Link from 'next/link'
import ButtonShop from '../ui/ButtonShop'
import { useEffect } from 'react'


export default function MobileMenu() {

  const menu = useMenu()

  useEffect(() => {
    if (menu.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menu.isOpen]);

if(!menu.isOpen){
  return null;
}
  return (
    <div className=' fixed z-50 lg:hidden h-screen  bg-opacity-80 bg-neutralBlack w-full '>
      <div className='relative container h-[30rem] overflow-y-auto mx-auto z-20 bg-white rounded-b-xl lg:py-24 md:h-[25rem] md:py-11'>
        <div className='flex flex-col gap-4 md:flex-row items-center justify-center px-3 md:px-0 py-16 lg:gap-8'>
          <div className=' bg-gray flex flex-col items-center gap-4 w-[20rem] drop-shadow-lg rounded-lg  '>
            <Image
              className='-mt-12 drop-shadow-2xl  '
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
          <div className='relative bg-gray flex flex-col items-center gap-4 w-[20rem] drop-shadow-lg  rounded-lg mt-12 md:mt-0'>
            <Image
              className='-mt-11 drop-shadow-2xl '
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
          <div className='relative bg-gray flex flex-col items-center h-[150px]  gap-4 w-[20rem] drop-shadow-lg mt-12 rounded-lg md:mt-0 '>
            <Image
              className='-mt-9 drop-shadow-2xl '
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
