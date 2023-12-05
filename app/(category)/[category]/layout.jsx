import AudioGear from '@/components/layout/AudioGear'
import Menu from '@/components/layout/Menu'
import React from 'react'

export default function layout({children}) {
  return (
    <div className=''>
        {children}
        <Menu />
        <AudioGear />
    </div>
  )
}
