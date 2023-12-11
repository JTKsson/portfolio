"use client";
import "./globals.scss";
import "./globalStyles.scss"
import { Roboto_Slab } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";

const robotoSlab = Roboto_Slab({
  weight: "200",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio - Timothy Karlsson",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoSlab.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
