"use client"
import useCart from "../hooks/use-cart"
import { useEffect,useState } from "react"
import RemoveFromCart from "./RemoveFromCart"


const CartItemFunc = ({id,quantity,name,price,image}) => {

  
    const [isMounted,setIsMounted] = useState(false)
    const cart = useCart()
    const data={id,name,price,image}
    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted)return null

    const handleAdd = async(e)=>{
      e.stopPropagation()
      cart.addItem(data)
      
    }
   

    const handleDecrease = async(e)=>{
      e.stopPropagation()
      cart.decreaseItem(data)

    }
   

  return (
    <div className="flex gap-2 items-center flex-col">
        <section className="flex gap-2 items-center">
          {quantity>1?<button onClick={(e)=>handleDecrease(e)} className=" grid place-content-center aspect-square h-10 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
</svg>

        </button>:<RemoveFromCart id={id} name={name} price={price}/>}
        
        <div className="border rounded-md grid place-content-center aspect-square h-8">{quantity}</div>
        <button onClick={(e)=>handleAdd(e)} className=" grid place-content-center aspect-square h-10 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
</svg>

        </button>
        </section>
       
        
    </div>
  )
}

export default CartItemFunc