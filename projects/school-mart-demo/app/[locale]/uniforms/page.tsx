'use client'

import { useState } from 'react'
import { User, Check } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { uniforms, supplies, wallet, children, schools } from '@/lib/mock-data'
import AppHeader from '@/components/ui/AppHeader'

export default function UniformsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const [cart, setCart] = useState<{ id: string; size?: string }[]>([])
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({})

  const t = {
    title: isAr ? 'الزي والمستلزمات' : 'Uniforms & Supplies',
    uniform: isAr ? 'الزي المدرسي' : 'School Uniform',
    supplies: isAr ? 'الأدوات المدرسية' : 'School Supplies',
    size: isAr ? 'المقاس' : 'Size',
    addToCart: isAr ? 'أضف للسلة' : 'Add to Cart',
    added: isAr ? 'في السلة' : 'In Cart',
  }

  const child = children[0]
  const school = schools.find(s => s.id === child.schoolId) || schools[0]

  const addToCart = (id: string, size?: string) => {
    if (cart.find(item => item.id === id)) {
      setCart(prev => prev.filter(item => item.id !== id))
    } else {
      setCart(prev => [...prev, { id, size }])
    }
  }

  const isInCart = (id: string) => cart.some(item => item.id === id)

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader
        title={t.title}
        locale={locale}
        color="bg-uniforms"
        showBack
        backHref={`/${locale}`}
      />

      {/* Student Profile Card */}
      <div className="px-4 py-4">
        <div className="bg-amber-50 rounded-xl p-3 flex items-center gap-3">
          <img src={school.logo} alt="" className="w-8 h-8 rounded-lg" />
          <div>
            <span className="font-semibold text-gray-800">
              {isAr ? child.name : child.nameEn}
            </span>
            <span className="text-gray-500 mx-2">-</span>
            <span className="text-gray-600">{isAr ? child.grade : child.gradeEn}</span>
            <p className="text-xs text-gray-500">{isAr ? school.name : school.nameEn}</p>
          </div>
        </div>
      </div>

      {/* School Uniform */}
      <div className="px-4 pb-4">
        <h2 className="text-sm font-medium text-gray-500 mb-3">{t.uniform}</h2>
        <div className="space-y-3">
          {uniforms.map((item) => {
            const inCart = isInCart(item.id)
            return (
              <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex gap-3">
                  <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">
                      {isAr ? item.name : item.nameEn}
                    </h3>
                    <div className="flex items-center gap-2 my-2">
                      <span className="text-xs text-gray-500">{t.size}:</span>
                      <select
                        value={selectedSizes[item.id] || item.sizes[1]}
                        onChange={(e) => setSelectedSizes(prev => ({ ...prev, [item.id]: e.target.value }))}
                        className="border border-gray-200 rounded px-2 py-1 text-sm"
                      >
                        {item.sizes.map(size => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                    <p className="text-emerald-600 font-semibold">
                      {item.price} {isAr ? wallet.currencyAr : wallet.currency}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => addToCart(item.id, selectedSizes[item.id] || item.sizes[1])}
                  className={`w-full mt-3 py-2.5 rounded-lg font-medium transition-colors ${
                    inCart
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-uniforms text-white hover:bg-purple-700'
                  }`}
                >
                  {inCart ? (
                    <span className="flex items-center justify-center gap-2">
                      <Check size={18} />
                      {t.added}
                    </span>
                  ) : (
                    t.addToCart
                  )}
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* School Supplies */}
      <div className="px-4 pb-24">
        <h2 className="text-sm font-medium text-gray-500 mb-3">{t.supplies}</h2>
        <div className="space-y-3">
          {supplies.map((item) => {
            const inCart = isInCart(item.id)
            return (
              <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {isAr ? item.name : item.nameEn}
                      </h3>
                      <p className="text-emerald-600 font-semibold text-sm">
                        {item.price} {isAr ? wallet.currencyAr : wallet.currency}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => addToCart(item.id)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                      inCart
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-white text-uniforms border border-uniforms hover:bg-purple-50'
                    }`}
                  >
                    {inCart ? t.added : t.addToCart}
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
