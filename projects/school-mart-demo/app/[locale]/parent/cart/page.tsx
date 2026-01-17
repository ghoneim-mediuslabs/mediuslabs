'use client'

import { Trash2, Plus, Minus } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { wallet } from '@/lib/mock-data'
import AppHeader from '@/components/ui/AppHeader'

const cartItems = [
  { id: '1', nameAr: 'قميص أبيض', nameEn: 'White Shirt', size: 'M', qty: 2, price: 180, icon: '👕' },
  { id: '2', nameAr: 'بنطلون كحلي', nameEn: 'Navy Pants', size: '28', qty: 1, price: 220, icon: '👖' },
  { id: '3', nameAr: 'كتاب العلوم', nameEn: 'Science Book', size: null, qty: 1, price: 85, icon: '📚' },
]

export default function CartPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'

  const t = {
    title: isAr ? 'السلة' : 'Cart',
    items: isAr ? 'المنتجات' : 'Items',
    size: isAr ? 'المقاس' : 'Size',
    subtotal: isAr ? 'المجموع الفرعي' : 'Subtotal',
    total: isAr ? 'الإجمالي' : 'Total',
    checkout: isAr ? 'إتمام الشراء' : 'Checkout',
    empty: isAr ? 'السلة فارغة' : 'Cart is empty',
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0)
  const currency = isAr ? wallet.currencyAr : wallet.currency

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader
        title={t.title}
        locale={locale}
        color="bg-gray-800"
        showBack
        backHref={`/${locale}/parent`}
      />

      {/* Cart Items */}
      <div className="px-4 pt-4">
        <h3 className="font-semibold text-gray-800 mb-3">{t.items} ({cartItems.length})</h3>
        <div className="space-y-3">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex gap-3">
                <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {isAr ? item.nameAr : item.nameEn}
                      </h4>
                      {item.size && (
                        <p className="text-sm text-gray-500">{t.size}: {item.size}</p>
                      )}
                    </div>
                    <button className="text-red-400 hover:text-red-600 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <button className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center font-medium">{item.qty}</span>
                      <button className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-colors">
                        <Plus size={14} />
                      </button>
                    </div>
                    <p className="font-semibold text-gray-800">
                      {item.price * item.qty} {currency}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="px-4 pt-4 pb-24">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-600">{t.subtotal}</span>
            <span className="font-semibold text-gray-800">{subtotal} {currency}</span>
          </div>
          <div className="flex items-center justify-between mb-4 pt-3 border-t">
            <span className="font-semibold text-gray-800">{t.total}</span>
            <span className="font-bold text-lg text-blue-600">{subtotal} {currency}</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            {t.checkout}
          </button>
        </div>
      </div>
    </div>
  )
}
