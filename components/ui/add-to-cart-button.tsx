"use client"
import CartIcon from "./icons/cart-icon"
import useCart from "@/hooks/use-cart"


const AddToCart = ({data}:any) => {
  const addItem = useCart((state)=>state.addItem)
   
  return  <button onClick={()=>addItem(data)} className="cursor-pointer w-full bg-black py-3 fancy__button font-[500] uppercase flex items-center gap-4 justify-center text-white"><p>Add to cart</p><CartIcon/></button>
}

export default AddToCart