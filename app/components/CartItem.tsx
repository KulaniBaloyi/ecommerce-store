"use client"
import useCart from "../lib/hooks/cart-store"
import Image from "next/image"
import { useRouter } from "next/navigation"

const CartItem = ({cartItem}:any) => {
  const {quantity,size,color,item}= cartItem
  const {price,title,_id,category,media} = item

  const cartItems = useCart((state=>state.cart))
  const total = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0
  );
  const cart = useCart()
  const route = useRouter()

  return (
    <>
     <div  className="flex gap-2">
          <div onClick={()=>route.push(`/product/${_id}`)} className="no-pinterest cursor-pointer w-[150px] h-[175px] relative">
          <Image  src={media[0]} fill alt={title} className="object-cover"/>
            </div>
            <div className="flex flex-col gap-4 flex-wrap text-xs ">
            <h2 className="font-[700] leading-[1.2] tracking-[-.03em] uppercase text-base">{title}</h2>
            <div className="flex gap-2">
              <p className="bg-green-600 rounded-full h-full aspect-square"></p>
              <p className="text-xs text-gray-500 capitalize">In Stock</p>
             </div>
        
  <div className="flex justify-between items-center">
    <div className="flex flex-col gap-1">
    <div className="flex items-center text-xs">
              <button onClick={() => cart.decreaseQuantity(_id)} className="grid place-content-center h-8 aspect-square border">-</button>
              <p className="grid place-content-center bl-0 br-0 h-8 aspect-square border font-[500]">{quantity}</p>
              <button onClick={() => cart.increaseQuantity(_id)} className="grid place-content-center h-8 aspect-square border">+</button>
              
            </div>
    <button className="self-start text-xs text-gray-600 ml-2 font-[300] hover:underline">Remove</button>
    </div>
  
    <p className="font-[500] text-xs leading-[1.2] tracking-[-.03em]">R {price} ZAR</p>
  </div>

  

            </div>

          </div>
         

          
    </>
  )
}

export default CartItem