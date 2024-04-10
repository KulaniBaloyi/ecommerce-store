"use client"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className=" border-t border-[#e5e5e5] lg:p-10 p-5  grid grid-cols-1 lg:grid-cols-4">
      <section className="lg:items-end gap-5 p-1 lg:p-5 lg:order-last lg:col-span-1 flex flex-col">
          <h2 className="uppercase font-[700] text-sm leading-[1.2]">SIGN UP FOR OUR NEWSLETTER</h2>
          <div className="border-[#e5e5e5] border w-full lg:max-w-52 min-w-24 flex">
            <input type="email" className="flex-1 py-2 px-3 active:outline-none border-none w-full h-full focus:outline-none leading-[1.4] focus:border-none active:border-none"/>
            <p className="h-full aspect-square bg-black text-white text-xl grid place-content-center">&gt;</p>
          </div>
          
          <Link href="/" className="order-first lg:order-none">   <h1 className="heading">E/S</h1></Link>
      </section>
      <section className="flex flex-wrap gap-2 lg:gap-5 lg:order-1 py-1.5 px-3 lg:col-span-3">
      <div className=" min-w-14 max-w-xs ">
        <Link href="/">  <h2 className="uppercase font-[700] text-sm leading-[1.2] mb-2">Ecomerce WebSite</h2></Link>
      
        <ul className="flex flex-col gap-2 text-[#8d8d8d] text-xs py-1">
          <li>About us</li>
          <li>Careers</li>
          <li>Sitemap</li>
        </ul>
        </div>
        <div className=" min-w-14">
        <h2 className="uppercase font-[700] text-sm leading-[1.2] mb-2">Services</h2>
        <ul className="flex flex-col gap-2 text-[#8d8d8d] text-xs py-1">
          <li>Size Guide</li>
          <li>Contact us</li>
          <li>Shipping & delivery</li>
          <li>Returns & refunds</li>
          <li>Track your order</li>
          <li>Help centre</li>
          <li>Help centre</li>
          <li>GTC</li>
          <li>Privacy policy</li>
        </ul>
        </div>
        <div className="min-w-14">
        <h2 className="uppercase font-[700] text-sm leading-[1.2] mb-2">Top categories</h2>
        <ul className="flex flex-col gap-2 text-[#8d8d8d] text-xs py-1">
          <li>Bottoms & Leggings</li>
          <li>Sports Bras</li>
          <li>Hoodies & Jackets</li>
          <li>T-shirts & Tops</li>
        </ul>
        </div>
        <div className="min-w-14">
        <h2 className="uppercase font-[700] text-sm leading-[1.2] mb-2">Rewards</h2>
        <ul className="flex flex-col gap-2 text-[#8d8d8d] text-xs py-1">
          <li>Loyalty Club</li>
        </ul>
        </div>
        
      </section>
    
    </footer>
  )
}

export default Footer