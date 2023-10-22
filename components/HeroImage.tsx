import Image from 'next/image'
import React from 'react'

const HeroImage = () => {
  return (
    <div className='flex-1  flex items-center w-full justify-center'>
      <Image
      src="/assets/images/hero1.jpg"
      alt="hero1"
      width={600}
      height={600}
      />
    </div>
  )
}

export default HeroImage