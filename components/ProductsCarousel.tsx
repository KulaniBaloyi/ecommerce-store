"use client"

import useEmblaCarousel from 'embla-carousel-react'

import { EmblaOptionsType } from 'embla-carousel'
import ShopAllButton from './ui/shop-all-button'
import ProductCard from './ProductCard'
import { PrevButton,NextButton,usePrevNextButtons } from './ui/arrow-button'



type PropType = {
   data:any,
   suggested:boolean
  }

const ProductCarousel: React.FC<PropType>  = (props) => {
    const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto' }
const SLIDE_COUNT = 8
const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
      } = usePrevNextButtons(emblaApi)

      const {data,suggested}= props
      

      const title = data[0]?.category?.name

  return (
    <section className={`${suggested?"":"px-5 md:px-16"}bg-white px-5 md:px-16 py-10 relative`}>
      {suggested?<h1 className="mb-4 heading">Suggested</h1>:<h1 className="mb-4 heading">{title}</h1>}
    
    <div className='flex justify-between'>
    <p className='mb-6 text-base leading-[1.42857]'>Our top recommendations</p>
    <ShopAllButton redirectUrl={title}/>
    </div>
   
  
      <div className='left-0 absolute top-1/2 -translate-y-1/2 '> <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} /></div>
      <div className='right-0 absolute top-1/2 -translate-y-1/2 '> <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} /></div>
    <div className="  overflow-hidden" ref={emblaRef}>
      <div className="embla__container  gap-5 ">
        {data.map((prod:any) => (
          //map products from backend max 8
         
         <ProductCard data={prod} key={prod.id} />
        ))}
      </div>
    </div>
  </section>
  )
}

export default ProductCarousel