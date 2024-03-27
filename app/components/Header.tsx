"use client"
import Link from "next/link";
import useCart from "../lib/hooks/cart-store";
import { Search,Heart,ShoppingBasket, ShoppingBag } from "lucide-react";

import { useState, useEffect } from "react";
import { useRouter,usePathname} from "next/navigation";


const Header = () => {
  const [headerRef, setHeaderRef] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const route = useRouter()
  const pathname = usePathname()
  const cartItems = useCart((state) => state.cart);
  

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
      className={`${pathname!=="/"?"bg-white":""} fixed bg-transparent top-0 left-0 right-0 z-[99999999] transition-all duration-500 ease-in-out flex justify-between items-center p-5  ${
        isSticky ? "bg-white " : "" // Custom background color class
      }`}
      ref={setHeaderRef}
    >
      <Link href="/">
        <div className="text-3xl font-semibold flex gap-5">
          <h1>Strive & Thrive</h1>
          <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" width={40} height={40} className="oa-hidden-header-mobile-logo"  x="0px" y="0px" viewBox="0 0 59.7 62.4" >
<polygon points="14.4,17.1 18.5,13 23.4,8.1 28.3,13 32.3,17.1 41,25.7 46.7,31.5 46.7,31.5 46.7,23.3 41,17.6 27.4,4.1 23.4,0 
	19.3,4.1 5.8,17.6 0,23.4 0,31.4 0,41.3 0,49.3 0,49.4 0,49.4 5.8,43.7 23.4,26 41,43.6 46.7,49.4 59.7,62.4 59.6,54.1 41,35.5 
	27.4,22 23.4,17.9 19.3,22 5.8,35.5 5.8,25.8 "></polygon>
</svg>
        </div>
      </Link>

      <ul className="flex gap-10 items-center">
      <li className="cursor-pointer" onClick={()=>route.push("/wishlist")} ><Heart strokeWidth={1.5}/></li>
        <li><Search strokeWidth={1.5}/></li>
       
       <li className="cursor-pointer relative" onClick={()=>route.push("/cart")}>
       {cartItems.length>0&&<p className="absolute aspect-square h-2 rounded-full bg-red-500 top-0 left-0 z-50"/>}
       <ShoppingBag strokeWidth={1.5}/>
      </li>
     
      </ul>
    </header>
  );
};

export default Header;