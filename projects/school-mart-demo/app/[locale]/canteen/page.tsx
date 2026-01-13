'use client'

import { useState } from 'react'
import { Wallet, Plus, Minus, ShoppingBag } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { canteenMenu, wallet } from '@/lib/mock-data'
import AppHeader from '@/components/ui/AppHeader'

export default function CanteenPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const [quantities, setQuantities] = useState<Record<string, number>>({})
  const [orderConfirmed, setOrderConfirmed] = useState(false)

  const t = {
    title: isAr ? 'الكانتين الذكي' : 'Smart Canteen',
    walletBalance: isAr ? 'رصيد المحفظة' : 'Wallet Balance',
    topUp: isAr ? 'شحن' : 'Top Up',
    tomorrowOrder: isAr ? 'طلب الغد - الأحد' : "Tomorrow's Order - Sunday",
    total: isAr ? 'الإجمالي' : 'Total',
    confirmOrder: isAr ? 'تأكيد الطلب' : 'Confirm Order',
    orderConfirmed: isAr ? 'تم تأكيد الطلب!' : 'Order Confirmed!',
    newOrder: isAr ? 'طلب جديد' : 'New Order',
  }

  const updateQuantity = (id: string, delta: number) => {
    setQuantities(prev => {
      const current = prev[id] || 0
      const newVal = Math.max(0, current + delta)
      if (newVal === 0) {
        const { [id]: _, ...rest } = prev
        return rest
      }
      return { ...prev, [id]: newVal }
    })
  }

  const total = Object.entries(quantities).reduce((sum, [id, qty]) => {
    const item = canteenMenu.find(m => m.id === id)
    return sum + (item?.price || 0) * qty
  }, 0)

  const itemCount = Object.values(quantities).reduce((sum, qty) => sum + qty, 0)

  const confirmOrder = () => {
    if (total > 0) {
      setOrderConfirmed(true)
    }
  }

  const resetOrder = () => {
    setQuantities({})
    setOrderConfirmed(false)
  }

  if (orderConfirmed) {
    return (
      <div className="min-h-screen bg-gray-50">
        <AppHeader
          title={t.title}
          locale={locale}
          color="bg-canteen"
          showBack
          backHref={`/${locale}`}
        />
        <div className="flex flex-col items-center justify-center px-4 py-20">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
            <ShoppingBag size={40} className="text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">{t.orderConfirmed}</h2>
          <p className="text-gray-500 mb-6">
            {total} {isAr ? wallet.currencyAr : wallet.currency}
          </p>
          <button
            onClick={resetOrder}
            className="bg-canteen text-white px-6 py-3 rounded-xl font-medium"
          >
            {t.newOrder}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader
        title={t.title}
        locale={locale}
        color="bg-canteen"
        showBack
        backHref={`/${locale}`}
      />

      {/* Wallet Balance */}
      <div className="px-4 py-4">
        <div className="bg-emerald-50 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet size={20} className="text-emerald-600" />
            <span className="text-gray-600">{t.walletBalance}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bold text-gray-800">
              {wallet.balance} {isAr ? wallet.currencyAr : wallet.currency}
            </span>
            <button className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">
              {t.topUp}
            </button>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="px-4 pb-4">
        <h2 className="text-sm font-medium text-gray-500 mb-3">{t.tomorrowOrder}</h2>
        <div className="space-y-3">
          {canteenMenu.map((item) => {
            const qty = quantities[item.id] || 0
            return (
              <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">
                      {isAr ? item.name : item.nameEn}
                    </h3>
                    <p className="text-emerald-600 font-semibold text-sm">
                      {item.price} {isAr ? wallet.currencyAr : wallet.currency}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        qty > 0
                          ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          : 'bg-gray-50 text-gray-300'
                      }`}
                      disabled={qty === 0}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-6 text-center font-semibold">{qty}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 rounded-full bg-canteen text-white flex items-center justify-center hover:bg-orange-600 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Order Summary */}
      {total > 0 && (
        <div className="fixed bottom-20 left-0 right-0 px-4 pb-4">
          <div className="max-w-[430px] mx-auto">
            <button
              onClick={confirmOrder}
              className="w-full bg-canteen text-white rounded-xl p-4 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm opacity-90">
                  {t.total}: {total} {isAr ? wallet.currencyAr : wallet.currency} ({itemCount})
                </span>
                <span className="font-semibold">{t.confirmOrder}</span>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
