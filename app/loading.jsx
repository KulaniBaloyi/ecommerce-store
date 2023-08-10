

export default function Loading() {
    
    return(
    <main className="flex flex-col gap-5">
        <section className="h-[90dvh] bg-gray-200 animate-pulse"></section>
        <section className="p-5">
            <h2 className="h-5 bg-gray-200 animate-pulse w-1/2 md:w-1/5"></h2>
            <div className="my-5 grid grid-cols-2 lg:grid-cols-4">
                <div className="aspect-square w-full p-2 bg-gray-200 animate-pulse"></div>
                <div className="p-2 flex flex-col gap-2">
                    <h2 className="h-5 bg-gray-200 animate-pulse w-3/5"></h2>
                    <h2 className="h-5 bg-gray-200 animate-pulse w-[10%]"></h2>
                    <h2 className="h-5 bg-gray-200 animate-pulse w-1/3"></h2>
                </div>
            </div>
        </section>


    </main>)
}