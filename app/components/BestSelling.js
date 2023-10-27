import React from 'react'

const BestSelling = () => {
  return (
    <section className='min-h-screen flex flex-col px-10 py-32 w-[95%] mx-auto'>
            <h1 className='text-center font-semibold text-4xl leading-[1.3em] text-[#111111]'>Best Selling</h1>
        <div className='grid grid-cols-4 gap-5'>
            <div className='border w-full aspect-square'></div>
            <div className='border w-full aspect-square'></div>
            <div className='border w-full aspect-square'></div>
            <div>
            <div className='border w-full aspect-square relative'>
                <p className='rounded-full absolute -right-3 -top-3 bg-[#8bc34a] aspect-square h-10 grid place-content-center text-sm'>Sale!</p>
            </div>
            <div className='flex flex-col p-5 gap-2 items-center'>
                <h2 className='text-sm text-gray-400 uppercase'>groceries</h2>
                <h1 className='font-semibold'>Natural Extracted Edible Oil</h1>
                <h3 className='font-semmibold text-sm'>R36.00</h3>
            </div>

            </div>
            
        </div>
    </section>
  )
}

export default BestSelling