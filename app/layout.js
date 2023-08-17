import Header from './components/Header'
import Footer from './components/Footer'
import './globals.css'
import CartMenu from './components/menus/CartMenu'
import SearchModal from './components/modals/SearchModal'
import PreviewProduct from './components/modals/PreviewModal'
import Menu from './components/menus/Menu'
import ToastProvider from './providers/toast-provider'



export const metadata = {
  title: 'Ecommerce Store',
  description: 'Frontend for the entire ecommerce situation',
 
}

export default function RootLayout({ children }) {

 
  return (
    <html lang="en">
      <body className={``}>
      
       <ToastProvider/> 
          <CartMenu />
          <SearchModal/>
          <Menu/>
         
          <PreviewProduct/>
          <Header />
        {children}
        <Footer/>     
        </body>
    </html>
  )
}