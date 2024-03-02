import React from 'react'

const page = () => {
  return (
    <div className='max-w-3xl mx-auto mt-20 min-h-[90dvh]'>
    <h1 className='text-3xl text-center font-semibold text-cyan-500 mb-5'>Order</h1>
    <table className='w-full border-collapse mb-5'>
        <thead>
            <tr className='border-b border-gray-200'>
                <th className='px-4 py-3'>Product</th>
                <th className='px-4 py-3'>Qty</th>
                <th className='px-4 py-3'>Paid</th>
                <th className='px-4 py-3'>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr className='text-center border-b boder-gray-300 '>
                <td className='py-2 px-4'>Book</td>
                <td className='py-2 px-4 '>3</td>
                <td className='py-2 px-4 '>paid</td>
                <td className='py-2 px-4 '>pending</td>
                
            </tr>
            <tr className='text-center border-b boder-gray-300 '>
                <td className='py-2 px-4'>shirit</td>
                <td className='py-2 px-4 '>1</td>
                <td className='py-2 px-4 '>pendind</td>
                <td className='py-2 px-4 '>awaiting payment</td>
                
            </tr>
        </tbody>
    </table>

</div>
  )
}

export default page