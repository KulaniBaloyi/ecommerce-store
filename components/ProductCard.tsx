"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import Image from "next/image";
import Link from "next/link";
import HeartEmptyIcon from "./ui/icons/heart-empty-icon";
import HeartFillIcon from "./ui/icons/heart-fill-icon";

type PropType = {
  data:any
 } 
const ProductCard: React.FC<PropType> = (props) => {
  const [isLiked,setIsLiked]= useState(false)

  const route = useRouter()
  const toggleLike: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
setIsLiked(()=>!isLiked)

  };

  const handleClick =(e:any)=>{
    e.stopPropagation()
    route.push(`/product/${id}`)

  }
const {data}= props
const {name,price,images,color,size,id}= data

  
  return (
   
       <div onClick={handleClick} className="w-[180px] md:w-[250px] lg:w-[350px] truncate flex-shrink-0 flex-grow-0 bg-white min-w-0 cursor-pointer ">
      
      <div className="group  grid relative place-content-center border aspect-[12/14] lg:aspect-[1440/1800] w-full">
        <Image fill src={images[0].url} className="object-cover" alt={name}/>
        <button onClick={toggleLike}  className="absolute rounded-full aspect-square h-5 lg:h-8 grid place-content-center top-2 right-2 lg:right-3 lg:top-3">
        {isLiked?<HeartFillIcon/>:<HeartEmptyIcon/>}
  
        </button>
        <p  className=" bg-white/70 border p-2 py-3 text-xs grid place-content-center absolute uppercase h-2 lg:h4 rounded-full aspect-square top-2 left-2 lg:left-3 lg:top-3">
      New
  
        </p>
  
      </div>
      <div className="p-1 lg:p-2 flex flex-col gap-1 ">
        
        <p className="title capitalize flex truncate">{name}</p>
        <p className="title text-[#8d8d8d] ">{color.name}</p>
        <p className="title text-[#8d8d8d]">R {price} ZAR</p>
      </div>
    </div>
  
   
  );
};

export default ProductCard;