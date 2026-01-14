'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Shirt, UtensilsCrossed, Calendar, Wallet } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { children, schools, wallet, recentActivity } from '@/lib/mock-data'
import AppHeader from '@/components/ui/AppHeader'

const modules = [
  { href: '/academic', icon: BookOpen, labelAr: 'الخدمات الأكاديمية', labelEn: 'Academic Services', color: 'bg-academic', description: { ar: 'دروس إضافية ومواد تعليمية', en: 'Extra lessons & materials' } },
  { href: '/uniforms', icon: Shirt, labelAr: 'الزي والمستلزمات', labelEn: 'Uniforms & Supplies', color: 'bg-uniforms', description: { ar: 'زي مدرسي وأدوات', en: 'School uniform & supplies' } },
  { href: '/canteen', icon: UtensilsCrossed, labelAr: 'الكانتين الذكي', labelEn: 'Smart Canteen', color: 'bg-canteen', description: { ar: 'طلب الوجبات مسبقاً', en: 'Pre-order meals' } },
  { href: '/events', icon: Calendar, labelAr: 'الفعاليات والرحلات', labelEn: 'Events & Trips', color: 'bg-events', description: { ar: 'التسجيل والموافقات', en: 'Registration & consent' } },
]

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const [selectedChild, setSelectedChild] = useState(children[0])

  const t = {
    walletBalance: isAr ? 'رصيد المحفظة' : 'Wallet Balance',
    quickActions: isAr ? 'الخدمات' : 'Services',
    recentActivity: isAr ? 'النشاط الأخير' : 'Recent Activity',
    topUp: isAr ? 'شحن' : 'Top Up',
  }

  const selectedSchool = schools.find(s => s.id === selectedChild.schoolId) || schools[0]

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader
        locale={locale}
        childrenList={children}
        selectedChild={selectedChild}
        onSelectChild={setSelectedChild}
        school={selectedSchool}
        schools={schools}
      />

      {/* Welcome Message */}
      <div className="px-4 pt-4 pb-2">
        <p className="text-gray-500">
          {isAr ? 'مرحباً بك' : 'Welcome'}
        </p>
        <h1 className="text-xl font-bold text-gray-800">
          {isAr ? 'خدمات' : 'Services of'}{' '}
          <span className="text-blue-600">{isAr ? selectedSchool.name : selectedSchool.nameEn}</span>
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {isAr
            ? 'جميع الخدمات المدرسية في مكان واحد'
            : 'All school services in one place'}
        </p>
      </div>

      {/* Wallet Card */}
      <div className="px-4 pt-3 pb-4">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-3 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Wallet size={20} />
            <div>
              <p className="text-xs opacity-80">{t.walletBalance}</p>
              <p className="text-lg font-bold">
                {wallet.balance} <span className="text-sm font-normal">{isAr ? wallet.currencyAr : wallet.currency}</span>
              </p>
            </div>
          </div>
          <button className="bg-white/20 hover:bg-white/30 transition-colors px-3 py-1.5 rounded-full text-sm">
            {t.topUp}
          </button>
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
                href={`/${locale}${module.href}`}
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
