import Image from "next/image"

const About = () => {
  return (
    <div>
         <h1 className='text-[#111111] text-5xl font-bold leading-[1.3em] my-20 text-center capitalize'>About Us</h1>
         <section className="bg-white mx-auto w-[90%] px-10 py-20 grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-5">
            <h1 className="text-[#111111] text-2xl leading-[1.3em] font-semibold">We Are Your Favourite Store.</h1>
            <p className="flex break-words">Tuas quisquam quo gravida proident harum, aptent ligula anim consequuntur, ultrices mauris, nunc voluptates lobortis, varius, potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero penatibus quasi! Nostra tenetur dignissimos ultrices natus distinctio ultrices consequuntur numqu.</p>
            <p  className="flex break-words">Officiis fuga harum porro et? Similique rhoncus atque! Netus blanditiis provident nunc posuere. Rem sequi, commodo, lorem tellus elit, hic sem tenetur anim amet quas, malesuada proident platea corrupti expedita.</p>
            </div>
            <div className="rounded-sm w-full h-[400px] overflow-hidden relative">
                <Image fill src={"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2020/01/banner-01.jpg"} className="object-cover" alt="grapes"/>
            </div>        
         </section>
         <section className="mt-10 bg-[#001524] text-white px-10 py-20"></section>
         <section className="bg-white px-10 py-20 grid grid-cols-5 gap-10">
            <div className="bg-[#f8f6f3] border col-span-2 w-full h-[500px] relative overflow-hidden rounded-lg">
                <Image fill src={"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/image-01-ok9t8tqfmw86q6a5qjwdw95uon8m0ro8dme893gop4.jpg"} alt={"image"} className="object-contain"/>
            </div>
            <div className="border col-span-3 px-10 py-20">
                <h1>We Deal With Various Quality Organic Products!</h1>
                <div className="grid grid-cols-2 gap-2">
                    <h2>Fresh fruits</h2>
                    <h2>Fresh fruits</h2>
                    <h2>Fresh fruits</h2>
                    <h2>Fresh fruits</h2>
                    <h2>Fresh fruits</h2>
                    <h2>Fresh fruits</h2>
                    <h2>Fresh fruits</h2>
                </div>
            </div>
         </section>
    </div>
  )
}

export default About