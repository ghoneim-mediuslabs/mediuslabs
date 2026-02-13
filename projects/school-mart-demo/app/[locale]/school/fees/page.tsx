'use client'

import { useState } from 'react'
import { GraduationCap, Trophy, Bus, CircleDollarSign, Users, TrendingUp, AlertCircle } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { useSchool } from '@/lib/school-context'
import AppHeader from '@/components/ui/AppHeader'

const feeItems = [
  { id: '1', type: 'tuition', nameAr: 'الرسوم الدراسية - الفصل الثاني', nameEn: 'Tuition - Term 2', totalFamilies: 240, paidFamilies: 180, amount: 12500 },
  { id: '2', type: 'activities', nameAr: 'رسوم الأنشطة', nameEn: 'Activities Fee', totalFamilies: 240, paidFamilies: 210, amount: 1500 },
  { id: '3', type: 'transport', nameAr: 'رسوم النقل المدرسي', nameEn: 'School Transport', totalFamilies: 160, paidFamilies: 155, amount: 3000 },
  { id: '4', type: 'other', nameAr: 'رسوم التأمين الصحي', nameEn: 'Health Insurance Fee', totalFamilies: 240, paidFamilies: 120, amount: 800 },
]

const outstandingFamilies = [
  { id: '1', nameAr: 'أحمد محمد', nameEn: 'Ahmed Mohamed', outstandingAr: 'رسوم دراسية + أنشطة', outstandingEn: 'Tuition + Activities', amount: 14000 },
  { id: '2', nameAr: 'فاطمة علي', nameEn: 'Fatima Ali', outstandingAr: 'رسوم دراسية', outstandingEn: 'Tuition', amount: 12500 },
  { id: '3', nameAr: 'خالد حسن', nameEn: 'Khaled Hassan', outstandingAr: 'تأمين صحي', outstandingEn: 'Health Insurance', amount: 800 },
  { id: '4', nameAr: 'نورا سعيد', nameEn: 'Noura Saeed', outstandingAr: 'رسوم دراسية + نقل', outstandingEn: 'Tuition + Transport', amount: 15500 },
]

const statusFilters = [
  { id: 'all', labelAr: 'الكل', labelEn: 'All' },
  { id: 'collected', labelAr: 'مكتمل', labelEn: 'Fully Collected' },
  { id: 'partial', labelAr: 'جزئي', labelEn: 'Partially Collected' },
  { id: 'overdue', labelAr: 'متأخر', labelEn: 'Overdue' },
]

const feeTypeIcons: Record<string, typeof GraduationCap> = {
  tuition: GraduationCap,
  activities: Trophy,
  transport: Bus,
  other: CircleDollarSign,
}

export default function SchoolFeesPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const [activeFilter, setActiveFilter] = useState('all')
  const { demoSchool, isOverrideMode } = useSchool()

  const schoolName = isOverrideMode && demoSchool
    ? (isAr ? demoSchool.name : demoSchool.nameEn)
    : (isAr ? 'المدرسة النموذجية' : 'Model School')

  const t = {
    title: isAr ? 'إدارة الرسوم' : 'Fee Management',
    totalBilled: isAr ? 'إجمالي المطلوب' : 'Total Billed',
    totalCollected: isAr ? 'إجمالي المحصل' : 'Total Collected',
    outstanding: isAr ? 'المتبقي' : 'Outstanding',
    collectionRate: isAr ? 'نسبة التحصيل' : 'Collection Rate',
    feeBreakdown: isAr ? 'تفاصيل الرسوم' : 'Fee Breakdown',
    familiesPaid: isAr ? 'أسرة دفعت' : 'families paid',
    outstandingFamilies: isAr ? 'أسر لديها متأخرات' : 'Families with Outstanding',
    of: isAr ? 'من' : 'of',
  }

  const totalBilled = feeItems.reduce((sum, f) => sum + (f.amount * f.totalFamilies), 0)
  const totalCollected = feeItems.reduce((sum, f) => sum + (f.amount * f.paidFamilies), 0)
  const totalOutstanding = totalBilled - totalCollected
  const collectionRate = Math.round((totalCollected / totalBilled) * 100)

  const getFilteredFees = () => {
    if (activeFilter === 'all') return feeItems
    if (activeFilter === 'collected') return feeItems.filter(f => f.paidFamilies === f.totalFamilies)
    if (activeFilter === 'partial') return feeItems.filter(f => f.paidFamilies > 0 && f.paidFamilies < f.totalFamilies)
    if (activeFilter === 'overdue') return feeItems.filter(f => f.paidFamilies < f.totalFamilies * 0.7)
    return feeItems
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader
        title={t.title}
        locale={locale}
        color="bg-emerald-600"
        showBack
        backHref={`/${locale}/school`}
      />

      {/* Summary Cards */}
      <div className="px-4 pt-4 pb-2">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
            <p className="text-xs text-gray-500 mb-1">{t.totalBilled}</p>
            <p className="text-lg font-bold text-gray-800">{(totalBilled / 1000).toFixed(0)}K</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
            <p className="text-xs text-gray-500 mb-1">{t.totalCollected}</p>
            <p className="text-lg font-bold text-emerald-600">{(totalCollected / 1000).toFixed(0)}K</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
            <p className="text-xs text-gray-500 mb-1">{t.outstanding}</p>
            <p className="text-lg font-bold text-red-600">{(totalOutstanding / 1000).toFixed(0)}K</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
            <p className="text-xs text-gray-500 mb-1">{t.collectionRate}</p>
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-emerald-600" />
              <p className="text-lg font-bold text-emerald-600">{collectionRate}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Status Filters */}
      <div className="px-4 py-3">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {statusFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeFilter === filter.id
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-600 border border-gray-200'
              }`}
            >
              {isAr ? filter.labelAr : filter.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Fee Breakdown */}
      <div className="px-4 pb-4">
        <h2 className="font-semibold text-gray-800 mb-3">{t.feeBreakdown}</h2>
        <div className="space-y-3">
          {getFilteredFees().map((fee) => {
            const Icon = feeTypeIcons[fee.type] || CircleDollarSign
            const percentage = Math.round((fee.paidFamilies / fee.totalFamilies) * 100)
            return (
              <div key={fee.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <Icon size={20} className="text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{isAr ? fee.nameAr : fee.nameEn}</p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {fee.paidFamilies}/{fee.totalFamilies} {t.familiesPaid}
                        </p>
                      </div>
                      <span className="text-sm font-bold text-emerald-600">{percentage}%</span>
                    </div>
                    <div className="mt-2 w-full bg-gray-100 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${percentage === 100 ? 'bg-emerald-500' : percentage >= 70 ? 'bg-amber-500' : 'bg-red-500'}`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                      {(fee.amount * fee.paidFamilies).toLocaleString()} / {(fee.amount * fee.totalFamilies).toLocaleString()} {isAr ? 'ج.م' : 'EGP'}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Outstanding Families */}
      <div className="px-4 pb-24">
        <div className="flex items-center gap-2 mb-3">
          <AlertCircle size={16} className="text-red-500" />
          <h2 className="font-semibold text-gray-800">{t.outstandingFamilies}</h2>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y">
          {outstandingFamilies.map((family) => (
            <div key={family.id} className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Users size={18} className="text-gray-500" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">{isAr ? family.nameAr : family.nameEn}</p>
                  <p className="text-xs text-gray-500">{isAr ? family.outstandingAr : family.outstandingEn}</p>
                </div>
              </div>
              <span className="font-semibold text-red-600 text-sm">{family.amount.toLocaleString()} {isAr ? 'ج.م' : 'EGP'}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
