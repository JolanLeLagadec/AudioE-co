import Button from '@/components/ui/Button'
import Image from 'next/image'
import headphones from '@/public/assets/home/mobile/image-header.jpg'
import Link from 'next/link'
import ButtonShop from '@/components/ui/ButtonShop'
import headPhones from '@/public/assets/headphones-nobg.png'
import earPhones from '@/public/assets/earphones-nobg.png'
import speaker from '@/public/assets/speaker-nobg.png'
import speaker2 from '@/public/assets/home/mobile/image-speaker-zx9.png'
import speaker3 from '@/public/assets/home/desktop/image-speaker-zx9.png'
import speaker4 from '@/public/assets/home/mobile/image-speaker-zx7.jpg'
import earphones from '@/public/assets/home/mobile/image-earphones-yx1.jpg'
import earphonesDesktop from '@/public/assets/home/desktop/image-earphones-yx1.jpg'
import earphonesTablet from '@/public/assets/home/tablet/image-earphones-yx1.jpg'
import speaker4desktop from '@/public/assets/home/desktop/image-speaker-zx7.jpg'
import imagebestgearMobile from '@/public/assets/shared/mobile/image-best-gear.jpg'
import imagebestgearTablet from '@/public/assets/shared/tablet/image-best-gear.jpg'
import imagebestgearDesktop from '@/public/assets/shared/desktop/image-best-gear.jpg'


