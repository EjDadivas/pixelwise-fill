import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
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
        <Link href="https://github.com/EjDadivas">
            Github
        </Link>
    </nav>
  )
}

export default Navbar