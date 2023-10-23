import React, { ReactNode } from 'react'
import Paragraph from './Paragraph'
import BoxArea from './BoxArea'

const StepCard = ({title, text, icon}: {title: string, text: string, icon: JSX.Element }) => {
  return (
    <div className=' flex justify-between items-center p-3 md:px-4 md:py-6 gap-6'>
          <div className="glassmorphism md:px-24 md:py-6 w-full">
            <div className='bg-orange-400 rounded-sm p-2 w-fit my-4'>{React.cloneElement(icon, { className: "text-white"})}</div>
            <h2 className='text-white md:text-2xl text-xl font-semibold mb-2'>{title}</h2>
            <Paragraph className='text-sm'>{text}</Paragraph>
        </div>
      </div>
  )
}

export default StepCard