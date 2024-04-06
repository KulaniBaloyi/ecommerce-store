import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const SocialMediaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <>
    <section className="  bg-white md:px-16 py-10 relative border-red-500 border-4">
       <h1 className="mb-4 text-xl md:text-2xl lg:text-3xl uppercase font-[700] leading-[1.1] text-center">be active. be social</h1>
       <p className='my-6 text-base leading-[1.42857] text-center'>Follow @instagram on Instagram</p>
     
    
      <div className='left-0 absolute top-1/2 -translate-y-1/2 '> <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} /></div>
        <div className='right-0 absolute top-1/2 -translate-y-1/2 '> <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} /></div>
      <div className="embla__viewport border-dotted border-4 border-teal-600 relative" ref={emblaRef}>
        <div className="embla__container ">
          {slides.map((item,index) => (
            <>
            
          
          <div key={index} className="grid flex-shrink-0 flex-grow-0 bg-white min-w-0 place-content-center border aspect-square basis-[20%]">enter picture</div>
            </>
            //map products from backend max 8
           
      
          ))}
        </div>
      </div>
    </section>
    {/* <section className='grid grid-cols-2 grid-rows-2'>
      <div className='border w-full aspect-square basis-[25%]'></div>
      <div className='border w-full aspect-square basis-[25%]'></div>
      <div className='border w-full aspect-square basis-[25%]'></div>
      <div className='border w-full aspect-square basis-[25%]'></div>

    </section> */}
    
    </>
    
  )
}

export default SocialMediaCarousel