import Image from "next/image"

const Categories = () => {
  return (
    <section className="px-10 py-32 bg-[#f8f6f3] relative">
        <p className="absolute w-32 h-20 right-1/2 -top-[2rem]">
            <Image src={"/basil-leaf.png"} alt={"basil-leaf"} fill className=""/>
        </p>
        <div className="grid grid-cols-3 gap-10">
            <div className="bg-white rounded-ld w-full aspect-square overlay p-10 flex flex-col gap-5 ">
           
                <h1 className="text-[#111111] text-2xl leading-[1.5em] font-semibold"> Farm Fresh Fruits</h1>
                <p className="text-center">Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.</p>
                <button className="self-start uppercase px-6 py-4 text-white rounded-md bg-[#8bc34a] text-sm font-semibold leading-[1em]">Shop now</button>
            </div>
            <div className="bg-white rounded-ld w-full aspect-square"></div>
            <div className="bg-white rounded-ld w-full aspect-square"></div>
        </div>
    </section>
  )
}

export default Categories