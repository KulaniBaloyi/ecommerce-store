"use client"
import { useState,useEffect } from "react"
import Link from "next/link"
const Page = () => {
  const [isMounted,setIsMounted] = useState(null)
  const [isVisible,setIsVisible] = useState(false)
  const [isVisible_2,setIsVisible_2] = useState(false)

  useEffect(()=>{
    setIsMounted(true)
  })

  if (!isMounted) return
    return (
      <div className="min-h-[100dvh] grid place-content-center my-20">
      <section className="max-w-[24rem] flex flex-col gap-4">
          <h2 className="font-semibold tracking-[5px] text-center">You are only one step away from becoming part of the family</h2>
          <p className="my-5 text-center text-sm">Sign up to access an enhanced shopping experience world I have created. It comes with perks I will later in make up</p>
          <div className="border w-full aspect-[16/2] rounded-md relative">
           
            <input type="text" required placeholder="Name" className="peer placeholder-transparent border-0 outline-none active:outline-none h-full w-full pl-4"/>
            <label className="absolute -top-3 text-sky-500 font-semibold duration-500 peer-placeholder-shown:font-normal peer-placeholder-shown:top-3 left-4 text-sm transition-all z-20 peer-placeholder-shown:text-gray-500 ">Name</label>
          </div>
          <div className="border w-full aspect-[16/2] rounded-md relative">
           
            <input type="text" required placeholder="Surname" className="peer placeholder-transparent border-0 outline-none active:outline-none h-full w-full pl-4"/>
            <label className="absolute -top-3 text-sky-500 font-semibold duration-500 peer-placeholder-shown:font-normal peer-placeholder-shown:top-3 left-4 text-sm transition-all z-20 peer-placeholder-shown:text-gray-500 ">Surname</label>
          </div>
          <div className="border w-full aspect-[16/2] rounded-md relative">
           
            <input type="email" required placeholder="Email" className="peer placeholder-transparent border-0 outline-none active:outline-none h-full w-full pl-4"/>
            <label className="absolute -top-3 text-sky-500 font-semibold duration-500 peer-placeholder-shown:font-normal peer-placeholder-shown:top-3 left-4 text-sm transition-all z-20 peer-placeholder-shown:text-gray-500 ">Email</label>
          </div>
          <div className="border w-full aspect-[16/2] rounded-md relative">
           
            <input  type={`${isVisible?"text":"password"}`} required placeholder="Password" className="peer placeholder-transparent border-0 outline-none active:outline-none h-full w-full pl-4"/>
            <label className="absolute -top-3 text-sky-500 font-semibold duration-500 peer-placeholder-shown:font-normal peer-placeholder-shown:top-3 left-4 text-sm transition-all z-20 peer-placeholder-shown:text-gray-500 ">Password</label>
            <svg onClick={()=>setIsVisible(!isVisible)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="cursor-pointer w-5 h-5 absolute top-1/2 -translate-y-1/2 right-2">
              <path fillRule="evenodd" d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z" clipRule="evenodd" />
            <path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
            </svg>
          </div>
          <div className="border w-full aspect-[16/2] rounded-md relative">
           
            <input type={`${isVisible_2?"text":"password"}`} required placeholder="Confirm" className="peer placeholder-transparent border-0 outline-none active:outline-none h-full w-full pl-4"/>
            <label className="absolute -top-3 text-sky-500 font-semibold duration-500 peer-placeholder-shown:font-normal peer-placeholder-shown:top-3 left-4 text-sm transition-all z-20 peer-placeholder-shown:text-gray-500 ">Confirm</label>
            <svg onClick={()=>setIsVisible_2(!isVisible_2)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="cursor-pointer w-5 h-5 absolute top-1/2 -translate-y-1/2 right-2">
              <path fillRule="evenodd" d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z" clipRule="evenodd" />
            <path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
            </svg>
          </div>
          <p className="text-xs text-gray-500 my-2">By creating an account, you agree to K Stores Privacy Policy and <span className="border-b cursor-pointer text-black border-black">Terms of Use.</span></p>
          <div className="w-full aspect-[16/2] rounded-md bg-neutral-900 text-white grid place-content-center ">Enter</div>
          <p className="self-center text-xs text-gray-500">Already a member? <Link href={"/login"} className="border-b cursor-pointer text-black border-black">Sign in.</Link></p>
         
  
      </section>
  </div>
    )
  }
  
  export default Page