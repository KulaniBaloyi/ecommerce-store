import ProductCard from "./ProductCard"

const Trending = () => {
    return (
        <section className='min-h-screen flex flex-col py-32 w-[95%] mx-auto'>
                <h1 className='mb-10 text-center font-semibold text-4xl leading-[1.3em] text-[#111111]'>Trending</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
            <ProductCard title={"assorted coffee"} alt={"assorted-coffee"} src={"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-400x400.jpg"}/>
            <ProductCard title={"Fresh Orange juice"} alt={"fresh-orange-juice"} src={"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/orage-juice-kariz-400x400.jpg"}/>
            <ProductCard title={"hand sanitizer"} alt={"hand -anitizer"} src={"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-400x400.jpg"}/>
            <ProductCard title={"natural extracted edible oil"} alt={"natural-extracted-edible-oil"} src={"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil-400x400.jpg"}/>
              
                
            </div>
        </section>
      )
    
}

export default Trending