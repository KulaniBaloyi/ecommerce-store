"use client"
import HeroButton from "./hero-button"
import { useRouter } from "next/navigation"

const Landing = async({video}:any) => {
  const route = useRouter()
  
  return (
    <section className='mb-20 w-full h-full max-w-full py-16 landing min-h-[95dvh] grid place-content-center relative overflow-hidden'>
      <div className="absolute inset-0 -z-50">
      <video autoPlay loop src={video}/>
      </div>
      
        <section className='flex flex-col my-20 lg:my-10 mx-5 lg:gap-20 min-w-full max-w-6xl'>
            <h1 className='mr-6 lg:mr-0 mb-10 lg:mb-0 self-center text-[2em] flex-wrap text-center xl:text-[3em] leading-[1.2] font-[900] heading uppercase tracking-[-.02em] text-[#27292a] italic'>Unleash Your Inner Athlete. <span className="text-[#e5202b]">Keep Moving Forward.</span></h1>
            <div className='px-5 flex flex-col lg:flex-row items-center gap-2 lg:gap-10'>
                <button onClick={()=>route.push("/collections/shop")} className='bg-[#e5202b] mr-6 lg:mr-0 w-full  hover:bg-opacity-85 transition-all duration-100 ease-in-out text-white border fancy__button py-4 px-10 uppercase text-sm text-center leading-[1.5] font-bold'>shop merch</button>
             <HeroButton title="get inspired"/>
             <HeroButton title="community"/>
             <HeroButton title="training"/>
             <HeroButton title="contact us"/>
            </div>
        </section>
    </section>
  )
}

export default Landing