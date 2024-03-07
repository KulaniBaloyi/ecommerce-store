"use client"
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useState, useEffect } from "react";

const Header = () => {
  const [headerRef, setHeaderRef] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

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
        isSticky ? "bg-white" : "" // Custom background color class
      }`}
      ref={setHeaderRef}
    >
      <Link href="/">
        <div className="text-3xl font-semibold">Title + Logo</div>
      </Link>

      <ul className="flex gap-2 items-center">
        <li>Cart + Menu </li>
        <UserButton afterSignOutUrl="/" />
      </ul>
    </header>
  );
};

export default Header;