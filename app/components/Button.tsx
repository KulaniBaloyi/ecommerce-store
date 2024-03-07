"use client"

type Props = {
    text: String
    redirect: String
}

import { useRouter } from "next/navigation"
const Button = ({text,redirect}:Props)=>{
    const route = useRouter()
    return(
        <button onClick={()=>route.push(`${redirect}`)}  className='hover:opacity-90 duration-150 transition-all self-center bg-[#e5202b] text-white border fancy__button py-4 px-10 uppercase text-lg text-center leading-[1.5] font-bold '>{text}</button>)
}

export default Button