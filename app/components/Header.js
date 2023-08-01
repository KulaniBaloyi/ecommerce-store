"use client"
import { useState,useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import useMenu from "../actions/use-menu"
import useCart from "../hooks/use-cart"
import useSearchModal from "../actions/use-search-modal"
import useCartMenu from "../actions/use-cart-menu"



const Header = () => {
  const [isMounted,setIsMounted]= useState(false)
  const openCart = useCartMenu((state)=>state.onOpen)  
  const items = useCart((state)=>state.items)
    const openMenu = useMenu((state)=>state.onOpen)
    const openSearchModal = useSearchModal((state)=>state.onOpen)
   
    
    const handleSignIn = async () => {
      try {
        await googleSignIn();
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleSignOut = async () => {
      try {
        await logOut();
      } catch (error) {
        console.log(error);
      }
    };
  
    

    const handleOpenCart=()=>{ 
      openCart()
    }

    const handleOpenSearchModal=()=>{
      openSearchModal()
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
    
    <header className=" shadow-sm shadow-neutral-200 p-5 flex justify-between items-center relative">
    
      <svg onClick={()=>{handleOpenMenu()}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer flex md:hidden">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
        </svg>
       <div className="flex items-center gap-2">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
</svg>

        <Link href={'/'}><h1 className=" sub-heading text-xl font-semibold">Store</h1></Link>
       
       </div>
        
     

        
        {/**search icon large screen */}
        <div className="flex gap-2 items-center">
          <div onClick={()=>handleOpenSearchModal()} className="border rounded-md p-2 px-5 hidden place-content-center md:grid">
            <button className="cursor-pointer" >Search...</button>
          </div>
          {/**search icon small screen */}
          <svg onClick={()=>handleOpenSearchModal()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="md:hidden w-4 h-4 cursor-pointer">
         <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
          </svg>

        {/**cart icon */}
          <div className="relative"  onClick={()=>handleOpenCart()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:h-5 md:w-5 cursor-pointer">
            
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          {items.length>0&&<p className={`absolute -right-1 -top-1 aspect-square h-2 rounded-full bg-red-500 `}></p>} 
          </div>
          

        {/**User Icon */}

       <svg onClick={()=>handleSignIn()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer hidden md:flex">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
        
       
    
      
       


      
        </div>
      
    </header>
    </>
    
  )
}

export default Header