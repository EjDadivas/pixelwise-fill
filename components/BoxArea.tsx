import React, { ReactNode } from 'react'

type BoxAreaProps = {
    children: ReactNode
    className?: string
}
const BoxArea = ({children, className} : BoxAreaProps) => {
  return (
    <div className={`flex h-full w-full items-center justify-center glassmorphism ${className}`}>
        {children}
    </div>
  )
}

export default BoxArea