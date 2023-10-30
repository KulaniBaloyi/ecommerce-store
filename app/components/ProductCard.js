"use client"
import Star from "./icons/Star"
import Image from "next/image"
import { useRouter } from "next/navigation"

const ProductCard = ({src,alt,sale,title}) => {
  const router = useRouter()

  const reroute =(route)=>{
    router.push(`/product/${route}`)
  }
  return (
    <div onClick={()=>reroute(title)} className="cursor-pointer">
    <div className=' w-full aspect-square relative '>
        <Image fill src={src} alt={alt} className="object-cover"/>
        {sale&&<p className='rounded-full absolute -right-3 -top-3 bg-[#8bc34a] aspect-square h-10 grid place-content-center text-sm'>Sale!</p>}
    </div>
    <div className='flex flex-col p-5 gap-2 items-center'>
        <h2 className='text-sm text-gray-400 uppercase'>groceries</h2>
        <h1 className='font-semibold capitalize'>{title}</h1>
        <div className='flex items-center gap-1'>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
       

        </div>
        <h3 className='font-semmibold text-[0.9em] text-[#333333] leading-[1.3em] font-bold'><span className='text-gray-300 mr-2 line-through'>R56.99</span>R36.00</h3>
    </div>

    </div>
  )
}

export default ProductCard