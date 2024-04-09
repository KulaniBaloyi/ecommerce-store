import Image from "next/image"
import getProduct from "@/actions/get-product"
import getProducts from "@/actions/get-products"
import { Star,Truck,Undo2 } from "lucide-react"

import AddToCart from "@/components/ui/add-to-cart-button"
import HeartEmptyIcon from "@/components/ui/icons/heart-empty-icon"
import ProductCarousel from "@/components/ProductsCarousel"
interface ProductPageProps {
    params:{
      productId:string
    }
   }
const ProductPage:React.FC<ProductPageProps> = async({params}) => {
    //fetch product by ID
const product = await getProduct(params.productId)
//The logic for related items is just fetch products within the same category
const suggestedProducts = await getProducts({ 
    categoryId: product?.category?.id
  });

  const {images,name,category,price,id,color,size} = product

  const data = {
    id:id,
    image:images[0].url,
    name:name,
    price:price,
    category:category.name,
    size:size.value,
    color:color.value,
    quantity:1

  }


  return (
    <main className="mt-16 m-auto lg:mx-[5%] xl:mx-[2.5%] py-[5%]">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-10">
            <section className="relative lg:flex-[65%] xl:flex-[70%] lg:col-span-4 xl:col-span-7 grid grid-cols-2 gap-2">
                {/**map images and on nth:3 colspan2 rowspan2 */}
                {images.map((img:any,index:any)=>{
                    return(
                        <div key={index} className="hidden lg:flex overflow-hidden first:flex border-2 lg:first:col-span-1 lg:first:row-span-1 first:col-span-2 first:row-span-2 gallery image-container relative flex-wrap ">
                          <Image alt={`img-${index}`} src={img.url} fill className="bg-cover"/>
                          </div>
                       
                    )
                })}
               
               


            </section>
            {/**image galley for mobile */}
            <div className="flex lg:hidden gap-2 w-full h-[150px] ">
                {images.map((img:any,index:any)=>{
                    return(
                        <div key={index} className="first:hidden shrink-0 basis-[25%] w-full relative aspect-3/4 h-full border overflow-hidden">
                            <Image alt={`img-${index}`} src={img.url} fill className="bg-cover"/></div>
                    )
                })}
                
            </div>
            <section className="lg:flex-[35%] px-5 lg:px-0 xl:flex-[30%] lg:col-span-4 xl:col-span-2">
                <p className="title mb-2">New</p>
                <h2 className="heading mb-2">{name}</h2>
                <p className="title mb-2">{color.name}</p>
                <p className="title mb-2">{size.name}</p>
                <div className="flex justify-between items-center my-5">
            <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
            <p className="bg-green-600 rounded-full  h-3 aspect-square"></p>
              <p className="text-xs text-gray-500 capitalize">In Stock</p>
            </div>
              <p className="text-sm font-[500] flex gap-1 items-center">
                <Star  strokeWidth={1.5} height={20} width={20} className="text-cyan-500"/>
                3800 S&T points</p>
            </div>
            
            <h2 className="text-[1.5em] font-[500]">R{price} ZAR</h2>
          </div>
          <div className="flex flex-col gap-2 my-5">
          <AddToCart data={data} />
          <button className="w-full fancy__button bg-[#ededed] py-3 fancy__button font-[500] uppercase flex items-center gap-4 justify-center text-black hover:bg-transparent"><p>Add to wishlist</p><HeartEmptyIcon/></button>
          </div>
          
          <div className="bg-[#e5e5e5]/50 my-5 p-3 ">
          <div className="flex items-center gap-2  mb-5 font-[500]">
            <Truck strokeWidth={1.5} height={25} width={25}/>
            Free shipping over R500 ZAR
          </div>
            <div className="mt-0 flex items-center gap-2 font-[500]">
            <Undo2 strokeWidth={1.5} height={25} width={25}/>
            Easy returns
          </div>
          </div>
          
            </section>


        </div>
        <ProductCarousel data={suggestedProducts} suggested={true}/>

    </main>
  )
}

export default ProductPage