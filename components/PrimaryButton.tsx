import React, { ReactNode } from 'react'
import { Button } from './ui/button'

const PrimaryButton = ({children, className, asChild}: {children: ReactNode,className?:string, asChild?:boolean}) => {
  return (
    <Button  asChild={asChild} className={`mt-4 text-sm hover:text-orange-400 bg-orange-400  text-white ${className}`}>
      {children}
    </Button>
  )
}

export default PrimaryButton