'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Building2, ShoppingCart, Users, DollarSign, ArrowUpRight, ArrowUp, ArrowDown } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { useSchool, DemoSchool } from '@/lib/school-context'
import AppHeader from '@/components/ui/AppHeader'
import DemoBanner from '@/components/ui/DemoBanner'

export default function GroupDashboard({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const { demoGroup, buildHref, groupSlug, getGroupLogo } = useSchool()
  const [groupSchools, setGroupSchools] = useState<DemoSchool[]>([])

  // Sample schools for default view
  const sampleSchools: DemoSchool[] = [
    { slug: 'al-noor', name: 'مدرسة النور الدولية', nameEn: 'Al Noor International School', logo: '', groupSlug: 'sample' },
    { slug: 'al-amal', name: 'مدرسة الأمل', nameEn: 'Al Amal School', logo: '', groupSlug: 'sample' },
    { slug: 'future-leaders', name: 'مدرسة قادة المستقبل', nameEn: 'Future Leaders School', logo: '', groupSlug: 'sample' },
    { slug: 'al-salam', name: 'مدرسة السلام', nameEn: 'Al Salam School', logo: '', groupSlug: 'sample' },
    { slug: 'bright-minds', name: 'مدرسة العقول المضيئة', nameEn: 'Bright Minds Academy', logo: '', groupSlug: 'sample' },
  ]

  // Fetch schools that belong to this group
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

  const groupName = demoGroup
    ? (isAr ? demoGroup.name : demoGroup.nameEn)
    : (isAr ? 'مجموعة المدارس المتحدة' : 'United Schools Group')

  const t = {
    welcome: isAr ? 'مرحباً بك' : 'Welcome',
    subtitle: isAr ? 'نظرة شاملة على جميع المدارس' : 'Overview of all schools',
    schoolsOverview: isAr ? 'نظرة على المدارس' : 'Schools Overview',
    recentActivity: isAr ? 'النشاط الأخير' : 'Recent Activity',
    viewAll: isAr ? 'عرض الكل' : 'View All',
    totalRevenue: isAr ? 'ج.م إيرادات' : 'EGP Revenue',
    totalOrders: isAr ? 'طلب' : 'Orders',
    totalStudents: isAr ? 'طالب' : 'Students',
    schools: isAr ? 'مدرسة' : 'Schools',
    feeCollection: isAr ? 'تحصيل الرسوم' : 'Fee Collection',
    collected: isAr ? 'محصل' : 'collected',
    viewDetails: isAr ? 'عرض التفاصيل' : 'View Details',
    students: isAr ? 'طالب' : 'students',
    orders: isAr ? 'طلب' : 'orders',
  }

  // Generate mock stats based on number of schools
  const schoolCount = groupSchools.length || 5
  const mockStats = {
    revenue: schoolCount * 120000,
    orders: schoolCount * 78,
    students: schoolCount * 620,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DemoBanner locale={locale} appNameAr="مجموعة المدارس" appNameEn="School Group" />
      <AppHeader
        title={groupName}
        locale={locale}
        color="bg-violet-600"
      />

      {/* Welcome & Stats */}
      <div className="px-4 pt-4 pb-4 bg-gradient-to-b from-violet-50 to-gray-50">
        <div className="flex items-center gap-3 mb-2">
          {demoGroup?.logo && (
            <img src={getGroupLogo()} alt="" className="w-12 h-12 rounded-lg object-cover" />
          )}
          <div>
            <p className="text-gray-500">{t.welcome} 👋</p>
            <h1 className="text-xl font-bold text-violet-600">{groupName}</h1>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-1">{t.subtitle}</p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="flex flex-col items-center rounded-xl bg-violet-100 p-3">
            <DollarSign className="mb-1 h-5 w-5 text-violet-600" />
            <span className="text-lg font-bold text-violet-600">{(mockStats.revenue / 1000).toFixed(0)}K</span>
            <span className="text-xs text-gray-500">{t.totalRevenue}</span>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-blue-100 p-3">
            <ShoppingCart className="mb-1 h-5 w-5 text-blue-600" />
            <span className="text-lg font-bold text-blue-600">{mockStats.orders}</span>
            <span className="text-xs text-gray-500">{t.totalOrders}</span>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-emerald-100 p-3">
            <Users className="mb-1 h-5 w-5 text-emerald-600" />
            <span className="text-lg font-bold text-emerald-600">{mockStats.students.toLocaleString()}</span>
            <span className="text-xs text-gray-500">{t.totalStudents}</span>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-amber-100 p-3">
            <Building2 className="mb-1 h-5 w-5 text-amber-600" />
            <span className="text-lg font-bold text-amber-600">{schoolCount}</span>
            <span className="text-xs text-gray-500">{t.schools}</span>
          </div>
        </div>

        {/* Fee Collection Card */}
        <Link href={buildHref(`/${locale}/group/fees`)} className="mt-3 block bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-gray-800 text-sm">{t.feeCollection}</span>
            <span className="text-xs text-violet-600 font-medium flex items-center gap-1">
              {t.viewDetails}
              <ArrowUpRight size={12} />
            </span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div className="bg-violet-500 h-2 rounded-full" style={{ width: '82%' }} />
          </div>
          <p className="text-xs text-gray-500 mt-1">82% {t.collected} &bull; {(schoolCount * 2.6).toFixed(1)}M / {(schoolCount * 3.2).toFixed(1)}M {isAr ? 'ج.م' : 'EGP'}</p>
        </Link>
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
          {groupSchools.slice(0, 5).map((school, idx) => {
            // Generate random-ish mock data per school
            const mockStudents = 800 + (idx * 150)
            const mockOrders = 90 + (idx * 20)
            const mockRevenue = 150000 + (idx * 30000)
            const mockTrend = idx % 3 === 0 ? -3 : (5 + idx * 2)
            return (
              <div key={school.slug} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start gap-3">
                  {school.logo ? (
                    <img src={school.logo} alt="" className="w-10 h-10 rounded-lg object-cover" />
                  ) : (
                    <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center">
                      <Building2 size={20} className="text-violet-600" />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold text-gray-800">{isAr ? school.name : school.nameEn}</p>
                        <p className="text-sm text-gray-500">{mockStudents} {t.students} • {mockOrders} {t.orders}</p>
                      </div>
                      <div className={`flex items-center gap-1 text-sm ${mockTrend > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                        {mockTrend > 0 ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                        <span>{Math.abs(mockTrend)}%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-violet-600">{mockRevenue.toLocaleString()} {isAr ? 'ج.م' : 'EGP'}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-4 pb-24">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800">{t.recentActivity}</h2>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y">
          {groupSchools.slice(0, 3).map((school, idx) => {
            const actions = [
              { ar: 'طلب جديد بقيمة 5,000 ج.م', en: 'New order worth 5,000 EGP' },
              { ar: 'تم إضافة 3 منتجات جديدة', en: 'Added 3 new products' },
              { ar: 'تحديث بيانات المدرسة', en: 'Updated school info' },
            ]
            const times = ['5 min', '15 min', '1 hr']
            return (
              <div key={school.slug} className="flex items-center gap-3 p-4">
                {school.logo ? (
                  <img src={school.logo} alt="" className="w-10 h-10 rounded-full object-cover" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                    <Building2 size={18} className="text-violet-600" />
                  </div>
                )}
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{isAr ? school.name : school.nameEn}</p>
                  <p className="text-sm text-gray-500">{isAr ? actions[idx % 3].ar : actions[idx % 3].en}</p>
                </div>
                <span className="text-xs text-gray-400">{times[idx % 3]}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
