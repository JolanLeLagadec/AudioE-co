import ButtonSubmit from '@/components/ButtonSubmit'
import Input from '@/components/ui/Input'
import Link from 'next/link'
import React from 'react'

export default function RegisterForm() {


  return (
    <div className='mt-[113px] w-full min-h-screen p-6 bg-gradient-to-b from-slate-300 to-gray '>  
        <div className='flex justify-center items-center bg-white border border-gray drop-shadow-sm w-[25rem] mx-auto rounded-md mt-10 md:w-1/2 lg:w-3/4'>
        <form className=' flex flex-col justify-start items-center p-6 gap-8' action=''>
            <div className='flex flex-col gap-4'>
            <h1 className=' font-light text-3xl text-black uppercase tracking-widest'>Register</h1>
            <p className='font-light text-black opacity-80 text-lg'>Enter your details below to create a new account.</p>
            </div>
            <div className='flex flex-col items-start justify-start w-full mt-6 '>
                <label className='font-light ' htmlFor="">Name</label>
                <Input className='' name='name' type='text' placeholder='Your Name' />

            </div>
            <div className='flex flex-col items-start justify-start w-full gap-0.5'>
                <label className='font-light ' htmlFor="">E-mail</label>
                <Input className='w-[5rem]' type='email' name='email' placeholder='Your Email' />
            </div>
            <div className='flex flex-col items-start justify-start w-full gap-0.5'>
                <label className='font-light ' htmlFor="">Name</label>
                <Input className='w-[5rem]' type='password' name='password' placeholder='Your Password' />

            </div>

            <ButtonSubmit />
            <p  className=''>Already have an account ? <Link href='/login'><span className='hover:underline cursor-pointer hover:text-slate-400'>Sign in</span></Link></p>
        
       
        </form>
    </div>
    </div>
    
  )
}
