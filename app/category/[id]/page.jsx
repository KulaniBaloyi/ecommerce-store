import Landing from "@/app/components/Landing"
import { prisma } from "@/lib/db"

import StoreItem from "@/app/components/StoreItem"
const page = async({params}) => {
 const products = await prisma.product.findMany()

  return (
    <div className="min-h-screen  w-[90%] mx-auto py-5 flex flex-col gap-5">
      <Landing text={`Explore the ${params.id} collection`} image={`/${params.id}-bilboard.jpg`}/>
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <h1 className="lg:hidden">Filters</h1>
        <div className="col-span-1 hidden lg:flex flex-col gap-5">
          <div>
          <h2>Price</h2>
          <h2>R2000-R25000</h2>
          </div>
         
          <div>
          <h2>Sizes</h2>
          <div className="flex gap-2 flex-wrap">
            <h4 className="rounded-md border p-2 py-1 text-center">Medium</h4>
            <h4 className="rounded-md border p-2 py-1 text-center">Large</h4>

            <h4 className="rounded-md border p-2 py-1 text-center">Small</h4>
            <h4 className="rounded-md border p-2 py-1 text-center">Extra Small</h4>
            
          </div>
          </div>
          
          <div>
          <h2>Colours</h2>
          <div className="flex gap-2 flex-wrap">
            <h4 className="rounded-md border p-2 py-1 text-center">Blue</h4>
            <h4 className="rounded-md border p-2 py-1 text-center">White</h4>
            <h4 className="rounded-md border p-2 py-1 text-center">Black</h4>
            <h4 className="rounded-md border p-2 py-1 text-center">Red</h4>
            <h4 className="rounded-md border p-2 py-1 text-center">Green</h4>
            
          </div>
          </div>
          
        </div>
        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-5">
          {products&&products.map((i)=>{
            return <StoreItem key={i.id} {...i}/>
          })}
          
         
        </div>
      </section>
    </div>
  )
}

export default page