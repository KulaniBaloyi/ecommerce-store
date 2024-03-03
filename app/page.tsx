import Image from "next/image";
import Card from "./components/Card";
import Landing from "./components/Landing";
import RecentVideos from "./components/RecentVideos";

export default function Home() {
  return (
    <main className=" py-10  min-h-screen">
      <Landing/>
      <section className="section__heading">
      <div className=" grid grid-cols-2  lg:grid-cols-4 gap-16 px-10 py-20 mx-auto ">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      
      </div>
      <button className=' bg-[#e5202b] text-white border fancy__button py-4 px-10 uppercase text-lg text-center leading-[1.5] font-bold '>Browse All products</button>
      
      

      </section>
      <RecentVideos/>
      
      
     
    </main>
  );
}
