import Image from "next/image"
import CustomerCard from "./CustomerCard"

const CustomerReviews = () => {
  return (
    <section className="w-[90%] m-auto my-10">
        <h1  className='text-center font-semibold text-4xl leading-[1.3em] text-[#111111] mb-10'>Customer reviews</h1>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-5 lg:gap-10 mt-32" >
           <CustomerCard/>
            <div className="border fruits text-white relative rounded-lg w-full aspect-video lg:h-[120%] self-end flex flex-col justify-around p-10 shadow-sm shadow-gray-200">
              <Image fill alt="fruits" className="object-cover -z-10" src={"/fruit.jpg"}/>
              <p className="bg-neutral-900/60 absolute inset-0 z-20"></p>
                <div className="flex flex-col gap-2 z-30">
                <h2 className="text-4xl leading-[1.3em] font-bold text-center break-words">Deal Of The Day 15% Off On All Vegetables!</h2>
                    <p className="text-center">I am text block. Click edit button to change this tex em ips.</p>
                </div>
                <button className="z-30 self-center uppercase px-6 py-4 text-white rounded-md bg-[#8bc34a] text-sm font-semibold leading-[1em]">Shop now</button>
                
            </div>
           <CustomerCard/>
        </div>
    </section>
  )
}

export default CustomerReviews