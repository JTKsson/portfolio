"use client"
import './globals.css'
import { Roboto_Slab } from "next/font/google"
import Navbar from './components/navigation'

const robotoSlab = Roboto_Slab({
  weight: "200",
  subsets: ["latin"]
})

export const metadata = {
  title: 'Portfolio - Timothy Karlsson'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoSlab.className}>
        <header>
          <h1>Portfolio</h1>
          <Navbar className="navbar" />
        </header>
        <main>
          {children}
        </main>
        <footer>Copyright Timothy Karlsson</footer>
        </body>
    </html>
  )
}
