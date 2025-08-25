"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Star, Filter, SortAsc, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/lib/language-context"
import { useCart } from "@/lib/cart-context"
import { getProductsByBrand } from "@/lib/product-data"

export default function DataShopPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showSizeModal, setShowSizeModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [selectedSize, setSelectedSize] = useState("M")
  const { addToCart } = useCart()
  const { t } = useLanguage()

  // Get AI Runs on Data products from centralized data
  const products = getProductsByBrand("data")

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = ["all", ...Array.from(new Set(products.map(p => p.category)))]

  const handleAddToCart = (product: any) => {
    setSelectedProduct(product)
    setSelectedSize("M") // Reset to default size
    setShowSizeModal(true)
  }

  const handleConfirmAddToCart = () => {
    if (selectedProduct) {
      addToCart({
        id: selectedProduct.id,
        name: selectedProduct.name,
        image: selectedProduct.image,
        price: selectedProduct.price,
        category: selectedProduct.category,
        slug: selectedProduct.slug,
        size: selectedSize,
        color: selectedProduct.colors[0] || "Default",
        quantity: 1
      })
      setShowSizeModal(false)
      setSelectedProduct(null)
    }
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-silver to-gold py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              AI Runs on Data
            </h1>
            <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
              Where data science meets street style. Accessories for the modern tech enthusiast.
            </p>
            
            {/* Brand Switcher */}
            <div className="flex justify-center mt-6">
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-1 border">
                <div className="flex">
                  <Button variant="ghost" size="sm" asChild className="rounded-l-md">
                    <Link href="/shop/tokens">
                      <span className="flex items-center gap-2">
                        <span>🪙</span>
                        Tokens
                      </span>
                    </Link>
                  </Button>
                  <Button variant="default" size="sm" className="rounded-r-md">
                    <span className="flex items-center gap-2">
                      <span>📊</span>
                      Data
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-6 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-[300px]">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 rounded-full"
              />
            </div>
            <div className="flex gap-2">
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border rounded-md text-sm"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
              <Button variant="outline" size="sm">
                <SortAsc className="h-4 w-4 mr-2" />
                Sort
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
                              <Card key={product.id} className="group overflow-hidden">
                  <CardContent className="p-0">
                    <Link href={`/product/${product.slug}`}>
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />

                      </div>
                    </Link>
                    <CardFooter className="p-4 space-y-2">
                      <div className="w-full">
                        <Link href={`/product/${product.slug}`}>
                          <h3 className="font-semibold text-sm mb-1 hover:text-gold transition-colors">{product.name}</h3>
                        </Link>
                        <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs ml-1">{product.rating}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">({product.reviews})</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-lg">${product.price}</span>
                          <Button 
                            size="sm" 
                            onClick={() => handleAddToCart(product)}
                            className="bg-gold-500 hover:bg-gold-600 text-white"
                          >
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </CardFooter>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Size Selection Modal */}
      <Dialog open={showSizeModal} onOpenChange={setShowSizeModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Select Size</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {selectedProduct && (
              <div className="flex items-center gap-4 p-4 border rounded-lg">
                <div className="relative w-16 h-16">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{selectedProduct.name}</h3>
                  <p className="text-sm text-muted-foreground">${selectedProduct.price}</p>
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Size</label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="XS">XS</SelectItem>
                  <SelectItem value="S">S</SelectItem>
                  <SelectItem value="M">M</SelectItem>
                  <SelectItem value="L">L</SelectItem>
                  <SelectItem value="XL">XL</SelectItem>
                  <SelectItem value="XXL">XXL</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2 pt-4">
              <Button
                variant="outline"
                onClick={() => setShowSizeModal(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={handleConfirmAddToCart}
                className="flex-1 bg-gold-500 hover:bg-gold-600 text-white"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  )
}
