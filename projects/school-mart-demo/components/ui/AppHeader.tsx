'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Globe } from 'lucide-react'
import type { Locale } from '@/lib/i18n'

interface AppHeaderProps {
  title: string
  locale: Locale
  color?: string
  showBack?: boolean
  backHref?: string
}

export default function AppHeader({
  title,
  locale,
  color = 'bg-gray-800',
  showBack = false,
  backHref,
}: AppHeaderProps) {
  const isRtl = locale === 'ar'
  const BackArrow = isRtl ? ArrowRight : ArrowLeft
  const otherLocale = locale === 'ar' ? 'en' : 'ar'

  return (
    <header className={`${color} text-white px-4 py-3 flex items-center justify-between sticky top-0 z-40`}>
      <div className="flex items-center gap-3">
        {showBack && backHref && (
          <Link href={backHref} className="p-1 -m-1 hover:opacity-80 transition-opacity">
            <BackArrow size={20} />
          </Link>
        )}
        <h1 className="font-semibold text-lg">{title}</h1>
      </div>
      <Link
        href={`/${otherLocale}${typeof window !== 'undefined' ? window.location.pathname.replace(`/${locale}`, '') : ''}`}
        className="p-2 -m-2 hover:opacity-80 transition-opacity flex items-center gap-1 text-sm"
      >
        <Globe size={16} />
        <span>{otherLocale.toUpperCase()}</span>
      </Link>
    </header>
  )
}
