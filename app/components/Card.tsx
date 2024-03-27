"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { currencyformatter } from '../utils/currency-formatter'

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}



const Card = ({ product, updateSignedInUser }: ProductCardProps) => {
  const route = useRouter()
  
  return (
    <div onClick={()=>route.push(`/product/${product._id}`)} className='card hover:scale-105 duration-500 transition-all ease-in-out pt-12 px-6 pb-5 gallery__main bg-white w-full cursor-pointer rounded-md relative overflow-hidden '>
      <div className='w-full  aspect-square grid place-content-center uppercase  italic relative'>
      <Image  src={product.media[0]} alt={product.title} className='object-cover' fill/>   
      </div>
      <div className='p-3'>
        <h1 className='text-[1.125rem] text-[#27292a] font-[900] heading italic uppercase leading-[1.2] tracking-[-0.02em] truncate'>{product.title}</h1>
        <h2 className=' text-[1rem] font-[600] text-cyan-600 heading  uppercase leading-[1.2] tracking-[-0.02em]'> {product.price}</h2>
      </div>
    </div>
  )
}

export default Card