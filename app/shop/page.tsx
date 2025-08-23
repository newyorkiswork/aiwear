"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Heart, Search, ChevronDown, Filter, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useLanguage } from "@/lib/language-context"

export default function ShopPage() {
  const { t } = useLanguage()
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
  })
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const products = [
    {
      id: 1,
      name: "AI Runs On Tokens Shirt",
      image: "/shirts.png",
      price: 19.99,
      offerPrice: 19.99,
      category: "Shirts",
      brand: "A.I Wear",
      rating: 4.5,
      slug: "ai-runs-on-tokens-shirt",
    },
    {
      id: 2,
      name: "AI Runs On Tokens Crewneck",
      image: "/crewnecks.png",
      price: 29.99,
      offerPrice: 29.99,
      category: "Crewnecks",
      brand: "A.I Wear",
      rating: 4.8,
      slug: "ai-runs-on-tokens-crewneck",
    },
    {
      id: 3,
      name: "AI Runs On Tokens Hoodie",
      image: "/hoodies.png",
      price: 39.99,
      offerPrice: 39.99,
      category: "Hoodies",
      brand: "A.I Wear",
      rating: 4.7,
      slug: "ai-runs-on-tokens-hoodie",
    },
    {
      id: 4,
      name: "AI Runs On Tokens Sweatpants",
      image: "/sweatpants.png",
      price: 34.99,
      offerPrice: 34.99,
      category: "Sweatpants",
      brand: "A.I Wear",
      rating: 4.6,
      slug: "ai-runs-on-tokens-sweatpants",
    },
    {
      id: 5,
      name: "AI Runs On Tokens Socks",
      image: "/socks.png",
      price: 14.99,
      offerPrice: 14.99,
      category: "Socks",
      brand: "A.I Wear",
      rating: 4.4,
      slug: "ai-runs-on-tokens-socks",
    },
    {
      id: 6,
      name: "AI Runs On Tokens Bucket Hat",
      image: "/bucket hats.png",
      price: 29.99,
      offerPrice: 29.99,
      category: "Bucket Hats",
      brand: "A.I Wear",
      rating: 4.3,
      slug: "ai-runs-on-tokens-bucket-hat",
    },
    {
      id: 7,
      name: "AI Runs On Tokens Snapback",
      image: "/snapbacks.png",
      price: 29.99,
      offerPrice: 29.99,
      category: "Snapbacks",
      brand: "A.I Wear",
      rating: 4.5,
      slug: "ai-runs-on-tokens-snapback",
    },
  ]

  const toggleFilter = (type, value) => {
    setSelectedFilters((prev) => {
      const current = [...prev[type]]
      const index = current.indexOf(value)

      if (index === -1) {
        current.push(value)
      } else {
        current.splice(index, 1)
      }

      return {
        ...prev,
        [type]: current,
      }
    })
  }

  const clearFilters = () => {
    setSelectedFilters({
      categories: [],
    })
  }

  const FilterSidebar = ({ isMobile = false }) => (
    <div className={`space-y-6 ${isMobile ? "" : "sticky top-20"}`}>
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-lg">{t('shop.filters')}</h3>
        {(selectedFilters.categories.length > 0) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="h-8 text-xs text-primary hover:text-primary/80"
          >
            {t('shop.clearAll')}
          </Button>
        )}
      </div>

      <div className="space-y-4">
        <Accordion type="single" collapsible defaultValue="categories">
          <AccordionItem value="categories">
            <AccordionTrigger>{t('shop.categories')}</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {["Shirts", "Crewnecks", "Hoodies", "Sweatpants", "Socks", "Bucket Hats", "Snapbacks"].map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category}`}
                      checked={selectedFilters.categories.includes(category)}
                      onCheckedChange={() => toggleFilter("categories", category)}
                    />
                    <Label htmlFor={`category-${category}`} className="text-sm font-normal cursor-pointer">
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>






        </Accordion>
      </div>
    </div>
  )

  const filteredProducts = products.filter((product) => {
    // Filter by category
    if (selectedFilters.categories.length > 0 && !selectedFilters.categories.includes(product.category)) {
      return false
    }

    return true
  })

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{t('shop.title')}</h1>
        <div className="flex items-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Shop</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters - Desktop */}
        <div className="hidden md:block w-64 shrink-0">
          <FilterSidebar />
        </div>

        {/* Filters - Mobile */}
        <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
          <SheetContent side="left" className="w-full sm:max-w-md">
            <SheetHeader className="mb-4">
                          <SheetTitle>{t('shop.filters')}</SheetTitle>
            <SheetDescription>{t('shop.adjustFilters')}</SheetDescription>
            </SheetHeader>
            <FilterSidebar isMobile={true} />
          </SheetContent>
        </Sheet>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="md:hidden flex items-center gap-2"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <Filter className="h-4 w-4" />
                {t('shop.filters')}
              </Button>

              {/* Active filters */}
              <div className="flex flex-wrap gap-2">
                {selectedFilters.categories.map((category) => (
                  <Badge key={`cat-${category}`} variant="secondary" className="flex items-center gap-1">
                    {category}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => toggleFilter("categories", category)} />
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <span className="text-sm text-muted-foreground hidden sm:inline">{filteredProducts.length} {t('shop.products')}</span>
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={t('shop.sortBy')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">{t('shop.featured')}</SelectItem>
                  <SelectItem value="price-low">{t('shop.priceLowToHigh')}</SelectItem>
                  <SelectItem value="price-high">{t('shop.priceHighToLow')}</SelectItem>
                  <SelectItem value="newest">{t('shop.newestArrivals')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">{t('shop.noProductsFound')}</h3>
              <p className="text-muted-foreground mb-4">{t('shop.adjustFilters')}</p>
              <Button onClick={clearFilters}>{t('shop.clearAllFilters')}</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link key={product.id} href={`/product/${product.slug}`} className="group relative">
                  <div className="aspect-square overflow-hidden rounded-lg bg-background">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        <Heart className="h-4 w-4" />
                        <span className="sr-only">{t('shop.addToWishlist')}</span>
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        <Search className="h-4 w-4" />
                        <span className="sr-only">{t('shop.quickView')}</span>
                      </Button>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                      <Button className="mx-auto">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        {t('shop.addToCart')}
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1 text-center">
                    <Badge variant="outline" className="mb-2">
                      {product.category}
                    </Badge>
                    <h3 className="font-medium">{product.name}</h3>
                    <div className="flex justify-center">
                      <span className="font-medium text-primary">${product.price.toFixed(2)}</span>
                    </div>

                  </div>
                </Link>
              ))}
            </div>
          )}


        </div>
      </div>
    </div>
  )
}
