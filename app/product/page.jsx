"use client"
import { useEffect,useState } from "react"
import StoreItem from "../components/StoreItem"
import { formatCurrency } from "@/utils/currency-formatter"

const Page = () => {
    const [isMounted,setisMounted]= useState(true)
    const [adidas,setAdidas]= useState(true)
    const [nike,setNike]= useState(true)
    const [puma,setPuma]= useState(true)
    const [converse,setConverse]= useState(true)
    const [vans,setVans]= useState(true)
    const [products,setProducts]= useState()
    const [price,setPrice] = useState(3500)
    const [isLoading,setIsLoading]= useState(true)
    const fetchData =async()=>{
        try {
            const res = await fetch(`https://ecommerce-store-kb.vercel.app/api/products`,{
                method:"POST",
                headers: {
                    "Content-Type": "application/json", 
                  },
                  body: JSON.stringify({
                   adidas:adidas,
                   nike:nike,
                   puma:puma,
                   converse:converse,
                   vans:vans,
                   price:price
                  }),
                })


            if (res.ok) {
              const data = await res.json()
              setProducts(data)
              setIsLoading(false)
             
            }
          } catch (err) {
            console.error(err);
          }
    }

useEffect(()=>{
    setIsLoading(true)
    fetchData()

},[adidas,nike,puma,converse,vans])


    useEffect(()=>{
        setisMounted(true)

    },[])

    if(!isMounted)return

  return (
    <div className='mt-20 m-auto w-[90%]  min-h-screen p-5 rounded-md my-5 flex flex-col lg:flex-row gap-5'>
        <div className="flex-1 lg:flex-[.25] flex flex-col gap-2 ">
        <h2 className="semibold text-lg">Price</h2>
        <div className="flex justify-between">
            <h2>{formatCurrency(0)}</h2>
            <h2>{formatCurrency(price)}</h2>
        </div>
        <input onChange={(e)=>setPrice(e.target.value)} type="range" min="0"  max="3500" step="1" value={price}/>
        <button onClick={()=>fetchData()} className="self-start bg-blue-600 text-white rounded-md p-2 px-4 text-sm">Apply</button>
            <h2 className="semibold text-lg">Brands</h2>
            <ul className="flex lg:flex-col gap-2">
            <label className="flex gap-2 items-center text-sm">
                 <input
                    type="checkbox"
                    checked={adidas}
                    onChange={(e) => setAdidas(e.target.checked)}
                />
                Adidas
            </label>
            <label className="flex gap-2 items-center text-sm">
                 <input
                    type="checkbox"
                    checked={nike}
                    onChange={(e) => setNike(e.target.checked)}
                />
                Nike
            </label>
            <li>
            </li>
            <li>
            <label className="flex gap-2 items-center text-sm">
                 <input
                    type="checkbox"
                    checked={puma}
                    onChange={(e) => setPuma(e.target.checked)}
                />
                Puma
            </label>
            </li>
            <li> 
            <label className="flex gap-2 items-center text-sm">
                 <input
                    type="checkbox"
                    checked={converse}
                    onChange={(e) => setConverse(e.target.checked)}
                />
                Converse
            </label>
            </li>
            <li>
            <label className="flex gap-2 items-center text-sm">
                 <input
                    type="checkbox"
                    checked={vans}
                    onChange={(e) => setVans(e.target.checked)}
                />
                Vans
            </label>
            </li>
            </ul>
           
        </div>  
        <div className="flex-1 lg:flex-[.75] grid grid-cols-2 lg:grid-cols-3 gap-5 place-content-start">
            {products&&products.map((item)=>{
                if(isLoading){
                    return  <div key={item.id} className='rounded-lg p-1 lg:p-2 w-full h-full border shadow-sm shadow-gray-200 flex flex-col gap-2'>
                    <div className='border bg-gray-200 animate-pulse w-full aspect-square rounded-md'>
                      
                       
                    </div>
                    <div className=' flex-[0.3]'>
                            <h2 className=""></h2>
                           
                            <h2 className="h-5 animate-pulse bg-gray-200 rounded-md"></h2>
                            <h2 className="h-5 animate-pulse bg-gray-200 roounded-md"></h2>
                            
                           
                        </div>
                </div>
                }
                return  <StoreItem key={item.id} {...item}/>
            })}
           
        </div>        
    </div>
  )
}

export default Page