import React from 'react'

const Banner = () => {
  return (
   <section className='bg-[#111111] p-10 grid grid-cols-4 gap-10' >
    <div className='bg-[#333333]/90 w-full aspect-video rounded-sm max-h-[150px] grid place-content-center text-white'>
        <h2 className='text-xl font-semibold'>Free Shipping</h2>
        <h3>Above $5 Only</h3>
    </div>
    <div className='bg-[#333333]/90 w-full aspect-video rounded-sm max-h-[150px]'></div>
    <div className='bg-[#333333]/90 w-full aspect-video rounded-sm max-h-[150px]'></div>
    <div className='bg-[#333333]/90 w-full aspect-video rounded-sm max-h-[150px]'></div>
   </section>
  )
}

export default Banner