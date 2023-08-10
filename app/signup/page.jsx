
import Link from "next/link"
const Page = () => {
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
           
            <input type="password" required placeholder="Password" className="peer placeholder-transparent border-0 outline-none active:outline-none h-full w-full pl-4"/>
            <label className="absolute -top-3 text-sky-500 font-semibold duration-500 peer-placeholder-shown:font-normal peer-placeholder-shown:top-3 left-4 text-sm transition-all z-20 peer-placeholder-shown:text-gray-500 ">Password</label>
          </div>
          <div className="border w-full aspect-[16/2] rounded-md relative">
           
            <input type="password" required placeholder="Confirm" className="peer placeholder-transparent border-0 outline-none active:outline-none h-full w-full pl-4"/>
            <label className="absolute -top-3 text-sky-500 font-semibold duration-500 peer-placeholder-shown:font-normal peer-placeholder-shown:top-3 left-4 text-sm transition-all z-20 peer-placeholder-shown:text-gray-500 ">Confirm</label>
          </div>
          <p className="text-xs text-gray-500 my-2">By creating an account, you agree to K Stores Privacy Policy and <span className="border-b cursor-pointer text-black border-black">Terms of Use.</span></p>
          <div className="w-full aspect-[16/2] rounded-md bg-neutral-900 text-white grid place-content-center ">Enter</div>
          <p className="self-center text-xs text-gray-500">Already a member? <Link href={"/login"} className="border-b cursor-pointer text-black border-black">Sign in.</Link></p>
         
  
      </section>
  </div>
    )
  }
  
  export default Page