"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"
import { useLanguage } from "@/lib/language-context"

export default function CartPage() {
  const { t } = useLanguage()
  const { items: cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart()

  const subtotal = getTotalPrice()
  const tax = subtotal * 0.08
  const total = subtotal + tax
  
  // Debug logging
  console.log('Cart Page Debug:', { 
    subtotal, 
    tax, 
    total, 
    cartItemsCount: cartItems.length,
    cartItems: cartItems.map(item => ({
      id: item.id,
      name: item.name,
      size: item.size,
      color: item.color,
      quantity: item.quantity,
      price: item.price
    }))
  })

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{t('cart.title')}</h1>
        <div className="flex items-center text-sm text-muted-foreground">
                      <Link href="/" className="hover:text-primary">
              {t('nav.home')}
            </Link>
            <span className="mx-2">/</span>
            <span>{t('nav.cart')}</span>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">{t('cart.empty.title')}</h2>
          <p className="text-muted-foreground mb-8">
            {t('cart.empty.description')}
          </p>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Continue shopping from our brands:</p>
            <div className="flex gap-4 justify-center">
              <Button asChild variant="outline">
                <Link href="/shop/tokens">
                  <span className="flex items-center gap-2">
                    <span>🪙</span>
                    AI Runs on Tokens
                  </span>
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/shop/data">
                  <span className="flex items-center gap-2">
                    <span>📊</span>
                    AI Runs on Data
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="rounded-lg border bg-card">
              <div className="p-6">
                <div className="hidden md:grid grid-cols-14 gap-4 pb-4 text-sm font-medium text-muted-foreground">
                  <div className="col-span-6">{t('cart.product')}</div>
                  <div className="col-span-2 text-center">{t('cart.price')}</div>
                  <div className="col-span-2 text-center">Size | Color</div>
                  <div className="col-span-2 text-center">{t('cart.quantity')}</div>
                  <div className="col-span-2 text-right">{t('cart.subtotal')}</div>
                </div>
                <Separator />
                {cartItems.map((item, index) => (
                  <div key={item.id}>
                    <div className="py-6">
                      <div className="grid grid-cols-1 md:grid-cols-14 gap-4 items-center">
                        <div className="col-span-6 flex items-center gap-4">
                          <div className="relative h-20 w-20 rounded-md overflow-hidden">
                            <Image 
                              src={item.image || "/placeholder.svg"} 
                              alt={item.name} 
                              fill 
                              className="object-cover" 
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-medium">{item.name}</h3>
                              <Badge variant="outline" className="text-xs">
                                {item.name.includes('Tokens') ? '🪙 Tokens' : '📊 Data'}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground md:hidden">
                              ${item.price.toFixed(2)}
                            </p>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="mt-1 h-auto p-0 text-sm text-destructive hover:text-destructive/80 md:hidden"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Trash2 className="mr-1 h-3 w-3" />
                              {t('cart.remove')}
                            </Button>
                          </div>
                        </div>
                        <div className="col-span-2 text-center hidden md:block">
                          ${item.price.toFixed(2)}
                        </div>
                        <div className="col-span-2 text-center hidden md:block">
                          {item.size} | {item.color}
                        </div>
                        <div className="col-span-2 flex items-center justify-center">
                          <div className="flex items-center border rounded-md">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-none"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                              <span className="sr-only">Decrease</span>
                            </Button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-none"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                              <span className="sr-only">Increase</span>
                            </Button>
                          </div>
                        </div>
                        <div className="col-span-2 text-right flex items-center justify-between md:justify-end">
                          <span className="font-medium">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-destructive hover:text-destructive/80 hidden md:inline-flex"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Remove</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                    {index < cartItems.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
              <div className="bg-muted p-6 rounded-b-lg space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Continue Shopping</h3>
                  <Button variant="ghost" onClick={() => clearCart()}>
                    {t('cart.clearCart')}
                  </Button>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <Link href="/shop/tokens">
                      <span className="flex items-center gap-2">
                        <span>🪙</span>
                        Tokens
                      </span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <Link href="/shop/data">
                      <span className="flex items-center gap-2">
                        <span>📊</span>
                        Data
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">{t('cart.orderSummary')}</h2>
                
                {/* Brand Summary */}
                <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                  <h3 className="text-sm font-medium">Items by Brand</h3>
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-1">
                      <span>🪙</span>
                      Tokens: {cartItems.filter(item => item.name.includes('Tokens')).reduce((sum, item) => sum + item.quantity, 0)} items
                    </span>
                    <span className="flex items-center gap-1">
                      <span>📊</span>
                      Data: {cartItems.filter(item => item.name.includes('Data')).reduce((sum, item) => sum + item.quantity, 0)} items
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{t('cart.subtotal.label')}</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{t('cart.tax')}</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between font-medium text-lg">
                    <span>{t('cart.total')}</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full" size="lg" asChild>
                      <Link href="/checkout">
                        {t('cart.checkout')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="pt-4 space-y-4">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">or</span>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Input type="text" placeholder="Coupon code" className="rounded-r-none" />
                        <Button className="rounded-l-none">Apply</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}
