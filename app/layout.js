
import './globals.css'

export const metadata = {
  title: 'Ecommerce Store',
  description: 'Fullstack ecommerce site',
 
}

export default function RootLayout({ children }) {

 
  return (
    <html lang="en">
      <body className={``}>
        {children}
       
        </body>
    </html>
  )
}