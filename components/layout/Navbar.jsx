
import React from 'react'
import HamburgerMenu from '../HamburgerMenu'
import Link from 'next/link'
import MenuNavbar from './MenuNavbar'
import MobileMenu from './MobileMenu'
import { auth, signOut } from '@/app/auth'
import CartIcon from '../CartIcon'



export default async function Navbar() {

   const session = await auth()
 
    return (
        <div className='bg-neutralBlack h-fit fixed z-30 w-full'>
            <div className=' container mx-auto'>         
                <div className=' flex justify-between items-center border-b border-lightGray border-opacity-20 py-10 px-5 w-full '>
                    <div className='flex justify-between items-center w-2/3 md:w-auto md:gap-12 '>
                    <HamburgerMenu />
                    <Link href='/'><h1 className='font-bold text-2xl flex justify-center w-full text-white text-center -ml-10  md:ml-0'>audiophile</h1> </Link>   
                    </div>
                    <MenuNavbar />      
                    <div className='flex flex-row-reverse items-center gap-6'>
                        {
                           !session ? (
                            <Link href='/register'><button className='uppercase font-light tracking-widest text-white'>login</button></Link>
                           ) : (
                            <form action={    
                                async () => {
                                    'use server'
                                    await signOut()
                                }
                            }>
                            <button className='uppercase font-light tracking-widest text-white'>
                                logout
                            </button>
                            </form>
                           )
                        }           
                 <CartIcon />
                    </div>          
                </div>       
            </div>
            <MobileMenu />     
        </div>
    )
}
