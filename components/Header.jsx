import React from 'react'

export default function Header({ label }) {

    return (
        <div className='bg-black '>
            <div className='flex justify-center items-center text-center w-full h-[2rem] py-[113px]'>
                <h1 className='uppercase text-4xl font-bold text-white w-1/2 text-center h-auto mt-24 '>{label}</h1>
            </div>
        </div>
    )
}
