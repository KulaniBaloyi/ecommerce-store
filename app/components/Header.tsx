"use client"
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const Header = () => {

  return (
    <header className='flex justify-between items-center mx-5 m-auto mt-5'>
      <Link href={"/"}>
      <div   className='text-3xl font-semibold'>Title + Logo</div>
      </Link>
      
      <ul className='flex gap-2 items-center'>
        <li>Cart + Menu </li>
        <UserButton afterSignOutUrl='/'/>
      </ul>
    </header>
  )
}

export default Header