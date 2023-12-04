'use client'
import React from 'react'
import vinyle from '@/public/assets/register.jpg'
import vinyleDesktop from '@/public/assets/registerDesktop.jpg'
import Image from 'next/image'
import RegisterForm from './RegisterForm'

export default function Register() {
  return (

    <main className='min-h-screen'>
        <div className='flex flex-row h-full w-full '>
            <Image
            src={vinyle}
            width={450}
            height={600}
            className='hidden min-h-screen lg:block border-r-2 border-black xl:hidden'
            alt='vinyle'
            
            />
            <Image
            src={vinyleDesktop}
            width={700}
            height={600}
            className=' hidden min-h-screen  border-r-2 border-black xl:block'
            alt='vinyle'
            
            />
            <RegisterForm />
        </div>

    </main>
  )
}
