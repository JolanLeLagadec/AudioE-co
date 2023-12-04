import Image from 'next/image'
import React from 'react'
import iconFb from '@/public/assets/shared/desktop/icon-facebook.svg'
import iconTwitter from '@/public/assets/shared/desktop/icon-twitter.svg'
import iconInsta from '@/public/assets/shared/desktop/icon-instagram.svg'

export default function Footer() {
    return (
        <div className='mt-22 bg-neutralBlack'>
            <div className='container mx-auto flex flex-col  items-center md:items-start justify-center py-12 gap-6 relative px-4'>
                <h1 className='text-white font-bold text-4xl'>audiophile</h1>
                <div className='mt-2 flex flex-col md:flex-row items-center gap-6 md:gap-10 uppercase font-light text-md tracking-wide text-white lg:absolute top-12 right-3'>
                    <span className='hover:text-lightOrange'>home</span>
                    <span>headphones</span>
                    <span>speakers</span>
                    <span>earphones</span>
                </div>
                <p className='text-white font-light mt-6 opacity-75 text-center w-[20rem] md:text-left md:w-auto lg:w-[40rem]'>  Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers
                    and sound specialists who are devoted to helping you get the most out of personal audio. Come and
                    visit our demo facility - we’re open 7 days a week.</p>
                    <div className='flex flex-col md:flex-row items-center md:justify-between gap-10 w-full md:mt-14'>

                    <p className='text-white font-normal mt-6 opacity-75'>Copyright 2021. All Rights Reserved</p>
                    <div className='flex flex-row items-center lg:absolute right-3 top-1/2 gap-5'>
                        <Image width={30} height={50} src={iconFb} alt='iconfb' />
                        <Image width={30} height={50} src={iconTwitter} alt='iconfb' />
                        <Image width={30} height={50} src={iconInsta} alt='iconfb' />
                    </div>
                    </div>
            </div>
        </div>
    )
}
