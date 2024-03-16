"use client"

type Props = {
    text: String
    redirect: String
    bgColor?: String
}

import { useRouter } from "next/navigation"
const Button = ({text,redirect,bgColor}:Props)=>{
    const route = useRouter()
    return(
        <button onClick={()=>route.push(`${redirect}`)}  className={`hover:opacity-90 duration-150 transition-all self-center ${bgColor?'bg-[#27292a]':'bg-[#e5202b]'}  text-white border fancy__button py-3 px-10 uppercase text-[1rem] text-center leading-[1.5] font-bold `}>{text}</button>)
}

export default Button