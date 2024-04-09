"use client"

import { useRouter } from "next/navigation"

type PropType = {
  redirectUrl:string
 }


const ShopAllButton: React.FC<PropType> = (props) => {
  const {redirectUrl}= props
    const route = useRouter()
  return (
    <button onClick={()=>route.push(`/collections/${redirectUrl}`)} className='mb-6 text-base leading-[1.42857] underline cursor-pointer hover:opacity-90 duration-100 transition-all'>Shop all</button>
  )
}

export default ShopAllButton