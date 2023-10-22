import GenerativeFillBox from "@/components/GenerativeFillBox";
import GenerativeFillArea from "@/components/GenerateFillArea";

export default function GenerativeFill(){
    // This page might turn into a client component
    // TODO:Upload Button
    // TODO:useState for the Image to be passed on GenerativeFillBox
    return (
        <section className='h-full w-full flex justify-start items-center flex-col'>
             <h1 className='head_text text-center'>Generate <span className='orange_gradient'> Fill</span> Images
                {/* <br className='max-md:hidden'/> */}
                
            </h1>
            <p className='mt-5 mb-24 text-lg text-gray-200 sm:text-xl max-w-2xl text-center'>
                Upload, Resize, and Fill your Image
            </p>
     
           {/* <GenerativeFillBox publicId="cld-sample-5"/> */}
           <GenerativeFillArea/>
        </section>
    )
}