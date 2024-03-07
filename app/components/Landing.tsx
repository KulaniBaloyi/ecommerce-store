
type Video = {
  name: string;
  

  video: { asset: { url: string; }; };
}
const Landing = async({name,video}:Video) => {
  
  return (
    <section className='landing h-[85vh] grid place-content-center relative overflow-hidden'>
      <div className="absolute inset-0 -z-50">
      <video autoPlay loop src={video}/>
      </div>
      
        <section className='flex flex-col gap-20'>
            <h1 className='self-center text-[4rem] leading-[1.2] font-bold heading uppercase tracking-[-.02em] text-[#27292a]'>Heading for something</h1>
            <div className='flex items-center gap-10'>
                <button className='bg-[#e5202b] text-white border fancy__button py-4 px-10 uppercase text-lg text-center leading-[1.5] font-bold'>Watch now</button>
                <button className='bg-[#27292a] text-white border fancy__button py-4 px-10 uppercase text-lg text-center leading-[1.5] font-bold'>Watch now</button>
                <button className='bg-[#27292a] text-white border fancy__button py-4 px-10 uppercase text-lg text-center leading-[1.5] font-bold'>Watch now</button>
                <button className='bg-[#27292a] text-white border fancy__button py-4 px-10 uppercase text-lg text-center leading-[1.5] font-bold'>Watch now</button>
                <button className='bg-[#27292a] text-white border fancy__button py-4 px-10 uppercase text-lg text-center leading-[1.5] font-bold'>Watch now</button>
            </div>
        </section>
    </section>
  )
}

export default Landing