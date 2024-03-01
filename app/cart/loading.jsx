import LoadingSkeleton from "@/app/components/LoadingSkeleton";

export default function Loading() {
    
    return <main className="mt-20 min-h-[calc(100dvh-5rem)] w-[95%] mx-auto py-5"> 
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
    <h1 className="col-span-5 lg:col-span-3 text-3xl text-gray-600">Your Cart</h1>
    <div className="col-span-5 flex flex-col gap-5 lg:col-span-3 ">
       <div className="rounded-md bg-gray-200 p-10 animate-pulse"></div>
    </div>
    <aside className="col-span-5 lg:col-span-2 flex flex-col gap-5 w-full bg-gray-200 animate-pulse">
     
    </aside>
   
    </div>
   
    
    </main>
}