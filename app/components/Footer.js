import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer>
      <section className="grid lg:gap-5 grid-cols-1 lg:grid-cols-5 bg-amber-100 w-full min-h-[90vh] p-16 px-10">
        <div className="lg:col-span-3  h-full lg:flex items-center lg:p-5">
          <div className="flex flex-col gap-10 items-start">
            <h2 className="tracking-[5px] text-2xl font-semibold">Shop the latest styles</h2>
            <Link href='/product' className="cursor-pointer flex items-center gap-5 border-b border-black pb-2 hover:pl-5 transition-all duration-500">
            <h2 className="">Explore Products</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>

            </Link>
           
          </div>
        </div>
        <div className="lg:col-span-2 rounded-md order-first lg:order-last max-h-[500px] relative overflow-hidden h-full w-full aspect-square lg:aspect-[9/16]">
          <Image src={'/pexels-anete-lusina-5240511.jpg'} alt='image-footer' className="object-cover" fill/>
        </div>
      </section>
       <div className="border-t p-5 flex">Footer</div>
    </footer>
   
  )
}

export default Footer