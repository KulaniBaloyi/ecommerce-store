import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        
      <ClerkProvider>
      {children}

      </ClerkProvider>
      <Footer/>
      </body>
     
    </html>
  )
}
