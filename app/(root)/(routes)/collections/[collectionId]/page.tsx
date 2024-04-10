import getProducts from "@/actions/get-products"
import ProductCard from "@/components/ProductCard"

interface CollectionPageProps {
  params:{
    collectionId:string
  }
 }
const Collections:React.FC<CollectionPageProps> = async({params}) => {

  const {collectionId}= params
  const products = await getProducts({categoryId:process.env.CATEGORY_SPORTSBRA})
   
  return (
    <div>
        <section style={{backgroundImage:`url(/Everybody_Seamless_Capsule_HP_Secondary_Banner_Desktop_1300x@2x.webp)`}} className='lg:aspect-[12/4] bg-cover text-white aspect-square w-full relative p-10 bg-gradient-to-r from-orange-600  to-yellow-700'>
     <div className='flex flex-col items-start absolute top-1/2 left-10 -translate-y-1/2'>
            <h2 className="text-4xl uppercase leading-[1.1] font-[700] mb-3">Focus Capsule</h2>
            <p className='mb-8'>someting something something</p>
           
        </div>
   </section>
   <div>
    <div className="flex justify-between m-2">
        <button className="p-3 border uppercase text-sm leading-[0.2]">Filters</button>
        <button className="p-3 border uppercase text-sm leading-[0.2]">sort by</button>
    </div>

   </div>
   <section className="lg:px-[5%]">
    <nav className="flex gap-5 text-sm uppercase pb-2 border-b mb-2 px-2">
        <h2>All</h2>
        <h2>Leggings</h2>
        <h2>Shirts & Tops</h2>
        <h2>Sport Bras</h2>
    </nav>
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mb-10">
      {products.map((prod:any)=>{
        return <ProductCard key={prod.id} data={prod}/>
      })}
       {/* <div className="border border-rounded-md w-full image-container"></div>
       <div className="border border-rounded-md w-full image-container"></div>
       <div className="border border-rounded-md w-full image-container"></div>
       <div className="border border-rounded-md w-full image-container"></div>
       <div className="border border-rounded-md w-full image-container"></div>
       <div className="border border-rounded-md w-full image-container"></div>
       <div className="border border-rounded-md w-full image-container"></div>
       <div className="border border-rounded-md w-full image-container"></div>
       <div className="border border-rounded-md w-full image-container"></div>
       <div className="border border-rounded-md w-full image-container"></div>
       <div className="border border-rounded-md w-full image-container"></div>
       <div className="border border-rounded-md w-full image-container"></div>
       <div className="border border-rounded-md w-full image-container"></div>
       <div className="border border-rounded-md w-full image-container"></div>
       <div className="border border-rounded-md w-full image-container"></div>
       <div className="border border-rounded-md w-full image-container"></div> */}

    </div>
   </section>
    </div>
  )
}

export default Collections