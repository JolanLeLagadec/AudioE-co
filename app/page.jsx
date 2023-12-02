import Button from '@/components/ui/Button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-neutralBlack">
      <h1 className=' text-[15rem] text-lightOrange'> Hello world</h1>
      <Button variant='secondary'>SEE PRODUCT</Button>
     
    </main>
  )
}
