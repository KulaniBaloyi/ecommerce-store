"use client"

import Image from "next/image"
import Link from "next/link"

const VideoCard = ({img_src,link,title}) => {

  return (
    <Link href={link} target={'_blank'}  className=''>
         <div className='w-full aspect-video  relative overflow-hidden'>
          <Image fill src={img_src} alt={title} className="object-cover"/>
         </div>
         <h1 className='truncate mt-2 uppercase text-[#27292a] text-[1rem] font-[900] italic leading-[1.2] tracking-[-.02em]'>{title}</h1>
    </Link>
   
  )
}

export default VideoCard