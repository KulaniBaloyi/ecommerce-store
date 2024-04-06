"use client"
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import Menu from './Menu'


const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto' }
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const ProductCarousel = ({products}:any) => {


  return (
    <div className='bg-white'>
      
       <EmblaCarousel products={products} slides={SLIDES} options={OPTIONS}/>
   
  </div>
  )
}

export default ProductCarousel
