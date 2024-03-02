"use client"

import Card from "./Card"

const YouMayAlsoLike = () => {
  return (
   <section className="mt-10 mb-20 ">
    
    <div className="section__heading grid grid-cols-2  lg:grid-cols-4 gap-16 px-10 py-20 mx-auto">
    <h1 className=' text-[#27292a] leading-[1.2] uppercase tracking-[-.02em] text-[4rem] font-[900] heading col-span-4'>You may also like</h1>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
   </section>
  )
}

export default YouMayAlsoLike