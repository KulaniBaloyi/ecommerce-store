
import Featured from './components/Featured'
import Landing from './components/Landing'
import { prisma } from '@/lib/db'

export default async function Home() {
  //const idelete = await prisma.product.deleteMany()
  // const deletedProduct = await prisma.product.deleteMany({
  //   where: { name: "Chuck Taylor All Star Classic" },
  // });

  const proj = await prisma.product.upsert({
    where: { name: "SLIP-ON MULE TRK SHOE" },
    update: {
    },
  
    create: {
      name: "SLIP-ON MULE TRK SHOE",
      price: 1299,
      images: [
        "https://cdn.zando.co.za/p/428654-7499-456824-2-600x.jpg",
        "https://cdn.zando.co.za/p/428654-7479-456824-1-600x.jpg",
        "https://cdn.zando.co.za/p/428654-7499-456824-4-600x.jpg",
       
        
      ],
      category: {
        connectOrCreate: {
          create: {
            name: "Shoes",
          },
          where: {
            name:"Shoes"
          },
        },
      },
      brand: {
        connectOrCreate: {
          create: {
            name: "Vans",
          },
          where:{name:"Vans"}
        },
      },
    },
  })
  
  
  
  return (
    <main className=' flex flex-col gap-10'>
      <Landing/>
      <Featured/>
     
    </main>
  )
}