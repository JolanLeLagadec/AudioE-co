import React from 'react'

export default function ButtonShop({ onClick }) {
  return (
   <button onClick={onClick} className='hover:text-darkOrange text-xs flex items-center gap-2'>
    SHOP
    <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fill-rule="evenodd"/></svg>
   </button>
  )
}
