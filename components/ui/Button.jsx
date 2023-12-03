import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export default function Button({ variant, className, children, ...props}) {

    const buttonVariants = cva(
        'py-2 h-12 px-9 transition-colors w-22', {
            variants: {
                variant: 
                {
                    primary: 'text-white bg-darkOrange hover:bg-lightOrange ',
                    secondary: 'bg-black font-normal text-sm tracking-widest text-white  hover:opacity-80 border-2 border-black ',
                    third: 'text-black border-2 text-sm tracking-widest  border-black font-semibold hover:bg-black hover:text-white'
                    
                }
            }

    })

  return (
    <button {...props}  className={cn(buttonVariants({variant, className}))}>
        {children}
    </button>
  )
}
