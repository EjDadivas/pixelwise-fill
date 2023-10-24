import HeadingText from '@/components/HeadingText'
import HeroContent from '@/components/HeroContent'
import HeroImage from '@/components/HeroImage'
import StepCard from '@/components/StepCard'
import { Steps } from '@/constants'


export default function Home() {
  return (
    <>
      {/* TODO: Hero Section */}
      <section className=''>
        <div className='flex flex-col-reverse md:flex-row gap-12'>
          <HeroContent/>
          <HeroImage/>
        </div>
      </section>
      <section className='w-full  mt-24 text-white '>
        <HeadingText className=' text-center mb-4'>Easy Steps to follow</HeadingText>
        <div className='grid lg:grid-cols-3 h-full justify-between md:gap-6 md:mb-24 mb-8'>
          {Steps.map((step)=>(
            <StepCard key={step.title} icon={step.icon} title={step.title} text={step.text}/>
          ))}
        </div>
      </section>
     
    
      
    </>

  )
}
