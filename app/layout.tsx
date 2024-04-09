import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Ecommerce Store',
  description: 'Frontend for my ecommerce project',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
 
        <Header/>
        <div className="mt-10">
        {children}
        </div>
        
        <Footer/>
        </body>
    </html>
  );
}