export default function Home() {

  return (
    <main>
      {/* hero section */}
      <div className='bg-neutralBlack'>
        <div className='container mx-auto '>
          <div className='flex flex-row-reverse justify-center items-center lg:gap-10 py-64 lg:py-0 '>
            <Image
              src={headphones}
              priority
              width={450}
              height={200}
              alt='headphones'
              className='absolute top-[1rem] rounded-[30rem] lg:block lg:relative'
            />
            <div className='flex flex-col items-center justify-center lg:items-start text-center lg:text-left z-10 '>
              <h1 className='text-lightGray font-extralight opacity-80 tracking-[0.8rem] text-xl ml-4 lg:ml-0'>NEW PRODUCT</h1>
              <p className='text-white font-bold text-4xl w-[18rem] py-6 leading-10 tracking-widest lg:text-6xl lg:w-[30rem] text-left flex-1'>XX 99 MARK ll HEADPHONES</p>
              <p className='text-lightGray opacity-75 w-[17rem] leading-7 font-light lg:w-[20rem]'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
              <Button className='mt-7 py-3' variant='primary'>SEE PRODUCT</Button>
            </div>
          </div>
        </div>
      </div>
      {/* menu */}
      <div className='relative container mx-auto z-20 bg-white rounded-b-xl lg:py-24'>
        <div className='flex flex-col gap-4 md:flex-row items-center justify-center px-3 md:px-0 py-16 lg:gap-8'>
          <div className=' bg-gray flex flex-col items-center gap-4 w-[20rem] drop-shadow-lg  rounded-lg '>
            <Image
              className='-mt-12 drop-shadow-2xl  '
              src={headPhones}
              width={75}
              height={75}
              alt='headphones'
            />
            <div className='flex flex-col items-center gap-4 mt-2 py-4'>
              <h1 className='text-sm font-semibold'>HEADPHONES</h1>
              <Link href='/headphones'><ButtonShop /></Link>

            </div>
          </div>
          <div className='relative bg-gray flex flex-col items-center gap-4 w-[20rem] drop-shadow-lg  rounded-lg mt-12 md:mt-0'>
            <Image
              className='-mt-11 drop-shadow-2xl '
              src={speaker}
              width={75}
              height={75}
              alt='headphones'
            />
            <div className='flex flex-col items-center gap-4 mt-2 py-4'>
              <h1 className='text-sm font-semibold'>SPEAKERS</h1>
              <Link href='/speaker'><ButtonShop /></Link>

            </div>
          </div>
          <div className='relative bg-gray flex flex-col items-center h-[150px]  gap-4 w-[20rem] drop-shadow-lg mt-12 rounded-lg md:mt-0 '>
            <Image
              className='-mt-9 drop-shadow-2xl '
              src={earPhones}
              width={75}
              height={75}
              alt='headphones'
            />
            <div className='flex flex-col items-center gap-4 mt-2 py-4'>
              <h1 className='text-sm font-semibold'>EARPHONES</h1>
              <Link href='/earphones'><ButtonShop /></Link>

            </div>
          </div>
        </div>

      </div>
      <div className='p-4 '>
        <div className='container overflow-hidden mx-auto flex flex-col md:flex-row justify-center items-center bg-darkOrange relative py-12 md:py-0 gap-8 rounded-lg md:gap-16'>
          <div className='md:hidden'>
            <Image
              width={200}
              height={200}
              src={speaker2}
              alt='speaker'
            />
          </div>
          <div className='hidden md:block  mt-20 -mb-3'>
            <Image
              width={300}
              height={300}
              src={speaker3}
              alt='speaker'
            />
          </div>
          <div className='flex flex-col justify-center items-center text-center gap-7 md:items-start md:text-left'>
            <h1 className='text-white font-bold text-4xl w-[10rem] '>ZX9 SPEAKER</h1>
            <p className='leading-7 w-[20rem] text-white font-light '>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <Link href='/speaker'><Button variant='secondary' className='py-1 font-medium' >SEE PRODUCT</Button></Link>
          </div>
        </div>

        <div className='mx-auto container mt-16 md:mt-6 lg:mt-24  md:h-auto'>
          <div className='flex items-center w-full rounded-xl relative  '>
            <Image
              src={speaker4}
              width={800}
              height={800}
              alt='bg-speaker'
              className='rounded-xl md:hidden  '
            />
            <Image
              src={speaker4desktop}
              width={1600}
              height={800}
              alt='bg-speaker'
              className='rounded-xl hidden md:block '
            />
            <div className='absolute space-y-10  translate-x-10 lg:translate-x-1/2'>
              <h1 className='text-black text-4xl text-left font-bold lg:text-5xl'>ZX7 SPEAKER</h1>
              <Button variant='third'>SEE PRODUCT</Button>
            </div>
          </div>
        </div>

        <div className=' mt-16 md:mt-6 '>
          <div className=' container  mx-auto flex flex-col  md:flex-row gap-8 '>
            <Image
              width={400}
              height={400}
              src={earphonesTablet}
              alt='hearphone'
              className='hidden md:block lg:hidden rounded-xl basis-1/2'
            />
            <Image
              width={600}
              height={400}
              src={earphonesDesktop}
              alt='hearphone'
              className='hidden lg:block rounded-xl '
            />
            <Image
              width={550}
              height={200}
              src={earphones}
              alt='hearphone'
              className='md:hidden rounded-xl w-full'
            />
            <div className=' w-full  '>
              <div className='flex flex-col items-start p-12 justify-center gap-8 bg-gray rounded-xl h-full w-full flex-1'>
                <h1 className='text-black text-4xl text-left font-bold lg:text-5xl'>YX1 EARPHONES</h1>
                <Button variant='third'>SEE PRODUCT</Button>
              </div>
            </div>
          </div>
        </div>

        <div className='mx-auto container mt-28'>
          <div className='flex flex-col lg:flex-row-reverse items-center justify-center w-full xxl:-space-x-10'>
            <Image
              width={400}
              height={400}
              src={imagebestgearMobile}
              alt='info'
              className=' md:hidden w-full rounded-xl max-w-[500px]'
            />
            <Image
              width={400}
              height={400}
              src={imagebestgearTablet}
              alt='info'
              className='hidden md:block lg:hidden w-full rounded-xl'
            />
            <Image
              width={550}
              height={400}
              src={imagebestgearDesktop}
              alt='info'
              className='hidden lg:block  rounded-xl lg:w-[500px] xl:w-[550px]'
            />
            <div className='flex flex-col items-center lg:items-start justify-center gap-6 text-center lg:text-left xl:w-2/3 w-full '>
            <p className='text-5xl text-black font-bold max-w-[450px] md:max-w-[600px] uppercase  mt-6 py-5 leading-[3.5rem] '>Bringing you the <span className='text-darkOrange'>best</span> audio gear</p>
            <p className='font-light w-[21rem] leading-7 md:w-3/4'>Located at the heart of New York City, Audiophile is the premier store for high end headphones,
              earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of our products. Stop by our store
              to meet some of the fantastic people who make Audiophile the best place to buy your portable
              audio equipment.</p>    
            </div>
           
          </div>
        </div>
      </div>
    </main>
  )
}
