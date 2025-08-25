"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CreditCard, Shield, Truck, User, MapPin, QrCode } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

import { useCart } from "@/lib/cart-context"
import { useLanguage } from "@/lib/language-context"
import { createOrder } from "@/lib/order-management"

export default function CheckoutPage() {
  const router = useRouter()
  const { t } = useLanguage()
  const { items: cartItems, getTotalPrice, clearCart } = useCart()
  const [isLoading, setIsLoading] = useState(false)
  
  // Customer Information
  const [customerName, setCustomerName] = useState("")
  const [customerEmail, setCustomerEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  
  // Delivery Options
  const [deliveryOption, setDeliveryOption] = useState("pickup")
  
  // Shipping Information
  const [shippingAddress, setShippingAddress] = useState("")
  const [shippingCity, setShippingCity] = useState("")
  const [shippingState, setShippingState] = useState("")
  const [shippingZipCode, setShippingZipCode] = useState("")
  
  // Payment and Order
  const [paymentMethod, setPaymentMethod] = useState<'zelle' | 'cashapp' | null>(null)
  const [currentOrder, setCurrentOrder] = useState<any>(null)
  


  const subtotal = getTotalPrice()
  const tax = subtotal * 0.08
  const shippingCost = deliveryOption === "ship" ? 15.00 : 0
  const total = subtotal + tax + shippingCost

  const handlePaymentMethodSelect = (method: 'zelle' | 'cashapp') => {
    setPaymentMethod(method)
  }

  const handleCreateOrder = () => {
    console.log('Creating order with:', { customerName, customerEmail, phoneNumber, paymentMethod })
    
    if (!customerName || !customerEmail || !phoneNumber || !paymentMethod) {
      console.log('Missing required fields')
      return
    }

    // Prepare shipping address
    const fullShippingAddress = deliveryOption === "ship" 
      ? `${shippingAddress}, ${shippingCity}, ${shippingState} ${shippingZipCode}`
      : "Pickup"

    const orderData = {
      customerName,
      customerEmail,
      customerPhone: phoneNumber,
      items: cartItems,
      total,
      paymentMethod,
      paymentStatus: 'pending' as const,
      orderStatus: 'pending' as const,
      shippingAddress: fullShippingAddress
    }

    console.log('Order data:', orderData)
    
    try {
      const order = createOrder(orderData)
      console.log('Order created:', order)
      setCurrentOrder(order)
      clearCart() // Clear the cart after successful order creation
    } catch (error) {
      console.error('Error creating order:', error)
    }
  }



  // Redirect if cart is empty and no order was created
  useEffect(() => {
    if (cartItems.length === 0 && !currentOrder) {
      router.push('/cart')
    }
  }, [cartItems, router, currentOrder])



  if (cartItems.length === 0 && !currentOrder) {
    return (
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">{t('checkout.empty.title')}</h1>
          <p className="text-muted-foreground mb-8">{t('checkout.empty.description')}</p>
          <Button asChild>
            <Link href="/shop/tokens">{t('checkout.continueShopping')}</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/cart">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('checkout.backToCart')}
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-2">{t('checkout.title')}</h1>
        <p className="text-muted-foreground">{t('checkout.description')}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Order Summary */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                {t('checkout.orderSummary')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-md overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.size} | {item.color}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t('checkout.quantity')}: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
              
              <Separator />
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('checkout.subtotal')}</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('checkout.tax')}</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                {deliveryOption === "ship" && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('checkout.shipping')}</span>
                    <span>${shippingCost.toFixed(2)}</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between font-medium text-lg">
                  <span>{t('checkout.total')}</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Checkout Form */}
        <div className="space-y-6">
          {/* Customer Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Customer Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Delivery Options */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                Delivery Options
              </CardTitle>
            </CardHeader>
                         <CardContent className="space-y-4">
               <div className="space-y-3">
                 <div className="flex items-center space-x-2">
                   <input
                     type="radio"
                     id="pickup"
                     name="delivery"
                     value="pickup"
                     checked={deliveryOption === "pickup"}
                     onChange={(e) => setDeliveryOption(e.target.value)}
                     className="h-4 w-4"
                   />
                   <Label htmlFor="pickup" className="flex items-center gap-2">
                     <MapPin className="h-4 w-4" />
                     Pickup (Free)
                   </Label>
                 </div>
                 <div className="flex items-center space-x-2">
                   <input
                     type="radio"
                     id="ship"
                     name="delivery"
                     value="ship"
                     checked={deliveryOption === "ship"}
                     onChange={(e) => setDeliveryOption(e.target.value)}
                     className="h-4 w-4"
                   />
                   <Label htmlFor="ship" className="flex items-center gap-2">
                     <Truck className="h-4 w-4" />
                     Shipping ($15.00)
                   </Label>
                 </div>
               </div>

              {deliveryOption === "ship" && (
                <div className="space-y-4 mt-4 p-4 bg-muted rounded-lg">
                  <div className="space-y-2">
                    <Label htmlFor="address">Shipping Address *</Label>
                    <Input
                      id="address"
                      value={shippingAddress}
                      onChange={(e) => setShippingAddress(e.target.value)}
                      placeholder="Street address"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={shippingCity}
                        onChange={(e) => setShippingCity(e.target.value)}
                        placeholder="City"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        value={shippingState}
                        onChange={(e) => setShippingState(e.target.value)}
                        placeholder="State"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipcode">ZIP Code *</Label>
                    <Input
                      id="zipcode"
                      value={shippingZipCode}
                      onChange={(e) => setShippingZipCode(e.target.value)}
                      placeholder="ZIP Code"
                      required
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Payment Methods */}
          {!currentOrder && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Select Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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
              </CardContent>
            </Card>
          )}

          {/* Create Pre-Order Button */}
          {!currentOrder && paymentMethod && (
            <Button
              className="w-full"
              size="lg"
              onClick={handleCreateOrder}
              disabled={!customerName || !customerEmail || !phoneNumber || (deliveryOption === "ship" && (!shippingAddress || !shippingCity || !shippingState || !shippingZipCode))}
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Create Pre-Order
            </Button>
          )}

          {/* Order Created - Payment Instructions */}
          {currentOrder && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Instructions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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

                <div className="text-center space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Your pre-order has been created! Please complete payment using the instructions above. 
                    You'll receive an email confirmation with tracking information once payment is confirmed.
                  </p>
                  <div className="flex gap-2 justify-center">
                    <Button variant="outline" asChild>
                      <Link href="/shop/tokens">
                        <span className="flex items-center gap-2">
                          <span>🪙</span>
                          Shop Tokens
                        </span>
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/shop/data">
                        <span className="flex items-center gap-2">
                          <span>📊</span>
                          Shop Data
                        </span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Security Info */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="font-medium">Secure Payment</h3>
                  <p className="text-sm text-muted-foreground">
                    Your payment information is secure. We never store your payment details.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
