import StoreItem from './StoreItem'
import { prisma } from '@/lib/db'

const Featured = async() => {
  //fetch all products where featured is true limit result to 8
    const products = await prisma.product.findMany({
      include:{
        brand:true
      }
    })
  return (
    <div className='p-5'>
        <h2 className='font-semi-bold sub-heading text-3xl'>Featured Products</h2>
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-5 h-full w-full my-5">
             {products&&products.map((prod)=>{
                return  <StoreItem key={prod.id} {...prod}/>
            })} 

        </section>
        
    </div>
  )
}

export default Featured