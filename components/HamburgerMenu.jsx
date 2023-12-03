'use client'
import useMenu from '@/hooks/useMenu'
import React from 'react'

export default function HamburgerMenu() {

  const genericLine = 'w-7 h-[3px] my-[3px] ease transform transition bg-lightGray rounded-lg'
  const menu = useMenu()

  return (
    <div className='lg:hidden'>
      <button className='flex flex-col items-center justify-center group ' onClick={() => menu.setIsOpen()}>
        <div className={`${genericLine} ${menu.isOpen ? 'rotate-45 translate-y-[6px]' : ''} `}>
        </div>
        <div className={`${genericLine} ${menu.isOpen ? 'opacity-0' : ''}`}>
        </div>
        <div className={`${genericLine} ${menu.isOpen ? ' -rotate-45 -translate-y-3 ' : ''}`}>
        </div>
      </button >
    </div>

  )
}
