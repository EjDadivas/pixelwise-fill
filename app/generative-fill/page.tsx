import GenerativeFillBox from "@/components/GenerativeFillBox";
import GenerativeFillArea from "@/components/GenerateFillArea";
import Paragraph from "@/components/Paragraph";

export default function GenerativeFill(){
    // This page might turn into a client component
    // TODO:Upload Button
    // TODO:useState for the Image to be passed on GenerativeFillBox
    return (
        <section className='h-full w-full flex justify-start items-center flex-col'>
             <h1 className='head_text text-center'>
             Generative Fill: <span className='orange_gradient'>AI-Powered Outpainting </span> 
                {/* <br className='max-md:hidden'/> */}
                
            </h1>
            <Paragraph className='mt-5 mb-12 text-center'>
             Upload, Resize, Add a Prompt, and Fill Your Image
            </Paragraph>
     
           {/* <GenerativeFillBox publicId="cld-sample-5"/> */}
           <GenerativeFillArea/>
        </section>
    )
}