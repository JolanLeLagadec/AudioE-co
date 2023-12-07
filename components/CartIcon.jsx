'use client'

import useCart from "@/hooks/useCart"
import Image from "next/image"
import  CartIcone  from '@/public/assets/starter-code/assets/shared/desktop/icon-cart.svg'

export default function CartIcon() {
    const cart = useCart()

  return (
    <div>
    <Image
        className='cursor-pointer '
        src={CartIcone}
        width={25}
        height={20}
        alt='cart'
        onClick={() => cart.setIsOpen()}
    />
    </div>
  )
}
