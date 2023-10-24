import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { GithubIcon, LucideGithub } from 'lucide-react'
const Navbar = () => {
  return (
    <nav className='mb-16 pt-8 flex justify-between items-center w-full'>
        <Link href="/" className='flex gap-2 flex-center'>
            {/* TODO: LOGO */}
        <Image src="assets/images/logo.svg"
        alt='Prompt Oasis'
        width={30} height={30}
        className='object-contain'
        />
        <p className='max-sm:hidden font-satoshi font-semibold text-lg text-white tracking-wide'>
            PixelWise
        </p>
        </Link>
        <Link target='blank' href="https://github.com/EjDadivas/pixelwise-fill">
           <div className='bg-orange-400 rounded-full p-1 border-2 border-black hover:bg-transparent hover:border-orange-400'>
           <GithubIcon className="text-black text-xs hover:text-orange-400"/>
           </div>
        </Link>
    </nav>
  )
}

export default Navbar