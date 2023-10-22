import React from 'react'

const StepCard = ({title, instructions}: {title: string, instructions: string}) => {
  return (
    <div className='flex justify-between items-center px-4 py-6 gap-6'>
          <div className="glassmorphism px-24 py-6 ">
            <p className='text-2xl font-semibold'>{title}</p>
            <p>{instructions}</p>

        </div>
      </div>
  )
}

export default StepCard