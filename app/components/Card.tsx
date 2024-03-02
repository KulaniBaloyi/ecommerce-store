"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Card = () => {
  const route = useRouter()
  return (
    <div onClick={()=>route.push("product/Sunglasses")} className='card pt-12 px-6 pb-5 gallery__main bg-white w-full cursor-pointer rounded-md relative overflow-hidden border-2 border-dotted border-rose-500 '>
      <div className='  aspect-square grid place-content-center uppercase border border-rose-950 italic relative'>
        
      </div>
      <div className='p-3'>
        <h1 className='text-[1.375rem] text-[#27292a] font-[800] heading italic uppercase leading-[1.2] tracking-[-0.02em]'>Sunglasses</h1>
        <h2 className=' text-[1rem] font-[600] text-cyan-600 heading  uppercase leading-[1.2] tracking-[-0.02em]'>R 560</h2>
      </div>
    </div>
  )//48px 24px 20px
}

export default Card