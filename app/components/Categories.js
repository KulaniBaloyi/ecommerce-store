import Image from "next/image"
import Link from "next/link"

const Categories = () => {
  return (
    <>
    <h2 className='font-semi-bold text-3xl my-5 sub-heading'>Categories</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 h-[300px]">
      
      <Link href={`category/clothes`}><div className="relative border overflow-hidden rounded-xl h-full w-full grid place-content-center italic text-3xl font-semibold">
        <Image src='/clothes.jpg' alt='clothes' className="object-cover" fill/>
        <p className="absolute inset-0 bg-neutral-950/60 z-10"></p>
        <h1 className="z-20 text-white">clothes</h1></div>
      </Link>

      <Link href={`category/shoes`}><div className="relative border overflow-hidden rounded-xl h-full w-full grid place-content-center italic text-3xl font-semibold">
        <Image src='/shoes.jpg' alt='clothes' className="object-cover" fill/>
        <p className="absolute inset-0 bg-neutral-950/60 z-10"></p>
        <h1 className="z-20 text-white">shoes</h1></div>
      </Link>

      <Link href={`category/beauty`}><div className="relative border overflow-hidden rounded-xl h-full w-full grid place-content-center italic text-3xl font-semibold">
        <Image src='/beauty.jpg' alt='beauty' className="object-cover" fill/>
        <p className="absolute inset-0 bg-neutral-950/60 z-10"></p>
        <h1 className="z-20 text-white">beauty</h1></div>
      </Link>

      <Link href={`category/accessories`}><div className="relative border overflow-hidden rounded-xl h-full w-full grid place-content-center italic text-3xl font-semibold">
        <Image src='/accessories.jpg' alt='accessories' className="object-cover" fill/>
        <p className="absolute inset-0 bg-neutral-950/60 z-10"></p>
        <h1 className="z-20 text-white">accessoriess</h1></div>
      </Link>
      
    </div>
    </>
   
  )
}
export default Categories