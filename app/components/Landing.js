"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Landing = () => {
  const search = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("")
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter()
  search ? search.get("search_query") : "";

  useEffect(()=>{
    setIsMounted(true)
  },[])
  if (!isMounted) return null

  const onSearch = (e) => {
    e.preventDefault();
    if (typeof searchQuery !== "string") return;
    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/results?search_query=${encodedSearchQuery}`);
    setSearchQuery("");
  }

 
  return (
    <div className="relative h-[100dvh] md:aspect-video w-full overflow-hidden flex items-center justify-center">
      <form onSubmit={onSearch} className="border rounded-lg bg-white overflow-hidden p-4 min-h-[2.5rem] z-40 w-4/5 lg:w-3/5 flex gap-2 items-center">
        <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} type={'text'} placeholder="search..." className="flex-1 h-full border-0 outline-none focus:outline-0"/>
        <svg onClick={()=>setSearchQuery("")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>


      </form>
  <video
    autoPlay
    src="https://res.cloudinary.com/davgj9opq/video/upload/v1691094740/beach-video_mbviao.mp4"
    alt="cover"
    loop
    muted
    className="absolute h-full w-full object-cover"
    style={{ top: 0, left: 0 }}
  />
</div>

  )
};

export default Landing;
