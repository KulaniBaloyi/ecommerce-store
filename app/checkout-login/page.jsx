import Link from "next/link"


const ChechoutLogin = () => {
   
  return (
    <div className="min-h-screen grid place-content-center w-[90%] mx-auto">
        <div className="flex flex-col sub-heading gap-5 flex-wrap max-w-[500px]">
            <h1 className="text-3xl font-bold">Checkout</h1>
            <p>Login or Register to avail the benefits only for members or you can also continue without creating an account.</p>
            <button className="self-start p-2 px-4 rounded-md bg-black text-white text-lg">
                Login/Register
            </button>
            <Link className=" border-b border-black uppercase self-start " href={'/'}>Checkout as guest</Link>
        </div>
    </div>
  )
}

export default ChechoutLogin