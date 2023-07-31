'use client'

import CartItemFunc from "./CartItemFunc"
import { formatCurrency } from "@/utils/currency-formatter"
import { useEffect,useState } from "react"
import {useRouter } from "next/navigation"
import useCartMenu from "../actions/use-cart-menu"

import Image from "next/image"

const CartItem =({id,quantity,price,name,cartPage,image}) => {

  const [isMounted,setIsMounted] =useState(false)
  //const [data,setData]= useState()
 const closeCart = useCartMenu((state)=>state.onClose)
  const router = useRouter()
 
 
  const handleClick = ()=>{
   router.push(`/product/${id}`)
   closeCart()
  }
 useEffect(()=>{
  setIsMounted(true)
  
 
 },[])



 if(!isMounted)return null

  return (
    <div onClick={()=>handleClick()} key={id}  
    className={`border rounded-md cursor-pointer p-4 flex   items-center justify-between`}>
      <section className={ `flex ${cartPage&&'gap-8 '} gap-2`}>
      <div className={`${cartPage&&'w-[150px]'} relative w-[100px] aspect-square h-full border rounded-md grid place-content-center text-cyan-500`}>
             <Image src={image} alt={name} className='object-cover' fill/>  
        </div>
      
          <section className={`${cartPage&&'text-lg flex flex-col gap-2'}`}>
          <h3 className="capitalize font-semibold text-xs">{name}</h3> 
     <h3>{formatCurrency(price)}</h3> 
     {cartPage&&<CartItemFunc quantity={quantity} id={id}/>}
    
          </section>
   
      
      </section>
      
      {cartPage?"":<CartItemFunc quantity={quantity} id={id}/>}

        
    
   
</div>
  )
}

export default CartItem