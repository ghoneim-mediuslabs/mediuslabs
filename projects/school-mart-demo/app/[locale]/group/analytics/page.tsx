'use client'

import { useState } from 'react'
import { BarChart3, TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Building2 } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { useSchool } from '@/lib/school-context'
import AppHeader from '@/components/ui/AppHeader'

const periodFilters = [
  { id: 'week', labelAr: 'أسبوع', labelEn: 'Week' },
  { id: 'month', labelAr: 'شهر', labelEn: 'Month' },
  { id: 'quarter', labelAr: 'ربع سنة', labelEn: 'Quarter' },
  { id: 'year', labelAr: 'سنة', labelEn: 'Year' },
]

const metrics = [
  { id: 'revenue', labelAr: 'الإيرادات', labelEn: 'Revenue', value: '599,000', unit: 'EGP', unitAr: 'ج.م', change: 12.5, icon: DollarSign, color: 'violet' },
  { id: 'orders', labelAr: 'الطلبات', labelEn: 'Orders', value: '388', unit: '', unitAr: '', change: 8.2, icon: ShoppingCart, color: 'blue' },
  { id: 'students', labelAr: 'الطلاب', labelEn: 'Students', value: '3,080', unit: '', unitAr: '', change: 5.1, icon: Users, color: 'emerald' },
  { id: 'avgOrder', labelAr: 'متوسط الطلب', labelEn: 'Avg. Order', value: '1,544', unit: 'EGP', unitAr: 'ج.م', change: -2.3, icon: BarChart3, color: 'amber' },
]

const topCategories = [
  { nameAr: 'الزي المدرسي', nameEn: 'Uniforms', percentage: 45, amount: 269550 },
  { nameAr: 'الكتب والمستلزمات', nameEn: 'Books & Supplies', percentage: 30, amount: 179700 },
  { nameAr: 'الكانتين', nameEn: 'Canteen', percentage: 15, amount: 89850 },
  { nameAr: 'الأنشطة', nameEn: 'Activities', percentage: 10, amount: 59900 },
]

const schoolPerformance = [
  { nameAr: 'مدرسة النور', nameEn: 'Al Noor School', revenue: 245000, percentage: 41 },
  { nameAr: 'مدرسة الأمل', nameEn: 'Al Amal School', revenue: 198000, percentage: 33 },
  { nameAr: 'مدرسة الفجر', nameEn: 'Al Fajr School', revenue: 156000, percentage: 26 },
]

export default function GroupAnalytics({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const [activePeriod, setActivePeriod] = useState('month')

  const t = {
    title: isAr ? 'التحليلات' : 'Analytics',
    overview: isAr ? 'نظرة عامة' : 'Overview',
    vsLastPeriod: isAr ? 'مقارنة بالفترة السابقة' : 'vs last period',
    topCategories: isAr ? 'أعلى الفئات مبيعاً' : 'Top Categories',
    schoolPerformance: isAr ? 'أداء المدارس' : 'School Performance',
    ofTotal: isAr ? 'من الإجمالي' : 'of total',
  }

  const getColorClass = (color: string, type: 'bg' | 'text') => {
    const colors: Record<string, Record<string, string>> = {
      violet: { bg: 'bg-violet-100', text: 'text-violet-600' },
      blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
      emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600' },
      amber: { bg: 'bg-amber-100', text: 'text-amber-600' },
    }
    return colors[color][type]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader
        title={t.title}
        locale={locale}
        color="bg-violet-600"
        showBack
        backHref={`/${locale}/group`}
      />

      {/* Period Filters */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {periodFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActivePeriod(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activePeriod === filter.id
                  ? 'bg-violet-600 text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-violet-300'
              }`}
            >
              {isAr ? filter.labelAr : filter.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="px-4 py-4">
        <h2 className="font-semibold text-gray-800 mb-3">{t.overview}</h2>
        <div className="grid grid-cols-2 gap-3">
          {metrics.map((metric) => {
            const Icon = metric.icon
            return (
              <div key={metric.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-8 h-8 rounded-lg ${getColorClass(metric.color, 'bg')} flex items-center justify-center`}>
                    <Icon size={16} className={getColorClass(metric.color, 'text')} />
                  </div>
                  <span className="text-sm text-gray-500">{isAr ? metric.labelAr : metric.labelEn}</span>
                </div>
                <p className="text-xl font-bold text-gray-800">
                  {metric.value} {isAr ? metric.unitAr : metric.unit}
                </p>
                <div className={`flex items-center gap-1 text-sm mt-1 ${metric.change > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                  {metric.change > 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  <span>{Math.abs(metric.change)}%</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Top Categories */}
      <div className="px-4 pb-4">
        <h2 className="font-semibold text-gray-800 mb-3">{t.topCategories}</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="space-y-4">
            {topCategories.map((category) => (
              <div key={category.nameEn}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{isAr ? category.nameAr : category.nameEn}</span>
                  <span className="text-sm text-gray-500">{category.percentage}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-violet-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${category.percentage}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">{category.amount.toLocaleString()} {isAr ? 'ج.م' : 'EGP'}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* School Performance */}
      <div className="px-4 pb-24">
        <h2 className="font-semibold text-gray-800 mb-3">{t.schoolPerformance}</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y">
          {schoolPerformance.map((school) => (
            <div key={school.nameEn} className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                    <Building2 size={18} className="text-violet-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{isAr ? school.nameAr : school.nameEn}</p>
                    <p className="text-xs text-gray-500">{school.percentage}% {t.ofTotal}</p>
                  </div>
                </div>
                <p className="font-semibold text-violet-600">{school.revenue.toLocaleString()} {isAr ? 'ج.م' : 'EGP'}</p>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div
                  className="bg-violet-600 h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${school.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
