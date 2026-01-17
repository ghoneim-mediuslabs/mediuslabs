'use client'

import Link from 'next/link'
import { Info, Home } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { useSchool } from '@/lib/school-context'

interface DemoBannerProps {
  locale: Locale
  appNameAr: string
  appNameEn: string
}

export default function DemoBanner({ locale, appNameAr, appNameEn }: DemoBannerProps) {
  const isAr = locale === 'ar'
  const { buildHref } = useSchool()

  const t = {
    demoNotice: isAr
      ? `هذا عرض توضيحي لتطبيق ${appNameAr}`
      : `This is a demo of the ${appNameEn} app`,
    backToHome: isAr ? 'العودة للرئيسية' : 'Back to Home',
  }

  return (
    <div className="bg-amber-50 border-b border-amber-200 px-4 py-2">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-amber-700">
          <Info size={16} className="flex-shrink-0" />
          <span className="text-xs font-medium">{t.demoNotice}</span>
        </div>
        <Link
          href={buildHref(`/${locale}`)}
          className="flex items-center gap-1 text-xs font-medium text-amber-700 hover:text-amber-800 transition-colors whitespace-nowrap"
        >
          <Home size={14} />
          <span>{t.backToHome}</span>
        </Link>
      </div>
    </div>
  )
}
