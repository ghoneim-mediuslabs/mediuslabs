'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Shirt, UtensilsCrossed, Calendar, Wallet, ChevronDown, ChevronUp, User, Check } from 'lucide-react'
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
  const [showChildSelector, setShowChildSelector] = useState(false)

  const t = {
    welcome: isAr ? 'مرحباً' : 'Welcome',
    selectChild: isAr ? 'اختر الطالب' : 'Select Child',
    walletBalance: isAr ? 'رصيد المحفظة' : 'Wallet Balance',
    quickActions: isAr ? 'الخدمات' : 'Services',
    recentActivity: isAr ? 'النشاط الأخير' : 'Recent Activity',
    topUp: isAr ? 'شحن' : 'Top Up',
  }

  const handleSelectChild = (child: typeof children[0]) => {
    setSelectedChild(child)
    setShowChildSelector(false)
  }

  const selectedSchool = schools.find(s => s.id === selectedChild.schoolId) || schools[0]

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader title="School Mart" locale={locale} color="bg-gray-800" />

      {/* Child Selector */}
      <div className="bg-white px-4 py-3 border-b relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <User size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="font-semibold">{isAr ? selectedChild.name : selectedChild.nameEn}</p>
              <p className="text-sm text-gray-500">{isAr ? selectedChild.grade : selectedChild.gradeEn}</p>
            </div>
          </div>
          <button
            onClick={() => setShowChildSelector(!showChildSelector)}
            className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors"
          >
            <span>{t.selectChild}</span>
            {showChildSelector ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {/* Dropdown */}
        {showChildSelector && (
          <div className="absolute top-full left-4 right-4 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 z-50 overflow-hidden">
            {children.map((child) => (
              <button
                key={child.id}
                onClick={() => handleSelectChild(child)}
                className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors border-b last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
                    <User size={18} className="text-blue-600" />
                  </div>
                  <div className="text-start">
                    <p className="font-medium text-gray-800">{isAr ? child.name : child.nameEn}</p>
                    <p className="text-sm text-gray-500">{isAr ? child.grade : child.gradeEn}</p>
                  </div>
                </div>
                {selectedChild.id === child.id && (
                  <Check size={20} className="text-emerald-600" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* School Card */}
      <div className="px-4 pt-4">
        <div className="bg-white rounded-xl p-4 flex items-center gap-3 border border-gray-100 shadow-sm">
          <img
            src={selectedSchool.logo}
            alt=""
            className="w-12 h-12 rounded-lg"
          />
          <div>
            <p className="font-semibold text-gray-800">
              {isAr ? selectedSchool.name : selectedSchool.nameEn}
            </p>
            <p className="text-sm text-gray-500">{isAr ? 'المدرسة' : 'School'}</p>
          </div>
        </div>
      </div>

      {/* Wallet Card */}
      <div className="px-4 pt-3 pb-4">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wallet size={20} />
              <span className="text-sm opacity-90">{t.walletBalance}</span>
            </div>
            <button className="bg-white/20 hover:bg-white/30 transition-colors px-3 py-1 rounded-full text-sm">
              {t.topUp}
            </button>
          </div>
          <p className="text-3xl font-bold mt-2">
            {wallet.balance} <span className="text-lg font-normal">{isAr ? wallet.currencyAr : wallet.currency}</span>
          </p>
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
