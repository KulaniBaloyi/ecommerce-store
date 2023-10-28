import React from 'react'
import Star from './icons/Star'
import ProductCard from './ProductCard'

const BestSelling = () => {
  return (
    <section className='min-h-screen flex flex-col px-10 py-32 w-[95%] mx-auto'>
            <h1 className='mb-10 text-center font-semibold text-4xl leading-[1.3em] text-[#111111]'>Best Selling</h1>
        <div className='grid grid-cols-4 gap-5'>
          <ProductCard sale={false} alt={"assorted-coffee"} src={"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-400x400.jpg"}/>
          <ProductCard sale={false} alt={"hand-sanitizer"} src={"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-400x400.jpg"}/>
          <ProductCard  sale={false} alt={"hand-picked-red-cherries"} src={"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-400x400.jpg"}/>
          <ProductCard  sale={true} alt={"natural-extracted-edible-oil"} src={"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil-400x400.jpg"}/>
            
        </div>
    </section>
  )
}

export default BestSelling