'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import useMenu from "@/app/actions/use-menu"
const Menu = () => {

    const closeMenu = useMenu((state)=>state.onClose)
    const [isMounted,setIsMounted] = useState(false)
    const router = useRouter()
    const handleClick = ()=>{
      closeMenu()
     router.push(`/`)
    }
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
                <header className=" px-5 h-[10%] flex justify-between items-center border-b ">
                    
           

                <div onClick={()=>handleClick()} className="cursor-pointer">
                  <div className="flex items-center gap-2 flex-1 scale-75">
                      <div className={`text-white font-semibold italic grid place-content-center bg-emerald-500 rounded-lg aspect-square h-12`}>
                       K
                      </div>
                  <h1 className={` tracking-[16px] text-xl font-semibold text-black`}>Store</h1>
                </div>
                </div>
      
                    <svg onClick={()=>handleClose()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 cursor-pointer">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>

                </header>
               
                <main className=" h-[75%] overflow-y-auto flex flex-col justify-between relative p-5 ">
                  <ul className="flex flex-col gap-2">
                    <li className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
                      <h2>Store</h2>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>

                    </li>
                    <li className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
                      <h2>Hoodies</h2>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>

                    </li>
                    <li className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
                      <h2>Bags</h2>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>

                    </li>
                    <li className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
                      <h2>T-Shirts</h2>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>

                    </li>
                    <li className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
                      <h2>Shoes</h2>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>

                    </li>
                  </ul>
                    <div className="flex flex-col gap-5">
                      <h2 className="font-semibold">Account</h2>
                      <div className="flex justify-between items-center gap-5">
                    <h2 className="text-sm">Sign in</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>

                  </div>
                    </div>
                </main>
                <footer className=" h-[15%] border-t flex flex-col p-3 gap-4">
                  <h2 className="uppercase text-sm">Delivery</h2>
                  <div className="flex justify-between items-center gap-5">
                    <h2 className="text-xs text-gray-600">Shipping to Midrand</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>

                  </div>
                </footer>
              
            </div>
        </div>
      )
}

export default Menu