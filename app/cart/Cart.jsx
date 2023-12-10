'use client'
import Button from '@/components/ui/Button'
import useCart from '@/hooks/useCart'
import { getCart } from '@/lib/actionsCart/actions'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { deleteCart, incrementQuantity } from '../(category)/[category]/actions'
import Link from 'next/link'

export default function Cart() {

    const [cart, setCart] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const cartModale = useCart()
    const cartRef = useRef()
    const [quantities, setQuantities] = useState({})


    const countItems = cart?.items?.length

    const updateQuantities = async (itemId, newQuantity) => {
        setIsLoading(true)
        await incrementQuantity(newQuantity, itemId)
        setQuantities({ ...quantities, [itemId]: newQuantity })
        cartModale.setItemsCount(newQuantity)
        setIsLoading(false)
    }


    useEffect(() => {
        const fetchCart = async () => {
            const panier = await getCart()
            console.log(panier)
            setCart(panier)
            const newQuantities = {}
            panier?.items?.forEach(item => newQuantities[item.id] = parseInt(item.quantity))
            setQuantities(newQuantities)
        }
        fetchCart()
    }, [cartModale.itemsCount])

    const handleClickOutside = (event) => {
        if (cartRef.current && !cartRef.current.contains(event.target)) {
            cartModale.setIsOpen();
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (!cartModale.isOpen) {
        return null;
    }
    return (
        <div>
            <div className='w-full h-screen fixed bg-neutralBlack opacity-80 mt-[113px] z-30'>
            </div>
            <div ref={cartRef} className=' right-7 top-[15rem] h-auto p-6 w-[25rem] bg-white fixed z-40 rounded-lg min-h-[10rem]'>
                {
                    !countItems ? (
                        <div className='flex justify-center items-center text-neutralBlack uppercase tracking-widest opacity-75 text-2xl font-light' >
                            <p>Your cart is empty</p>
                        </div>) : (
                        <>
                            <div className='flex flex-col justify-center items-center gap-3'>
                                <div className='flex justify-between items-center w-full '>
                                    <span className='font-bold text-lg'>CART(<span>{countItems}</span>)</span>
                                    <button onClick={() => {
                                        deleteCart(cart.id)
                                        cartModale.setItemsCount(0)
                                    }}
                                        className='text-neutralBlack text-md font-light opacity-75'>Remove all</button>
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
                                            <div className='p-4 flex flex-row bg-lightGray gap-4 justify-center items-center'>
                                                <button
                                                    disabled={isLoading}
                                                    className='disabled:cursor-not-allowed'
                                                    onClick={() => {
                                                        const newQte = quantities[item.id] > 0 ? quantities[item.id] - 1 : 0
                                                        updateQuantities(item.product.id, newQte)
                                                    }} name="" id=""><Minus width={20} color='#9CA3AF' /></button>
                                                <span className='text-black'>{quantities[item.id] || 0}</span>
                                                <button
                                                    disabled={isLoading}
                                                    className='disabled:cursor-not-allowed'
                                                    onClick={() => {
                                                        const newQte = quantities[item.id] + 1
                                                        updateQuantities(item.product.id, newQte)
                                                    }}
                                                    name="" id=""><Plus width={20} color='#9CA3AF' /></button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    )}
                <div className='flex justify-between items-center py-6'>
                    <span className='opacity-75 text-neutralBlack'>TOTAL</span>
                    <span className='font-bold'>${cart?.subtotal || 0}</span>
                </div>
                <div className=' w-full flex justify-center'>
                    {
                        cart?.userId !== null ? (
                            <Link href='/checkout'><Button disabled={!cart?.items || cart?.items.length === 0 } onClick={() => cartModale.setIsOpen()} variant='primary' className='disabled:opacity-75 disabled:cursor-not-allowed  uppercase w-[20rem]'>checkout</Button></Link>
                        ) :  <Link href='/login'><Button disabled={!cart?.items || cart?.items.length === 0 } onClick={() => cartModale.setIsOpen()} variant='primary' className='disabled:opacity-75 disabled:cursor-not-allowed  uppercase w-[20rem]'>checkout</Button></Link>
                    }
                </div>
            </div>
        </div>
    )
}
