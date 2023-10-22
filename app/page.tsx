import HeroContent from '@/components/HeroContent'
import HeroImage from '@/components/HeroImage'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* TODO: Hero Section */}
      <section className=''>
        <div className='flex h-fullborder w-full gap-12'>
          <HeroContent/>
          <HeroImage/>
        </div>
      </section>
      <section className='w-full h-72 mt-24 text-white '>
        <h1 className='head_text text-center mb-12'>Easy Steps to follow</h1>
        <div className='flex justify-between items-center px-4 py-6 gap-6'>
          <div className="glassmorphism px-24 py-6 ">
            <p className='text-2xl font-semibold'>Step 1</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, sapiente.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, sapiente.</p>

          </div>
          <div className="glassmorphism px-24 py-6 ">
            <p className='text-2xl font-semibold'>Step 1</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, sapiente.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, sapiente.</p>

          </div>
          <div className="glassmorphism px-24 py-6 ">
            <p className='text-2xl font-semibold'>Step 1</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, sapiente.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, sapiente.</p>

          </div>

        </div>
      </section>
       {/* TODO: Steps Sections */}
    
      
    </>

  )
}
