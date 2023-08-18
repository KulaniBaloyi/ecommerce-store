"use client"
import { useState,useEffect } from "react"
import Link from "next/link"
import useMenu from "../actions/use-menu"
import useCart from "../hooks/use-cart"
import useCartMenu from "../actions/use-cart-menu"
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isMounted,setIsMounted]= useState(false)
  const openCart = useCartMenu((state)=>state.onOpen)  
  const items = useCart((state)=>state.items)
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // Adjust the threshold as needed
    }
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust the threshold as needed
    }
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    const openMenu = useMenu((state)=>state.onOpen)
   
    const pathname = usePathname()
   
    const isHomePage = pathname === "/"

   
    

    

    const handleOpenCart=()=>{ 
      openCart()
    }

  

    const handleOpenMenu=()=>{
    
      openMenu()
    }
    useEffect(() => {
      setIsMounted(true)
    }, [])

    if(!isMounted)return null
  return (
    <>
    <header className={`${isScrolled&&'bg-white/95 text-black border-b shadow-sm'} fixed bg-transparent left-0 right-0 top-0 z-[99]  p-5 flex justify-between items-center`}>
      {/**menu--icon */}
      <svg onClick={()=>{handleOpenMenu()}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 cursor-pointer  flex md:hidden">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
        </svg>
    
        <Link href={'/'} className="">
       <div className="flex items-center gap-5 flex-1">
     <div className={`${isScrolled&&'text-black'} font-semibold italic grid place-content-center bg-emerald-500 rounded-lg aspect-square h-12`}>
      K
     </div>
     <h1 className={` tracking-[16px] text-xl font-semibold text-black ${isHomePage&&!isScrolled&&'text-white'} ${isScrolled&&'text-black'} `}>Store</h1>
       </div>
       </Link>
        
      
        <div className="flex gap-2 items-center">
        
     {/**cart--icon */}
          <div className="relative "  onClick={()=>handleOpenCart()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:h-5 md:w-5 cursor-pointer">
            
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          {items.length>0&&<p className={`absolute -right-1 -top-1 aspect-square h-2 rounded-full bg-red-500 `}></p>} 
          </div>
          

        {/**User Icon */}
        <Link href="/login">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 cursor-pointer hidden md:flex">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
        </Link>

       
        
       
    
      
       


      
        </div>
      
    </header>
    </>
    
  )
}

export default Header