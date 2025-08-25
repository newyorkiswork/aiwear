"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Heart, Search, ChevronDown, Globe, User, Menu, X, Star } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  const featuredProducts = []

  const testimonials = []

  return (
    <main className="flex-1">
      {/* Hero Banner */}
      <section className="relative">
        <div className="container px-4 py-12 md:px-6 md:py-24 lg:py-32">
          <div className="space-y-8">
            {/* Hero Text */}
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                {t('hero.title')}
              </h1>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                Where technology meets fashion. Cutting-edge style for the modern digital age.
              </p>
              <div className="flex justify-center">
                <Button size="lg" className="font-medium bg-gold-500 hover:bg-gold-600 text-white border-gold-500" asChild>
                  <Link href="/shop/tokens">{t('hero.shopNow')}</Link>
                </Button>
              </div>
            </div>
            
            {/* Hero Images - Split Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* AI Runs on Tokens */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/hero-1.png"
                  alt="AI Runs on Tokens - Fashion Collection"
                  fill
                  className="object-cover object-center transition-transform group-hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">AI Runs on Tokens</h3>
                  <Button 
                    size="lg" 
                    className="font-medium bg-gold-500 hover:bg-gold-600 text-white border-gold-500 shadow-lg" 
                    asChild
                  >
                    <Link href="/shop/tokens">Shop Now</Link>
                  </Button>
                </div>
              </div>
              
              {/* AI Runs on Data */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/hero-2.png"
                  alt="AI Runs on Data - Fashion Collection"
                  fill
                  className="object-cover object-center transition-transform group-hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">AI Runs on Data</h3>
                  <Button 
                    size="lg" 
                    className="font-medium bg-gold-500 hover:bg-gold-600 text-white border-gold-500 shadow-lg" 
                    asChild
                  >
                    <Link href="/shop/data">Shop Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>






    </main>
  )
}
