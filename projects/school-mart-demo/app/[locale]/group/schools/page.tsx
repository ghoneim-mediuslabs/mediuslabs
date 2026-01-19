'use client'

import { useState, useEffect } from 'react'
import { Search, Building2, Users, ShoppingCart, TrendingUp, ChevronRight, ChevronLeft, Plus } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { useSchool, DemoSchool } from '@/lib/school-context'
import AppHeader from '@/components/ui/AppHeader'

export default function GroupSchools({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const [searchQuery, setSearchQuery] = useState('')
  const Chevron = isAr ? ChevronLeft : ChevronRight
  const { demoGroup, groupSlug, buildHref } = useSchool()
  const [groupSchools, setGroupSchools] = useState<DemoSchool[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Sample schools for default view (when no group specified)
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
      // If no group specified, use sample schools
      if (!groupSlug) {
        setGroupSchools(sampleSchools)
        setIsLoading(false)
        return
      }
      try {
        const res = await fetch('/api/schools')
        if (res.ok) {
          const allSchools: DemoSchool[] = await res.json()
          const filtered = allSchools.filter(s => s.groupSlug === groupSlug)
          // If group has no schools, fall back to sample schools
          setGroupSchools(filtered.length > 0 ? filtered : sampleSchools)
        } else {
          setGroupSchools(sampleSchools)
        }
      } catch {
        setGroupSchools(sampleSchools)
      }
      setIsLoading(false)
    }
    fetchGroupSchools()
  }, [groupSlug])

  const groupName = demoGroup
    ? (isAr ? demoGroup.name : demoGroup.nameEn)
    : (isAr ? 'مجموعة المدارس المتحدة' : 'United Schools Group')

  const t = {
    title: isAr ? 'المدارس' : 'Schools',
    search: isAr ? 'بحث عن مدرسة...' : 'Search schools...',
    addSchool: isAr ? 'إضافة مدرسة' : 'Add School',
    noSchools: isAr ? 'لا توجد مدارس' : 'No schools found',
    students: isAr ? 'طالب' : 'students',
    orders: isAr ? 'طلب' : 'orders',
    active: isAr ? 'نشط' : 'Active',
    pending: isAr ? 'قيد الإعداد' : 'Setup',
    manageSchool: isAr ? 'إدارة المدرسة' : 'Manage',
    loading: isAr ? 'جاري التحميل...' : 'Loading...',
  }

  const filteredSchools = groupSchools.filter(school => {
    const name = isAr ? school.name : school.nameEn
    return name.toLowerCase().includes(searchQuery.toLowerCase())
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

      {/* Search & Add */}
      <div className="px-4 pt-4 pb-4">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search size={18} className="absolute start-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={t.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full ps-10 pe-4 py-2.5 rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-colors"
            />
          </div>
          <button className="bg-violet-600 text-white px-4 rounded-xl flex items-center gap-2 hover:bg-violet-700 transition-colors">
            <Plus size={18} />
          </button>
        </div>
        {groupSlug && (
          <p className="text-sm text-gray-500 mt-2">
            {filteredSchools.length} {isAr ? 'مدرسة في' : 'schools in'} {groupName}
          </p>
        )}
      </div>

      {/* Schools List */}
      <div className="px-4 pb-24">
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-500">{t.loading}</p>
          </div>
        ) : filteredSchools.length === 0 ? (
          <div className="text-center py-12">
            <Building2 size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">{t.noSchools}</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredSchools.map((school, idx) => {
              // Generate mock data per school
              const mockStudents = 800 + (idx * 50)
              const mockOrders = 90 + (idx * 5)
              const mockRevenue = 150000 + (idx * 10000)
              const isActive = idx % 5 !== 4 // Most are active

              return (
                <div key={school.slug} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start gap-3">
                    {school.logo ? (
                      <img src={school.logo} alt="" className="w-12 h-12 rounded-xl object-cover" />
                    ) : (
                      <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center">
                        <Building2 size={24} className="text-violet-600" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-gray-800">{isAr ? school.name : school.nameEn}</p>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                          {isActive ? t.active : t.pending}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{school.slug}</p>

                      {isActive && (
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Users size={14} />
                            <span>{mockStudents}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <ShoppingCart size={14} />
                            <span>{mockOrders}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <TrendingUp size={14} />
                            <span className="text-violet-600 font-medium">{mockRevenue.toLocaleString()}</span>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-end pt-2 mt-2 border-t border-gray-100">
                        <button className="flex items-center gap-1 text-sm text-violet-600 font-medium">
                          {t.manageSchool}
                          <Chevron size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
