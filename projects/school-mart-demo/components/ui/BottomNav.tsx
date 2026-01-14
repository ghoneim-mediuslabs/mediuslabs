'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, ShoppingCart, Bell, User } from 'lucide-react'
import type { Locale } from '@/lib/i18n'

const navItems = [
  { href: '/profile', icon: User, labelAr: 'حسابي', labelEn: 'Profile' },
  { href: '/notifications', icon: Bell, labelAr: 'الإشعارات', labelEn: 'Notifications' },
  { href: '/cart', icon: ShoppingCart, labelAr: 'السلة', labelEn: 'Cart' },
  { href: '', icon: Home, labelAr: 'الرئيسية', labelEn: 'Home' },
]

export default function BottomNav({ locale }: { locale: Locale }) {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-md mx-auto flex justify-around px-2 py-2">
        {navItems.map((item) => {
          const fullHref = `/${locale}${item.href}`
          const isActive = pathname === fullHref || (item.href === '' && pathname === `/${locale}`)
          const Icon = item.icon
          const label = locale === 'ar' ? item.labelAr : item.labelEn

          return (
            <Link
              key={item.href}
              href={fullHref}
              className={`flex flex-col items-center gap-1 rounded-lg px-4 py-2 transition-colors ${
                isActive
                  ? 'text-blue-600'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
