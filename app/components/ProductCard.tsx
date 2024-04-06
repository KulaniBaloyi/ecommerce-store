"use client";

import Image from "next/image";
import Link from "next/link";
import { currencyformatter } from "../utils/currency-formatter";
import { Heart } from "lucide-react";
import HeartIconEmpty from "./heart-icon-empty";



const ProductCard = ({name,color,price,id,images}:any) => {

  
  return (
    <Link href={`/product/${id}`}>
       <div className=" flex-shrink-0 flex-grow-0 bg-white min-w-0 cursor-pointer ">
      
      <div className="group grid relative place-content-center border aspect-[12/14] lg:aspect-[1440/1800] w-[225px] md:w-[275px] lg:w-[440px]">
        <Image fill src={images[0].url} className="object-cover" alt={name}/>
        <div className="absolute rounded-full aspect-square h-8 grid place-content-center right-3 top-3">
        <HeartIconEmpty/>
  
        </div>
  
      </div>
      <div className="p-1 lg:p-2 flex flex-col gap-1">
        <div className="relative uppercase pl-2 text-[12px] font-[700]">
        new
          <p className="absolute bg-emerald-400 left-0 top-0 bottom-0 w-1 "></p>
          </div>
        <p className="h-4  font-[500] text-sm leading-[1.1] capitalize">{name}</p>
        <p className="h-5 text-[#8d8d8d] text-sm leading-[1.1] capitalize">{color.name}</p>
        <p className="h-4 text-[#8d8d8d] text-sm leading-[1.1]">R{price} ZAR</p>
      </div>
    </div>
    </Link>
   
  );
};

export default ProductCard;