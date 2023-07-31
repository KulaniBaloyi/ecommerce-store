"use client"

import { useEffect, useState } from "react"
import useCart from "../hooks/use-cart";
import CartItem from "../components/CartItem"
import {useRouter} from "next/navigation";
import { formatCurrency } from "@/utils/currency-formatter";

const CartPage = () => {
    const [isMounted,setIsMounted] = useState(false)
    const [delivery_fee,setDeliveryFee] = useState(75)
    const cartItems = useCart((state)=>state.items)
    const subtotal = cartItems.reduce((total,item)=>{
        return total+ Number(item.price)*Number(item.quantity)
      },0)

      const totalItems = cartItems.reduce((total,item)=>{
        return  total+Number(item.quantity)
      },0)

      const VAT = subtotal*.15
     

      const total = subtotal+VAT+delivery_fee

      const router = useRouter()
      const handleClick = ()=>{
       router.push(`/`)
      
      }

    useEffect(()=>{
        setIsMounted(true)
    },[])
    useEffect(() => {
        if (subtotal > 1500) {
          setDeliveryFee(0);
        }else{
            setDeliveryFee(75)
        }
      }, [subtotal]);
      
  

    if(!isMounted)return null

    if(cartItems.length===0)return(<div className="min-h-screen w-[90%] mx-auto p-5">
       <h1 className="col-span-5 lg:col-span-3 text-3xl text-gray-600">Your Cart</h1>
       <div className="rounded-lg border  grid place-content-center my-5">
        Cart is empty
       </div>

    </div>)
  return (
    <main className="min-h-screen w-[90%] mx-auto py-5"> 
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
    <h1 className="col-span-5 lg:col-span-3 text-3xl text-gray-600">Your Cart</h1>
    <div className="col-span-5 flex flex-col gap-5 lg:col-span-3 ">
        {cartItems&&cartItems.map(item=>{
            return <CartItem key={item.id} {...item} cartPage={true}/>
        })}
    </div>
    <aside className="col-span-5 lg:col-span-2 flex flex-col gap-5 w-full">
        <div className="border rounded-xl text-lg flex flex-col gap-4 p-4">
        <h1 className="font-bold text-xl uppercase sub-heading">Order Summary <span className="text-[#b3b3b3] text-sm">[{totalItems} items]</span> </h1>
        
        <div className="flex justify-between items-center text-sm">
            <h1 className="uppercase">Subtotal</h1>
            <h1 className="text-gray-600">{formatCurrency(subtotal)}</h1>
        </div>
        <div className="text-sm">
        <div className="flex justify-between items-center">
            <h1 className="uppercase">Delivery</h1>
          
            <h1 className="text-gray-600">{delivery_fee===0?'Free':formatCurrency(delivery_fee)}</h1>
        </div>
        {delivery_fee===0&&<h2 className="font-bold text-xs mt-1">You unlocked free shipping!</h2>}
        </div>
        
        <div className="flex justify-between items-center text-sm">
            <h1>VAT</h1>
            <h1 className="text-gray-600">{formatCurrency(VAT)}</h1>
        </div>
        <div className="flex justify-between items-center text-sm">
            <h1 className="uppercase font-semibold">Total</h1>
            <h1 className="font-semibold">{formatCurrency(total)}</h1>
        </div>
       
        </div>
        <button onClick={()=>handleClick()} className="rounded-md bg-neutral-950 text-white h-12 grid place-content-center text-base  w-full">Checkout</button>
        

        <div className="">
        <h1>Enter promo code</h1>
        <div className="border rounded-md h-12 text-base my-5">
            <input type="text" className="h-full w-full focus:outline-none outline-none border-0 text-lg p-5"/>
        </div>
        <div className="border rounded-md h-12 text-base grid place-content-center bg-gray-50">Submit</div>
    </div>
    </aside>
   
    </div>
   
    
    </main>
  )
}

export default CartPage