export const locales = ['en', 'ar'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'ar'

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

export function getDirection(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr'
}

// Type for translations
export type Translations = {
  common: {
    home: string
    academic: string
    uniforms: string
    canteen: string
    events: string
    back: string
    book: string
    addToCart: string
    confirm: string
    total: string
    wallet: string
    register: string
    consent: string
  }
  home: {
    welcome: string
    selectChild: string
    walletBalance: string
    quickActions: string
    recentActivity: string
  }
  academic: {
    title: string
    extraLessons: string
    materials: string
    bookNow: string
    perMonth: string
  }
  uniforms: {
    title: string
    schoolUniform: string
    supplies: string
    size: string
    addToCart: string
  }
  canteen: {
    title: string
    tomorrowOrder: string
    walletBalance: string
    topUp: string
    confirmOrder: string
    orderHistory: string
  }
  events: {
    title: string
    upcoming: string
    seatsLeft: string
    registerNow: string
    sendConsent: string
    consentRequired: string
    free: string
    details: string
  }
}
