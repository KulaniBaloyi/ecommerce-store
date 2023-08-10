import Link from "next/link"


const Page = () => {
  return (
    <div className="min-h-[100dvh] grid place-content-center my-20">
    <section className="max-w-[24rem] flex flex-col gap-5">
        <h2 className="font-semibold tracking-[5px] text-xl text-center">Welcome back</h2>
       
        <p className="my-5 text-center">Sign in to access an enhanced shopping experience world I have created.</p>
        <div className="border w-full aspect-[16/2] rounded-md relative">
           
           <input type="email" required placeholder="email" className="peer placeholder-transparent border-0 outline-none active:outline-none h-full w-full pl-4"/>
           <label className="absolute -top-3 text-sky-500 font-semibold duration-500 peer-placeholder-shown:font-normal peer-placeholder-shown:top-3 left-4 text-sm transition-all z-20 peer-placeholder-shown:text-gray-500 ">Email</label>
         </div>
        <div className="border w-full aspect-[16/2] rounded-md relative">
           
           <input type="password" required placeholder="Confirm" className="peer placeholder-transparent border-0 outline-none active:outline-none h-full w-full pl-4"/>
           <label className="absolute -top-3 text-sky-500 font-semibold duration-500 peer-placeholder-shown:font-normal peer-placeholder-shown:top-3 left-4 text-sm transition-all z-20 peer-placeholder-shown:text-gray-500 ">Password</label>
         </div>
         <p className="text-gray-500 text-sm self-end">Forgot Password?</p>
        
        <span className=" text-sm">Not a member? <Link href={"/signup"} className="pb-1 border-b border-black font-semibold">Sign up</Link></span>
       
        <button className="w-full aspect-[16/2] rounded-md text-neutral-900 border border-neutral-900 grid place-content-center">Log in</button>
        <div className="w-full aspect-[16/2] rounded-md bg-sky-500 text-white grid place-content-center">Google</div>
        <button className="w-full aspect-[16/2] rounded-md bg-neutral-900 text-white grid place-content-center">Github</button>
    </section>
</div>
  )
}

export default Page