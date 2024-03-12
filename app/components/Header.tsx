"use client"
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { useRouter} from "next/navigation";

const Header = () => {
  const [headerRef, setHeaderRef] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const route = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const windowScrollY = window.scrollY;
      setIsSticky(windowScrollY > 100); // Change threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[99999999] transition-all duration-500 ease-in-out flex justify-between items-center p-5  ${
        isSticky ? "bg-white " : "" // Custom background color class
      }`}
      ref={setHeaderRef}
    >
      <Link href="/">
        <div className="text-3xl font-semibold">Title + Logo</div>
      </Link>

      <ul className="flex gap-2 items-center">
       <li className="cursor-pointer relative" onClick={()=>route.push("/cart")}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
</li>
        <UserButton afterSignOutUrl="/" />
      </ul>
    </header>
  );
};

export default Header;