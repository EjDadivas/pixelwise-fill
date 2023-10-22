import React from 'react'
import { Button } from './ui/button'

const PrimaryButton = ({children}: {children: ReactNode}) => {
  return (
    <Button className="mt-4 text-sm bg-orange-400 rounded-full text-white">
      {children}
    </Button>
  )
}

export default PrimaryButton