import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"


export async function POST(request){
    const {adidas,nike,puma,converse,vans,price} = await request.json()
    const brandFilters = [];
  if (adidas) brandFilters.push('Adidas')
  if (nike) brandFilters.push('Nike')
  if (puma) brandFilters.push('Puma')
  if (converse) brandFilters.push('Converse')
  if (vans) brandFilters.push('Vans')
   
    const res = await prisma.product.findMany({
        where: {
          brand: {
            name:{in: brandFilters}
            
          },
          price: {
            lte: price
          }
        },
       
        include:{
            brand:true
          },
          
      })
    return NextResponse.json(res)
}
 

 