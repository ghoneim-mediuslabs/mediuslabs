'use client'

import Link from 'next/link'
import { Package, ShoppingCart, Building2, DollarSign, TrendingUp, Clock, ArrowUpRight } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { useSchool } from '@/lib/school-context'
import AppHeader from '@/components/ui/AppHeader'

const recentOrders = [
  { id: 'ORD-101', schoolAr: 'مدرسة النور', schoolEn: 'Al Noor School', itemsAr: '٥٠ قميص أبيض', itemsEn: '50 White Shirts', amount: 9000, status: 'pending' },
  { id: 'ORD-102', schoolAr: 'مدرسة الأمل', schoolEn: 'Al Amal School', itemsAr: '١٠٠ كتاب رياضيات', itemsEn: '100 Math Books', amount: 8500, status: 'processing' },
  { id: 'ORD-103', schoolAr: 'مدرسة الفجر', schoolEn: 'Al Fajr School', itemsAr: 'أدوات مدرسية متنوعة', itemsEn: 'Various Supplies', amount: 3200, status: 'completed' },
]

const topSchools = [
  { id: '1', nameAr: 'مدرسة النور', nameEn: 'Al Noor School', orders: 45, revenue: 125000 },
  { id: '2', nameAr: 'مدرسة الأمل', nameEn: 'Al Amal School', orders: 38, revenue: 98000 },
  { id: '3', nameAr: 'مدرسة الفجر', nameEn: 'Al Fajr School', orders: 32, revenue: 76000 },
]

export default function SupplierDashboard({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const { buildHref } = useSchool()

  const t = {
    welcome: isAr ? 'مرحباً بك' : 'Welcome',
    supplierName: isAr ? 'مؤسسة التوريدات التعليمية' : 'Educational Supplies Co.',
    subtitle: isAr ? 'إدارة المنتجات والطلبات والمدارس' : 'Manage products, orders, and schools',
    recentOrders: isAr ? 'أحدث الطلبات' : 'Recent Orders',
    topSchools: isAr ? 'أفضل المدارس' : 'Top Schools',
    viewAll: isAr ? 'عرض الكل' : 'View All',
    pending: isAr ? 'قيد الانتظار' : 'Pending',
    processing: isAr ? 'قيد التجهيز' : 'Processing',
    completed: isAr ? 'مكتمل' : 'Completed',
    orders: isAr ? 'طلب' : 'orders',
    revenue: isAr ? 'ج.م إيرادات' : 'EGP Revenue',
    totalOrders: isAr ? 'طلب' : 'Orders',
    products: isAr ? 'منتج' : 'Products',
    schools: isAr ? 'مدرسة' : 'Schools',
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

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader
        title={t.supplierName}
        locale={locale}
        color="bg-red-600"
      />

      {/* Welcome & Stats */}
      <div className="px-4 pt-4 pb-4 bg-gradient-to-b from-red-50 to-gray-50">
        <p className="text-gray-500">
          {t.welcome} 👋
        </p>
        <h1 className="text-xl font-bold text-gray-800">
          <span className="text-red-600">{t.supplierName}</span>
        </h1>
        <p className="text-sm text-gray-500 mt-1">{t.subtitle}</p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="flex flex-col items-center rounded-xl bg-red-100 p-3">
            <DollarSign className="mb-1 h-5 w-5 text-red-600" />
            <span className="text-lg font-bold text-red-600">299K</span>
            <span className="text-xs text-gray-500">{t.revenue}</span>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-blue-100 p-3">
            <ShoppingCart className="mb-1 h-5 w-5 text-blue-600" />
            <span className="text-lg font-bold text-blue-600">115</span>
            <span className="text-xs text-gray-500">{t.totalOrders}</span>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-violet-100 p-3">
            <Building2 className="mb-1 h-5 w-5 text-violet-600" />
            <span className="text-lg font-bold text-violet-600">24</span>
            <span className="text-xs text-gray-500">{t.schools}</span>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800">{t.recentOrders}</h2>
          <Link href={buildHref(`/${locale}/supplier/orders`)} className="text-sm text-red-600 font-medium flex items-center gap-1">
            {t.viewAll}
            <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="space-y-3">
          {recentOrders.map((order) => (
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
              <div className="flex items-center justify-between">
                <span className="font-semibold text-red-600">{order.amount.toLocaleString()} {isAr ? 'ج.م' : 'EGP'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Schools */}
      <div className="px-4 pb-24">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800">{t.topSchools}</h2>
          <Link href={buildHref(`/${locale}/supplier/schools`)} className="text-sm text-red-600 font-medium flex items-center gap-1">
            {t.viewAll}
            <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y">
          {topSchools.map((school, index) => (
            <div key={school.id} className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </span>
                <div>
                  <p className="font-medium text-gray-800">{isAr ? school.nameAr : school.nameEn}</p>
                  <p className="text-sm text-gray-500">{school.orders} {t.orders}</p>
                </div>
              </div>
              <p className="font-semibold text-red-600">{school.revenue.toLocaleString()} {isAr ? 'ج.م' : 'EGP'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
