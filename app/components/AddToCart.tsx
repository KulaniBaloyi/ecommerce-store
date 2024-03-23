"use client"
import Options from "@/app/components/Options";
import useCartStore from "../lib/cart-store"
import { useState } from "react";



const AddToCart = ({prodDetail}) => {
    const addToCart = useCartStore((state) => state.addToCart);
    const cart = useCartStore((state) => state.cart);

    const [quantity, setQuantity] = useState(1)
    const handleChange = (e) => {
      setQuantity(e.target.value)
    }
  return (
    <>
     <Options quantity={quantity} handleChange={handleChange}/>
     <button onClick={()=>addToCart(prodDetail,quantity)} className='fancy__button self-start text-[1rem] cursor-pointer leading-[1.5] font-bold uppercase text-white bg-cyan-800 h-full w-full grid place-content-center rounded-md'>Add to Cart</button>
     </>
   
  )
}

export default AddToCart