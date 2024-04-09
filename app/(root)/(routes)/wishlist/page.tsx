"use client"
import useCart from "@/hooks/use-cart"

const Wishlist = () => {
    const wishlist = useCart((state)=>state.likes)
     
    if(wishlist.length==0 || !wishlist) return(
        <div className="mt-16 p-[5%]">
            <h1>Wishlist</h1>
            <section className="my-10">
                No Items in wishlist
            </section>
        </div>
    )

  return (
   <div className='mt-16 p-[5%]'>
    <h1>Wishlist</h1>
    <div>
        {wishlist?.map((item)=>{
            return(
                <div key={item.id} className="mb-5">
                    <p>{item.name}</p>
                </div>
            )
        })}
    </div>

   </div>
  )
}

export default Wishlist