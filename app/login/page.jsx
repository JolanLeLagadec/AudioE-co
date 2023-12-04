import Image from 'next/image'
import React from 'react'
import LoginForm from './LoginForm'
import speaker from '@/public/assets/login.jpg'
import speakerDesktop from '@/public/assets/loginDesktop.jpg'

export default function page() {
  return (
    <main className='min-h-screen'>
    <div className='flex flex-row h-full w-full '>
        <Image
        src={speaker}
        width={450}
        height={600}
        className='hidden min-h-screen lg:block border-r-2 border-black xl:hidden'
        alt='vinyle'
        
        />
        <Image
        src={speakerDesktop}
        width={700}
        height={600}
        className=' hidden min-h-screen  border-r-2 border-black xl:block'
        alt='vinyle'
        
        />
        <LoginForm />
    </div>

</main>
  )
}
