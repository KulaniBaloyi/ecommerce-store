import Image from "next/image";
import Card from "./components/Card";
import Landing from "./components/Landing";

export default function Home() {
  return (
    <main className=" py-10 m-auto  min-h-screen">
      <Landing/>
      <section className="section__heading grid grid-cols-2  lg:grid-cols-4 gap-16 px-10 py-20 mx-auto ">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </section>
    
    </main>
  );
}
