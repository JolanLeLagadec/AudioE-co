import Input from '@/components/ui/Input'
import React from 'react'
import Summary from './Summary'
import { getCart } from '@/lib/actionsCart/actions';

export default async function Checkout() {
    const cart = await getCart()
    if(!cart){
        return null;
    } 
    return (

        <div className='bg-gray min-h-screen '>
            <div className='py-[113px] flex justify-center items-center '>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 w-full md:items-start  px-10'>
                    <div className=' py-7 px-5 bg-white mt-10  w-full basis-2/3'>
                        <div className='space-y-6 '>
                            <h1 className='font-semibold text-neutralBlack text-xl uppercase text-left mb-10'>checkout</h1>
                            <span className='text-darkOrange font-light text-sm tracking-widest uppercase text-left  '>biling details</span>
                        </div>
                        <div className='flex flex-col justify-center items-start mt-6 gap-6'>
                            <div className='flex flex-col gap-2 w-full '>
                                <label className='font-neutralBlack text-md font-semibold' htmlFor="">Name</label>
                                <Input placeholder='Jean-Romuald Xavier' className='w-full px-4 ' />

                            </div>
                            <div className='flex flex-col gap-2 w-full '>
                                <label className='font-neutralBlack text-md font-semibold' htmlFor="">Email address</label>
                                <Input placeholder='jean.romu@hotmail.fr' className='w-full px-4' />

                            </div>
                            <div className='flex flex-col gap-2 w-full '>
                                <label className='font-neutralBlack text-md font-semibold' htmlFor="">Phone number</label>
                                <Input placeholder='06 76 54 22 53' className='w-full px-4' />

                            </div>
                            <span className='text-darkOrange font-light text-sm tracking-widest uppercase text-left mt-10 '>shipping info</span>
                            <div className='flex flex-col gap-2 w-full '>
                                <label className='font-neutralBlack text-md font-semibold' htmlFor="">Your Address</label>
                                <Input placeholder='32 rue fleury-michon' className='w-full px-4' />

                            </div>
                            <div className='flex flex-col gap-2 w-full '>
                                <label className='font-neutralBlack text-md font-semibold' htmlFor="">ZIP Code</label>
                                <Input placeholder='65400' className='w-full px-4' />

                            </div>
                            <div className='flex flex-col gap-2 w-full '>
                                <label className='font-neutralBlack text-md font-semibold' htmlFor="">City</label>
                                <Input placeholder='Plouneour-Menez' className='w-full px-4' />

                            </div>
                            <div className='flex flex-col gap-2 w-full '>
                                <label className='font-neutralBlack text-md font-semibold' htmlFor="">Country</label>
                                <Input placeholder='France' className='w-full px-4' />

                            </div>
                            <span className='text-darkOrange font-light text-sm tracking-widest uppercase text-left mt-10 '>payment details</span>
                            <div className='flex flex-col gap-4 w-full'>
                            <label htmlFor="">Payment Method</label>
                            <div className='flex flex-row items-center justify-start py-3 rounded-lg w-full border-2 border-gray gap-4 px-6 '>
                            <input type='radio' className=' justify-center items-center border border-gray p-6 h-4 w-4' />
                            <span className='font-bold font-neutralBlack'>e-Money</span>
                            </div>
                            <div className='flex flex-row items-center justify-start py-3 rounded-lg w-full border-2 border-gray gap-4 px-6 '>
                            <input type='radio' className=' focus:bg-darkOrange justify-center items-center border border-gray p-6 h-4 w-4' />
                            <span className='font-bold font-neutralBlack'>Cash on delivery</span>
                            </div>

                            <div className='flex flex-col gap-2 w-full mt-6'>
                                <label className='font-neutralBlack text-md font-semibold' htmlFor="">e-Money number</label>
                                <Input placeholder='238521993' className='w-full px-4' />

                            </div>
                            <div className='flex flex-col gap-2 w-full '>
                                <label className='font-neutralBlack text-md font-semibold' htmlFor="">e-Money PIN</label>
                                <Input placeholder='6892' className='w-full px-4 py-2' />
                            </div>                         
                            </div>
                        </div>
                    </div>

                    <div>
                        <Summary cart={cart} />
                    </div>

                </div>

            </div>

        </div>
    )
}
