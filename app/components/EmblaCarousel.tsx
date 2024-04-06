"use client"
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import ProductCard from './ProductCard'
import ShopAllButton from './shop-all-button'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
  products:any
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {products} = props
let category
  const heading = products.map((prod:any)=>{
    category=prod.category
    category = category.name
    return {category}
  })
  
  console.log("Products carousel: ", )

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="bg-white md:px-16 py-10 relative">
      <h1 className="mb-4 text-xl md:text-2xl lg:text-3xl uppercase font-[700] leading-[1.1]">{heading[0].category}</h1>
      <div className='flex justify-between'>
      <p className='mb-6 text-base leading-[1.42857]'>Our top recommendations</p>
      <ShopAllButton/>
      </div>
     
    
        <div className='left-0 absolute top-1/2 -translate-y-1/2 '> <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} /></div>
        <div className='right-0 absolute top-1/2 -translate-y-1/2 '> <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} /></div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container  gap-5 ">
          {products.map((product:any,index:any) => (
            //map products from backend max 8
           <ProductCard {...product} key={index}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
