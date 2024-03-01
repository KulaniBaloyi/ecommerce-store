import StoreItem from "./StoreItem"
import { prisma } from "@/lib/db"

const Related = async() => {
  const products = await prisma.product.findMany({
    take:3,
    include:{
      brand:true
    }
  }) 
  return (
    <div className=' p-2'>
    <h2 className='font-sem-bold text-3xl'>Related Products</h2>
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 h-full w-full my-5">
      {products&&products.map((p)=>{
        return <StoreItem key={p.id} {...p}/>
      })}
    
    </section>
    
</div>
  )
}

export default Related