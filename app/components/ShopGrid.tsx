

const ShopGrid = () => {
  return (
   <section className='border-2 h-[550px] border-amber-400 gap-2 grid grid-cols-2 grid-rows-2'>
    <div className='border-2 border-red-500 row-span-2 flex items-center p-10'>
        <div className='flex flex-col gap-5'>
            <h2>Leggings</h2>
            <button>shop now</button>
        </div>
    </div>
    <div className='border-2 border-blue-500  flex items-center p-10'>
        <div className='flex flex-col gap-5'>
            <h2>sports bras</h2>
            <button>shop now</button>
        </div>
    </div>
    <div className='border-2 border-teal-500  flex items-center p-10'>
        <div className='flex flex-col gap-5'>
            <h2>t-shirts and tops</h2>
            <button>shop now</button>
        </div>
    </div>
   </section>
  )
}

export default ShopGrid