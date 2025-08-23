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
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                {t('hero.title')}
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Where technology meets fashion. Cutting-edge style for the modern digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-medium bg-gold hover:bg-gold-600 text-white border-gold" asChild>
                  <Link href="/shop">{t('hero.shopNow')}</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/hero-image.png"
                alt="A.I Wear Fashion Collection"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-silver-gradient-subtle py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-8 md:text-3xl">{t('categories.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 justify-items-center">
            {[
              { key: 'shirts', label: t('category.shirts') },
              { key: 'crewnecks', label: t('category.crewnecks') },
              { key: 'hoodies', label: t('category.hoodies') },
              { key: 'sweatpants', label: t('category.sweatpants') },
              { key: 'socks', label: t('category.socks') },
              { key: 'bucketHats', label: t('category.bucketHats') },
              { key: 'snapbacks', label: t('category.snapbacks') }
            ].map((category, index) => {
              const categoryImages = [
                "/shirts.png", // Shirts
                "/crewnecks.png", // Crewnecks
                "/hoodies.png", // Hoodies
                "/sweatpants.png", // Sweatpants
                "/socks.png", // Socks
                "/bucket hats.png", // Bucket Hats
                "/snapbacks.png", // Snapbacks
              ]
              return (
                <Link
                  key={category.key}
                  href="/shop"
                  className="group relative overflow-hidden rounded-lg bg-background shadow-md transition-all hover:shadow-lg aspect-square w-full max-w-[300px]"
                >
                  <div className="relative overflow-hidden aspect-square">
                    <Image
                      src={categoryImages[index]}
                      alt={category.label}
                      fill
                      className="w-full h-full object-cover object-center transition-transform group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 w-full p-4">
                      <h3 className="text-lg font-semibold text-white">{category.label}</h3>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>




    </main>
  )
}
