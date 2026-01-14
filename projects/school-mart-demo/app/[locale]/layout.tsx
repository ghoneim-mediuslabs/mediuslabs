import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { isValidLocale, getDirection, type Locale } from '@/lib/i18n'
import { SchoolProvider } from '@/lib/school-context'
import BottomNav from '@/components/ui/BottomNav'

export function generateStaticParams() {
  return [{ locale: 'ar' }, { locale: 'en' }]
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!isValidLocale(params.locale)) {
    notFound()
  }

  const locale = params.locale as Locale
  const dir = getDirection(locale)

  return (
    <div lang={locale} dir={dir}>
      <Suspense fallback={null}>
        <SchoolProvider>
          <div className="app-shell pb-20">
            {children}
            <BottomNav locale={locale} />
          </div>
        </SchoolProvider>
      </Suspense>
    </div>
  )
}
