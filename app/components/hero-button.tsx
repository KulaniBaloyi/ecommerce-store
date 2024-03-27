"use client"
 const HeroButton=({title})=>{
    return(
        <button className='hover:bg-opacity-85 transition-all duration-100 ease-in-out bg-[#27292a] text-white border fancy__button py-4 px-10 uppercase text-sm text-center leading-[1.5] font-bold flex justify-between items-center '>{title}</button>
    )

}

export default HeroButton