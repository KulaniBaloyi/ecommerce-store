import Image from "next/image";
import Card from "./components/Card";
import Landing from "./components/Landing";
import RecentVideos from "./components/RecentVideos";
import { createOrder, getOrdersByEmail, getProducts,getVideos } from "@/ecommerce-store/schemas/lib/sanity-utils";
import { createUser } from "@/ecommerce-store/schemas/lib/sanity-utils";
import Button from "./components/Button";

export default async function Home() {
  const products = await getProducts();
  const bgVideo = await getVideos()
  const cartData = [
    { _id: "9c747825-5774-46f4-aabf-0074968b34d5", quantity: 9 },
    { _id: "a67242ec-3fcc-47a0-a4ec-9d5570e11e0b", quantity: 4 },
  ];

  const order = await createOrder("kulani17@yahoo.com",cartData)

  return (
    <main className="  min-h-screen ">
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
      <RecentVideos/>
      
      </div>
      
      
      
     
    </main>
  );
}
