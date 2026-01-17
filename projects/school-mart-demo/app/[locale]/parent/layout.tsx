'use client'

import BottomNav from '@/components/ui/BottomNav'
import type { Locale } from '@/lib/i18n'

export default function ParentLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const locale = params.locale as Locale

  return (
    <div className="app-shell pb-20">
      {children}
      <BottomNav locale={locale} basePath="/parent" />
    </div>
  )
}
