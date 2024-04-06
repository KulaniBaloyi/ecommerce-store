
import Landing from "../components/Landing";

import {getVideos } from "@/ecommerce-store/schemas/lib/sanity-utils";


import Banner from "../components/Banner";
import ShopGrid from "../components/ShopGrid";
import SocialMedia from "../components/SocialMedia";
import ProductCarousel from "../components/ProductCarousel";
import { getProducts } from "../lib/actions/actions";

export default async function Home() {
  const bgVideo = await getVideos()
  const leggings = await getProducts({categoryId:"fadf72a2-2b3b-41ca-9bb5-681f27970996"})
  const sportsBras = await getProducts({categoryId:"d8549320-c72c-46a1-ad2e-7a60502bdee3"})
  const tshirtsandtops = await getProducts({categoryId:"702bec42-65ac-41be-9f4f-d0dfb82caa94"})

  return (
    <main className="">
      {bgVideo.map((bgV)=>
      <Landing key={bgV.name} {...bgV}/>

      )}

      <div className="">
      <ProductCarousel products={leggings}/>
     
     <Banner />
     <ProductCarousel products={sportsBras}/>
     <ShopGrid/>
     <ProductCarousel products={tshirtsandtops} />
    
    <SocialMedia/>
     
      
      </div>
      
      
      
     
    </main>
  );
}
