
import GenerativeFillArea from "@/components/GenerateFillArea";
import Paragraph from "@/components/Paragraph";
import HeadingText from "@/components/HeadingText";

export default function GenerativeFill(){
    // This page might turn into a client component
    // TODO:Upload Button
    // TODO:useState for the Image to be passed on GenerativeFillBox
    return (
        <section className='w-full xl:h-screen flex justify-start items-center flex-col text-center md:mb-24'>
             <HeadingText className=' mb-12'>
             Generative Fill
             <br/>
            <span className='orange_gradient'> AI-Powered Outpainting </span> 
                
            </HeadingText>
            {/* <Paragraph className='mt-5 mb-12 '>
             Upload, Resize, Add a Prompt, and Fill Your Image
            </Paragraph> */}
     
           <GenerativeFillArea/>
        </section>
    )
}