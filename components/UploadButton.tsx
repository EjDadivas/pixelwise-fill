"use client"
import { CldUploadButton } from 'next-cloudinary';
import { Button } from './ui/button';

const UploadButton = () => {

  return (
  <Button asChild>
  
   <CldUploadButton uploadPreset={process.env.CLOUDINARY_UPLOAD_PRESET} />
   </Button>
  )
}

export default UploadButton