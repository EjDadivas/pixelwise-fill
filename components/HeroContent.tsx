import React from 'react'
import Paragraph from './Paragraph'
import { Button } from './ui/button'
import Link from 'next/link'

const HeroContent = () => {
  return (
    <div className=" flex-1 flex flex-col justify-center">
      <h1 className='head_text !text-7xl text-left'>Where Every Photo Tells a 
      <span className='orange_gradient'> Never-Ending Story</span></h1>
      <Paragraph className='my-5 w-full text-left max-w-md'>
      Welcome to PixelWise Fill, your gateway to an artful and effortless photo 
      editing experience. Our cutting-edge AI-powered platform combines innovation 
      with simplicity to bring your images to life like never before.
      </Paragraph>
      <Button asChild className="mt-4 text-sm bg-orange-400 text-white w-1/2" >
        <Link href="/generative-fill">
         Generate Fill  
        </Link>
      </Button>
    </div>
  )
}

export default HeroContent