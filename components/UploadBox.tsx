 import React from 'react'
import BoxArea from './BoxArea'
import { CldUploadButton } from 'next-cloudinary'
import PrimaryButton from './PrimaryButton'
import { Button } from './ui/button'
import { BarLoader } from 'react-spinners'
import Paragraph from './Paragraph'
 
 const UploadBox = ({onUpload, load} : {onUpload: (e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>)=> void, load: boolean}) => {
   return (
    <BoxArea className="lg:w-1/2 h-1/2 md:mt-10">
    <div 
    onDragOver={(e)=> {
        e.preventDefault()
    }}
    // onDrop={onUpload}
    onDrop={(e)=> console.log(e.target.files[0])}
    className='flex justify-start items-center h-full w-full relative '>
        <label htmlFor='poster' className='flex flex-col justify-center items-center z-10 text-center  
        h-full w-full p-4 md:p-20 text-gray-100 border-2 border-gray-50 border-dashed'>
       {!load ? 
       ( <div><PrimaryButton className="my-4 md:text-xl py-6 ">Upload Photo</PrimaryButton>
       <Paragraph> Drag and drop your Image or Click Upload</Paragraph>
       </div> 
       
       ): <BarLoader color="#FFA726"/>}
        </label>  
            <input
            id="image"
            type='file'
            accept='image/*'
            className='absolute z-30 w-full opacity-0 h-full cursor-pointer'
            onChange={onUpload}
            />
        </div>
    </BoxArea>
   )
 }
 
 export default UploadBox