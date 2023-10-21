import GenerativeFillBox from "@/components/GenerativeFillBox";

export default function GenerativeFill(){
    // This page might turn into a client component
    // TODO:Upload Button
    // TODO:useState for the Image to be passed on GenerativeFillBox
    return (
        <section className='w-full flex justify-center items-center flex-col'>
             <h1 className='head_text text-center'>Generate Fill
                <br className='max-md:hidden'/>
                <span className='orange_gradient'> Images</span>
            </h1>
            <p className='mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl text-center'>
                Prompt Oasis is an open-source AI prompting tool 
                for modern world to discover, 
                create and share creative prompts
            </p>
           <GenerativeFillBox publicId="cld-sample-5"/>
        </section>
    )
}