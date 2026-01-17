'use client'

import Link from 'next/link'
import { Building2, ShoppingCart, Users, DollarSign, TrendingUp, BarChart3, ArrowUpRight, ArrowUp, ArrowDown } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { useSchool } from '@/lib/school-context'
import AppHeader from '@/components/ui/AppHeader'
import DemoBanner from '@/components/ui/DemoBanner'

const schoolsOverview = [
  { id: '1', nameAr: 'مدرسة النور', nameEn: 'Al Noor School', students: 1250, orders: 156, revenue: 245000, trend: 12 },
  { id: '2', nameAr: 'مدرسة الأمل', nameEn: 'Al Amal School', students: 980, orders: 134, revenue: 198000, trend: 8 },
  { id: '3', nameAr: 'مدرسة الفجر', nameEn: 'Al Fajr School', students: 850, orders: 98, revenue: 156000, trend: -3 },
]

const recentActivity = [
  { id: '1', schoolAr: 'مدرسة النور', schoolEn: 'Al Noor School', actionAr: 'طلب جديد بقيمة 5,000 ج.م', actionEn: 'New order worth 5,000 EGP', time: '5 min' },
  { id: '2', schoolAr: 'مدرسة الأمل', schoolEn: 'Al Amal School', actionAr: 'تم إضافة 3 منتجات جديدة', actionEn: 'Added 3 new products', time: '15 min' },
  { id: '3', schoolAr: 'مدرسة الفجر', schoolEn: 'Al Fajr School', actionAr: 'تحديث بيانات المدرسة', actionEn: 'Updated school info', time: '1 hr' },
]

export default function GroupDashboard({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const { buildHref } = useSchool()

  const t = {
    welcome: isAr ? 'مرحباً بك' : 'Welcome',
    groupName: isAr ? 'مجموعة المدارس المتحدة' : 'United Schools Group',
    subtitle: isAr ? 'نظرة شاملة على جميع المدارس' : 'Overview of all schools',
    schoolsOverview: isAr ? 'نظرة على المدارس' : 'Schools Overview',
    recentActivity: isAr ? 'النشاط الأخير' : 'Recent Activity',
    viewAll: isAr ? 'عرض الكل' : 'View All',
    totalRevenue: isAr ? 'ج.م إيرادات' : 'EGP Revenue',
    totalOrders: isAr ? 'طلب' : 'Orders',
    totalStudents: isAr ? 'طالب' : 'Students',
    schools: isAr ? 'مدرسة' : 'Schools',
    students: isAr ? 'طالب' : 'students',
    orders: isAr ? 'طلب' : 'orders',
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DemoBanner locale={locale} appNameAr="مجموعة المدارس" appNameEn="School Group" />
      <AppHeader
        title={t.groupName}
        locale={locale}
        color="bg-violet-600"
      />

      {/* Welcome & Stats */}
      <div className="px-4 pt-4 pb-4 bg-gradient-to-b from-violet-50 to-gray-50">
        <p className="text-gray-500">
          {t.welcome} 👋
        </p>
        <h1 className="text-xl font-bold text-gray-800">
          <span className="text-violet-600">{t.groupName}</span>
        </h1>
        <p className="text-sm text-gray-500 mt-1">{t.subtitle}</p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="flex flex-col items-center rounded-xl bg-violet-100 p-3">
            <DollarSign className="mb-1 h-5 w-5 text-violet-600" />
            <span className="text-lg font-bold text-violet-600">599K</span>
            <span className="text-xs text-gray-500">{t.totalRevenue}</span>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-blue-100 p-3">
            <ShoppingCart className="mb-1 h-5 w-5 text-blue-600" />
            <span className="text-lg font-bold text-blue-600">388</span>
            <span className="text-xs text-gray-500">{t.totalOrders}</span>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-emerald-100 p-3">
            <Users className="mb-1 h-5 w-5 text-emerald-600" />
            <span className="text-lg font-bold text-emerald-600">3,080</span>
            <span className="text-xs text-gray-500">{t.totalStudents}</span>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-amber-100 p-3">
            <Building2 className="mb-1 h-5 w-5 text-amber-600" />
            <span className="text-lg font-bold text-amber-600">5</span>
            <span className="text-xs text-gray-500">{t.schools}</span>
          </div>
        </div>
      </div>

      {/* Schools Overview */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800">{t.schoolsOverview}</h2>
          <Link href={buildHref(`/${locale}/group/schools`)} className="text-sm text-violet-600 font-medium flex items-center gap-1">
            {t.viewAll}
            <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="space-y-3">
          {schoolsOverview.map((school) => (
            <div key={school.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold text-gray-800">{isAr ? school.nameAr : school.nameEn}</p>
                  <p className="text-sm text-gray-500">{school.students} {t.students} • {school.orders} {t.orders}</p>
                </div>
                <div className={`flex items-center gap-1 text-sm ${school.trend > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                  {school.trend > 0 ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                  <span>{Math.abs(school.trend)}%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-violet-600">{school.revenue.toLocaleString()} {isAr ? 'ج.م' : 'EGP'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-4 pb-24">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800">{t.recentActivity}</h2>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center gap-3 p-4">
              <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                <Building2 size={18} className="text-violet-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">{isAr ? activity.schoolAr : activity.schoolEn}</p>
                <p className="text-sm text-gray-500">{isAr ? activity.actionAr : activity.actionEn}</p>
              </div>
              <span className="text-xs text-gray-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
