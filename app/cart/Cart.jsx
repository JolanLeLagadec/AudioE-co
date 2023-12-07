'use client'
import useCart from '@/hooks/useCart'
import { getCart } from '@/lib/actionsCart/actions'
import Image from 'next/image'
import React, { useEffect } from 'react'

export default function Cart() {

    const cartModale = useCart()
    
    useEffect( () => {
        const fetchCart = async () => {
            const cart = await getCart()
            console.log(cart)
        }
        fetchCart() 
    })
   
    if(!cartModale.isOpen){
        return null;
    }
  return (
    <div>
    <div className='w-full h-screen fixed bg-neutralBlack opacity-80 mt-[113px] z-30'>
    </div> 
    <div className=' right-7 top-[15rem] h-auto p-6 w-[25rem] bg-white fixed z-40'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <div className='flex justify-between items-center w-full '>
                    <div className='flex flex-row items-center gap-4'>
                        <Image
                        />yo
                        <div className='flex flex-col gap-2 items-start justify-center'>
                            <h1>yo</h1>
                            <h2>yo</h2>
                        </div>
                    </div>
                    <div>
                        yooo
                    </div>

                </div>

            </div>
    </div>

    </div>
    
  )
}
