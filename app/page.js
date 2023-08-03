
import Featured from './components/Featured'
import Landing from './components/Landing'
import { prisma } from '@/lib/db'

export default async function Home() {
  const proj = await prisma.product.upsert({
    where: { name: "Nike Free Metcon 5 Sequoia" },
    update: {},
    create: {
      name: "Nike Free Metcon 5 Sequoia",
      price: 2399.95,
      images: [
        "https://res.cloudinary.com/davgj9opq/image/upload/v1691093216/nike-free-metcon5-5-sequoia_rgo5sy.jpg",
        "https://res.cloudinary.com/davgj9opq/image/upload/v1691093216/nike-free-metcon5-1-sequoia_drcas6.jpg",
        "https://res.cloudinary.com/davgj9opq/image/upload/v1691093216/nike-free-metcon5-3-sequoia_or2huz.jpg",
        "https://res.cloudinary.com/davgj9opq/image/upload/v1691093216/nike-free-metcon5-2-sequoia_g2luaj.jpg",
        "https://res.cloudinary.com/davgj9opq/image/upload/v1691093216/nike-free-metcon5-4-sequoia_c5dr6d.jpg",
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
            name: "Nike",
          },
          where:{name:"Nike"}
        },
      },
    },
  })
  
  
  
  return (
    <main className='w-[90%] mx-auto py-5 flex flex-col gap-10'>
      <Landing/>
      <Featured/>
     
    </main>
  )
}