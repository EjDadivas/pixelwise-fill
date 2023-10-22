import React, { ReactNode } from 'react'

const Paragraph = ({className, children}: {className: string, children: ReactNode}) => {
  return (
    <p className={`text-lg text-gray-200 sm:text-xl max-w-2xl  ${className}`}>
        {children}
    </p>
  )
}

export default Paragraph