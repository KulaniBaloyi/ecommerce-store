"use client"
const Pagination = () => {
  return (
    <section className="flex gap-1">
        <div className="bg-[#8bc34a] border border-[#8bc34a] text-white h-10 aspect-square text-[1em] leading-[1] p-[.75em] text-center">1</div>
        <div className="border border-[#8bc34a] text-[#8bc34a] h-10 aspect-square text-[1em] leading-[1] p-[.75em] text-center">2</div>
        <div className="border border-[#8bc34a] text-[#8bc34a] h-10 aspect-square text-[1em] leading-[1] p-[.75em] grid place-content-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
</svg>
</div>
    </section>
  )
}

export default Pagination