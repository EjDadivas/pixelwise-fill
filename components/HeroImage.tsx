import Image from 'next/image'
import React from 'react'

const HeroImage = () => {
  return (
    <div className='flex-1 flex items-center w-full justify-center'>
      <Image
      src="/assets/images/hero1.png"
      alt="hero1"
      width={700}
      height={700}
      />
    </div>
  )
}

export default HeroImage