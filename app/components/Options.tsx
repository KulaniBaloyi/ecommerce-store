"use client"

const Options = ({quantity,handleChange}) => {

  return (
    <div className="w-40 max-w-full min-w-16 h-10 text-[.6rem] leading-[1.5] border">
    <select  value={"m"}
         className=" px-2 text-sm font-[500] border-0 uppercase active:outline-none active:border-0 focus:outline-none  bg-inherit w-full h-full cursor-pointer leading-[1.5] text-[#27292a] ">
      <option value={"xs"}>xs</option>
      <option value={"s"}>s</option>
      <option value={"m"}>m</option>
      <option value={"l"}>l</option>
      <option value={"xl"}>xl</option>
      <option value={"xxl"}>xxl</option>

  
    </select>
  
  
  </div>
  )
}

export default Options