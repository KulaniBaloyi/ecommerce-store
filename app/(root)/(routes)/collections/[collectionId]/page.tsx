import Link from "next/link";
import getProducts from "@/actions/get-products"

import HeartEmptyIcon from "@/components/ui/icons/heart-empty-icon";
import Image from "next/image";

interface CollectionPageProps {
  params:{
    collectionId:string
  }
 }
const Collections:React.FC<CollectionPageProps> = async({params}) => {


  const {collectionId}= params
  const products = await getProducts({categoryId:process.env.CATEGORY_SPORTSBRAS})
   
  return (
    <div>
        <section style={{backgroundImage:`url(/Everybody_Seamless_Capsule_HP_Secondary_Banner_Desktop_1300x@2x.webp)`}} className='lg:aspect-[12/4] bg-cover text-white aspect-square w-full relative p-10 bg-gradient-to-r from-orange-600  to-yellow-700'>
     <div className='flex flex-col items-start absolute top-1/2 left-10 -translate-y-1/2'>
            <h2 className="text-4xl uppercase leading-[1.1] font-[700] mb-3">Focus Capsule</h2>
            <p className='mb-8'>someting something something</p>
           
        </div>
   </section>
   <div>
    <div className="flex justify-between m-2">
        <button className="p-3 border uppercase text-sm leading-[0.2]">Filters</button>
        <button className="p-3 border uppercase text-sm leading-[0.2]">sort by</button>
    </div>

   </div>
   <section className="lg:px-[5%]">
    <nav className="flex gap-5 text-sm uppercase pb-2 border-b mb-2 px-2">
        <h2>All</h2>
        <h2>Leggings</h2>
        <h2>Shirts & Tops</h2>
        <h2>Sport Bras</h2>
    </nav>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-10">
      {products.map((prod:any)=>{
         
        return (
        <Link key={prod.id} href={`/product/${prod.id}`}>
        <div className="w-full truncate flex-shrink-0 flex-grow-0 bg-white min-w-0 cursor-pointer ">
      
      <div className="group  grid relative place-content-center border aspect-[12/14] lg:aspect-[1440/1800] w-full">
        <Image fill src={prod.images[0].url} className="object-cover" alt={prod.name}/>
        <button className="absolute rounded-full aspect-square h-5 lg:h-8 grid place-content-center top-2 right-2 lg:right-3 lg:top-3">
       <HeartEmptyIcon/>
  
        </button>
        <p  className=" bg-white/70 border p-2 py-3 text-xs grid place-content-center absolute uppercase h-2 lg:h4 rounded-full aspect-square top-2 left-2 lg:left-3 lg:top-3">
      New
  
        </p>
  
      </div>
      <div className="p-1 lg:p-2 flex flex-col gap-1 ">
        
        <p className="title capitalize flex truncate">{prod.name}</p>
        <p className="title text-[#8d8d8d] ">{prod.color.name}</p>
        <p className="title text-[#8d8d8d]">R {prod.price} ZAR</p>
      </div>
    </div>
        </Link>  
  
        ) 
      })}
       
    </div>
   </section>
    </div>
  )
}

export default Collections