"use client"
import { useState, useRef, useEffect } from "react"
import { Button } from "./ui/button"
import { CldImage } from "next-cloudinary";

import UploadButton from "./UploadButton";

import Image from "next/image";

type ImageData = {
    publicId: string
}
// TODO: Pass the uploadeded Image inside
const GenerativeFillBox =({publicId} : ImageData) => {
    const imageRef = useRef<HTMLImageElement | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [minHeight, setMinHeight] = useState(0)
    const [height, setHeight] = useState<null | number>(null)
    const [width, setWidth] = useState<null | number>(null)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
        setIsLoading(true)
        setHeight(containerRef.current?.offsetHeight || 0)
        setWidth(containerRef.current?.offsetWidth || 0)
        setMinHeight(imageRef.current?.offsetHeight || 0)
        setIsLoading(false)
    }, [minHeight])
    
    const handleResize = () =>{
        setIsLoading(true)
        setTimeout(()=>{
            setHeight(containerRef.current?.offsetHeight || 0)
            setWidth(containerRef.current?.offsetWidth || 0)
            setIsLoading(false)
        }, 1000)
        
    }
  return (
    <div className="w-full">
    <div className="flex gap-24 ">
        <div className="mt-10 mx-auto h-[500px] w-[500px] text-center">
            <div className="relative flex h-full w-full items-center justify-center glassmorphism">
                {/* TODO: Make a Loading for the height */}

                
                <div ref={containerRef} className={`resize min-h-[${minHeight.toString()}px] min-w-fit max-h-full max-w-full flex items-center justify-center overflow-hidden border border-dashed border-black `}>
                    <CldImage ref={imageRef} src={publicId} height={300} width={300} alt="publicId"/>
                </div>
              
                
            </div>
            <div>
            </div>
            <Button className="mt-4 px-5 py-1.5 text-sm bg-orange-400 rounded-full text-white" onClick={handleResize}>Resize</Button>
        </div>
        {/* GENERATED FILL */}
        <div className="mt-10 mx-auto  h-[500px] w-[500px] text-center">
         
            <div className=" h-full w-full flex items-center justify-center glassmorphism">
               {!height || !width ? (<>Loading</>) :
               
               ( <>{isLoading ? "Loading..." :  <CldImage src={publicId} height={height || 0} width={width || 0} alt="publicId" crop="pad" fillBackground />}</>)
                }
              
             

            </div>
           <Button  className="mt-4 px-5 py-1.5 text-sm bg-orange-400 rounded-full text-white" onClick={()=>console.log("download")}>Download</Button>
        </div>
        
    </div>


    </div>
  )
}

export default GenerativeFillBox