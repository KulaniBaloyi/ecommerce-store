"use client"
 const HeroButton=({title})=>{
    return(
        <button disabled aria-disabled className='w-full  mr-6  lg:mr-0 hover:bg-opacity-85 transition-all duration-100 ease-in-out bg-[#27292a] text-white border fancy__button py-4 px-10 uppercase text-sm text-center leading-[1.5] font-bold '>{title}</button>
    )

}

export default HeroButton