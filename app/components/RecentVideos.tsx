import VideoCard from "./VideoCard"


const RecentVideos = () => {
  return (
    <section className=" flex flex-col gap-5 py-20 mx-auto ">
        <div className="flex justify-between items-center">
            <h1 className="text-[4rem] tracking-[-.02em] text-[#27292a] leading-[1.2] font-[500] ">Recent videos</h1>
            <button className='hover:opacity-90 duration-150 transition-all bg-[#e5202b] text-white border fancy__button py-4 px-10 uppercase text-lg text-center leading-[1.5] font-bold '>Browse All products</button>
        </div>
        <div className="grid grid-cols-3 gap-16 ">
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
        </div>
    </section>
  )
}

export default RecentVideos