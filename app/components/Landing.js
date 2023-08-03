"use client"
import Image from "next/image";

const Landing = () => {
 
 
  return (
    <div className="rounded-xl relative aspect-square md:aspect-video w-full overflow-hidden grid place-content-center">
      <section className="absolute top-1/2 left-1/2 -translate-x-1/2 gap-5 -translate-y-1/2 w-1/2 z-[99] flex flex-col flex-wrap">
        <p className="text-white text-3xl font-semibold ">
        The best free stock videos shared by the Pexels community.
        </p>
        <div className="bg-white rounded-lg w-full h-12"></div>
      </section>
        <video autoPlay src="https://res.cloudinary.com/davgj9opq/video/upload/v1691094740/beach-video_mbviao.mp4" alt="cover" loop muted className="object-cover" priority fill/>
    </div>
  )
};

export default Landing;
