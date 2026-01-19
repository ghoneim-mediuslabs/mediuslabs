'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, ShoppingCart, Bell, User, Package, Settings, LayoutDashboard, School, BarChart3, Truck } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { useSchool } from '@/lib/school-context'
import type { LucideIcon } from 'lucide-react'

interface NavItem {
  href: string
  icon: LucideIcon
  labelAr: string
  labelEn: string
}

const navConfigs: Record<string, { items: NavItem[], color: string }> = {
  '/parent': {
    color: 'text-blue-600',
    items: [
      { href: '/profile', icon: User, labelAr: 'حسابي', labelEn: 'Profile' },
      { href: '/notifications', icon: Bell, labelAr: 'الإشعارات', labelEn: 'Notifications' },
      { href: '/cart', icon: ShoppingCart, labelAr: 'السلة', labelEn: 'Cart' },
      { href: '', icon: LayoutDashboard, labelAr: 'الرئيسية', labelEn: 'Dashboard' },
    ]
  },
  '/school': {
    color: 'text-emerald-600',
    items: [
      { href: '/settings', icon: Settings, labelAr: 'الإعدادات', labelEn: 'Settings' },
      { href: '/orders', icon: ShoppingCart, labelAr: 'الطلبات', labelEn: 'Orders' },
      { href: '/products', icon: Package, labelAr: 'المنتجات', labelEn: 'Products' },
      { href: '', icon: LayoutDashboard, labelAr: 'الرئيسية', labelEn: 'Dashboard' },
    ]
  },
  '/supplier': {
    color: 'text-red-600',
    items: [
      { href: '/schools', icon: School, labelAr: 'المدارس', labelEn: 'Schools' },
      { href: '/orders', icon: ShoppingCart, labelAr: 'الطلبات', labelEn: 'Orders' },
      { href: '/catalog', icon: Package, labelAr: 'الكتالوج', labelEn: 'Catalog' },
      { href: '', icon: LayoutDashboard, labelAr: 'الرئيسية', labelEn: 'Dashboard' },
    ]
  },
  '/group': {
    color: 'text-violet-600',
    items: [
      { href: '/settings', icon: Settings, labelAr: 'الإعدادات', labelEn: 'Settings' },
      { href: '/analytics', icon: BarChart3, labelAr: 'التحليلات', labelEn: 'Analytics' },
      { href: '/schools', icon: School, labelAr: 'المدارس', labelEn: 'Schools' },
      { href: '', icon: LayoutDashboard, labelAr: 'الرئيسية', labelEn: 'Dashboard' },
    ]
  },
}

interface BottomNavProps {
  locale: Locale
  basePath: string
}

export default function BottomNav({ locale, basePath }: BottomNavProps) {
  const pathname = usePathname()
  const { buildHref } = useSchool()

  const config = navConfigs[basePath] || navConfigs['/parent']
  const navItems = config.items
  const activeColor = config.color

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-md mx-auto flex justify-around px-2 py-2">
        {navItems.map((item) => {
          const itemPath = `/${locale}${basePath}${item.href}`
          const fullHref = buildHref(itemPath)
          const isActive = pathname === itemPath || (item.href === '' && pathname === `/${locale}${basePath}`)
          const Icon = item.icon
          const label = locale === 'ar' ? item.labelAr : item.labelEn

          return (
            <Link
              key={item.href}
              href={fullHref}
              className={`flex flex-col items-center gap-1 rounded-lg px-4 py-2 transition-all duration-200 ${
                isActive
                  ? activeColor
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon className={`h-5 w-5 transition-transform duration-200 ${isActive ? 'scale-110' : ''}`} />
              <span className="text-xs font-medium">{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
