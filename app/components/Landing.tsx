import HeroButton from "./hero-button"
type Video = {
  name: string;
  

  video: { asset: { url: string; }; };
}
const Landing = async({name,video}:Video) => {
  
  return (
    <section className='w-full h-full max-w-full landing min-h-[95dvh] grid place-content-center relative overflow-hidden'>
      <div className="absolute inset-0 -z-50">
      <video autoPlay loop src={video}/>
      </div>
      
        <section className='flex flex-col my-20 lg:my-10 mx-5 lg:gap-20 min-w-full'>
            <h1 className='self-center text-[1em] lg:text-[2em] leading-[1.2] font-[900] heading uppercase tracking-[-.02em] text-[#27292a]'>Unleash Your Inner Athlete. Keep Moving Forward.</h1>
            <div className='px-5 flex flex-col lg:flex-row items-center gap-2 lg:gap-10'>
                <button className='bg-[#e5202b]  hover:bg-opacity-85 transition-all duration-100 ease-in-out text-white border fancy__button py-4 px-10 uppercase text-sm text-center leading-[1.5] font-bold'>shop merch</button>
             <HeroButton title="get inspired"/>
             <HeroButton title="join the community"/>
             <HeroButton title="build your training plan"/>
             <HeroButton title="contact us"/>
            </div>
        </section>
    </section>
  )
}

export default Landing