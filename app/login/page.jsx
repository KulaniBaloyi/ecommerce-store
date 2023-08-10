import Link from "next/link"


const Page = () => {
  return (
    <div className="min-h-[100dvh] grid place-content-center my-20">
    <section className="max-w-[24rem] flex flex-col gap-2">
        <h2 className="font-semibold tracking-[5px] text-xl">Welcome back</h2>
        <p className="my-5 text-center">Sign in to access an enhanced shopping experience world I have created. It comes with perks I will later in make up</p>
        <div className="border w-full aspect-[16/2] rounded-md"></div>
        <div className="border w-full aspect-[16/2] rounded-md"></div>
        <span className="my-5">Not a member? <Link href={"/signup"} className="pb-1 border-b border-black font-semibold">Sign up</Link></span>
       
        <button className="w-full aspect-[16/2] rounded-md bg-neutral-900 text-white grid place-content-center">Enter</button>
       

    </section>
</div>
  )
}

export default Page