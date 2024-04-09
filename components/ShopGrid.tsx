
import axios from "axios"
import Link from "next/link"

const ShopGrid = async() => {

    const leggings = await axios.get("http://localhost:3000/api/1ede9d0b-58c3-46b9-b01c-7fc205cbaaa4/categories/fadf72a2-2b3b-41ca-9bb5-681f27970996")
    const sportsbras = await axios.get("http://localhost:3000/api/1ede9d0b-58c3-46b9-b01c-7fc205cbaaa4/categories/d8549320-c72c-46a1-ad2e-7a60502bdee3")
    const tshirtsandtops = await axios.get("http://localhost:3000/api/1ede9d0b-58c3-46b9-b01c-7fc205cbaaa4/categories/702bec42-65ac-41be-9f4f-d0dfb82caa94")

  return (
   <section className='py-10 bg-white  gap-2 grid grid-cols-2 grid-rows-2 text-white'>
    <div style={{backgroundImage:`url(${leggings.data.billboard.imageUrl})`}} className='bg-cover relative  w-full col-span-2 aspect-video lg:aspect-square lg:col-span-1 lg:row-span-2 flex items-center p-10'>
        
        <div className='flex flex-col items-start gap-5 '>
            <h2 className="text-3xl uppercase leading-[1.1] font-[700]">{leggings.data.name}</h2>
            <Link href={'/collections/leggings'} className="grid place-content-center uppercase px-6 h-10 fancy__button leading-[1.2] tracking-[-.03em] font-[500] text-sm bg-white text-black">shop now</Link>
        </div>
    </div>
    <div  style={{backgroundImage:`url(${sportsbras.data.billboard.imageUrl})`}} className='bg-cover col-span-2 lg:col-span-1 bg-gradient-to-r from-sky-700 to-cyan-500  aspect-video lg:aspect-auto flex items-center p-10'>
        <div className='flex flex-col items-start gap-5'>
            <h2 className="text-3xl uppercase leading-[1.1] font-[700]">{sportsbras.data.name}</h2>
            <Link href={'/collections/sportsbras'} className="grid place-content-center uppercase  px-6 h-10 fancy__button leading-[1.2] tracking-[-.03em] font-[500] text-sm bg-white text-black">shop now</Link>
        </div>
    </div>
    <div  style={{backgroundImage:`url(${tshirtsandtops.data.billboard.imageUrl})`}} className='bg-cover col-span-2 lg:col-span-1 bg-gradient-to-r from-sky-700 to-cyan-500  aspect-video lg:aspect-auto flex items-center p-10'>
        <div className='flex flex-col items-start gap-5'>
            <h2 className="text-3xl uppercase leading-[1.1] font-[700]">{tshirtsandtops.data.name}</h2>
            <Link href={'/collections/tshirtsandtops'} className="grid place-content-center uppercase  px-6 h-10 fancy__button leading-[1.2] tracking-[-.03em] font-[500] text-sm bg-white text-black">shop now</Link>
        </div>
    </div>
   </section>
  )
}

export default ShopGrid