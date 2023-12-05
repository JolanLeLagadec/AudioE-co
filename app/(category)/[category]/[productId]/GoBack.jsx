'use client'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function GoBack() {
    const router = useRouter()
    return (
        <div className='w-28 absolute -translate-y-[10rem] top-0 left-0'>
            <button className='flex flex-row gap-2 mt-32' onClick={() => router.back()}>
            <ArrowLeft />
            <span className='text-neutralBlack font-light opacity-75 mb-4'>Go back</span>
            </button>
           
        </div>
    )
}
