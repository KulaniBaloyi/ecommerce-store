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
  };

 
  return (
    <div className=" relative aspect-square md:aspect-video w-full overflow-hidden grid place-content-center">
       <p className="absolute z-40 inset-0 bg-neutral-950/40"></p>
      <section className="-mt-20 absolute top-1/2 left-1/2 -translate-x-1/2 gap-5 -translate-y-1/2 w-1/2 z-[99] flex flex-col flex-wrap">
        <p className="text-white text-3xl font-semibold ">
        The best free stocks videos shared by the [K] Store community.
        </p>
       
        <form onSubmit={onSearch} className="bg-white overflow-hidden rounded-lg w-full h-12 flex items-center">
          <input value={searchQuery}   onChange={(e) => setSearchQuery(e.target.value)} className="text-gray-600 h-full w-full outline-0 active:outline-0 focus:outline-none pl-5 text-lg" placeholder="Search for products..."/>
          <svg onClick={()=>setSearchQuery("")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-5 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>

        </form>
      </section>
        <video autoPlay src="https://res.cloudinary.com/davgj9opq/video/upload/v1691094740/beach-video_mbviao.mp4" alt="cover" loop muted className="object-cover w-full h-full" priority/>
    </div>
  )
};

export default Landing;
