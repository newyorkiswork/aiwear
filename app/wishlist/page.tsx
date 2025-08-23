"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
      price: 49.99,
      offerPrice: 39.99,
      category: "Men's",
      inStock: true,
    },
    {
      id: 2,
      name: "Elegant Summer Dress",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
      price: 89.99,
      offerPrice: 69.99,
      category: "Women's",
      inStock: true,
    },
    {
      id: 3,
      name: "Denim Jacket",
      image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
      price: 124.99,
      offerPrice: 99.99,
      category: "Outerwear",
      inStock: false,
    },
  ])

  const removeFromWishlist = (id: number) => {
    setWishlistItems(items => items.filter(item => item.id !== id))
  }

  const addToCart = (id: number) => {
    // This would typically add the item to cart
    console.log(`Added item ${id} to cart`)
  }

  return (
    <div className="container px-4 py-6 md:px-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight">My Wishlist</h1>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-4">
              Start adding items you love to your wishlist
            </p>
            <Button>Start Shopping</Button>
          </div>
        ) : (
          <div className="space-y-4">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="group">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <Badge variant="outline" className="mb-2">
                            {item.category}
                          </Badge>
                          <h3 className="font-medium">{item.name}</h3>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromWishlist(item.id)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground line-through">${item.price.toFixed(2)}</span>
                        <span className="font-medium text-primary">${item.offerPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.inStock ? (
                          <span className="text-sm text-green-600">In Stock</span>
                        ) : (
                          <span className="text-sm text-red-600">Out of Stock</span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          disabled={!item.inStock}
                          onClick={() => addToCart(item.id)}
                          className="flex-1"
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
