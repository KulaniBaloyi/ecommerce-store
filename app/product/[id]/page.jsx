import AddToCart from "@/app/components/AddToCart"
import Related from "@/app/components/Related"
import { prisma } from "@/lib/db"
import { formatCurrency } from "@/utils/currency-formatter"
import Image from "next/image"

const page = async({params}) => {
  const product = await prisma.product.findUnique({
    where:{id:params.id},
    include:{
      brand:true
    }

  })

  if (product==undefined||null)return <div className="min-h-screen grid place-content-center ">Item doesnt exist</div>
  return (
    <>
    <div className="min-h-screen  text-3xl gap-10 grid grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto py-10">
        <div className="flex flex-col gap-5">
            {/**this will load the first picture */}
        <div className="rounded-md border w-full aspect-square relative">
          {product&&<Image className="object-cover" src={product&&product.images[0]} alt={product&&product.name} priority fill/>}
        </div>
        {/**depending on how many pictures we have i will render an image to show other options */}
       <div className="h-24 flex gap-4 overflow-x-scroll">
       {product&&product.images.map((item,index)=>{
        if(index>1&&index<=4){
          return <div key={index} className="rounded-md border h-full aspect-square relative">
          <Image src={item} alt={index} fill className="object-cover" />
        </div>
          
        }
         
        })}
            
           
        </div>
        </div>
        
        <div className=" flex flex-col gap-5 p-2 text-base md:text-lg lg:text-xl">
            <h1 className="text-3xl font-bold capitalize">{product&&product.name}</h1>
            <h1>{product&&formatCurrency(product.price)}</h1>
            <h2>Size: L</h2>
            <div className="flex gap-5 items-end">
            <h2>Colour :</h2>
            <p className="h-5 md:h-6 lg:h-7 aspect-square rounded-full bg-emerald-500"></p>

            </div>
            {/**add this item to cart or increase its quantity */}
            <AddToCart id={params.id} name={product.name} price={product.price} />
        </div>
    </div>
    <section className="w-[90%] mx-auto">
    <Related/>
    </section>
    
    </>
    
  )
}

export default page