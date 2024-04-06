"use client"
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import SocialMediaCarousel from './SocialMediaCarousel'
const SocialMedia = () => {
    const SLIDE_COUNT = 15
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto' }


  return (
    <div className='bg-white mb-10'>
      
      <SocialMediaCarousel slides={SLIDES} options={OPTIONS}/>
   
  </div>)

}
export default SocialMedia