import VideoCard from "./VideoCard"


const RecentVideos = () => {
  return (
    <section className="bg-[rgba(39,41,42,0.1)] flex flex-col gap-5  px-10 py-20 mx-auto ">
        <div className="flex justify-between">
            <h1 className="text-[4rem] tracking-[-.02em] text-[#27292a] leading-[1.2] font-[500] ">Recent videos</h1>
            <button className="">More</button>
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