"use client"

import { Heart,ShoppingBag } from "lucide-react";

const NewReleases = () => {
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
      };
    
      const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
      };
  return (
    (
        <div className='my-10 flex flex-col'>

    <section className='my-5 w-[95%] mx-auto flex flex-col'>
        <div className='flex justify-between'>
        <h2 className='text-lg leading-8 font-semibold'>Popular Now <span className='text-gray-500'>See All</span></h2>
       
    <div className='flex gap-2'>
        <button onClick={slideLeft} className='text-white bg-[#9ea0a9] aspect-square rounded-full p-1 grid place-content-center'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
    </svg>
        </button>
        <button onClick={slideRight} className='text-white bg-[#9ea0a9] aspect-square rounded-full p-1 grid place-content-center'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
    </svg>
        </button>
    
    
    
    </div>
    
        </div>
       
        <div id='slider' className='w-full flex gap-5 overflow-x-scroll scroll-smooth scrollbar-hide py-5 snap-x'>
            <article className='w-[320px] h-full  border border-teal-500  shrink-0 snap-center'>
              <div className="h-[375px] border-yellow-500 border-4 w-full relative">
                <div className="bg-white absolute rounded-full p-1 grid place-content-center aspect-square h-8 right-1 top-1">
                <Heart height={20} width={20} strokeWidth={1.5} className=""/>
                </div>
                <div className="absolute border-2 border-dashed flex flex-col border-cyan-600 bottom-0 left-0 right-0">
                  <p className="border-2 border-dotted border-red-500 aspect-square w-10 self-end"></p>
                  <div className="border-2 border-yellow-500 flex flex-col gap-1 p-1">
                    <h3 className="text-center">Quick add</h3>
                    <div className="flex h-5 gap-2 overflow-hidden">
                      <p className="border border-purple-800 h-full px-4 grid place-content-center">
                        XS
                      </p>
                      <p className="border border-purple-800 h-full px-4 grid place-content-center">
                        S
                      </p>
                      <p className="border border-purple-800 h-full px-4 grid place-content-center">
                        M
                      </p>
                      <p className="border border-purple-800 h-full px-4 grid place-content-center">
                        L
                      </p>
                      <p className="border border-purple-800 h-full px-4 grid place-content-center">
                        XL
                      </p>
                       <p className="border border-purple-800 h-full px-4 grid place-content-center">
                        XXL
                      </p>
                     
                    </div>
                  </div>
                </div>
                
                
                
                 
          
              </div>
              <div className="flex flex-col p-2 gap-2">
                <p className="pl-2 border-l-2 border-green-500">NEW</p>
                <p>Large go to gym bag</p>
                <p>Black</p>
                <p>R 750 ZAR</p>
              </div>
            </article>
            <article className='w-[320px] h-full  border border-teal-500  shrink-0 snap-center'></article>
            <article className='w-[320px] h-full  border border-teal-500  shrink-0 snap-center'></article>
            <article className='w-[320px] h-full  border border-teal-500  shrink-0 snap-center'></article>
            <article className='w-[320px] h-full  border border-teal-500  shrink-0 snap-center'></article>
            <article className='w-[320px] h-full  border border-teal-500  shrink-0 snap-center'></article>
            <article className='w-[320px] h-full  border border-teal-500  shrink-0 snap-center'></article>
            <article className='w-[320px] h-full  border border-teal-500  shrink-0 snap-center'></article>
            
        </div>
        <button className='px-4 py-2  font-semibold rounded-md  tracking-[.01em] leading-8 text-lg border self-center '>Explore Classes</button>
    
    </section>
        </div>
      )
  )
}

export default NewReleases