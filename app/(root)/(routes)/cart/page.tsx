"use client"

import axios from "axios"
import useCart from "@/hooks/use-cart"

import { useEffect, useState } from "react"
import Button from "@/components/ui/button"
import CartItem from "@/components/ui/cart-item"

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false)
  const cartItems = useCart((state)=>state.items)

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const itemsInCart = cartItems.reduce((acc,item)=>acc+item.quantity,0)

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }



  const onCheckout = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds: cartItems.map((item) => item.id)
    });

    window.location = response.data.url;
  }

  

  if(cartItems.length==0)return(
  
  <div className="flex flex-col items-center p-[2.5%] lg:px-[5%] min-h-[60vh]">
    <p className="mb-10 text-center font-[500] leading-[1.2] tracking-[-.03em] text-[1.8em] mt-16">
    Your Shopping Cart Is Empty
  </p>
  <Button text={'Back to shopping'} bgColor={"black"} redirect={'/collections/all'}/>
  </div>)
  return (
    <div className='mt-16  p-[2.5%] lg:p-[5%]'>
      <h1 className="text-center heading mb-5">Your shopping</h1>

      
      <section className="my-10">
        {cartItems?.map((item)=>{
          return(
           <CartItem key={item.id} item={item}/>
          )
        })}
        <div className="my-10 flex flex-col w-full lg:w-2/5">
          <h2 className="leading-[1.3]  lg:text-lg uppercase font-[700] pb-2 border-b mb-2">summary</h2>
          <p className="title">2000 points for this purchase : )</p>
          <div className="my-5 flex justify-between leading-[1.2] font-[500] lg:text-lg">
            <h2>Total ({itemsInCart} items)</h2>
            <h2>R{total} ZAR</h2>
          </div>
          <button onClick={onCheckout} className="fancy__button p-2 px-4 py-4 lg:py-3 lg:px-5 text-white bg-black text-base cursor-pointer lg:text-lg uppercase font-[500] leading-[1.1]">checkout securely</button>
      
        </div>
      
      </section>
    </div>
  )
}

export default CartPage