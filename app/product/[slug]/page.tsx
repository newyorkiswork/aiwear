"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Minus, Plus, Heart, ShoppingCart, Star, Truck, Shield, RotateCcw, CheckCircle, CreditCard, QrCode } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/language-context"
import { useCart } from "@/lib/cart-context"
import { getProductBySlug } from "@/lib/product-data"
import { createOrder, type Order } from "@/lib/order-management"

export default function ProductPage() {
  const { t } = useLanguage()
  const { addToCart, getTotalItems } = useCart()
  const params = useParams()
  const slug = params.slug as string
  
  const product = getProductBySlug(slug)
  
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "")
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "")
  const [quantity, setQuantity] = useState(1)
  const [showAddedMessage, setShowAddedMessage] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<'zelle' | 'cashapp' | null>(null)
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null)
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })

          if (!product) {
          return (
            <div className="container px-4 py-8 md:px-6 md:py-12">
              <div className="text-center py-12">
                <h1 className="text-2xl font-bold mb-4">{t('product.notFound.title')}</h1>
                <p className="text-muted-foreground mb-8">{t('product.notFound.description')}</p>
                <Button asChild>
                  <Link href={`/shop/${product.brand}`}>{t('product.backToShop')}</Link>
                </Button>
              </div>
            </div>
          )
        }

  const handleAddToCart = () => {
    if (!product) return
    
    console.log('Adding to cart:', {
      id: product.id,
      name: product.name,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity
    })
    
    addToCart({
      id: product.id,
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

  const handleCheckout = () => {
    setShowCheckout(true)
  }

  const handleCreateOrder = () => {
    if (!product || !customerInfo.name || !customerInfo.email || !customerInfo.phone || !customerInfo.address) {
      alert('Please fill in all customer information')
      return
    }

    const order = createOrder({
      customerName: customerInfo.name,
      customerEmail: customerInfo.email,
      customerPhone: customerInfo.phone,
      items: [{
        id: product.id,
        name: `${product.name} (${selectedColor})`,
        size: selectedSize,
        color: selectedColor,
        quantity: quantity,
        price: product.price,
        image: product.image
      }],
      total: product.price * quantity,
      paymentMethod: paymentMethod!,
      paymentStatus: 'pending',
      orderStatus: 'pending',
      shippingAddress: customerInfo.address
    })

    setCurrentOrder(order)
  }

  const handlePaymentMethodSelect = (method: 'zelle' | 'cashapp') => {
    setPaymentMethod(method)
  }

  const handlePaymentComplete = () => {
    // This would typically process the payment and redirect
    console.log('Payment completed with:', paymentMethod)
    setShowCheckout(false)
    setPaymentMethod(null)
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
          <Link href={`/shop/${product.brand}`} className="hover:text-primary">
            AI Runs on {product.brand === 'tokens' ? 'Tokens' : 'Data'}
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
              <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
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

          {/* Quick Checkout Button */}
          <Button 
            className="w-full" 
            size="lg"
            variant="default"
            onClick={handleCheckout}
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Quick Checkout - ${(product.price * quantity).toFixed(2)}
          </Button>

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

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Checkout</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setShowCheckout(false)
                    setPaymentMethod(null)
                    setCurrentOrder(null)
                  }}
                >
                  ×
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Order Summary */}
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Order Summary</h3>
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={60}
                    height={60}
                    className="rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{product.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Size: {selectedSize} | Color: {selectedColor} | Qty: {quantity}
                    </p>
                  </div>
                  <p className="font-medium">${(product.price * quantity).toFixed(2)}</p>
                </div>
                <Separator />
                <div className="flex justify-between items-center pt-2">
                  <span className="font-medium">Total</span>
                  <span className="font-bold text-lg">${(product.price * quantity).toFixed(2)}</span>
                </div>
              </div>

              {/* Customer Information Form */}
              {!currentOrder && (
                <div className="space-y-4">
                  <h3 className="font-medium">Customer Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Full Name *</label>
                      <Input
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                        placeholder="Enter your full name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email *</label>
                      <Input
                        type="email"
                        value={customerInfo.email}
                        onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                        placeholder="Enter your email"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Phone *</label>
                      <Input
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                        placeholder="Enter your phone number"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Shipping Address *</label>
                      <Input
                        value={customerInfo.address}
                        onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                        placeholder="Enter your shipping address"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Methods */}
              {!currentOrder && (
                <div className="space-y-3">
                  <h3 className="font-medium">Select Payment Method</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant={paymentMethod === 'zelle' ? "default" : "outline"}
                      className="h-16 flex-col gap-1"
                      onClick={() => handlePaymentMethodSelect('zelle')}
                    >
                      <Image
                        src="/zelle-logo.jpg"
                        alt="Zelle"
                        width={40}
                        height={20}
                        className="object-contain"
                      />
                      <span className="text-xs">Zelle</span>
                    </Button>
                    <Button
                      variant={paymentMethod === 'cashapp' ? "default" : "outline"}
                      className="h-16 flex-col gap-1"
                      onClick={() => handlePaymentMethodSelect('cashapp')}
                    >
                      <Image
                        src="/cashapp-button.png"
                        alt="CashApp"
                        width={40}
                        height={20}
                        className="object-contain"
                      />
                      <span className="text-xs">CashApp</span>
                    </Button>
                  </div>
                </div>
              )}

              {/* Create Pre-Order Button */}
              {!currentOrder && paymentMethod && (
                <Button
                  className="w-full"
                  size="lg"
                  onClick={handleCreateOrder}
                  disabled={!customerInfo.name || !customerInfo.email || !customerInfo.phone || !customerInfo.address}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Create Pre-Order
                </Button>
              )}

              {/* Order Created - Payment Instructions */}
              {currentOrder && (
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 bg-green-50 border-green-200">
                    <h4 className="font-medium text-green-800 mb-2">✅ Pre-Order Created Successfully!</h4>
                    <p className="text-sm text-green-700">
                      Order Number: <strong>{currentOrder.orderNumber}</strong>
                    </p>
                    <p className="text-sm text-green-700">
                      Confirmation Code: <strong className="bg-gold-500 text-white px-2 py-1 rounded">{currentOrder.confirmationCode}</strong>
                    </p>
                    <p className="text-sm text-green-700">
                      A confirmation email has been sent to your email address.
                    </p>
                  </div>

                  {/* Payment Instructions */}
                  <div className="border rounded-lg p-4 bg-muted/50">
                    <h4 className="font-medium mb-2">
                      {currentOrder.paymentMethod === 'zelle' ? 'Zelle' : 'CashApp'} Payment Instructions
                    </h4>
                    <div className="space-y-2 text-sm">
                      {currentOrder.paymentMethod === 'zelle' ? (
                        <>
                          <p>1. Send payment to: <strong>347-806-7290</strong></p>
                          <p>2. Include this memo: <strong className="bg-yellow-100 px-2 py-1 rounded">{currentOrder.memo}</strong></p>
                          <p>3. We'll ship your order within 24 hours of payment confirmation</p>
                        </>
                      ) : (
                        <>
                          <p>1. Send payment to: <strong>$newyorkishome</strong></p>
                          <p>2. Include this memo: <strong className="bg-yellow-100 px-2 py-1 rounded">{currentOrder.memo}</strong></p>
                          <p>3. We'll ship your order within 24 hours of payment confirmation</p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Payment Links */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open('https://www.zellepay.com/get-started', '_blank')}
                    >
                      <QrCode className="h-4 w-4 mr-2" />
                      Zelle Setup
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open('https://cash.app/$newyorkishome', '_blank')}
                    >
                      <QrCode className="h-4 w-4 mr-2" />
                      CashApp Pay
                    </Button>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Your pre-order has been created! Please complete payment using the instructions above. 
                      You'll receive an email confirmation with tracking information once payment is confirmed.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
