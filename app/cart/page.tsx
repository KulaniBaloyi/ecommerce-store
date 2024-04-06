"use client";


import useCart from "../lib/hooks/cart-store";

import { useUser } from "@clerk/nextjs";
import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import CartItem2 from "../components/CartItem2";
import CartItem from "../components/CartItem";
import Link from "next/link";

const Cart = () => {
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const total = cart.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[0].emailAddress,
    name: user?.fullName,
  };

  const handleCheckout = async () => {
    try {
      if (!user) {
        router.push("sign-in");
      } else {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
          method: "POST",
          body: JSON.stringify({ cartItems: cart.cart, customer }),
        });
        const data = await res.json();
        window.location.href = data.url;
        console.log(data);
      }
    } catch (err) {
      console.log("[checkout_POST]", err);
    }
  };

  return (
    <div className="flex mb-10 gap-20 py-24 px-10 max-lg:flex-col max-sm:px-3 min-h-[80dvh] bg-white">
      <div className="w-full">
        <p className="text-center font-[500] leading-[1.2] tracking-[-.03em] text-[1.8em]">Shopping Cart</p>
        <div className="hidden lg:flex mt-5 ">
          <div className="flex-[.66] border-b flex border-[#e5e5e5]">
            <h2 className="self-start pb-2 uppercase leading-[1.2] tracking-[-0.02em] font-[500] text-sm relative">
              
              Item</h2>
          </div>
          <div className="flex-[.17] uppercase text-sm leading-[1.2] font-[500] tracking-[-0.02em] border-b border-[#e5e5e5]">
            <h2 className="pb-2">Quantity</h2>
          </div>
          <div className="flex-[.17]  uppercase text-sm leading-[1.2] font-[500] tracking-[-0.02em] border-b border-[#e5e5e5]">
            <h2 className="pb-2">Price</h2>
          </div>
         
         
          
        </div>
        {/**mobile version */}
        <div className="lg:hidden">
          <h2 className="border-b border-[#e5e5e5] pb-2 uppercase mb-4">Item</h2>
          {/**loop through cart items for mobile vi */}
          {cart.cart.map((cartItem) => 
            
            (
            
             <CartItem  key={cartItem._id} cartItem={...cartItem}/>
            ))}

        </div>
        {cart.items.map((item) => 
            
            (
            
             <CartItem2  key={item.id} item={...item}/>
            ))}
  
    
       {/**Checkout section  */}
        <div className="lg:hidden mt-16 w-full">
        <div className="w-full ">
        <button className="py-2 w-full  max-w-full px-4 text-base leading-[1.2] tracking-[-.03em] uppercase border bg-white border-[#e0e0e0]">continue shopping</button>
            <p className="py-2 max-w-full px-4 text-sm leading-[1.2] tracking-[-.03em] uppercase text-[#3c763d] border bg-[#dff0d8] border-[#d6e9c6]">spend <span className="font-[500]">R145.00 ZAR</span> more to get free shipping</p>
        </div>
        <div className=" ">
          <h2 className="border-[#e0e0e0] border-b pb-2 tracking-[-.03em] leading-[1.2] font-[700] text-[1.2em] uppercase">Summary</h2>
          <div className="flex justify-between items-center my-4 font-[700] leading-[1.2] tracking-[-.03em]">
            <h2>Subtotal</h2>
            <div className="flex flex-col">
            <h2>R {total.toFixed(2)}</h2>
            <p className="text-xs italic text-gray-500">incl. sales tax</p>
            </div>
           
            </div>        
          <button className="fancy__button bg-neutral-900 text-white px-8 py-4 w-full uppercase text-[1.2em] font-[500]">checkout</button>
        </div>
      </div>
         <div className="hidden lg:flex justify-between mt-16 ">
        <div className=" ">
        <button onClick={()=>router.push("/collections/shop")} className="py-2 w-full  max-w-full px-4 text-base leading-[1.2] tracking-[-.03em] uppercase border bg-white border-[#e0e0e0] cursor-pointer">continue shopping</button>
            <p className="py-2 max-w-full px-4 text-sm leading-[1.2] tracking-[-.03em] uppercase text-[#3c763d] border bg-[#dff0d8] border-[#d6e9c6]">spend <span className="font-[500]">R145.00 ZAR</span> more to get free shipping</p>
        </div>
        <div className="flex-[.5] ">
          <h2 className="border-[#e0e0e0] border-b pb-2 tracking-[-.03em] leading-[1.2] font-[700] text-[1.2em] uppercase">Summary</h2>
          <div className="flex justify-between items-center my-4 font-[700] leading-[1.2] tracking-[-.03em]">
            <h2>Subtotal</h2>
            <div className="flex flex-col">
            <h2>R {total.toFixed(2)}</h2>
            <p className="text-xs italic text-gray-500">incl. sales tax</p>
            </div>
           
            </div>        
          <button className="fancy__button bg-neutral-900 text-white px-8 py-4 w-full uppercase text-[1.2em] font-[500]">checkout</button>
        </div>
      </div>
      </div>
     

    </div>
  );
};

export default Cart;