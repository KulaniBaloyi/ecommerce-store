import Button from "./Button"
import VideoCard from "./VideoCard"


const RecentVideos = () => {

  return (
    <section className=" flex flex-col gap-5 py-20 mx-auto ">
        <div className="flex justify-between items-center">
            <h1 className="text-[4rem] tracking-[-.02em] text-[#27292a] leading-[1.2] font-[500] ">Recent videos</h1>
            <Button text={"visit channel"} redirect={"https://www.youtube.com/channel/UCgGxpY1-vsqlA0JqzPSDpsA"}/>
        </div>
        <div className="grid grid-cols-3 gap-16 ">
            <VideoCard img_src={"https://img.youtube.com/vi/wj06CJ5Ag40/maxresdefault.jpg"} link={"https://www.youtube.com/watch?v=wj06CJ5Ag40"} title={"Emma Stone Says She Was Shocked After Winning the Oscar - Full Oscars Backstage Speech"}/>
            <VideoCard img_src={"https://img.youtube.com/vi/wj06CJ5Ag40/maxresdefault.jpg"} link={"https://www.youtube.com/watch?v=wj06CJ5Ag40"} title={"Emma Stone Says She Was Shocked After Winning the Oscar - Full Oscars Backstage Speech"}/>
            <VideoCard img_src={"https://img.youtube.com/vi/wj06CJ5Ag40/maxresdefault.jpg"} link={"https://www.youtube.com/watch?v=wj06CJ5Ag40"} title={"Emma Stone Says She Was Shocked After Winning the Oscar - Full Oscars Backstage Speech"}/>
        </div>
    </section>
  )
}

export default RecentVideos