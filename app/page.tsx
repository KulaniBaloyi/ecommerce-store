import Image from "next/image";
import Card from "./components/Card";
import Landing from "./components/Landing";
import RecentVideos from "./components/RecentVideos";
import { getProducts } from "@/ecommerce-store/schemas/lib/sanity-utils";
import { createUser } from "@/ecommerce-store/schemas/lib/sanity-utils";

export default async function Home() {
  const products = await getProducts();
 //const user = await createUser({name:"Kulani Baloyi",email:"kulani17.kb@gmail.com"})

  return (
    <main className=" py-10  min-h-screen px-10 ">
      <Landing/>
      <section className="flex flex-col">
      <div className="min-w-full grid grid-cols-2  lg:grid-cols-4 gap-16 py-20 mx-auto ">
        
      { products.map((product)=>( <Card key={product._id} {...product}/>)) }
      
      </div>
      <button className='hover:opacity-90 duration-150 transition-all self-center bg-[#e5202b] text-white border fancy__button py-4 px-10 uppercase text-lg text-center leading-[1.5] font-bold '>Browse All products</button>
      
      

      </section>
      <RecentVideos/>
      
      
     
    </main>
  );
}
