"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle, Package, Mail, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"
import { useLanguage } from "@/lib/language-context"

export default function CheckoutSuccessPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { t } = useLanguage()
  const { clearCart } = useCart()
  
  const sessionId = searchParams.get('session_id')

  // Clear cart on successful checkout
  useEffect(() => {
    if (sessionId) {
      clearCart()
    }
  }, [sessionId, clearCart])

  // Redirect if no session ID (user shouldn't be here)
  useEffect(() => {
    if (!sessionId) {
      router.push('/')
    }
  }, [sessionId, router])

  if (!sessionId) {
    return null
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-2">{t('checkout.success.title')}</h1>
          <p className="text-muted-foreground">{t('checkout.success.description')}</p>
        </div>

        {/* Order Details */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <Package className="h-5 w-5" />
              {t('checkout.success.orderDetails')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">{t('checkout.success.orderNumber')}</span>
              <span className="font-medium">{sessionId.slice(-8).toUpperCase()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">{t('checkout.success.status')}</span>
              <span className="text-green-600 font-medium">{t('checkout.success.confirmed')}</span>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{t('checkout.success.whatsNext')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                <div className="text-left">
                  <h3 className="font-medium">{t('checkout.success.email.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('checkout.success.email.description')}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Package className="h-5 w-5 text-green-600 mt-0.5" />
                <div className="text-left">
                  <h3 className="font-medium">{t('checkout.success.shipping.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('checkout.success.shipping.description')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/shop">
              {t('checkout.success.continueShopping')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">
              {t('checkout.success.backToHome')}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
