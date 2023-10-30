import Image from "next/image"
import CategoryCard from "./CategoryCard"

const Categories = () => {
  return (
    <section className="px-10 py-32 bg-[#f8f6f3] relative">
        <p className="absolute w-32 h-20 right-1/2 -top-[2rem]">
            <Image src={"/basil-leaf.png"} alt={"basil-leaf"} fill className=""/>
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
           <CategoryCard title={"Farm Fresh Fruits"} overview={"Ut sollicitudin quam vel purus tempus, vel eleifend felis varius."} lemons={true}/>
           <CategoryCard title={"Fresh Vegetables"} overview={"Aliquam porta justo nibh, id laoreet sapien sodales vitae justo"} lettuce={true}/>
           <CategoryCard title={"Organic Legume"} overview={"Phasellus sed urna mattis, viverra libero sed, aliquam est."} peanuts={true}/>
        </div>
    </section>
  )
}

export default Categories