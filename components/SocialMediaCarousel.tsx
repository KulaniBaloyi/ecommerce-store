"use client"
import { EmblaOptionsType } from 'embla-carousel'

import { PrevButton,
    NextButton,
    usePrevNextButtons } from './ui/arrow-button'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  data: string
}


const SocialMediaCarousel: React.FC<PropType> = (props) => {
    const SLIDE_COUNT = 35
    const {data}= props

    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto' }
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <>
    <section className="  bg-[#fafafa] md:px-16 py-10 relative ">
       <h1 className="mb-4 text-base md:text-xl lg:text-2xl uppercase font-[700] leading-[1.1] text-center">be active. be social</h1>
       <p className='my-6 text-base leading-[1.42857] text-center'>Follow @instagram on Instagram</p>
     
    
      
      <div className=" overflow-hidden border-dotted border-4 border-teal-600 relative" ref={emblaRef}>
        <button className='bg-[#111]/85 rounded-full prev absolute left-0 top-1/2 -translate-y-1/2 aspect-square h-16'></button>
        <button className='bg-[#111]/85  rounded-full next absolute right-0 top-1/2 -translate-y-1/2 aspect-square h-16'></button>

        <div className="flex ">
          {SLIDES.map((item,index) => (
            <>
            
          
          <div key={index} className="grid flex-shrink-0 flex-grow-0  bg-white min-w-0 place-content-center border aspect-square basis-[20%]">{index+1} for {data}</div>
            </>
            //map products from backend max 8
           
      
          ))}
        </div>
      </div>
    </section>

    </>
    
  )
}

export default SocialMediaCarousel