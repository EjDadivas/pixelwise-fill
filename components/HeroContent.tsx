import React from 'react'
import Paragraph from './Paragraph'
import { Button } from './ui/button'
import Link from 'next/link'

const HeroContent = () => {
  return (
    <div className=" flex-1 flex flex-col justify-center">
      <h1 className='head_text text-left'>Hello How are you all
      <span className='orange_gradient'> Post</span></h1>
      <Paragraph className='my-5 text-left max-w-md'>
      Create and share amazing prompts with the world, and let
    your imagination run wild with any AI-powered platform
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