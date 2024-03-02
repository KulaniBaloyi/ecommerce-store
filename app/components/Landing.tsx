import React from 'react'

const Landing = () => {
  return (
    <div className='border-4 border-teal-500 h-[80vh] grid place-content-center'>
        <section className='flex flex-col gap-20'>
            <h1 className='self-center text-[4rem] leading-[1.2] font-bold heading uppercase tracking-[-.02em] text-[#27292a]'>Heading for something</h1>
            <div className='flex items-center gap-10'>
                <button className='bg-[#e5202b] text-white border fancy__button py-4 px-10 uppercase text-lg text-center leading-[1.5] font-bold'>Watch now</button>
                <button className='bg-[#27292a] text-white border fancy__button py-4 px-10 uppercase text-lg text-center leading-[1.5] font-bold'>Watch now</button>
                <button className='bg-[#27292a] text-white border fancy__button py-4 px-10 uppercase text-lg text-center leading-[1.5] font-bold'>Watch now</button>
                <button className='bg-[#27292a] text-white border fancy__button py-4 px-10 uppercase text-lg text-center leading-[1.5] font-bold'>Watch now</button>
                <button className='bg-[#27292a] text-white border fancy__button py-4 px-10 uppercase text-lg text-center leading-[1.5] font-bold'>Watch now</button>
            </div>
        </section>
    </div>
  )
}

export default Landing