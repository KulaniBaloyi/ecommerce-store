'use client'
import { useRouter } from "next/navigation"
import StoreItemFunc from "./StoreItemFunc"
import { useState,useEffect } from "react"
import { formatCurrency } from "@/utils/currency-formatter"
import Image from "next/image"



const StoreItem = ({name,price,id,brand,images}) => {
  const [isMounted,setIsMounted] = useState(false)
   const router = useRouter()
   const handleClick = ()=>{
    router.push(`/product/${id}`)
   }

   useEffect(()=>{
    setIsMounted(true)
   },[])

   if(!isMounted){
    return null
   }
 
 
  return (
    <div onClick={()=>handleClick()} className='cursor-pointer group rounded-lg p-2 md:p-3 w-full h-full border shadow-sm shadow-gray-200 flex flex-col gap-2'>
        <div className=' relative w-full aspect-square rounded-md overflow-hidden text-white grid place-content-center'>
           <Image src={images[0]} alt={name} fill/>
          <StoreItemFunc id={id} name={name} price={price} image={images[0]}/>
           
        </div>
        <div className=' flex-[0.3]'>
                <h2 className="capitalize">{name}</h2>
               
                <h2 className="text-gray-500">{brand?.name}</h2>
                <h2 className=" font-semibold">{formatCurrency(price)}</h2>
                
               
            </div>
    </div>
  )
}

export default StoreItem