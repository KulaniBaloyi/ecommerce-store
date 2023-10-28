import Image from "next/image"

const Header = () => {
  return (
   <header className='p-5 flex justify-between'>
    <ul className='flex gap-10 items-center'>
      <h1 className='w-[150px] h-12 relative'>
        <Image src={"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg"} fill alt={"logo-heading"} className=""/>
      </h1>
      <li>Everything</li>
      <li>Groceries</li>
      <li>Juice</li>
    </ul>
    <ul className='flex items-center gap-10'>
      <li>About</li>
      <li>Contact</li>
      <li className="text-[#8bc34a] flex gap-2 items-center relative">
      <p className="bg-[#8bc34a] h-4 text-black text-xs rounded-full aspect-square grid place-content-center p-1 absolute -right-2 -top-2 z-40">0</p>
        <p>R 0.00</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

      </li>
      <li className="flex items-center relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 relative">
       
  <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
</svg>
</li>
    </ul>
   </header>
  )
}

export default Header