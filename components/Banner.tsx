import Button from "./ui/button"
const Banner = () => {
  return (
   <section style={{backgroundImage:`url(/Everybody_Seamless_Capsule_HP_Secondary_Banner_Desktop_1300x@2x.webp)`}} className='lg:aspect-[12/4] bg-cover text-white aspect-square w-full relative p-10 bg-gradient-to-r from-orange-600  to-yellow-700'>
     <div className='flex flex-col items-start absolute top-1/2 left-10 -translate-y-1/2'>
            <h2 className="text-4xl uppercase leading-[1.1] font-[700] mb-3">Everybody seamless</h2>
            <p className='mb-8'>A capsule for your every move</p>
            <Button bgColor={"white"} redirect={'/'} text={"shop now"}/>
        </div>
   </section>
  )
}

export default Banner