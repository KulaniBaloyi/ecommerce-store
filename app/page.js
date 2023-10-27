import Banner from "./components/Banner";
import BestSelling from "./components/BestSelling";
import Brands from "./components/Brands";
import Categories from "./components/Categories";
import CustomerReviews from "./components/CustomerReviews";
import Landing from "./components/Landing";
import ShopNow from "./components/ShopNow";
import Trending from "./components/Trending";

export default async function Home() {

  return (
    <main className=''>
      <Landing/>
      <Banner/>
      <BestSelling/>
      <Categories/>
      <ShopNow/>
      <Trending/>
      <CustomerReviews/>
      <Brands/>
      
    </main>
  )
}