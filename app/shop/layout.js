import React from 'react'

const layout = ({children}) => {
  return (
    <div className='grid grid-cols-4 gap-10 w-[90%] m-auto my-10'>
        <aside className='border-r border-black/20 pr-10 hidden lg:flex  flex-col gap-10'>
            <div className='flex gap-1 h-10'>
                <div className='flex-1 h-full border rounded-md '>
                    <input type={"text"} placeholder='Search products...' className='pl-2 outline-none full h-full w-full focus:outline-none'/>
                </div>
                <div className='bg-[#6a9739] h-full aspect-square text-white grid place-content-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
</svg>

                </div>
            </div>
            <section>
                <h3 className='text-[#111111] text-[1.5rem] leading-[1.5rem] font-semibold'>Filter by price</h3>
            </section>
        </aside>
        <main className='col-span-4 lg:col-span-3'>{children}</main>
    </div>
  )
}

export default layout