import Image from "next/image";
import Card from "../components/Card";
import Landing from "../components/Landing";
import RecentVideos from "../components/RecentVideos";
import { createOrder, getOrdersByEmail, getProducts,getVideos } from "@/ecommerce-store/schemas/lib/sanity-utils";
import { createUser } from "@/ecommerce-store/schemas/lib/sanity-utils";
import Button from "../components/Button";
import { fullfillOrder } from "@/ecommerce-store/schemas/lib/sanity-utils";
import { updateOrderPaymentState } from "@/ecommerce-store/schemas/lib/sanity-utils";
import Collections from "../components/Collections";
import ProductList from "../components/ProductList";


export default async function Home() {
  const products = await getProducts();
  const bgVideo = await getVideos()
  
  return (
    <main className="">
      {bgVideo.map((bgV)=>
      <Landing key={bgV.name} {...bgV}/>

      )}
     
      <div className="px-10">
      <section className="flex flex-col">
      <div className="min-w-full grid grid-cols-2  lg:grid-cols-4 gap-16 py-20 mx-auto ">
        
      { products.map((product)=>( <Card key={product._id} {...product}/>)) }
      
      </div>
      <Button redirect={"/collections/all"} text={"browse all products"}/>
      
      

      </section>
      <Image src="/banner.png" alt="banner" width={2000} height={1000} className="w-screen" />
      <Collections />
      <ProductList />
      <RecentVideos/>
      
      </div>
      
      
      
     
    </main>
  );
}