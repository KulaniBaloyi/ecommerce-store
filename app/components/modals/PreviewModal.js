"use client"
import { useEffect, useState } from "react"
import ClosePreviewModal from "../ClosePreviewModal"
import usePreviewModal from "@/app/actions/use-preview-modal"
import useCart from "@/app/hooks/use-cart"


const PreviewModal = ({product}) => {
  const [isMounted,setIsMounted] = useState(false)
  

  const isOpen = usePreviewModal((state)=>state.isOpen)
  const cartItems = useCart((state)=>state.items)


 
  


  useEffect(()=>{
    setIsMounted(true)
  },[])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const bodyElement = document.body;
      if (isOpen) {
        bodyElement.classList.add('cartMenu-open');
      } else {
        bodyElement.classList.remove('cartMenu-open');
      }
    }
  }, [isOpen]);

  if(!isMounted) return null
  //if(!previewProduct) return null
 if(!isOpen) return null
  return (
    <div className="fixed inset-0 bg-neutral-950/60 lg:grid lg:place-content-center z-[9999]">
        <div className="bg-white aspect-video rounded-xl w-[90%] p-5   md:w-full h-96 flex flex-col gap-5 relative" >
           <ClosePreviewModal/>
            <section className="flex h-full gap-5">
            <div className="flex-[.4] border rounded-xl grid place-content-center ">
              <h2>{product?.id}</h2>
            </div>
            <div className="flex-[.6] border rounded-xl">
              <h1>{product?.name}</h1>
              <h2>{product?.price}</h2>
            </div>
            </section>
            
            <div className="rounded-xl p-2 flex gap-4">
                <div className="border rounded-md w-16 h-full aspect-square "></div>
                <div className="border rounded-md w-16 h-full aspect-square "></div>
                <div className="border rounded-md w-16 h-full aspect-square "></div>
                <div className="border rounded-md w-16 h-full aspect-square "></div>
            </div>
        </div>
       
    </div>
  )
}

export default PreviewModal