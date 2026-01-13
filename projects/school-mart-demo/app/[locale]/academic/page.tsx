'use client'

import { useState } from 'react'
import { BookOpen, Clock, Check } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { extraLessons, educationalMaterials, wallet } from '@/lib/mock-data'
import AppHeader from '@/components/ui/AppHeader'

export default function AcademicPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const [bookedLessons, setBookedLessons] = useState<string[]>([])
  const [cart, setCart] = useState<string[]>([])

  const t = {
    title: isAr ? 'الخدمات الأكاديمية' : 'Academic Services',
    extraLessons: isAr ? 'الدروس الإضافية' : 'Extra Lessons',
    materials: isAr ? 'المواد التعليمية' : 'Educational Materials',
    bookNow: isAr ? 'احجز الآن' : 'Book Now',
    booked: isAr ? 'تم الحجز' : 'Booked',
    addToCart: isAr ? 'أضف للسلة' : 'Add to Cart',
    added: isAr ? 'تمت الإضافة' : 'Added',
    perMonth: isAr ? '/شهرياً' : '/month',
  }

  const toggleBook = (id: string) => {
    setBookedLessons(prev =>
      prev.includes(id) ? prev.filter(l => l !== id) : [...prev, id]
    )
  }

  const toggleCart = (id: string) => {
    setCart(prev =>
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader
        title={t.title}
        locale={locale}
        color="bg-academic"
        showBack
        backHref={`/${locale}`}
      />

      {/* Extra Lessons */}
      <div className="px-4 py-4">
        <h2 className="text-sm font-medium text-gray-500 mb-3">{t.extraLessons}</h2>
        <div className="space-y-3">
          {extraLessons.map((lesson) => {
            const isBooked = bookedLessons.includes(lesson.id)
            return (
              <div key={lesson.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800">
                    {isAr ? lesson.name : lesson.nameEn}
                  </h3>
                  <span className="text-emerald-600 font-semibold">
                    {lesson.price} {isAr ? wallet.currencyAr : wallet.currency}
                    <span className="text-xs text-gray-400">{t.perMonth}</span>
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                  <Clock size={14} />
                  <span>{isAr ? lesson.schedule : lesson.scheduleEn} • {isAr ? lesson.time : lesson.timeEn}</span>
                </div>
                <button
                  onClick={() => toggleBook(lesson.id)}
                  className={`w-full py-2.5 rounded-lg font-medium transition-colors ${
                    isBooked
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-academic text-white hover:bg-blue-700'
                  }`}
                >
                  {isBooked ? (
                    <span className="flex items-center justify-center gap-2">
                      <Check size={18} />
                      {t.booked}
                    </span>
                  ) : (
                    t.bookNow
                  )}
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* Educational Materials */}
      <div className="px-4 pb-24">
        <h2 className="text-sm font-medium text-gray-500 mb-3">{t.materials}</h2>
        <div className="space-y-3">
          {educationalMaterials.map((material) => {
            const isAdded = cart.includes(material.id)
            return (
              <div key={material.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <BookOpen size={20} className="text-academic" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {isAr ? material.name : material.nameEn}
                      </h3>
                      <span className="text-emerald-600 font-semibold text-sm">
                        {material.price} {isAr ? wallet.currencyAr : wallet.currency}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleCart(material.id)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                      isAdded
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-white text-academic border border-academic hover:bg-blue-50'
                    }`}
                  >
                    {isAdded ? t.added : t.addToCart}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
