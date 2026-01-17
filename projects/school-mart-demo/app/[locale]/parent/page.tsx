'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Shirt, UtensilsCrossed, Calendar, Wallet, ShoppingBag } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { useSchool } from '@/lib/school-context'
import { children, schools as mockSchools, wallet, recentActivity } from '@/lib/mock-data'
import AppHeader from '@/components/ui/AppHeader'

const modules = [
  { href: '/parent/academic', icon: BookOpen, labelAr: 'الخدمات الأكاديمية', labelEn: 'Academic Services', color: 'bg-academic', description: { ar: 'دروس إضافية ومواد تعليمية', en: 'Extra lessons & materials' } },
  { href: '/parent/uniforms', icon: Shirt, labelAr: 'الزي والمستلزمات', labelEn: 'Uniforms & Supplies', color: 'bg-uniforms', description: { ar: 'زي مدرسي وأدوات', en: 'School uniform & supplies' } },
  { href: '/parent/canteen', icon: UtensilsCrossed, labelAr: 'الكانتين الذكي', labelEn: 'Smart Canteen', color: 'bg-canteen', description: { ar: 'طلب الوجبات مسبقاً', en: 'Pre-order meals' } },
  { href: '/parent/events', icon: Calendar, labelAr: 'الفعاليات والرحلات', labelEn: 'Events & Trips', color: 'bg-events', description: { ar: 'التسجيل والموافقات', en: 'Registration & consent' } },
]

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const [selectedChild, setSelectedChild] = useState(children[0])
  const { demoSchool, isOverrideMode, getSchoolLogo, buildHref } = useSchool()

  const t = {
    quickActions: isAr ? 'الخدمات' : 'Services',
    recentActivity: isAr ? 'النشاط الأخير' : 'Recent Activity',
  }

  // In override mode, use the demo school for all children
  // Otherwise, use the child's assigned school from mock data
  const activeSchool = isOverrideMode && demoSchool
    ? {
        id: 'demo',
        name: demoSchool.name,
        nameEn: demoSchool.nameEn,
        logo: getSchoolLogo(),
      }
    : mockSchools.find(s => s.id === selectedChild.schoolId) || mockSchools[0]

  // In override mode, all children belong to the same school (no school switching)
  const availableSchools = isOverrideMode ? [activeSchool] : mockSchools

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader
        locale={locale}
        childrenList={children}
        selectedChild={selectedChild}
        onSelectChild={setSelectedChild}
        school={activeSchool}
        schools={availableSchools}
      />

      {/* Welcome Message */}
      <div className="px-4 pt-4 pb-4 bg-gradient-to-b from-blue-50 to-gray-50">
        <p className="text-gray-500">
          {isAr ? 'مرحباً بك' : 'Welcome'} 👋
        </p>
        <h1 className="text-xl font-bold text-gray-800">
          {isAr ? 'خدمات' : 'Services of'}{' '}
          <span className="text-blue-600">{isAr ? activeSchool.name : activeSchool.nameEn}</span>
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {isAr
            ? 'جميع الخدمات المدرسية في مكان واحد'
            : 'All school services in one place'}
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="flex flex-col items-center rounded-xl bg-emerald-100 p-3">
            <Wallet className="mb-1 h-5 w-5 text-emerald-600" />
            <span className="text-lg font-bold text-emerald-600">{wallet.balance}</span>
            <span className="text-xs text-gray-500">{isAr ? 'ج.م رصيد' : 'EGP Balance'}</span>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-orange-100 p-3">
            <ShoppingBag className="mb-1 h-5 w-5 text-orange-600" />
            <span className="text-lg font-bold text-orange-600">3</span>
            <span className="text-xs text-gray-500">{isAr ? 'طلبات نشطة' : 'Active Orders'}</span>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-teal-100 p-3">
            <Calendar className="mb-1 h-5 w-5 text-teal-600" />
            <span className="text-lg font-bold text-teal-600">2</span>
            <span className="text-xs text-gray-500">{isAr ? 'فعاليات قادمة' : 'Upcoming Events'}</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 pb-4">
        <h2 className="font-semibold text-gray-800 mb-3">{t.quickActions}</h2>
        <div className="grid grid-cols-2 gap-3">
          {modules.map((module) => {
            const Icon = module.icon
            return (
              <Link
                key={module.href}
                href={buildHref(`/${locale}${module.href}`)}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className={`w-10 h-10 ${module.color} rounded-xl flex items-center justify-center mb-3`}>
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1">
                  {isAr ? module.labelAr : module.labelEn}
                </h3>
                <p className="text-xs text-gray-500">
                  {isAr ? module.description.ar : module.description.en}
                </p>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-4 pb-24">
        <h2 className="font-semibold text-gray-800 mb-3">{t.recentActivity}</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-4">
              <div>
                <p className="font-medium text-gray-800">
                  {isAr ? activity.description : activity.descriptionEn}
                </p>
                <p className="text-sm text-gray-500">{isAr ? activity.date : activity.dateEn}</p>
              </div>
              <p className={`font-semibold ${activity.amount > 0 ? 'text-emerald-600' : 'text-gray-800'}`}>
                {activity.amount > 0 ? '+' : ''}{activity.amount} {isAr ? wallet.currencyAr : wallet.currency}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
