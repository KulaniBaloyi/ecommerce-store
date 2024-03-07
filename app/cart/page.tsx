
import Button from '../components/Button'
import YouMayAlsoLike from '../components/YouMayAlsoLike'

const CartPage = () => {
    
  return (
    <>
     <section className='grid place-content-center p-40 mt-20  '>
      <div className='flex flex-col gap-20 items-center'>
        <h1 className='heading self-center italic text-[2rem] leading-[1.2] font-[800] heading uppercase tracking-[-.02em] text-[#27292a]'>your shopping cart is empty</h1>
       <Button text={"start shopping"} redirect={"/collections/all"}/>
      </div>
        

    </section>
    <YouMayAlsoLike/>
    
    </>
   
  )
}

export default CartPage