"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Minus, Plus, Heart, ShoppingCart, Star, Truck, Shield, RotateCcw, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/lib/language-context"
import { useCart } from "@/lib/cart-context"

// Product data - in a real app this would come from an API or database
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
    description: "Premium quality shirt featuring the iconic 'AI Runs On Tokens' design. Made from 100% cotton for maximum comfort and style.",
    features: [
      "100% Premium Cotton",
      "Comfortable fit",
      "Machine washable",
      "Available in multiple sizes"
    ],
         sizes: ["XS", "S", "M", "L", "XL", "XXL"],
     colors: ["White", "Black", "Navy", "Dark Green", "Gray"]
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
    description: "Stylish crewneck sweatshirt with the signature 'AI Runs On Tokens' graphic. Perfect for casual wear and tech enthusiasts.",
    features: [
      "Premium cotton blend",
      "Ribbed cuffs and hem",
      "Comfortable fit",
      "Machine washable"
    ],
         sizes: ["XS", "S", "M", "L", "XL", "XXL"],
     colors: ["White", "Black", "Navy", "Dark Green", "Gray"]
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
    description: "Comfortable hoodie featuring the 'AI Runs On Tokens' design. Perfect for layering and casual wear.",
    features: [
      "Fleece-lined hood",
      "Kangaroo pocket",
      "Drawstring closure",
      "Machine washable"
    ],
         sizes: ["XS", "S", "M", "L", "XL", "XXL"],
     colors: ["White", "Black", "Navy", "Dark Green", "Gray"]
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
    description: "Comfortable sweatpants with the 'AI Runs On Tokens' design. Perfect for lounging and casual wear.",
    features: [
      "Elastic waistband",
      "Drawstring closure",
      "Side pockets",
      "Machine washable"
    ],
         sizes: ["XS", "S", "M", "L", "XL", "XXL"],
     colors: ["White", "Black", "Navy", "Dark Green", "Gray"]
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
    description: "Comfortable socks featuring the 'AI Runs On Tokens' design. Perfect for everyday wear.",
    features: [
      "Cotton blend",
      "Cushioned sole",
      "Elastic arch support",
      "Machine washable"
    ],
         sizes: ["S", "M", "L"],
     colors: ["White", "Black", "Navy", "Dark Green", "Gray"]
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
    description: "Stylish bucket hat with the 'AI Runs On Tokens' design. Perfect for sun protection and casual wear.",
    features: [
      "100% Cotton",
      "Adjustable fit",
      "Sun protection",
      "Hand washable"
    ],
         sizes: ["One Size"],
     colors: ["White", "Black", "Navy", "Dark Green", "Gray"]
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
    description: "Classic snapback hat featuring the 'AI Runs On Tokens' design. Perfect for casual wear and street style.",
    features: [
      "Structured crown",
      "Snap closure",
      "Curved brim",
      "Hand washable"
    ],
         sizes: ["One Size"],
     colors: ["White", "Black", "Navy", "Dark Green", "Gray"]
  }
]

export default function ProductPage() {
  const { t } = useLanguage()
  const { addToCart, getTotalItems } = useCart()
  const params = useParams()
  const slug = params.slug as string
  
  const product = products.find(p => p.slug === slug)
  
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "")
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "")
  const [quantity, setQuantity] = useState(1)
  const [showAddedMessage, setShowAddedMessage] = useState(false)

          if (!product) {
          return (
            <div className="container px-4 py-8 md:px-6 md:py-12">
              <div className="text-center py-12">
                <h1 className="text-2xl font-bold mb-4">{t('product.notFound.title')}</h1>
                <p className="text-muted-foreground mb-8">{t('product.notFound.description')}</p>
                <Button asChild>
                  <Link href="/shop">{t('product.backToShop')}</Link>
                </Button>
              </div>
            </div>
          )
        }

  const handleAddToCart = () => {
    if (!product) return
    
    console.log('Adding to cart:', {
      name: product.name,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity
    })
    
    addToCart({
      name: product.name,
      image: product.image,
      price: product.price,
      category: product.category,
      slug: product.slug,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity
    })
    
    // Show success message
    setShowAddedMessage(true)
    setTimeout(() => setShowAddedMessage(false), 3000)
    
    console.log('Cart total items after adding:', getTotalItems())
  }

  const addToWishlist = () => {
    // This would typically add the item to wishlist
    console.log(`Added ${product.name} to wishlist`)
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            {t('nav.home')}
          </Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-primary">
            {t('nav.shop')}
          </Link>
          <span className="mx-2">/</span>
          <span>{product.name}</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-background">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          {/* Success Message */}
          {showAddedMessage && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-green-800 font-medium">
                  Added to cart! ({getTotalItems()} items total)
                </span>
              </div>
            </div>
          )}
          <div>
            <Badge variant="outline" className="mb-2">
              {product.category}
            </Badge>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.rating})</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">${product.offerPrice.toFixed(2)}</span>
              {product.price !== product.offerPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          {/* Size Selection */}
          {product.sizes.length > 1 && (
            <div className="space-y-3">
              <h3 className="font-medium">{t('product.size')}</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selection */}
          {product.colors.length > 1 && (
            <div className="space-y-3">
              <h3 className="font-medium">{t('product.color')}</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="space-y-3">
            <h3 className="font-medium">{t('product.quantity')}</h3>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button 
              className="flex-1" 
              size="lg"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              {t('product.addToCart')}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={addToWishlist}
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="font-medium">{t('product.features')}</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Shipping & Returns */}
          <Separator />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">

            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-muted-foreground" />
              <span>{t('product.returns.description')}</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4 text-muted-foreground" />
              <span>{t('product.exchange.description')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
