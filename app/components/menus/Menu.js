'use client'
import { useEffect, useState } from "react"
import useMenu from "@/app/actions/use-menu"
const Menu = () => {

    const closeMenu = useMenu((state)=>state.onClose)
    const [isMounted,setIsMounted] = useState(false)
    const menu = useMenu((state)=>state.isOpen)
    const handleClose =()=>{
        closeMenu()
      }
    
useEffect(()=>{
    setIsMounted(true)
},[])

useEffect(() => {
  if (typeof document !== 'undefined') {
    const bodyElement = document.body;
    if (menu) {
      bodyElement.classList.add('cartMenu-open');
    } else {
      bodyElement.classList.remove('cartMenu-open');
    }
  }
}, [menu])

if(!isMounted)return null
if(!menu) return null
  
    return (
        <div className="fixed inset-0 bg-neutral-950/90 backdrop-blur-md flex md:hidden justify-end z-[999]">
            <div className="border-r shadow-sm shadow-neutral-800 bg-white w-full sm:w-3/5  flex flex-col">
                <header className=" px-5 h-[10%] flex justify-between items-center ">
                    
           

                    <h1 className="text-3xl italic font-semibold">Menu</h1>
                    <svg onClick={()=>handleClose()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 cursor-pointer">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>

                </header>
               
                <main className=" h-[90%] overflow-y-auto flex flex-col gap-10 relative p-5 ">
                    <p>Place menu items here...</p>
                </main>
              
            </div>
        </div>
      )
}

export default Menu