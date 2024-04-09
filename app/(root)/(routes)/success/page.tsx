
"use client"
import useCart from "@/hooks/use-cart"

import { useEffect,useState } from "react"

const SuccessPage = () => {
    const [isMounted,setIsMounted]= useState(false)
    const clear = useCart((state)=>state.removeAll)

    useEffect(()=>{
        setIsMounted(true)
        clear()
    },[clear])
    if(!isMounted)return
  return (
    <section className="flex items-center justify-center py-20 min-h-[80dvh]">
    Success page
      </section>
  )
}

export default SuccessPage