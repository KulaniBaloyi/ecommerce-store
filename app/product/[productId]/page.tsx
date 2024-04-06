
import AddToCart from "@/app/components/AddToCart"
import HeartIconEmpty from "@/app/components/heart-icon-empty"
import { getProductDetails } from "@/app/lib/actions/actions"
import { Heart, LockKeyhole, Star, Truck, Undo2 } from "lucide-react"
import Image from "next/image"
 interface ProductPageProps {
  params:{
    productId:string
  }
 }

const ProductDetails:React.FC<ProductPageProps> = async ({ params}) => {
  const details = await getProductDetails(params.productId)
  const {images,name,category,price,id,color,size} = details
  console.log("details: ",details)
  const data = {
    id:id,
    image:images[0].url,
    name:name,
    price:price,
    category:category.name,
    size:size.value,
    color:color.value,
    quantity:1

  }


  return (
    <>
    <div className=" grid grid-cols-1 mx-auto lg:grid-cols-7  mb-10 bg-white pt-20 gap-6 md:px-5 lg:px-10 pb-20">
      <div className='hidden col-span-5  md:grid grid-cols-6 grid-rows-3 gap-5 '>
     
        <div className=" col-span-3  w-full aspect-[12/14] lg:aspect-[1440/1800] relative">
          <Image fill src={images[0].url} className="object-cover" alt={name}/>
        </div>
        <div className="col-span-3  w-full h-full aspect-[12/14] lg:aspect-[1440/1800] relative">
          <Image fill src={images[1].url} className="object-cover" alt={name}/>
        </div>
        <div className="col-span-6 w-full h-full row-span-2 relative">
          <Image fill src={images[2].url} className="object-cover" alt={name}/>
        </div>
        <div className="col-span-3 w-full aspect-[12/14] lg:aspect-[1440/1800] relative">
          <Image fill src={images[3].url} className="object-cover" alt={name}/>
        </div>
      
        <div className="col-span-3 w-full aspect-[12/14] lg:aspect-[1440/1800] relative">
          <Image fill src={images[4].url} className="object-cover" alt={name}/>
        </div>

      </div>
      {/**image for mobile */}
      <div className="w-full h-[450px] md:hidden relative">
        <Image src={images[0].url} fill alt={name} className="object-cover"/>
      </div>
      {/**side part */}
      <div className=' col-span-2 flex flex-col lg:max-w-md'>
        <div className="relative h-6 mb-2">
          <p className="absolute left-0 top-0 bottom-0 w-1 bg-black"></p>
          <h2 className="uppercase font-[500] text-xs pl-2 py-1 ">new</h2>
        </div>
        
        <p className="text-gray-500 text-xs uppercase mb-4">{category.name}</p>
        <p className="flex-wrap uppercase font-[700] tracking-[-.03em] leading-[1.2] text-[1.5em] mb-6">{name}</p>
        <div className="flex flex-col gap-2 ">
          <div className="hidden justify-between text-xs text-gray-500">
            <p>select size</p>
            <p>size guide</p>
          </div>
          <div className="hidden flex-wrap gap-2 h-[50px] font-[500]">
            <button className="hover:text-[#d0d0d0] hover:bg-[#f3f3f3] disabled:opacity-65 disabled:text-[#8d8d8d] disabled:bg-transparent border-[#e0e0e0] border h-full flex-1 uppercase leading-[1.2] tracking-[-.03em] aspect-square grid place-content-center basis-[16.67%]">xs</button>
            <button className="hover:text-[#d0d0d0] hover:bg-[#f3f3f3] disabled:opacity-65 disabled:text-[#8d8d8d] disabled:bg-transparent border-[#e0e0e0] border h-full flex-1  uppercase leading-[1.2] tracking-[-.03em] aspect-square grid place-content-center basis-[16.67%]">s</button>
            <button className="hover:text-[#d0d0d0] hover:bg-[#f3f3f3] disabled:opacity-65 disabled:text-[#8d8d8d] disabled:bg-transparent border-[#e0e0e0] border h-full flex-1 uppercase leading-[1.2] tracking-[-.03em] aspect-square grid place-content-center basis-[16.67%]">m</button>
            <button disabled className="hover:text-[#d0d0d0] disabled:opacity-65 hover:bg-[#f3f3f3] disabled:text-[#8d8d8d] disabled:bg-transparent border-[#e0e0e0] border h-full flex-1  uppercase leading-[1.2] tracking-[-.03em] aspect-square grid place-content-center basis-[16.67%]">l</button>
            <button className="hover:text-[#d0d0d0] disabled:opacity-65 hover:bg-[#f3f3f3] disabled:text-[#8d8d8d] disabled:bg-transparentborder-[#e0e0e0] border h-full flex-1  uppercase leading-[1.2] tracking-[-.03em] aspect-square grid place-content-center basis-[16.67%]">xl</button>
            <button disabled className=" hover:text-[#d0d0d0] disabled:opacity-65 hover:bg-[#f3f3f3] disabled:text-[#8d8d8d] disabled:bg-transparent border-[#e0e0e0] border h-full flex-1  uppercase leading-[1.2] tracking-[-.03em] aspect-square grid place-content-center basis-[16.67%]">xxl</button>
          </div>
          <div className="hidden flex-wrap gap-2 h-[50px] max-w-xs font-[500]">
            <button className="hover:text-[#d0d0d0] hover:bg-[#f3f3f3] disabled:opacity-65 disabled:text-[#8d8d8d] disabled:bg-transparent border-[#e0e0e0] border h-full flex-1 capitalize leading-[1.2] tracking-[-.03em] aspect-square grid place-content-center">Regular/Short</button>
            <button className="hover:text-[#d0d0d0] hover:bg-[#f3f3f3] disabled:opacity-65 disabled:text-[#8d8d8d] disabled:bg-transparent border-[#e0e0e0] border h-full flex-1  capitalize leading-[1.2] tracking-[-.03em] aspect-square grid place-content-center">Long</button>
           
          </div>
          <div className="flex justify-between items-center my-4">
            <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
            <p className="bg-green-600 rounded-full  h-3 aspect-square"></p>
              <p className="text-xs text-gray-500 capitalize">In Stock</p>
            </div>
              <p className="text-sm font-[500] flex gap-1 items-center">
                <Star  strokeWidth={1.5} height={20} width={20} className="text-cyan-500"/>
                3800 S&T points</p>
            </div>
            
            <h2 className="text-[1.5em] font-[500]">R{price} ZAR</h2>
          </div>
         <AddToCart data={data} />
          <button className="w-full fancy__button bg-[#ededed] py-3 fancy__button font-[500] uppercase flex items-center gap-4 justify-center text-black hover:bg-transparent"><p>Add to wishlist</p> <HeartIconEmpty/></button>
          
          <div className="bg-[#e5e5e5]/50 my-5 p-3 ">
          <div className="flex items-center gap-2  mb-5 font-[500]">
            <Truck strokeWidth={1.5} height={25} width={25}/>
            Free shipping over R500 ZAR
          </div>
            <div className="mt-0 flex items-center gap-2 font-[500]">
            <Undo2 strokeWidth={1.5} height={25} width={25}/>
            Easy returns
          </div>
          </div>
        </div>

      </div>
   
    </div>
    </>
  )
}

export const dynamic = "force-dynamic";

export default ProductDetails