import React from 'react'
import Paragraph from './Paragraph'
import { Button } from './ui/button'
import Link from 'next/link'
import HeadingText from './HeadingText'
import PrimaryButton from './PrimaryButton'

const HeroContent = () => {
  return (
    <div className=" block lg:flex flex-1  flex-col justify-center text-center md:text-left">
      <HeadingText className=''>Where Every Photo Tells a 
      <span className='orange_gradient'> Never-Ending Story</span></HeadingText>

      <Paragraph className='my-5 w-full md:max-w-md'>
      Welcome to PixelWise Fill, your gateway to an artful and effortless photo 
      editing experience. Our cutting-edge AI-powered platform combines innovation 
      with simplicity to bring your images to life like never before.
      </Paragraph>

      <PrimaryButton asChild className=" md:w-1/2 text-center" >
        <Link href="/generative-fill">
         Generate Fill  
        </Link>
      </PrimaryButton>
    </div>
  )
}

export default HeroContent