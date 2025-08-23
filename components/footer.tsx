"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="border-t border-silver bg-background">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground text-center">
              Where technology meets fashion. Cutting-edge style for the modern digital age.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} A.I Wear. {t('footer.rights')}
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
                {t('footer.privacy')}
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
                {t('footer.terms')}
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
                {t('footer.cookies')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
