import React, { ReactNode } from 'react'

const HeadingText = ({children, className} : {children: ReactNode, className?: string}) => {
  return (
    <h1 className={`mt-5 md:text-5xl font-extrabold leading-[1.15] text-white xl:text-7xl lg:text-6xl text-4xl ${className}`}>
        {children}
    </h1>
  )
}

export default HeadingText