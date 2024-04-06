"use client"
import Link from "next/link";
import useCart from "../lib/hooks/cart-store";
import { Search,Heart,Menu, ShoppingBag, User } from "lucide-react";

import { useState, useEffect } from "react";
import { useRouter,usePathname} from "next/navigation";
import CartIcon from "./cart-icon";
import HeartIconEmpty from "./heart-icon-empty";
import HeartIconFill from "./heart-icon-fill";


const Header = () => {

  const [isSticky, setIsSticky] = useState(false);
  const route = useRouter()
  const pathname = usePathname()
  const items = useCart((state) => state.items);
  console.log("items: ", items)

  const totalItems = items.reduce((total, item) => total + 1*item.quantity, 0)

  const clear = useCart((state)=>state.clearCart)
  clear()
 
  

  useEffect(() => {
    const handleScroll = () => {
      const windowScrollY = window.scrollY;
      setIsSticky(windowScrollY > 100); // Change threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <header
      className={`${pathname=="/collections/shop"&&"text-white "} fixed bg-transparent top-0 left-0 right-0 z-[99999999] transition-all duration-500 ease-in-out flex justify-between items-center p-2 lg:px-10 lg:py-4 ${
        isSticky && "bg-white/30 backdrop-blur-xl"} ${pathname=="/collections/shop"&&isSticky&&"text-black"}`}
  
    >
   <ul className="lg:hidden flex gap-5">
    <li> <Menu /></li>
    <li><User/></li>

   </ul>
 
      

      <Link href="/">
        <div className="text-3xl font-semibold flex items-center gap-5 flex-1">
          <h1 className="hidden lg:flex">Strive & Thrive</h1>
          <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" width={35} height={35} fill={`${pathname=="/collections/shop"&&"#fff "} ${isSticky&&"#000"} `} className="oa-hidden-header-mobile-logo"  x="0px" y="0px" viewBox="0 0 59.7 62.4" >
<polygon points="14.4,17.1 18.5,13 23.4,8.1 28.3,13 32.3,17.1 41,25.7 46.7,31.5 46.7,31.5 46.7,23.3 41,17.6 27.4,4.1 23.4,0 
	19.3,4.1 5.8,17.6 0,23.4 0,31.4 0,41.3 0,49.3 0,49.4 0,49.4 5.8,43.7 23.4,26 41,43.6 46.7,49.4 59.7,62.4 59.6,54.1 41,35.5 
	27.4,22 23.4,17.9 19.3,22 5.8,35.5 5.8,25.8 "></polygon>
</svg>
        </div>
      </Link>

      <section className="hidden lg:flex">
        <ul className="flex gap-4 justify-center uppercase font-[500] mb-5 leading-[1.5] text-base ">
          <li className="cursor-pointer">Shop | </li>
          <li className="cursor-pointer" aria-disabled>Loyalty club | </li>
          <li className="cursor-pointer" aria-disabled>about us</li>
        </ul>
      </section>

      <ul className="flex gap-5 items-center">
      <li className=""><Search strokeWidth={2} width={20} height={20}/></li>
      <li className="cursor-pointer hidden lg:flex" onClick={()=>route.push("/wishlist")} ><HeartIconEmpty/></li>
      
       <li className="hidden lg:flex"> <User strokeWidth={2}/></li>
       <li className="cursor-pointer relative" onClick={()=>route.push("/cart")}>
       {items.length>0&&<p className="absolute aspect-square h-4 rounded-full bg-red-500 -top-2 -right-2 z-50 text-white grid place-content-center text-xs">{totalItems}</p>}
      
       <CartIcon/>
     
      </li>
     
      </ul>
    </header>
  );
};

export default Header;