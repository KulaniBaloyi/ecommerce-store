"use client"

import Link from "next/link";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import HeroButton from "../components/hero-button";
import useCartStore from "../lib/cart-store";
import Image from "next/image";
import AddToCart from "../components/AddToCart";

//import Button from '../components/Button';
//import YouMayAlsoLike from '../components/YouMayAlsoLike';


const CartPage = () => {
  const cartItems = useCartStore((state) => state.cart);
  const cartTotal = useCartStore((state)=>state.cartTotal)
  const totalItems = useCartStore((state)=>state.totalItems)
  const addToCart = useCartStore((state)=>state.addToCart)
  const removeFromCart = useCartStore((state)=>state.removeFromCart)
  console.log("cartItems: ", cartItems)

  return (
    <>
      <section className="px-[5%] my-20 bg-white py-10 min-h-dvh">
      {cartItems.length>0?<div>{totalItems>1? <h1 className="text-[1.5rem] leading-[1.5] italic text-[#27292a] heading tracking-[-0.02em] font-[900]">{totalItems} items in your cart for R{cartTotal}</h1>: <h1 className="text-[1.5rem] leading-[1.5] italic text-[#27292a] heading tracking-[-0.02em] font-[900]">{totalItems} item in your cart for R{cartTotal}</h1>}
             
              <div className="flex gap-10">
              <div className="flex-[.7] ">
                  <h1>Item</h1>
                </div>
                <div className="flex-[.3] flex justify-between">
                  <h1>Quantity</h1>
                  <h1>Price</h1>
                </div>
              </div>
             
              {cartItems&&cartItems.map((item)=>{
                const {_id,image,name,quantity,slug,price}= item
                const {current}= slug
              
                return(
                  <>
                   <div key={_id} className="flex gap-10 mb-5">
                   <div  className="flex-[.7] flex gap-2 border-4 border-dotted border-rose-500">
                  <p className="overflow-hidden h-24 aspect-square relative">
                    <Image src={image} alt={name} fill className="object-cover"/>
                  </p>
                  <div className="flex flex-col gap-1">
                    <h2>{name}</h2>
                    {/* <h2>Men, 3xl</h2> */}
                  </div>
                </div>
                <div className="flex-[.3] flex justify-between items-center border-4 border-dotted border-teal-500">
                <div className="w-24 min-w-16 h-14 text-[1rem] leading-[1.5] border-2">
    <select  value={quantity}  onChange={(e)=>addToCart(item,e.target.value)}
         className=" px-2 text-lg font-[500] border border-gray-300/80 bg-inherit w-full h-full cursor-pointer leading-[1.5] text-[#27292a] ">
      
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
      <option value={6}>6</option>
      <option value={7}>7</option>
      <option value={8}>8</option>
      <option value={9}>9</option>
      
      <option value={10}>10</option>
    </select>
   
    
  
  </div>
  <h2>R {price}</h2>
  <svg onClick={()=>removeFromCart(_id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer hover:text-red-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

                </div>
                   </div>
                  </>
                )
              })}
              <div className="flex gap-10">
                <div className="flex-[.7] border-2 border-yellow-400">
                  <br/>
                 
               
                  <Button text={"back to shopping"} redirect={"/collections/all"} bgColor={"#27292a"}/>
                </div>
                <div className="flex-[.3] border-2 border-purple-900">
                  <div className=" font-bold flex justify-between mb-2">
                    <h2>Subtotal</h2>
                    <h2>{cartTotal}</h2>
                  </div>
                  <Link href={'/checkout'} className={`block hover:opacity-90 duration-150 transition-all self-center bg-[#e5202b] text-white border fancy__button py-3 px-10 uppercase text-[1rem] text-center leading-[1.5] font-bold `}>Checkout</Link>
                </div>
              </div>
     
            
            </div>: <div className="flex flex-col gap-20 items-center">
            <h1 className="heading self-center italic text-[2rem] leading-[1.2] font-[800] heading uppercase tracking-[-.02em] text-[#27292a]">
              Your shopping cart is empty
            </h1>
            <Button text={"Start shopping"} redirect={"/collections/all"}/>

          </div>}
         
       
      </section>
      {/* <YouMayAlsoLike /> */}
    </>
  );
};

export default CartPage;
