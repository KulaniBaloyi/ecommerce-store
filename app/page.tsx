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
 //const user = await createUser({name:"Kulani Baloyi",email:"kulani17.kb@gmail.com"})
 //const order = await createOrder("kulani17.kb@gmail.com",[{name:"dog",price:7000, quantity:4},{name:"coca cola",price:16.5, quantity:12}])
 //const getOrders= await getOrdersByEmail("kulani17.kb@gmail.com")
//console.log("orders by email:  ", getOrders)
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
