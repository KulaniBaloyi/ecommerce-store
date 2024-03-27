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
import NewReleases from "../components/NewReleases";
import Banner from "../components/Banner";
import ShopGrid from "../components/ShopGrid";
import SocialMedia from "../components/SocialMedia";


export default async function Home() {
  const products = await getProducts();
  const bgVideo = await getVideos()
  
  return (
    <main className="">
      {bgVideo.map((bgV)=>
      <Landing key={bgV.name} {...bgV}/>

      )}
     
      <div className="">
      
      <NewReleases/>
     <Banner/>
     <NewReleases/>
     <ShopGrid/>
     <NewReleases/>
     <SocialMedia/>
     
      
      </div>
      
      
      
     
    </main>
  );
}
