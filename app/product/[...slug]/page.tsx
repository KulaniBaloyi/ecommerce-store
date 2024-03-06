import Image from "next/image";
import YouMayAlsoLike from "@/app/components/YouMayAlsoLike";
import { getProductBySlug } from "@/ecommerce-store/schemas/lib/sanity-utils";

interface ProductProps {
    params: { id: string; slug: string }; // Include slug in the interface
  }

  

const  Page: React.FC<ProductProps> = async({params}) => {
   
  
    //const [qty,setQty]= useState(1)
    const {slug} = params

    const p = await getProductBySlug(`${slug}`);
  
    const prodDetail =  p[0]

    const {name,description,price,image} = prodDetail
  
    // const handleQtyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     // Type safety and validation
    //     const newQty = parseInt(event.target.value, 10); // Parse to a number
    //     if (!isNaN(newQty) && newQty >= 1) { // Validate positive integer
    //       setQty(newQty);
    //     } else {
    //       console.error("Invalid quantity input"); // Handle invalid input (optional)
    //     }
    //   };
 
  return (
    <>
   
        <div className='flex gap-10 w-full min-h-[90dvh] mt-20 mb-20 px-10 m-auto'>
        <div className='flex-[.6]  gallery__main grid place-content-center w-full aspect-square text-white text-xl '>
        {image&&<Image src={`${image&&image}`} alt={name} className='object-cover'  objectPosition="center" fill/>  } 
        </div>
        <div className='flex-[.4] border w-full py-5 flex flex-col gap-5 px-10'>
           <h1 className='text-[#27292a] leading-[1.2] uppercase tracking-[-.02em] text-[4rem] font-[900] heading'>{name}</h1>
           <h2 className='text-cyan-600  font-[500] text-lg'>R {price}</h2>
           <p className=' text-lg font-[500] leading-[1.5] flex flex-wrap'>{description}</p>
           <section className="flex flex-col gap-5">
             <h2>Select Size</h2>
             <div className="flex gap-3 flex-wrap text-[#27292a] leading-[1.2] uppercase tracking-[-.02em] font-[500] relative">
               <div className="transition-colors duration-1000 ease-in-out relative aspect-square h-14 border-2 border-gray-400/30 grid place-content-center">
                 <input className="z-30 opacity-0 peer absolute  cursor-pointer h-full w-full   border-yellow-400" type="radio" name="size" id="size-XS" value="XS"/>
                 <p className=" absolute peer-checked:bg-cyan-800/60  inset-0 "/>
                 <label className="z-50 text-[#27292a] font-[500] text-[1rem] peer-checked:text-white">XS</label>
               </div> 
               <div className="transition-colors duration-1000 ease-in-out relative aspect-square h-14 border-2 border-gray-400/30 grid place-content-center">
                 <input className="z-30 opacity-0 peer absolute  cursor-pointer h-full w-full   border-yellow-400" type="radio" name="size" id="size-S" value="S"/>
                 <p className=" absolute peer-checked:bg-cyan-800/60  inset-0 "/>
                 <label className="z-50 text-[#27292a] font-[500] text-[1rem] peer-checked:text-white">S</label>
               </div> 
               <div className="transition-colors duration-1000 ease-in-out relative aspect-square h-14 border-2 border-gray-400/30 grid place-content-center">
                 <input className="z-30 opacity-0 peer absolute  cursor-pointer h-full w-full   border-yellow-400" type="radio" name="size" id="size-M" value="M"/>
                 <p className=" absolute peer-checked:bg-cyan-800/60  inset-0 "/>
                 <label className="z-50 text-[#27292a] font-[500] text-[1rem] peer-checked:text-white">M</label>
               </div> 
               <div className="transition-colors duration-1000 ease-in-out relative aspect-square h-14 border-2 border-gray-400/30 grid place-content-center">
                 <input className="z-30 opacity-0 peer absolute  cursor-pointer h-full w-full   border-yellow-400" type="radio" name="size" id="size-L" value="L"/>
                 <p className=" absolute peer-checked:bg-cyan-800/60  inset-0 "/>
                 <label className="z-50 text-[#27292a] font-[500] text-[1rem] peer-checked:text-white">L</label>
               </div> 
               <div className="transition-colors duration-1000 ease-in-out relative aspect-square h-14 border-2 border-gray-400/30 grid place-content-center">
                 <input className="z-30 opacity-0 peer absolute  cursor-pointer h-full w-full   border-yellow-400" type="radio" name="size" id="size-XL" value="XL"/>
                 <p className=" absolute peer-checked:bg-cyan-800/60  inset-0 "/>
                 <label className="z-50 text-[#27292a] font-[500] text-[1rem] peer-checked:text-white">XL</label>
               </div> 
               <div className="transition-colors duration-1000 ease-in-out relative aspect-square h-14 border-2 border-gray-400/30 grid place-content-center">
                 <input className="z-30 opacity-0 peer absolute  cursor-pointer h-full w-full   border-yellow-400" type="radio" name="size" id="size-2XL" value="2XL"/>
                 <p className=" absolute peer-checked:bg-cyan-800/60  inset-0 "/>
                 <label className="z-50 text-[#27292a] font-[500] text-[1rem] peer-checked:text-white">2XL</label>
               </div> 
               <div className="transition-colors duration-1000 ease-in-out relative aspect-square h-14 border-2 border-gray-400/30 grid place-content-center">
                 <input className="z-30 opacity-0 peer absolute  cursor-pointer h-full w-full   border-yellow-400" type="radio" name="size" id="size-3XL" value="3XL"/>
                 <p className=" absolute peer-checked:bg-cyan-800/60  inset-0 "/>
                 <label className="z-50 text-[#27292a] font-[500] text-[1rem] peer-checked:text-white">3Xl</label>
               </div> 
         
             </div>
           </section>
           <section className="flex gap-5 border-t pt-10 mb-10">
         <div className="w-24 min-w-16 h-14 text-[1rem] leading-[1.5] border-2">
           <select className=" px-2 text-lg font-[500] border-2 border-gray-300/80 bg-inherit w-full h-full cursor-pointer leading-[1.5] text-[#27292a] ">
             <option  selected value={1}>1</option>
             <option value={2}>2</option>
             <option value={3}>3</option>
             <option value={4}>4</option>
             <option value={5}>5</option>
             <option value={6}>6</option>
             <option value={7}>7</option>
             <option value={8}>8</option>
             <option value={9}>9</option>
             
             <option value={"more"}>10+</option>
           </select>
         
         </div>
              
            
       <button className='fancy__button self-start text-[1rem] cursor-pointer leading-[1.5] font-bold uppercase text-white bg-cyan-800 h-full w-full grid place-content-center rounded-md'>Add to Cart</button>
           </section>
           <section>
             <ul className="flex flex-col gap-5 text-lg font-[500] leading-[1.5] text-[#27292a]">
               <li className="border-b pb-10 flex justify-between items-center">
                 <p >More details</p>
                 <p>+</p>
               </li>
               <li className="border-b pb-10 flex justify-between items-center">
                 <p >Size & fit</p>
                 <p>+</p>
               </li>
               <li className="border-b pb-10 flex justify-between items-center">
                 <p >Quality guarentee & returns</p>
                 <p>+</p>
               </li>
             </ul>
           </section>
          
          
        </div>
        
       </div>

    <YouMayAlsoLike/>
    </>
    
  )
};

export default Page;