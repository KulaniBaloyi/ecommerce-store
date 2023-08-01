"use client"
import Image from "next/image";

const Landing = () => {
 
 
  return (
    <div className="rounded-xl relative aspect-square md:aspect-video w-full overflow-hidden grid place-content-center">
        <section className="flex flex-col gap-5 items-center">
        <p className="text-white font-semibold text-2xl italic z-40">Hi Welcome to the store</p>
        <button className="rounded-md tracking-[.25rem] capitalize text-lg p-2 px-4 bg-white font-semibold z-40">shop</button></section>
        
        <Image src="/oskar-kadaksoo-GuGqZqp-oC0-unsplash.jpg" className="object-cover" priority fill/>
    </div>
  )
};

export default Landing;
