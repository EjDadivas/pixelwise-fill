"use client"
import { useState, useRef, useEffect } from "react"
import { Button } from "./ui/button"
import { CldImage } from "next-cloudinary";
import BouncingBalls from "./ui/BouncingBalls";
import BoxArea from "./BoxArea";


// TODO: Pass the uploadeded Image inside
const GenerativeFillBox =({publicId} : {publicId: string}) => {
    const imageRef = useRef<HTMLImageElement | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [height, setHeight] = useState<null | number>(null)
    const [width, setWidth] = useState<null | number>(null)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
        setIsLoading(true)
        setHeight(containerRef.current?.offsetHeight || 0)
        setWidth(containerRef.current?.offsetWidth || 0)
        setIsLoading(false)
    }, [])
    
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
        <div className="flex gap-24">
            <div className="mx-auto h-[500px] w-[500px] text-center">
                <BoxArea className="relative">
                    <div ref={containerRef} className={`resize min-h-fit min-w-fit max-h-full max-w-full flex items-center justify-center overflow-hidden border border-dashed border-white `}>
                        <CldImage ref={imageRef} src={publicId} height={300} width={300} alt="publicId"/>
                    </div>
                </BoxArea>
                <div>
                </div>
                <Button className="mt-4 text-sm bg-orange-400 rounded-full text-white" onClick={handleResize}>Resize</Button>
            </div>
            {/* GENERATED FILL */}
            <div className="mx-auto  h-[500px] w-[500px] text-center">
                <BoxArea>
                    .
                {isLoading ? <BouncingBalls/> :  <CldImage src={publicId} height={height || 0} width={width || 0} alt="publicId" crop="pad" fillBackground />}
                </BoxArea>
            <Button  className="mt-4 text-sm bg-orange-400 rounded-full text-white" onClick={()=>console.log("download")}>Download</Button>
            </div>
        </div>


    </div>
  )
}

export default GenerativeFillBox