"use client"
import useCart from "../hooks/use-cart"
import usePreviewModal from "../actions/use-preview-modal"
const StoreItemFunc = ({id,name,price,image}) => {
  
  const bodyElement = document.body
    const cart = useCart()
    
    const open = usePreviewModal((state) => state.onOpen)
    const data={id,name,price,image}
  
    const addToCart = async(e)=>{
      e.stopPropagation()
      cart.addItem(data)  
    }

    const handlePreviewClick = (e) => {
      e.stopPropagation()
      bodyElement.classList.add('cartMenu-open')
      open(data)
  
    };
  return (
    <div className="absolute flex gap-2 bottom-5 left-1/2 -translate-x-[50%] opacity-0 group-hover:opacity-100">
    <button onClick={(e)=>handlePreviewClick(e)} className="rounded-full border bg-white grid place-content-center aspect-square w-10">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black ">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
    </svg>
    </button>
    <button onClick={(e)=>addToCart(e)}  className="rounded-full border bg-white grid place-content-center aspect-square w-10">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 z-50 text-black">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
    </button>

    

    </div>
  )
}

export default StoreItemFunc

