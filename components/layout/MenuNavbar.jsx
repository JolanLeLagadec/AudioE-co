'use client'
import React from 'react'
import Link from 'next/link';
import { useState } from 'react'

export default function MenuNavbar() {
    // On en fait un composant à part entière pour garder la navbar en composant serveur, on aura besoin de fetch l'utilisateur, on a plus rapidement accès aux données en le faisant server side.
    const [selectedItem, setSelectedItem] = useState(null);
    const navItems = ["HOME", "HEADPHONES", "SPEAKERS", "EARPHONES"];
  return (
    <div className='hidden lg:flex flex-row items-center gap-8 text-white lg:-ml-32'>               
                    
    {
        navItems.map((item) => (
            <Link key={item} href={`${item === 'HOME' ? '/' : `/${item.toLowerCase()}`}`}>
            <span 
            onClick={() => setSelectedItem(item)} 
            key={item}
            className={`hover:text-lightOrange cursor-pointer tracking-widest transition-colors ${selectedItem === item ? 'text-darkOrange' : ''}`}
            >
            {item}
            </span>
            </Link>
        ))
    }
</div>
  )
}
