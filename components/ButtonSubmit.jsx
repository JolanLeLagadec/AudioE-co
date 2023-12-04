import React from 'react'
import Button from './ui/Button'
import { cn } from '@/lib/utils'

export default function ButtonSubmit({ className }) {
  return (
    <Button variant='third' className={cn('hover:opacity-60 border-slate-400 hover:bg-white hover:text-black text-md', className)}>Submit</Button>
  )
}
