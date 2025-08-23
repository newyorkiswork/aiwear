import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BottomNav from "@/components/bottom-nav"
import { LanguageProvider } from "@/lib/language-context"
import { CartProvider } from "@/lib/cart-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "A.I Wear - Premium Fashion & Clothing",
  description: "Discover the latest trends in fashion with our premium clothing collection",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <CartProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1 pb-16 md:pb-0">{children}</main>
              <Footer />
              <BottomNav />
            </div>
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
