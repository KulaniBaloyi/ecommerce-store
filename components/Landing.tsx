"use client"

import { useRouter } from "next/navigation"
import Button from "./ui/button"

const Landing = ({video}:any) => {
  const route = useRouter()
  
  return (
    <section className='mb-20 w-full h-full max-w-full py-16 landing min-h-[95dvh] grid place-content-center relative overflow-hidden'>
      <div className="absolute inset-0 -z-50">
      {/* <video autoPlay loop src={video}/> */}
      </div>
      
        <section className='flex m-auto flex-col my-16 lg:my-10 lg:gap-20 min-w-full max-w-6xl'>
            <h1 className='mr-6 lg:mr-0 mb-10 lg:mb-0 self-center text-[2em] flex-wrap text-center xl:text-[3em] leading-[1.2] font-[900] heading uppercase tracking-[-.02em] text-[#27292a] italic'>Unleash Your Inner Athlete. <span className="text-[#e5202b]">Keep Moving Forward.</span></h1>
            <div className='px-5 flex flex-col lg:flex-row items-center gap-2 lg:gap-10'>
            <Button bgColor={"red"} redirect={'/collections/all'} text={"shop merch"}/>
            <Button bgColor={"black"} redirect={'/'} text={"watch now"}/>
            <Button bgColor={"black"} redirect={'/'} text={"studio"}/>
            <Button bgColor={"black"} redirect={'/'} text={"podcast"}/>
            <Button bgColor={"black"} redirect={'/'} text={"autofocus"}/>
           
            </div>
        </section>
    </section>
  )
}

export default Landing