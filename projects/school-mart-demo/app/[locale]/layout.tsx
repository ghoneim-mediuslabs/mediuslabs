import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { isValidLocale, getDirection, type Locale } from '@/lib/i18n'
import { SchoolProvider } from '@/lib/school-context'

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
          {children}
        </SchoolProvider>
      </Suspense>
    </div>
  )
}
