import React from 'react'

const Banner = () => {
  return (
   <section style={{backgroundImage:`url(/Everybody_Seamless_Capsule_HP_Secondary_Banner_Desktop_1300x@2x.webp)`}} className='lg:aspect-[12/4] bg-cover text-white aspect-square w-full relative p-10 bg-gradient-to-r from-orange-600  to-yellow-700'>
     <div className='flex flex-col items-start absolute top-1/2 left-10 -translate-y-1/2'>
            <h2 className="text-4xl uppercase leading-[1.1] font-[700] mb-3">Everybody seamless</h2>
            <p className='mb-8'>A capsule for your every move</p>
            <button disabled className="uppercase px-6 fancy__button leading-[1.2] tracking-[-.03em] font-[500] text-sm text-[#000] h-10 bg-white">shop now</button>
        </div>
   </section>
  )
}

export default Banner