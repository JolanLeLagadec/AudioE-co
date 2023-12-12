'use client'
import React from 'react'
import Button from './ui/Button'
import { cn } from '@/lib/utils'
import  { useFormStatus } from 'react-dom'

export default function ButtonSubmit({ className, onClick }) {

  const { pending } = useFormStatus()
  return (
    <Button onClick={onClick} variant='third' className={cn('hover:opacity-60 border-slate-400 hover:bg-white hover:text-black text-md', className)}>Submit</Button>
  )
}
