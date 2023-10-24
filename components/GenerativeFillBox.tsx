"use client"
import { useState, useRef, useEffect } from "react"
import { Button } from "./ui/button"
import { CldImage } from "next-cloudinary";
import BoxArea from "./BoxArea";
import { Input } from "./ui/input";
import { BarLoader} from 'react-spinners'
import { saveAs } from 'file-saver'

// TODO: Pass the uploadeded Image inside
const GenerativeFillBox =({publicId} : {publicId: string}) => {
    const imageRef = useRef<HTMLImageElement | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [height, setHeight] = useState<null | number>(null)
    const [width, setWidth] = useState<null | number>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [prompt, setPrompt] = useState("")
    const [pendingPrompt, setPendingPrompt] = useState("");
    useEffect(()=>{
        setIsLoading(true)
        setTimeout(()=>{
        setHeight(containerRef.current?.offsetHeight || 0)
        setWidth(containerRef.current?.offsetWidth || 0)
        setIsLoading(false)

    }, 500)
    }, [])
    
    const handleResize = () =>{
       
        setIsLoading(true)
            setTimeout(()=>{
                setHeight(containerRef.current?.offsetHeight || 0)
                setWidth(containerRef.current?.offsetWidth || 0)
                setPrompt(pendingPrompt);
                setIsLoading(false)

            }, 500)

        
    }
    const handleDownload= () => {
        console.log(imageRef.current?.currentSrc)
        // @ts-ignore
        saveAs(imageRef.current?.currentSrc, `${publicId}-generated-fill.jpg`)
    }
  return (
    <div className="w-full shrink-0">
        <div className="block xl:flex gap-12">
            <div className="mx-auto text-center  md:mb-none mb-24 md:min-w-[600px] md:h-[600px] md:w-[600px] h-[400px]">
                <BoxArea className=" relative h-full w-full">
                    <div ref={containerRef} className={` resize min-h-fit min-w-fit max-h-full max-w-full 
                    flex items-center justify-center overflow-hidden border border-dashed border-white  `}>
                     
                <CldImage ref={imageRef} src={publicId} height={200} width={200} alt="publicId" />
                    </div>
                </BoxArea>
                <div>
                </div>
                <div className=" flex w-full items-center justify-between  gap-2 mt-4">   
                <Input
                placeholder="Enter prompt"
                value={pendingPrompt}
                onChange={(e) => setPendingPrompt(e.currentTarget.value)}/>
                <Button className="text-sm bg-orange-400 w-1/2 text-white" onClick={handleResize}>Resize</Button>

                </div>
            </div>
            {/* GENERATED FILL */}
            <div className="mx-auto text-center md:mb-none mb-24 md:min-w-[600px] md:h-[600px] md:w-[600px] h-[400px]">
                <BoxArea className=" h-full w-full">
                    
                {isLoading ? <BarLoader color="#FFA726"/>
                : 
                !height && !width ?  <BarLoader color="#FFA726"/> :

                <CldImage ref={imageRef} src={publicId} height={height!} width={width!} alt="publicId"
                crop="pad" fillBackground={{
                    prompt: prompt
                }}
                />
                  }
                </BoxArea>
                <Button  className="mt-4 text-sm bg-orange-400 w-full text-white" onClick={handleDownload}>Download</Button>
         
            </div>
        </div>


    </div>
  )
}

export default GenerativeFillBox