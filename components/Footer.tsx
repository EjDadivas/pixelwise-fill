import { CopyrightIcon, DotIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Paragraph from './Paragraph'

const Footer = () => {
  return (
    <footer className='mt-24 text-white  text-center text-sm'>
   
     <div className='flex items-center w-full justify-center'>
      <CopyrightIcon className='text-xs px-1'/>
          <Link href="https://github.com/EJDadivas/">
            <span className='orange_gradient font-semibold'> EJ Dadivas </span>
          </Link>
          <DotIcon/>
          PixelWise
          <DotIcon/>
          All Rights Reserved
      </div>
    
    </footer>
  )
}

export default Footer