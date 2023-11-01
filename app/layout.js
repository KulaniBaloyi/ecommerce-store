
import Header from './components/Header'
import Footer from './components/Footer'
import './globals.css'

export const metadata = {
  title: 'Ecommerce Store',
  description: 'Fullstack ecommerce site',
 
}

export default function RootLayout({ children }) {

 
  return (
    <html lang="en">
      <body className={``}>
        <Header/>
        {children}
       <Footer/>
        </body>
    </html>
  )
}
