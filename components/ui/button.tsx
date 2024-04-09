"use client"

import { useRouter } from "next/navigation"

type Props = {
    text: String
    redirect: String
    bgColor?: String
}


const Button = ({text,redirect,bgColor}:Props)=>{
    const route = useRouter()
    return(
        <button onClick={()=>route.push(`${redirect}`)}  className={`${bgColor=="red"&&"bg-[#e5202b] text-white"} ${bgColor=="black"&&"bg-[#27292a] text-white"} ${bgColor=="white"&&"bg-white text-black"} cursor-pointer fancy__button hover:opacity-90 duration-150 transition-all self-center w-full py-3 px-10 uppercase text-[1rem] text-center leading-[1.5] font-bold `}>{text}</button>)
}

export default Button