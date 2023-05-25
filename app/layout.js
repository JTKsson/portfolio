import './globals.css'
import { Roboto_Slab } from "next/font/google"

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
          <div className='navigation'>
            <p className='navBlock'>Home</p>
            <p className='navBlock'>About me</p>
            <p className='navBlock'>Contact</p>
          </div>
          <h1>Portfolio</h1>
        </header>
        <main>          
          {children}
        </main>
        <footer>Copyright Timothy Karlsson</footer>
        </body>
    </html>
  )
}
