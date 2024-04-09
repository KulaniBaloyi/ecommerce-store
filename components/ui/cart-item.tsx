"use client"

import Image from "next/image"
import useCart from "@/hooks/use-cart"
import { useRouter } from "next/navigation"
import { X,Minus,PlusIcon } from "lucide-react"
import { useState,useEffect } from "react"

type Props = {
   item:any
}

const CartItem: React.FC<Props> = (props) => {
    const [isMounted,setIsMounted]= useState(false)
    const {item}= props
    const {image}= item

    const route = useRouter()

    const increaseQuantity = useCart((state)=>state.increaseQuantity)
  const decreaseQuantity = useCart((state)=>state.decreaseQuantity)
  const removeItem = useCart((state)=>state.removeItem)

  useEffect(()=>{
    setIsMounted(true)
  },[])

  if(!isMounted)return
  return (
    <div key={item.id} className="border-b pb-4 flex gap-4 relative">
    <X onClick={()=>removeItem(item.id)} className="h-3 w-3 lg:w-5 lg:h-5 absolute right-1 top-1 lg:top-2 lg:right-2 hover:text-red-500 cursor-pointer" strokeWidth={1}/>
    <div onClick={()=>route.push(`/product/${item.id}`)} className="aspect-3/4 h-[175px] w-[150px] relative cursor-pointer">
        <Image fill alt={item.name} src={image} className="bg-cover"/>
    </div>
    <div className="flex flex-col justify-between p-1">
      <ul className="flex flex-col gap-2">
        <li>{item.name}</li>
        <li>R{item.price} ZAR</li>
      </ul>
      <ul className="flex w-full justify-between lg:justify-normal gap-1 items-center">
        <div className="flex items-center">
        <li className="text-xs">{item.size}</li>
        <li className="text-xs">{item.color}</li>
        </div>
       
        <div className=" lg:ml-5 flex items-center gap-2 rounded-full border border-black p-1 lg:px-4 px-5">
        <button onClick={()=>decreaseQuantity(item.id)} className="cursor-pointer"><Minus className="h-3 w-3 lg:w-5 lg:h-5" strokeWidth={1}/></button>
      <p>{item.quantity}</p>
      <button onClick={()=>increaseQuantity(item.id)} className="cursor-pointer"><PlusIcon className="h-3 w-3 lg:w-5 lg:h-5"strokeWidth={1}/></button>                    
        </div>
        
      </ul>
    </div>


  </div>
   
  )
}

export default CartItem