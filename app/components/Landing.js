import Image from 'next/image'
import React from 'react'

const Landing = () => {
  return (
    <section className='min-h-[100dvh] py-20 px-10'>
        <div className='grid grid-cols-2 h-[500px] w-full'>
            <div className='h-full w-full border relative'>
                <Image fill src={"/organic-products-hero.png"} alt={"hero"} className='object-cover'/>
            </div>
            <div className='h-full w-full border px-5 py-10 flex flex-col gap-5 flex-wrap'>
                <p className='relative h-10 w-40'>
                    <Image fill alt="logo-leaf" src={"/logo-leaf-new.png"} className='object-contain'/>
                </p>
                <h1>Best Quality Products</h1>
                <h2 className=''>Join The Organic Movement!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <button className='self-start uppercase py-2 px-3 rounded-md bg-[#6a9739] text-white text-sm font-semibold'>Shop now</button>
            </div>             
        </div>
    </section>
  )
}

export default Landing