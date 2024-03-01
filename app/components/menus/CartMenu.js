"use client"
import { useEffect,useState } from "react";

import CloseButton from "../CloseButton";
import useCartMenu from "@/app/actions/use-cart-menu";
import CartItem from "../CartItem";
import useCart from "@/app/hooks/use-cart";
import {useRouter} from "next/navigation";
import { formatCurrency } from "@/utils/currency-formatter";

const CartMenu = () => {

  const [isMounted,setIsMounted] = useState(false)
  const isOpen = useCartMenu((state)=>state.isOpen)
  const cartItems = useCart((state)=>state.items)
  
  const total = cartItems.reduce((total,item)=>{
    return total+ Number(item.price)*Number(item.quantity)
  },0)
  const closeCart = useCartMenu((state)=>state.onClose)
 

  const router = useRouter()
  const handleCheckout = ()=>{
   router.push(`/`)
   closeCart()
  
  }  
 

  const handleViewCart = ()=>{
    router.push(`/cart`)
    closeCart()
   
   } 
  const totalItems = cartItems.reduce((total,item)=>{
    return  total+Number(item.quantity)
  },0)

  
useEffect(()=>{
  setIsMounted(true)
  
},[])

useEffect(() => {
  if (typeof document !== 'undefined') {
    const bodyElement = document.body;
    if (isOpen) {
      bodyElement.classList.add('cartMenu-open');
    } else {
      bodyElement.classList.remove('cartMenu-open');
    }
  }
}, [isOpen])
  
if(!isMounted) return null
if(!isOpen)return null


if(cartItems.length===0)return( 
<div className="fixed inset-0 bg-neutral-950/90 backdrop-blur-md flex justify-end z-[999]">
 
<div className="bg-white w-full md:w-1/2 lg:w-2/5 xl:w-1/3 h-full flex flex-col p-1">
  <header className="h-[10%] flex justify-between items-center border-b p-5">
    <h1 className="text-3xl italic font-semibold">
      Cart 
    </h1>
    <CloseButton />
  </header>

  <main className="h-[90%] grid place-content-center">
    Cart is empty   
  </main>

</div>
</div>)
  return (
    <div className="fixed inset-0 bg-neutral-950/90 backdrop-blur-md flex justify-end z-[999]">
      <div className="bg-white w-full md:w-1/2 lg:w-2/5 xl:w-1/3 h-full flex flex-col p-1">
        <header className="h-[10%] flex justify-between items-center border-b p-5">
        <h1 className="font-bold text-3xl uppercase">Cart <span className="text-[#808080] text-sm">[{totalItems}]</span> </h1>
          <CloseButton />
        </header>

        <main className="h-3/5 overflow-y-scroll flex flex-col gap-4 p-5">
          {cartItems.length>0&&cartItems.map((i)=>{
          
            return <CartItem key={i.id} {...i}/> 
          
          })}
          
        </main>

        <footer className="h-[30%] flex flex-col gap-2 border-t p-2 rounded-md overflow-hidden">
         
          <div className="flex justify-between items-center">
          <h3 className="uppercase text-xl font-semibold">Subtotal</h3>
            <p className="text-2xl">{formatCurrency(total)}</p>
          </div>
          <p>VAT calculated at checkout</p>
          <button onClick={()=>handleViewCart()} className="rounded-full p-2 sm:p-3 md:p-2 bg-[#00bcd4] text-white text-center uppercase">
            view cart
          </button>
        <button onClick={()=>handleCheckout()} className="rounded-full p-2 sm:p-3 md:p-2 bg-black  text-white text-center uppercase"href={'/checkout-login'}>Checkout</button>
        </footer>
      </div>
    </div>
  );
};

export default CartMenu;