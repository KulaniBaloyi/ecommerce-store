"use client"

import { useRouter } from "next/navigation"


const ShopAllButton = () => {
    const route = useRouter()
  return (
    <button onClick={()=>route.push("/collections/shop")} className='mb-6 text-base leading-[1.42857] underline cursor-pointer hover:opacity-90 duration-100 transition-all'>Shop all</button>
  )
}

export default ShopAllButton