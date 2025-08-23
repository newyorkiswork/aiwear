"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, ShoppingBag, ShoppingCart } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

export default function BottomNav() {
  const pathname = usePathname()
  const { t } = useLanguage()

  const navItems = [
    {
      href: "/",
      label: t('nav.home'),
      icon: Home,
    },
    {
      href: "/shop",
      label: t('nav.shop'),
      icon: ShoppingBag,
    },
    {
      href: "/cart",
      label: t('nav.cart'),
      icon: ShoppingCart,
    },
  ]

  return (
                    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-silver md:hidden shadow-lg">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center py-2 px-3 min-w-0 flex-1 transition-colors",
                                            isActive
                              ? "text-gold"
                              : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
