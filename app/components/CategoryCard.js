import React from 'react'

const CategoryCard = ({title,overview,lettuce,peanuts,lemons}) => {
  return (
    <div className={`${lemons&&"lemons"} ${lettuce&&"lettuce"} ${peanuts&&"peanuts"} bg-white rounded-lg w-full aspect-square p-10 flex flex-col gap-5 `}>
           
    <h1 className="text-[#111111] text-2xl leading-[1.5em] font-semibold">{title}</h1>
    <p className="text-center">{overview}</p>
    <button className="self-start uppercase px-6 py-4 text-white rounded-md bg-[#8bc34a] text-sm font-semibold leading-[1em]">Shop now</button>
</div>
  )
}

export default CategoryCard