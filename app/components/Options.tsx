"use client"

const Options = () => {
  return (
    <div className="w-24 min-w-16 h-14 text-[1rem] leading-[1.5] border-2">
    <select className=" px-2 text-lg font-[500] border-2 border-gray-300/80 bg-inherit w-full h-full cursor-pointer leading-[1.5] text-[#27292a] ">
      <option  selected value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
      <option value={6}>6</option>
      <option value={7}>7</option>
      <option value={8}>8</option>
      <option value={9}>9</option>
      
      <option value={"more"}>10+</option>
    </select>
  
  </div>
  )
}

export default Options