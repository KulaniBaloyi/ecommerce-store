"use client"
import Link from "next/link"
import { useState,useEffect } from "react"
import { useRouter,usePathname } from "next/navigation"
import CartIcon from "./ui/icons/cart-icon"
import useCart from "@/hooks/use-cart"
import { Menu, Search } from "lucide-react"
import UserIcon from "./ui/icons/user-icon"
import HeartEmptyIcon from "./ui/icons/heart-empty-icon"

const Header = () => {
    const [isMounted,setIsMounted]= useState(false)
    const [isSticky, setIsSticky] = useState(false);
    const route = useRouter()
    const pathname = usePathname()
    const cartItems = useCart((state)=>state.items)
  
    useEffect(() => {
      const handleScroll = () => {
        const windowScrollY = window.scrollY;
        setIsSticky(windowScrollY > 100); // Change threshold as needed
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll); // Cleanup
    }, []);

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted)return
  return (
    <header className={`${pathname=="/collections/shop"&&"text-white "} bg-white fixed bg-transparent top-0 left-0 right-0 z-[99999999] transition-all duration-500 ease-in-out flex justify-between items-center p-2 px-4 lg:px-10 lg:py-4 ${
      isSticky && "bg-white/30 backdrop-blur-xl"} ${pathname=="/collections/shop"&&isSticky&&"text-black"}`}

  >

    <div className="flex-[.2] ">
      <div className="flex gap-2 items-center lg:hidden">
      <Menu className="lg:hidden h-4 w-4 lg:w-5 lg:h-5"/>
      <UserIcon/>
      </div>
      
    <Link className="hidden lg:flex" href="/">Home</Link>
    </div>
   
    <ul className=" flex-[.6] flex  gap-4 justify-center uppercase font-[500] leading-[1.2] text-base">
    <Link href='/collections/all' className=" hidden lg:flex">shop</Link>
      <li className="cursor-pointer hidden lg:flex">loyalty club</li>
     
      <li className=" hidden lg:flex">about us</li>
      <Link className="lg:hidden hover:border-b hover:border-black" href={"/"}>Home</Link>
    </ul>
    <ul className="flex justify-end items-center gap-4 flex-[.2]">
      <li><Search className="h-4 w-4 lg:w-5 lg:h-5"/></li>
      <li onClick={()=>route.push('/wishlist')} className="cursor-pointer"><HeartEmptyIcon/></li>
      <li className="hidden lg:flex"><UserIcon/></li>
      <li onClick={()=>route.push("/cart")} className="relative cursor-pointer">
        {cartItems.length>0&&<p className="bg-red-500 rounded-full aspect-square h-2 animate-pulse absolute -right-1 -top-1"></p>}
        
        <CartIcon/>
        </li>
    </ul>
  </header>
  )
}

export default Header