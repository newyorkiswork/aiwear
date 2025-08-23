"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CreditCard, Shield, Truck, User, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

import { useCart } from "@/lib/cart-context"
import { useLanguage } from "@/lib/language-context"

export default function CheckoutPage() {
  const router = useRouter()
  const { t } = useLanguage()
  const { items: cartItems, getTotalPrice, clearCart } = useCart()
  const [isLoading, setIsLoading] = useState(false)
  
  // Customer Information
  const [customerName, setCustomerName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  
  // Delivery Options
  const [deliveryOption, setDeliveryOption] = useState("pickup")
  
  // Shipping Information
  const [shippingAddress, setShippingAddress] = useState("")
  const [shippingCity, setShippingCity] = useState("")
  const [shippingState, setShippingState] = useState("")
  const [shippingZipCode, setShippingZipCode] = useState("")
  


  const subtotal = getTotalPrice()
  const tax = subtotal * 0.08
  const shippingCost = deliveryOption === "ship" ? 15.00 : 0
  const total = subtotal + tax + shippingCost



  // Redirect if cart is empty
  useEffect(() => {
    if (cartItems.length === 0) {
      router.push('/cart')
    }
  }, [cartItems, router])



  if (cartItems.length === 0) {
    return (
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">{t('checkout.empty.title')}</h1>
          <p className="text-muted-foreground mb-8">{t('checkout.empty.description')}</p>
          <Button asChild>
            <Link href="/shop">{t('checkout.continueShopping')}</Link>
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

          {/* Payment Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                Secure payment processing
              </div>
              
              <div className="space-y-4">
                               <div className="space-y-4">
                 <Button 
                   onClick={() => window.open('https://enroll.zellepay.com/qr-codes?data=ewogICJuYW1lIiA6ICJKQU1JTExBSCIsCiAgInRva2VuIiA6ICJqYW1pbGxhaGMyQGdtYWlsLmNvbSIsCiAgImFjdGlvbiIgOiAicGF5bWVudCIKfQ==', '_blank')}
                   className="w-full h-16 p-4 bg-white border-2 border-gray-200 hover:border-gray-300 transition-colors"
                   variant="outline"
                 >
                   <Image
                     src="/zelle-logo.jpg"
                     alt="Pay with Zelle"
                     width={120}
                     height={60}
                     className="h-12 w-auto mx-auto"
                   />
                 </Button>
                 
                 <Button 
                   onClick={() => window.open('https://cash.app/$jkkcorley', '_blank')}
                   className="w-full h-16 p-4 bg-white border-2 border-gray-200 hover:border-gray-300 transition-colors"
                   variant="outline"
                 >
                   <Image
                     src="/cashapp-button.png"
                     alt="Pay with Cash App"
                     width={120}
                     height={60}
                     className="h-12 w-auto mx-auto"
                   />
                 </Button>
                 
                 <div className="text-center text-sm text-muted-foreground">
                   <p>Click either button to complete your payment of <strong>${total.toFixed(2)}</strong></p>
                   <p className="mt-2">After payment, please contact us with your order details</p>
                 </div>
               </div>
                
                <p className="text-xs text-muted-foreground text-center">
                  By clicking Pay, you agree to our terms of service
                </p>
              </div>
            </CardContent>
          </Card>

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
