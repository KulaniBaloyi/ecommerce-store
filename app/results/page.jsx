"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import StoreItem from "../components/StoreItem";
const Search = () => {
   
    const [isMounted,setIsMounted] =useState(false)
    const [newQuery,setNewQuery]= useState()
    const [results,setResults] =useState()
    const [displayQuery,setDisplayQuery]= useState()
const search = useSearchParams();
  const searchQuery = search ? search.get("search_query") : null;
  const router = useRouter();

  const encodedSearchQuery = encodeURI(searchQuery)
  if (!encodedSearchQuery) {
    router.push("/")

    //make an async call to fetch results that match include on either name|description|brand|category
  }
  const fetchResults = async () => {
    try {
      const res = await fetch(`https://ecommerce-store-kb.vercel.app/api/search?search_query=${searchQuery}`);
      if (res.ok) {
        const data = await res.json(); // Parse the response to JSON
        setResults(data)
       
      }
    } catch (err) {
      console.error(err);
    }
  }
  const onSearch = (e) => {
    e.preventDefault();
    if (typeof searchQuery !== "string") return
    fetchNewQuery()
    
  }

  const fetchNewQuery = async ()=>{
    try {
      const res = await fetch(`https://ecommerce-store-kb.vercel.app/api/search?search_query=${newQuery}`);
      if (res.ok) {
        const data = await res.json(); // Parse the response to JSON
        setResults(data)
        setDisplayQuery(newQuery)
       
      }
    } catch (err) {
      console.error(err);
    }

  }

  

  useEffect(()=>{
    setIsMounted(true)
    fetchResults()
    setDisplayQuery(searchQuery)
    setNewQuery()

  },[searchQuery])

  
  if(!isMounted) return null
  

  return (
    <div className="min-h-screen w-[90%] mx-auto flex flex-col gap-5 p-5 py-10 items-center">
        <form onSubmit={onSearch} className="border px-5 rounded-lg w-full md:w-3/5 lg:w-1/2 h-16 mx-auto flex items-center justify-between">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
        </svg>
        <input
        type='text'
        onChange={(e)=>setNewQuery(e.target.value)}
        value={newQuery}        
          className="w-full h-full border-0 focus:border-0 outline-none focus:outline-0 px-5"/>
        <svg onClick={()=>setNewQuery()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 cursor-pointer hover:text-red-500">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>


        </form>
        <h1 className="font-bold text-3xl">{displayQuery}</h1>
        {results&&<h2 className="text-lg text-[#6e6d7a]">{results?.length} search results</h2>}
        
        <div className="flex items-center">
            <h3 className="font-semibold text-[#6e6d7a]">Related: </h3>
            <div className="flex gap-3 items-center text-teal-500">
                <h3>Adidas</h3>
                <h3>Sports</h3>
                <h3>Underwear</h3>
                <h3>Under Armour</h3>
            </div>
        </div>
        <div className="grid grid-cols-1 w-full gap-10 my-5  md:grid-cols-2 lg:grid-cols-3">
                    {results&&results.map((item)=>{
                        return <StoreItem key={item.id} {...item}/>
                     })}
                    
               
        </div>
    </div>
  )
}

export default Search