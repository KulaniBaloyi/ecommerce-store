"use client"
import Image from "next/image"
import useCart from "../lib/hooks/cart-store"
import { useRouter } from "next/navigation"

const CartItem2 = ({id,price,name,image,color,size,quantity}:any) => {

  const cartItems = useCart((state=>state.items))
  const cart = useCart()
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const route = useRouter()


  return (
    <div className="hidden lg:flex mt-4">
    <div className="flex-[.66] flex gap-4 border-b border-[#e0e0e0] pb-4">
<div onClick={()=>route.push(`/product/${id}`)} className="w-[150px] h-[175px] relative cursor-pointer">
  <Image src={image.url} fill alt={name} className="object-cover"/>

</div>
<div className="flex flex-col gap-2 flex-wrap">
<h2 className="font-[700] leading-[1.2] tracking-[-.03em] text-base uppercase">{name}</h2>
<div className="flex gap-2">
<p className="bg-green-600 rounded-full h-full aspect-square"></p>
<p className="text-xs text-gray-500 capitalize">In Stock</p>
</div>
<div className="w-40 max-w-full min-w-16 h-10 text-[1rem] leading-[1.5] border">
<select  value={"m"}
className=" px-2 text-sm font-[500] border-0 uppercase active:outline-none active:border-0 focus:outline-none  bg-inherit w-full h-full cursor-pointer leading-[1.5] text-[#27292a] ">
<option value={"xs"}>xs</option>
<option value={"s"}>s</option>
<option value={"m"}>m</option>
<option value={"l"}>l</option>
<option value={"xl"}>xl</option>
<option value={"xxl"}>xxl</option>


</select>


</div>
</div>
</div>
<div className="flex-[.17] border-b border-[#e0e0e0] flex items-center">
<div className="flex items-center text-xs">
<button onClick={() => cart.decreaseQuantity(id)} className="grid place-content-center h-8 aspect-square border">-</button>
<p className="grid place-content-center bl-0 br-0 h-8 aspect-square border font-[500]">{quantity}</p>
<button onClick={() => cart.addItem(id)} className="grid place-content-center h-8 aspect-square border">+</button>
<button onClick={() => cart.removeItem(id)} className="text-xs text-gray-500 ml-2 font-[300] hover:underline">Remove</button>
</div>
</div>
<div className="flex-[.17] border-b border-[#e0e0e0] flex items-center">
<p className="font-[500] text-sm leading-[1.2] tracking-[-.03em]">R{price} ZAR</p>
</div>





</div>
  )
}

export default CartItem2