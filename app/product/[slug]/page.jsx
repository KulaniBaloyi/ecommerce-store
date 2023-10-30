import ProductCard from "@/app/components/ProductCard"
import Image from "next/image"

const ProductPage = ({params}) => {
  return (
    <div className="w-[90%] mx-auto">
       <section className="my-20 grid grid-cols-1 lg:grid-cols-2  gap-5 lg:gap-10">
        <div className="w-full aspect-square lg:h-[500px] rounded-sm relative overflow-hidden shadow-sm shadow-gray-300">
          <Image fill priority src={"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/orage-juice-kariz.jpg"} alt={"prduct"} className="object-cover"/>
        </div>
        <div className="w-full aspect-square flex flex-col gap-5">
            <h1 className="text-3xl leading-[1.2em] font-semibold text-[#111111] uppercase">{decodeURI(params.slug)}</h1>
            <p className="text-gray-500 "><span className="text-xl leading-[1.2em] font-bold text-[#111111] uppercase">R 400.00</span> + Free shipping</p>
              <p className="flex break-words text-[#808285]">Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.</p>
              <div className="h-8 flex gap-5">
                <div className="aspect-square h-full bg-white border grid place-content-center">1</div>
                <button className="uppercase px-16 rounded-md bg-[#6a9739] text-white text-sm font-semibold grid place-content-center">Add to cart</button>
                
              </div>
              <p className="pt-2 border-t">Category: <span className="text-[#6a9739]">Juice</span></p>
        </div>

       </section>
       <section className="">
        <nav className="border-t flex gap-5">
            <h2 className="border-t-2 border-[#6a9739] pt-2 font-bold text-[#515151]">Descrpition</h2>
          <h2 className="pt-2 font-bold text-[#515151]">Reviews (0)</h2>
        </nav>
        <p className="text-lg my-5">Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.</p>
      
       </section>
       <section>
        <h1 className="text-[#111111] text-4xl leading-[1.3em] font-bold mt-[1em]">Related Products</h1>
        <div className="grid frid-cols-1 lg:grid-cols-4 gap-5 my-10">
          <ProductCard sale={false} alt={"diabetic cookies"} title={"Diabetic Cookies"} src={"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/diabetic-cookies-400x400.jpg"}/>
         <ProductCard src={"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/cashew-butter-500-400x400.jpg"} alt={"cashiew-butter"} title={"cashew butter"} sale={false}/>
         <ProductCard src={"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/organic-honey-400x400.jpg"} alt={"fresh-organic-honey"} title={"fresh organic honey"} sale={false}/>
         <ProductCard src={"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/eggs-400x400.jpg"} alt={"farm-fresh-eggs"} title={"farm fresh eggs"} sale={false}/>         
        </div>
       </section>

    </div>
  )
}

export default ProductPage