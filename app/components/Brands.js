import React from 'react'
import Image from 'next/image'

const Brands = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-6 my-10 px-[5%] m-auto bg-[#f8f6f3]'>
            <div className='text-[#111111] text-xl leading-[1.5em] font-bold capitalize flex items-center'>Featured brands:</div>
       
        <div className=' w-full h-full relative aspect-video'>
            <Image src={"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-4.svg"} fill alt="brand-1" className='object-cover'/>
            
        </div>
        <div className=' w-full h-full relative'>
            <Image src={"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-5.svg"} fill alt="brand-1" className='object-cover'/>
            
        </div>
        <div className=' w-full h-full relative'>
            <Image src={"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-3.svg"} fill alt="brand-1" className='object-cover'/>
            
        </div>
        <div className='w-full h-full relative'>
            <Image src={"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-2.svg"} fill alt="brand-1" className='object-contain'/>
            
        </div>
        <div className=' w-full h-full relative'>
            <Image src={"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-1.svg"} fill alt="brand-1" className='object-cover'/>
            
        </div>
      
        
        
    </section>
  )
}

export default Brands