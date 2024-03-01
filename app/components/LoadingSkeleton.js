"use client"

const LoadingSkeleton = () => {
  return (
    <>
    <div className="mt-20 min-h-[calc(100dvh-5rem)] text-3xl gap-10 grid grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto py-10">
        <div className="flex flex-col gap-5">
            {/**this will load the first picture */}
        <div className="rounded-md border w-full aspect-square bg-gray-200 animate-pulse"/>
         
    
       
       <div className="h-24 flex gap-4 overflow-x-scroll">
       <div className="rounded-md border h-full aspect-square relative bg-gray-200 animate-pulse"/>
       <div className="rounded-md border h-full aspect-square relative bg-gray-200 animate-pulse"/>
       <div className="rounded-md border h-full aspect-square relative bg-gray-200 animate-pulse"/>
         
    
      
            
           
        </div>
        </div>
        
        <div className=" flex flex-col gap-5 p-2 text-base md:text-lg lg:text-xl">
        <h1 className="rounded-md w-4/5 h-5 bg-gray-200 animate-pulse"></h1>
            <h1 className="rounded-md w-3/5 h-5 bg-gray-200 animate-pulse"></h1>
            <h1 className="rounded-md h-5 w-2/5 bg-gray-200 animate-pulse"></h1>
            <div className="flex gap-5 items-end">
            <h1 className="rounded-md h-5 bg-gray-200 animate-pulse"></h1>
            <p className="h-10 md:h-6 lg:h-7 aspect-square rounded-full bg-gray-200 animate-pulse"></p>

            </div>
            {/**add this item to cart or increase its quantity */}
           <button className="rounded-full animate-pulse bg-gray-200 p-5 w-1/2 "></button>
        </div>
    </div>
    
    
    </>
  )
}

export default LoadingSkeleton