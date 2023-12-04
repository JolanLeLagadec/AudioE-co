import React from 'react'
import { cn } from '@/lib/utils'

export default function Input({type, className, ...props}) {


   

  return (
   <input {...props} type={type} className={cn('flex h-10 w-full rounded-md border-[0.2px] border-gray px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none   focus-visible:ring-2 focus-visible:ring-offset-2  disabled:cursor-not-allowed disabled:opacity-50')} />
  )
}
