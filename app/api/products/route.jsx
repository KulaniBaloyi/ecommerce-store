import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"


export async function GET(){
    try{
        const products = await prisma.product.findMany()
        return NextResponse.json(products)
    }
    catch(err){
        console.error(err)
    }
    
   
}
 

 