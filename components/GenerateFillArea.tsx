"use client"
import { CldUploadButton } from 'next-cloudinary';
import { Button } from './ui/button';
import BoxArea from './BoxArea';
import { useState, useRef, ChangeEvent, DragEvent } from "react";
import { uploadImage } from '@/lib/actions';
import GenerativeFillBox from './GenerativeFillBox';
import UploadBox from './UploadBox';


const GenerativeFillArea = () => {
  const [image, setImage] = useState<string | null>(null); //gu5xksyuekmwam0h6zwl"tslv2zwjozkkrynzws47"

  const [isUploading, setIsUploading] = useState(false)


  const handleUpload = async (e : React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = (e.target as HTMLInputElement | HTMLDivElement)?.files?.[0]
    console.log(file)
    // if(!file){
    //   console.log("upload file")
    // }
    // if(!file?.type.includes('image')) {
    //   console.log("only image files")
    // }
    setIsUploading(true)
    try {

        const reader =  new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
          const img = reader.result as string;
          console.log(img)
          const result = await uploadImage(img)
          setImage(result.public_id)
          setIsUploading(false)
        }

    } catch (error) {
        console.log(error)
    }
    
  }

  return (
   
    <>
    {
      !image
      ? (
        <UploadBox onUpload={handleUpload} load={isUploading}/>
      )
      :
      (
        <GenerativeFillBox publicId={image}/>
      )
    }
    </>
  );
};
export default GenerativeFillArea