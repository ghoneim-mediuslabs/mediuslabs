'use client'

import Link from 'next/link'
import { Package, ShoppingCart, Users, DollarSign, TrendingUp, Clock, Plus, ArrowUpRight } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { useSchool } from '@/lib/school-context'
import AppHeader from '@/components/ui/AppHeader'

const recentOrders = [
  { id: '1', parentAr: 'أحمد محمد', parentEn: 'Ahmed Mohamed', itemsAr: '٣ قطع زي مدرسي', itemsEn: '3 Uniform Items', amount: 580, status: 'pending' },
  { id: '2', parentAr: 'سارة علي', parentEn: 'Sara Ali', itemsAr: 'كتب الفصل الثاني', itemsEn: 'Term 2 Books', amount: 320, status: 'processing' },
  { id: '3', parentAr: 'محمد حسن', parentEn: 'Mohamed Hassan', itemsAr: 'وجبات أسبوعية', itemsEn: 'Weekly Meals', amount: 150, status: 'completed' },
]

const topProducts = [
  { id: '1', nameAr: 'قميص أبيض', nameEn: 'White Shirt', sold: 234, revenue: 42120 },
  { id: '2', nameAr: 'بنطلون كحلي', nameEn: 'Navy Pants', sold: 189, revenue: 41580 },
  { id: '3', nameAr: 'كتاب الرياضيات', nameEn: 'Math Book', sold: 156, revenue: 13260 },
]

export default function SchoolDashboard({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const { demoSchool, isOverrideMode, getSchoolLogo, buildHref } = useSchool()

  const schoolName = isOverrideMode && demoSchool
    ? (isAr ? demoSchool.name : demoSchool.nameEn)
    : (isAr ? 'المدرسة النموذجية' : 'Model School')

  const t = {
    welcome: isAr ? 'مرحباً بك في' : 'Welcome to',
    subtitle: isAr ? 'إدارة المنتجات والطلبات والإيرادات' : 'Manage products, orders, and revenue',
    recentOrders: isAr ? 'أحدث الطلبات' : 'Recent Orders',
    topProducts: isAr ? 'الأكثر مبيعاً' : 'Top Selling',
    viewAll: isAr ? 'عرض الكل' : 'View All',
    pending: isAr ? 'قيد الانتظار' : 'Pending',
    processing: isAr ? 'قيد التجهيز' : 'Processing',
    completed: isAr ? 'مكتمل' : 'Completed',
    sold: isAr ? 'مبيع' : 'sold',
    revenue: isAr ? 'ج.م إيرادات' : 'EGP Revenue',
    orders: isAr ? 'طلب' : 'Orders',
    products: isAr ? 'منتج' : 'Products',
    students: isAr ? 'طالب' : 'Students',
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
        title={schoolName}
        locale={locale}
        color="bg-emerald-600"
      />

      {/* Welcome & Stats */}
      <div className="px-4 pt-4 pb-4 bg-gradient-to-b from-emerald-50 to-gray-50">
        <p className="text-gray-500">
          {t.welcome} 👋
        </p>
        <h1 className="text-xl font-bold text-gray-800">
          <span className="text-emerald-600">{schoolName}</span>
        </h1>
        <p className="text-sm text-gray-500 mt-1">{t.subtitle}</p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="flex flex-col items-center rounded-xl bg-emerald-100 p-3">
            <DollarSign className="mb-1 h-5 w-5 text-emerald-600" />
            <span className="text-lg font-bold text-emerald-600">45.2K</span>
            <span className="text-xs text-gray-500">{t.revenue}</span>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-blue-100 p-3">
            <ShoppingCart className="mb-1 h-5 w-5 text-blue-600" />
            <span className="text-lg font-bold text-blue-600">156</span>
            <span className="text-xs text-gray-500">{t.orders}</span>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-violet-100 p-3">
            <Package className="mb-1 h-5 w-5 text-violet-600" />
            <span className="text-lg font-bold text-violet-600">89</span>
            <span className="text-xs text-gray-500">{t.products}</span>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800">{t.recentOrders}</h2>
          <Link href={buildHref(`/${locale}/school/orders`)} className="text-sm text-emerald-600 font-medium flex items-center gap-1">
            {t.viewAll}
            <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="space-y-3">
          {recentOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold text-gray-800">{isAr ? order.parentAr : order.parentEn}</p>
                  <p className="text-sm text-gray-500">{isAr ? order.itemsAr : order.itemsEn}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${getStatusStyle(order.status)}`}>
                  {getStatusLabel(order.status)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-emerald-600">{order.amount} {isAr ? 'ج.م' : 'EGP'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Products */}
      <div className="px-4 pb-24">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800">{t.topProducts}</h2>
          <Link href={buildHref(`/${locale}/school/products`)} className="text-sm text-emerald-600 font-medium flex items-center gap-1">
            {t.viewAll}
            <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y">
          {topProducts.map((product, index) => (
            <div key={product.id} className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </span>
                <div>
                  <p className="font-medium text-gray-800">{isAr ? product.nameAr : product.nameEn}</p>
                  <p className="text-sm text-gray-500">{product.sold} {t.sold}</p>
                </div>
              </div>
              <p className="font-semibold text-emerald-600">{product.revenue.toLocaleString()} {isAr ? 'ج.م' : 'EGP'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
