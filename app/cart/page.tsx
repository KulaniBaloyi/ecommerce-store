import React from 'react'

const CartPage = () => {
  return (
    <div className='max-w-3xl mx-auto mt-20 min-h-[90dvh]'>
        <h1 className='text-3xl text-center font-semibold text-cyan-500 mb-5'>Cart</h1>
        <table className='w-full border-collapse mb-5'>
            <thead>
                <tr className='border-b border-gray-200'>
                    <th className='px-4 py-3'>Product</th>
                    <th className='px-4 py-3'>Price</th>
                    <th className='px-4 py-3'>Qty</th>
                    <th className='px-4 py-3'>Remove</th>
                </tr>
            </thead>
            <tbody>
                <tr className='text-center border-b boder-gray-300 '>
                    <td className='py-2 px-4'>Book</td>
                    <td className='py-2 px-4 '>price</td>
                    <td className='py-2 px-4 '>Qty</td>
                    <td className='py-2 px-4 '>trash</td>
                    
                </tr>
                <tr className='text-center border-b boder-gray-300 '>
                    <td className='py-2 px-4'>Book</td>
                    <td className='py-2 px-4 '>price</td>
                    <td className='py-2 px-4 '>Qty</td>
                    <td className='py-2 px-4 '>trash</td>
                    
                </tr>
            </tbody>
        </table>

    </div>
  )
}

export default CartPage