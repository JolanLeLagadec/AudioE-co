import Button from '@/components/ui/Button'
import Image from 'next/image'
import React from 'react'

export default async function Summary({ cart }) {

  return (
   <div>
            <div  className='  h-auto p-6 w-[25rem] bg-white  rounded-lg min-h-[10rem] lg:mt-10'>
                            <div className='flex flex-col justify-center items-center gap-3'>
                                <div className='flex justify-between items-center w-full '>
                                    <span className='font-bold text-lg uppercase'>SUMMARY</span>
                                </div>
                                {
                                    cart?.items.map((item) => (
                                        <div key={item.id} className='flex justify-between items-center w-full '>
                                            <div className='flex flex-row items-center gap-4'>
                                                <Image
                                                    src={item?.product.imageUrl?.replace('public', '')}
                                                    width={75}
                                                    height={75}
                                                    alt={item.name}
                                                    className='rounded-lg'
                                                />
                                                <div className='flex flex-col gap-2 items-start justify-center'>
                                                    <h1 className='text-black font-bold '>{item.product.name}</h1>
                                                    <h2 className='text-neutralBlack opacity-75'>{item.product.price}$</h2>
                                                </div>
                                            </div>
                                            <div className='p-4 flex flex-row  gap-4 justify-center items-center'>
                                               <span className='text-neutralBlack opacity-75'>x{item.quantity}</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                <div className='flex justify-between items-center py-6'>
                    <span className='opacity-75 text-neutralBlack'>TOTAL</span>
                    <span className='font-bold'>${cart?.subtotal || 0}</span>
                </div>
                <div className=' w-full flex justify-center'>
                   <Button variant='primary' className='uppercase w-[20rem]'>CONTINUE & PAY</Button>
                </div>
            </div>
        </div>
  )
}
