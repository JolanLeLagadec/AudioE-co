import { Loader2 } from 'lucide-react'
import React from 'react'

export default function loading() {
  return (
    <div className='flex justify-center items-center text-black h-screen'><Loader2 className='h-8 w-8 animate-spin ' /></div>
  )
}
