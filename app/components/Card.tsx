"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { currencyformatter } from '../utils/currency-formatter'

type Product = {
  name: string;
  price: number;
  slug: {
    current: string;
  };
  image: { asset: { url: string; }; };
}


const Card = ({name,price,image,slug}:Product) => {
  const route = useRouter()
  console.log(image)
  return (
    <div onClick={()=>route.push(`/product/${slug.current}`)} className='card hover:scale-105 duration-500 transition-all ease-in-out pt-12 px-6 pb-5 gallery__main bg-white w-full cursor-pointer rounded-md relative overflow-hidden '>
      <div className='  aspect-square grid place-content-center uppercase  italic relative'>
        {image&&<Image src={`${image}`} alt={name} className='object-cover' fill/>  }     
      </div>
      <div className='p-3'>
        <h1 className='text-[1.375rem] text-[#27292a] font-[900] heading italic uppercase leading-[1.2] tracking-[-0.02em]'>{name}</h1>
        <h2 className=' text-[1rem] font-[600] text-cyan-600 heading  uppercase leading-[1.2] tracking-[-0.02em]'> {price}</h2>
      </div>
    </div>
  )
}

export default Card