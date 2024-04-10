
import Banner from "@/components/Banner";
import Landing from "@/components/Landing";
import ProductCarousel from "@/components/ProductsCarousel";
import ShopGrid from "@/components/ShopGrid";
import getProducts from "@/actions/get-products";

export default async function Home () {
  
  const leggings = await getProducts({categoryId:process.env.CATEGORY_LEGGINGS})

  const sportsBras = await getProducts({categoryId:process.env.CATEGORY_SPORTSBRA})
  const tshirtsandtops = await getProducts({categoryId:process.env.CATEGORY_TSHIRTANDTOPS})

 
  return (
   
<main className="mt-16 min-h-screen">
  <Landing/>

    <ProductCarousel data={tshirtsandtops} suggested={false}/>
    <Banner/>
    <ProductCarousel data={leggings} suggested={false}/>
    <ShopGrid/>
    <ProductCarousel data={sportsBras} suggested={false}/>
  </main>
  );
}
