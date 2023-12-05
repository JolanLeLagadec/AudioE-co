'use client' // utilisation de signIn
import ButtonSubmit from '@/components/ButtonSubmit'
import Input from '@/components/ui/Input'
import Link from 'next/link'
import React from 'react'
import { authenticate } from '@/lib/actionsUser/actions'
import { useFormState } from "react-dom";

export default function LoginForm () {

const [state, formAction] = useFormState(authenticate, undefined)


//useFormState to call the server action and handle form errors, and use useFormStatus to handle the pending state of the form

  return (
   <div className='mt-[113px] w-full min-h-screen p-6 bg-gradient-to-bl from-slate-200 to-gray'>  
        <div className='flex justify-center items-center bg-white  border border-gray drop-shadow-sm w-[25rem] mx-auto rounded-md mt-10 md:w-1/2 lg:w-3/4'>
        <form className=' flex flex-col justify-start items-center p-6 gap-8 xl:w-[30rem] xl:py-8' action={formAction}>
            <div className='flex flex-col items-start gap-4 w-full'>
            <h1 className=' font-light text-3xl text-black uppercase tracking-widest' >Login</h1>
            <p className='font-light text-black opacity-80 text-lg'>Enter your details below to sign in.</p>
            </div>
            <div className='flex flex-col items-start justify-start w-full gap-0.5'>
                <label className='font-light ' htmlFor="">E-mail</label>
                <Input className='w-[5rem]' type='email' name='email' placeholder='Your Email' />
            </div>
            <div className='flex flex-col items-start justify-start w-full gap-0.5'>
                <label className='font-light ' htmlFor="">Password</label>
                <Input className='w-[5rem]' type='password' name='password' placeholder='Your Password' />

            </div>
            <ButtonSubmit type='submit' className='w-full' />
            {state}
            <p  className=''>Don&apos;t have an account ? <Link href='/register'><span className='hover:underline cursor-pointer hover:text-slate-400 text-center'>Sign up</span></Link></p>
        
       
        </form>
    </div>
    </div>
  )
}
