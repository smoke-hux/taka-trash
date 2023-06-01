import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import type {Metadata} from "next"
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import { Button, buttonVariants } from '@/components/ui/Button'
import Icons from '@/components/Icons'

export const metadata: Metadata = {
  title: 'YUGI | Home',
  description: "wastemanagement application under BITKE",
}

const inter = Inter({ subsets: ["latin"]})

export default function Home() {
  return (
  <div className='flex overflow-x-hidden relative justify-center items-center h-screen'>
    <div className='container pt-32 mx-auto w-full max-w6xlh-full'>
      <div className='flex flex-col gap-6 justify-start items-center h-full lg:justify-center lg:items-start'>
        <LargeHeading size='lg'
         className='text-black three-d dark:text-light-gold'>
           YUGI WASTE-MANAGEMENT 
           </LargeHeading>
        <Paragraph className='max-w-x1 lg:text-left'>
          Market Place for waste, recycling and smart enforcement  <br />

        
          <a href="/login" className='text-black dark:text-light-gold ' >
            get started
              
          <Icons.Trash className='mr-2 h-4 w-4' /> 
            
          </a>
          
          </Paragraph>
          {/* <div className='absolute w-full max-w-xl lg:max-w-3xl lg:-left-1/2 aspect-square lg:absolute'>
            <Image 
            priority
            className='img-shadow'
            quality={100}
            style={{objectFit: 'contain'}}
            fill
            src='/Color-codes-waste-bins.png'
            alt='color codes for wastebins'
            />
          </div> */}
      </div>
    </div>

  </div>
  )
}
