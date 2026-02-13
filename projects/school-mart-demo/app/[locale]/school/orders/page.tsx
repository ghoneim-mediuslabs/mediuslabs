'use client'

import { useState } from 'react'
import { Search, Filter, Clock, Check, Package } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { useSchool } from '@/lib/school-context'
import AppHeader from '@/components/ui/AppHeader'

const orders = [
  { id: 'TXN-001', parentAr: 'أحمد محمد', parentEn: 'Ahmed Mohamed', itemsAr: 'رسوم دراسية - الفصل الثاني', itemsEn: 'Tuition - Term 2', amount: 12500, status: 'completed', date: '2024-01-15' },
  { id: 'TXN-002', parentAr: 'سارة علي', parentEn: 'Sara Ali', itemsAr: '٣ قطع زي مدرسي', itemsEn: '3 Uniform Items', amount: 580, status: 'pending', date: '2024-01-14' },
  { id: 'TXN-003', parentAr: 'فاطمة أحمد', parentEn: 'Fatma Ahmed', itemsAr: 'رسوم الأنشطة + النقل', itemsEn: 'Activities + Transport Fee', amount: 4500, status: 'completed', date: '2024-01-14' },
  { id: 'TXN-004', parentAr: 'محمد حسن', parentEn: 'Mohamed Hassan', itemsAr: 'وجبات أسبوعية', itemsEn: 'Weekly Meals', amount: 150, status: 'completed', date: '2024-01-13' },
  { id: 'TXN-005', parentAr: 'خالد محمود', parentEn: 'Khaled Mahmoud', itemsAr: 'رسوم التأمين الصحي', itemsEn: 'Health Insurance Fee', amount: 800, status: 'pending', date: '2024-01-12' },
  { id: 'TXN-006', parentAr: 'نورا سعيد', parentEn: 'Noura Saeed', itemsAr: 'أدوات مدرسية', itemsEn: 'School Supplies', amount: 95, status: 'processing', date: '2024-01-11' },
  { id: 'TXN-007', parentAr: 'منى علي', parentEn: 'Mona Ali', itemsAr: 'رسوم دراسية - الفصل الثاني', itemsEn: 'Tuition - Term 2', amount: 12500, status: 'pending', date: '2024-01-10' },
]

const statusFilters = [
  { id: 'all', labelAr: 'الكل', labelEn: 'All' },
  { id: 'pending', labelAr: 'قيد الانتظار', labelEn: 'Pending' },
  { id: 'processing', labelAr: 'قيد التجهيز', labelEn: 'Processing' },
  { id: 'completed', labelAr: 'مكتمل', labelEn: 'Completed' },
]

export default function SchoolOrders({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const [activeStatus, setActiveStatus] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const { buildHref } = useSchool()

  const t = {
    title: isAr ? 'المعاملات' : 'Transactions',
    search: isAr ? 'بحث بالاسم أو رقم المعاملة...' : 'Search by name or transaction ID...',
    pending: isAr ? 'قيد الانتظار' : 'Pending',
    processing: isAr ? 'قيد التجهيز' : 'Processing',
    completed: isAr ? 'مكتمل' : 'Completed',
    noOrders: isAr ? 'لا توجد معاملات' : 'No transactions found',
    markReady: isAr ? 'جاهز للتسليم' : 'Mark Ready',
    markComplete: isAr ? 'تم التسليم' : 'Complete',
  }

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-amber-100 text-amber-700'
      case 'processing': return 'bg-blue-100 text-blue-700'
      case 'completed': return 'bg-emerald-100 text-emerald-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending': return t.pending
      case 'processing': return t.processing
      case 'completed': return t.completed
      default: return status
    }
  }

  const filteredOrders = orders.filter(order => {
    const matchesStatus = activeStatus === 'all' || order.status === activeStatus
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (isAr ? order.parentAr : order.parentEn).toLowerCase().includes(searchQuery.toLowerCase())
    return matchesStatus && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader
        title={t.title}
        locale={locale}
        color="bg-emerald-600"
        showBack
        backHref={`/${locale}/school`}
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
            className="w-full ps-10 pe-4 py-2.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-colors"
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
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-emerald-300'
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
                    <p className="font-semibold text-gray-800">{isAr ? order.parentAr : order.parentEn}</p>
                    <p className="text-sm text-gray-500">{isAr ? order.itemsAr : order.itemsEn}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusStyle(order.status)}`}>
                    {getStatusLabel(order.status)}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="font-semibold text-emerald-600">{order.amount} {isAr ? 'ج.م' : 'EGP'}</span>
                  {order.status === 'pending' && (
                    <button className="bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors">
                      {t.markReady}
                    </button>
                  )}
                  {order.status === 'processing' && (
                    <button className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      {t.markComplete}
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
