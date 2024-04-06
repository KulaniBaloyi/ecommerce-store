import React from 'react'

const Footer = () => {
  return (
   <footer className='bg-white  overflow-hidden grid place-content-center py-20'>
    <div className='marque__label'>
    Footer
    </div>
    <p>Copyright {new Date().getFullYear()}</p>
    
    

   </footer>
  )
}

export default Footer