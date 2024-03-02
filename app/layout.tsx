import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Ecommerce Store",
  description: "A Store with an admin and a CMS to organize the selling of products online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
       <html lang="en">
      <body className="" >
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
    </ClerkProvider>
   
  );
}
