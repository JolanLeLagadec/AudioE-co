'use client'
import Button from '@/components/ui/Button'
import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'
import { incrementQuantity } from './actions'
import useCart from '@/hooks/useCart'


export default function ButtonAddCart({ productId }) {

  const [isLoading, setIsLoading] = useState(false)
  const [value, setValue] = useState(0)
  const cart = useCart()
  

  const handleIncrementQuantity =  async (value, productId) => {
  await incrementQuantity(value, productId)
  cart.setQuantityUpdated(!cart.quantityUpdated)
  }



  return (
    <div className='flex flex-row items-center justify-center gap-2'>
      <div className='p-4 flex flex-row bg-lightGray gap-4 justify-center items-center'>
        <button onClick={() => setValue(value > 0 ? value - 1 : 0)} name="" id=""><Minus width={20} color='#9CA3AF' /></button>
        <span className='text-black'>{value}</span>
        <button onClick={() => setValue(value + 1)} name="" id=""><Plus width={20} color='#9CA3AF' /></button>
      </div>
      <Button onClick={() =>
         handleIncrementQuantity(value, productId)}
          variant='primary'>ADD TO CART</Button>
    </div>
  )
}