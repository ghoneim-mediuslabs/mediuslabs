'use client'

import { useState, useEffect } from 'react'
import { Building2, TrendingUp, DollarSign, Users } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { useSchool, DemoSchool } from '@/lib/school-context'
import AppHeader from '@/components/ui/AppHeader'

export default function GroupFeesPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const { demoGroup, groupSlug } = useSchool()
  const [groupSchools, setGroupSchools] = useState<DemoSchool[]>([])

  const sampleSchools: DemoSchool[] = [
    { slug: 'al-noor', name: 'مدرسة النور الدولية', nameEn: 'Al Noor International School', logo: '', groupSlug: 'sample' },
    { slug: 'al-amal', name: 'مدرسة الأمل', nameEn: 'Al Amal School', logo: '', groupSlug: 'sample' },
    { slug: 'future-leaders', name: 'مدرسة قادة المستقبل', nameEn: 'Future Leaders School', logo: '', groupSlug: 'sample' },
    { slug: 'al-salam', name: 'مدرسة السلام', nameEn: 'Al Salam School', logo: '', groupSlug: 'sample' },
    { slug: 'bright-minds', name: 'مدرسة العقول المضيئة', nameEn: 'Bright Minds Academy', logo: '', groupSlug: 'sample' },
  ]

  useEffect(() => {
    const fetchGroupSchools = async () => {
      if (!groupSlug) {
        setGroupSchools(sampleSchools)
        return
      }
      try {
        const res = await fetch('/api/schools')
        if (res.ok) {
          const allSchools: DemoSchool[] = await res.json()
          const filtered = allSchools.filter(s => s.groupSlug === groupSlug)
          setGroupSchools(filtered.length > 0 ? filtered : sampleSchools)
        } else {
          setGroupSchools(sampleSchools)
        }
      } catch {
        setGroupSchools(sampleSchools)
      }
    }
    fetchGroupSchools()
  }, [groupSlug])

  const t = {
    title: isAr ? 'نظرة عامة على الرسوم' : 'Fees Overview',
    totalBilled: isAr ? 'إجمالي المطلوب' : 'Total Billed',
    totalCollected: isAr ? 'إجمالي المحصل' : 'Total Collected',
    outstanding: isAr ? 'المتبقي' : 'Outstanding',
    collectionRate: isAr ? 'نسبة التحصيل' : 'Collection Rate',
    perSchool: isAr ? 'تحصيل الرسوم لكل مدرسة' : 'Fee Collection per School',
    collected: isAr ? 'محصل' : 'collected',
    trend: isAr ? 'الاتجاه' : 'Trend',
    overallRate: isAr ? 'معدل التحصيل الإجمالي' : 'Overall Collection Rate',
    vsLastTerm: isAr ? 'مقارنة بالفصل السابق' : 'vs last term',
  }

  const schoolCount = groupSchools.length || 5
  const totalBilled = schoolCount * 3200000
  const totalCollected = Math.round(totalBilled * 0.82)
  const totalOutstanding = totalBilled - totalCollected
  const overallRate = Math.round((totalCollected / totalBilled) * 100)

  const schoolFeeStats = groupSchools.slice(0, 5).map((school, idx) => {
    const billed = 3200000 + (idx * 400000)
    const rate = 90 - (idx * 5)
    const collected = Math.round(billed * rate / 100)
    return {
      school,
      billed,
      collected,
      rate,
      trend: idx < 3 ? (5 - idx) : -(idx - 2),
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader
        title={t.title}
        locale={locale}
        color="bg-violet-600"
        showBack
        backHref={`/${locale}/group`}
      />

      {/* Summary Cards */}
      <div className="px-4 pt-4 pb-2">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-1">
              <DollarSign size={14} className="text-gray-400" />
              <p className="text-xs text-gray-500">{t.totalBilled}</p>
            </div>
            <p className="text-lg font-bold text-gray-800">{(totalBilled / 1000000).toFixed(1)}M</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-1">
              <DollarSign size={14} className="text-emerald-400" />
              <p className="text-xs text-gray-500">{t.totalCollected}</p>
            </div>
            <p className="text-lg font-bold text-emerald-600">{(totalCollected / 1000000).toFixed(1)}M</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-1">
              <DollarSign size={14} className="text-red-400" />
              <p className="text-xs text-gray-500">{t.outstanding}</p>
            </div>
            <p className="text-lg font-bold text-red-600">{(totalOutstanding / 1000000).toFixed(1)}M</p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp size={14} className="text-emerald-400" />
              <p className="text-xs text-gray-500">{t.collectionRate}</p>
            </div>
            <p className="text-lg font-bold text-emerald-600">{overallRate}%</p>
          </div>
        </div>
      </div>

      {/* Overall Collection Rate Card */}
      <div className="px-4 py-3">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">{t.overallRate}</span>
            <span className="text-sm text-emerald-600 font-medium flex items-center gap-1">
              <TrendingUp size={14} />
              +3.2% {t.vsLastTerm}
            </span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-3">
            <div
              className="bg-emerald-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${overallRate}%` }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">{overallRate}% {t.collected}</p>
        </div>
      </div>

      {/* Per-School Collection */}
      <div className="px-4 pb-24">
        <h2 className="font-semibold text-gray-800 mb-3">{t.perSchool}</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y">
          {schoolFeeStats.map(({ school, billed, collected, rate, trend }) => (
            <div key={school.slug} className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  {school.logo ? (
                    <img src={school.logo} alt="" className="w-10 h-10 rounded-full object-cover" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                      <Building2 size={18} className="text-violet-600" />
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-gray-800">{isAr ? school.name : school.nameEn}</p>
                    <p className="text-xs text-gray-500">
                      {(collected / 1000000).toFixed(1)}M / {(billed / 1000000).toFixed(1)}M {isAr ? 'ج.م' : 'EGP'}
                    </p>
                  </div>
                </div>
                <div className="text-end">
                  <p className="font-bold text-violet-600">{rate}%</p>
                  <p className={`text-xs flex items-center gap-0.5 ${trend > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                    <TrendingUp size={10} className={trend < 0 ? 'rotate-180' : ''} />
                    {Math.abs(trend)}%
                  </p>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div
                  className={`h-1.5 rounded-full transition-all duration-500 ${rate >= 85 ? 'bg-emerald-500' : rate >= 70 ? 'bg-amber-500' : 'bg-red-500'}`}
                  style={{ width: `${rate}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
