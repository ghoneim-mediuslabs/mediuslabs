'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, BookOpen, Shirt, UtensilsCrossed, Calendar } from 'lucide-react'
import type { Locale } from '@/lib/i18n'

const navItems = [
  { href: '', icon: Home, labelAr: 'الرئيسية', labelEn: 'Home', color: 'text-gray-600' },
  { href: '/academic', icon: BookOpen, labelAr: 'الأكاديمية', labelEn: 'Academic', color: 'text-academic' },
  { href: '/uniforms', icon: Shirt, labelAr: 'الزي', labelEn: 'Uniforms', color: 'text-uniforms' },
  { href: '/canteen', icon: UtensilsCrossed, labelAr: 'الكانتين', labelEn: 'Canteen', color: 'text-canteen' },
  { href: '/events', icon: Calendar, labelAr: 'الفعاليات', labelEn: 'Events', color: 'text-events' },
]

export default function BottomNav({ locale }: { locale: Locale }) {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="max-w-[430px] mx-auto flex justify-around items-center h-16">
        {navItems.map((item) => {
          const fullHref = `/${locale}${item.href}`
          const isActive = pathname === fullHref || (item.href === '' && pathname === `/${locale}`)
          const Icon = item.icon
          const label = locale === 'ar' ? item.labelAr : item.labelEn

          return (
            <Link
              key={item.href}
              href={fullHref}
              className={`flex flex-col items-center justify-center w-16 h-full transition-colors ${
                isActive ? item.color : 'text-gray-400'
              }`}
            >
              <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[10px] mt-1 ${isActive ? 'font-semibold' : ''}`}>
                {label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
