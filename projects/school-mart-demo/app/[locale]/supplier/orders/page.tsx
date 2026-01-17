'use client'

import { useState } from 'react'
import { Search, Package, Clock, Check, Truck } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { useSchool } from '@/lib/school-context'
import AppHeader from '@/components/ui/AppHeader'

const orders = [
  { id: 'ORD-101', schoolAr: 'مدرسة النور', schoolEn: 'Al Noor School', itemsAr: '٥٠ قميص أبيض', itemsEn: '50 White Shirts', amount: 9000, status: 'pending', date: '2024-01-15' },
  { id: 'ORD-102', schoolAr: 'مدرسة الأمل', schoolEn: 'Al Amal School', itemsAr: '١٠٠ كتاب رياضيات', itemsEn: '100 Math Books', amount: 8500, status: 'processing', date: '2024-01-14' },
  { id: 'ORD-103', schoolAr: 'مدرسة الفجر', schoolEn: 'Al Fajr School', itemsAr: 'أدوات مدرسية متنوعة', itemsEn: 'Various Supplies', amount: 3200, status: 'shipped', date: '2024-01-13' },
  { id: 'ORD-104', schoolAr: 'مدرسة الإيمان', schoolEn: 'Al Iman School', itemsAr: '٣٠ بنطلون كحلي', itemsEn: '30 Navy Pants', amount: 6600, status: 'completed', date: '2024-01-12' },
  { id: 'ORD-105', schoolAr: 'مدرسة السلام', schoolEn: 'Al Salam School', itemsAr: '٢٠٠ دفتر', itemsEn: '200 Notebooks', amount: 3000, status: 'pending', date: '2024-01-11' },
]

const statusFilters = [
  { id: 'all', labelAr: 'الكل', labelEn: 'All' },
  { id: 'pending', labelAr: 'قيد الانتظار', labelEn: 'Pending' },
  { id: 'processing', labelAr: 'قيد التجهيز', labelEn: 'Processing' },
  { id: 'shipped', labelAr: 'تم الشحن', labelEn: 'Shipped' },
  { id: 'completed', labelAr: 'مكتمل', labelEn: 'Completed' },
]

export default function SupplierOrders({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const [activeStatus, setActiveStatus] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const { buildHref } = useSchool()

  const t = {
    title: isAr ? 'الطلبات' : 'Orders',
    search: isAr ? 'بحث بالمدرسة أو رقم الطلب...' : 'Search by school or order ID...',
    pending: isAr ? 'قيد الانتظار' : 'Pending',
    processing: isAr ? 'قيد التجهيز' : 'Processing',
    shipped: isAr ? 'تم الشحن' : 'Shipped',
    completed: isAr ? 'مكتمل' : 'Completed',
    noOrders: isAr ? 'لا توجد طلبات' : 'No orders found',
    startProcessing: isAr ? 'بدء التجهيز' : 'Start Processing',
    markShipped: isAr ? 'تم الشحن' : 'Mark Shipped',
  }

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-amber-100 text-amber-700'
      case 'processing': return 'bg-blue-100 text-blue-700'
      case 'shipped': return 'bg-violet-100 text-violet-700'
      case 'completed': return 'bg-emerald-100 text-emerald-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending': return t.pending
      case 'processing': return t.processing
      case 'shipped': return t.shipped
      case 'completed': return t.completed
      default: return status
    }
  }

  const filteredOrders = orders.filter(order => {
    const matchesStatus = activeStatus === 'all' || order.status === activeStatus
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (isAr ? order.schoolAr : order.schoolEn).toLowerCase().includes(searchQuery.toLowerCase())
    return matchesStatus && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader
        title={t.title}
        locale={locale}
        color="bg-red-600"
        showBack
        backHref={`/${locale}/supplier`}
      />

      {/* Search */}
      <div className="px-4 pt-4 pb-2">
        <div className="relative">
          <Search size={18} className="absolute start-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder={t.search}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full ps-10 pe-4 py-2.5 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors"
          />
        </div>
      </div>

      {/* Status Filters */}
      <div className="px-4 py-2">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {statusFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveStatus(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeStatus === filter.id
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-red-300'
              }`}
            >
              {isAr ? filter.labelAr : filter.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Orders List */}
      <div className="px-4 pb-24">
        {filteredOrders.length === 0 ? (
          <div className="text-center py-12">
            <Package size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">{t.noOrders}</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">{order.id}</p>
                    <p className="font-semibold text-gray-800">{isAr ? order.schoolAr : order.schoolEn}</p>
                    <p className="text-sm text-gray-500">{isAr ? order.itemsAr : order.itemsEn}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusStyle(order.status)}`}>
                    {getStatusLabel(order.status)}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="font-semibold text-red-600">{order.amount.toLocaleString()} {isAr ? 'ج.م' : 'EGP'}</span>
                  {order.status === 'pending' && (
                    <button className="bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                      {t.startProcessing}
                    </button>
                  )}
                  {order.status === 'processing' && (
                    <button className="bg-violet-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-violet-700 transition-colors">
                      {t.markShipped}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
