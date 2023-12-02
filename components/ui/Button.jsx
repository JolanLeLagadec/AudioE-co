import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export default function Button({ variant, className, children, ...props}) {

    const buttonVariants = cva(
        'py-2 px-4 transition-colors w-22', {
            variants: {
                variant: 
                {
                    primary: 'text-white bg-darkOrange hover:bg-lightOrange ',
                    secondary: 'bg-white font-normal text-black hover:bg-black hover:text-white border-2 border-black '
                }
            }

    })

  return (
    <button {...props}  className={cn(buttonVariants({variant, className}))}>
        {children}
    </button>
  )
}
