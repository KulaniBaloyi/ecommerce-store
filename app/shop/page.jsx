"use client"
import { usePathname } from 'next/navigation'
import Pagination from '../components/Pagination'

const Shop = () => {
    const pathname = usePathname()
    const newPathName= pathname.replace("/","")
   
  return (
   <div>
    <header className='text-[#777] text-[.92em]'>Home / <span className='capitalize'>{newPathName}</span></header>
    <h1 className='text-[#8bc34a] mb-[1em] font-semibold text-[3.25rem] leading-[1.3em]'>Shop</h1>
    <nav className='flex justify-between'>
        <p className='leading-[1]'>Showing 1–9 of 12 results</p>
        <p className='leading-[1]'>Default sorting</p>
        
    </nav>
    <div className='my-10 grid grid-cols-2 md:grid-cols-3 gap-5 w-full'>
    <div className='w-full aspect-square rounded-md border shadow-sm shadow-gray-200'></div>
    <div className='w-full aspect-square rounded-md border shadow-sm shadow-gray-200'></div>
    <div className='w-full aspect-square rounded-md border shadow-sm shadow-gray-200'></div>
    <div className='w-full aspect-square rounded-md border shadow-sm shadow-gray-200'></div>
    <div className='w-full aspect-square rounded-md border shadow-sm shadow-gray-200'></div>
    <div className='w-full aspect-square rounded-md border shadow-sm shadow-gray-200'></div>
    <div className='w-full aspect-square rounded-md border shadow-sm shadow-gray-200'></div>
    <div className='w-full aspect-square rounded-md border shadow-sm shadow-gray-200'></div>
    <div className='w-full aspect-square rounded-md border shadow-sm shadow-gray-200'></div>
   
        </div>
        <Pagination/>
   </div>
  )
}

export default Shop