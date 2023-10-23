"use client"
import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

const HeadingText = ({children, className} : {children: ReactNode, className?: string}) => {
  return (
    <motion.h1 
    initial={{
      opacity: 0,

    }}

    animate={{
      opacity:1,
      transition:{
        delay:0.5,
        staggerChildren: 0.08
      }
    }}
    className={`mt-5 md:text-5xl font-extrabold leading-[1.15] text-white xl:text-7xl lg:text-6xl text-4xl ${className}`}>
        {children}
    </motion.h1>
  )
}

export default HeadingText