"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

const HeroImage = () => {
  return (
    <motion.div
    initial={{
      opacity: 0,
      x: 100
    }}
    animate={{
      opacity:1,
      x: 0
    }}
    transition={{
      ease: "linear",
      duration: 2,
      x: { duration: 1 }
    }}
     
    className='flex-1 flex items-center w-full justify-center'>
      <Image
      src="/assets/images/hero1.png"
      alt="hero1"
      width={700}
      height={700}
      />
    </motion.div>
  )
}

export default HeroImage