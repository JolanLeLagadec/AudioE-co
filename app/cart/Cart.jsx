'use client'
import Button from '@/components/ui/Button'
import useCart from '@/hooks/useCart'
import { getCart } from '@/lib/actionsCart/actions'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { deleteCart, incrementQuantity } from '../(category)/[category]/actions'
import Link from 'next/link'

export default function Cart({ user }) {

    const handleGetCart = async () => {
        const cart = await getCart()
        setCart(cart)
    }
  
    
    const [cart, setCart] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const cartModale = useCart()
    const cartRef = useRef()
  
    const countItems = cart?.items?.length

    // Premier rendu: on a les state initiaux, le useEffect lance handleGetCart
    // handleGetCart provoque un re rendu en stockant le panier dans un état local
    // Dans le panier, on requête le serveur pour incrémenter les quantités d'un item selon la présence d'un produit.
    // Lorsque qu'on incrémente les quantités on veut provoquer un re rendu pour cela : trigger useEffect et set le nouveau panier. Quantités à jour.

    const updateQuantities = async (item, newQuantity) => {
        let res;
        setIsLoading(true)
        try {
             res = await incrementQuantity(newQuantity, item.product.id);
        }catch(e){
            console.log(e)
        } 
        if(res){
            cartModale.setQuantityUpdated()
        }
        setIsLoading(false)

    };
    const deleteUserCart = async (cartId) => {
        if(cart){
            const res = await deleteCart(cartId)
        if(res){
            cartModale.setQuantityUpdated()
        }
        }
    }

    useEffect(() => {
            const fetchCart = async () => {
                await handleGetCart()
            }   
          fetchCart()  
    }, [cartModale.quantityUpdated, user])

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
                                    <button onClick={() => deleteUserCart(cart.id)}
                                        className='text-neutralBlack text-md font-light opacity-75'>Remove all</button>
                                </div>
                                {
                                    cart?.items?.map((item, index) => (
                                        <div key={index} className='flex justify-between items-center w-full '>
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
                                                        const newQte = item.quantity > 0 ? item.quantity - 1 : 0
                                                        updateQuantities(item, newQte)
                                                    }} name="" id=""><Minus width={20} color='#9CA3AF' /></button>
                                                <span className='text-black'>{item.quantity || 0}</span>
                                                <button
                                                    disabled={isLoading}
                                                    className='disabled:cursor-not-allowed'
                                                    onClick={() => {
                                                        const newQte = item.quantity + 1
                                                        updateQuantities(item, newQte)
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