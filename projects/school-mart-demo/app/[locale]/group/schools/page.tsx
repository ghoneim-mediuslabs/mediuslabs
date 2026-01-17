'use client'

import { useState } from 'react'
import { Search, Building2, Users, ShoppingCart, TrendingUp, ChevronRight, ChevronLeft, Plus } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { useSchool } from '@/lib/school-context'
import AppHeader from '@/components/ui/AppHeader'

const schools = [
  { id: '1', nameAr: 'مدرسة النور', nameEn: 'Al Noor School', locationAr: 'المعادي، القاهرة', locationEn: 'Maadi, Cairo', students: 1250, orders: 156, revenue: 245000, status: 'active' },
  { id: '2', nameAr: 'مدرسة الأمل', nameEn: 'Al Amal School', locationAr: 'مدينة نصر، القاهرة', locationEn: 'Nasr City, Cairo', students: 980, orders: 134, revenue: 198000, status: 'active' },
  { id: '3', nameAr: 'مدرسة الفجر', nameEn: 'Al Fajr School', locationAr: 'الدقي، الجيزة', locationEn: 'Dokki, Giza', students: 850, orders: 98, revenue: 156000, status: 'active' },
  { id: '4', nameAr: 'مدرسة الإيمان', nameEn: 'Al Iman School', locationAr: 'المهندسين، الجيزة', locationEn: 'Mohandeseen, Giza', students: 0, orders: 0, revenue: 0, status: 'pending' },
  { id: '5', nameAr: 'مدرسة السلام', nameEn: 'Al Salam School', locationAr: 'الزمالك، القاهرة', locationEn: 'Zamalek, Cairo', students: 720, orders: 76, revenue: 112000, status: 'active' },
]

export default function GroupSchools({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const [searchQuery, setSearchQuery] = useState('')
  const Chevron = isAr ? ChevronLeft : ChevronRight

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
  }

  const filteredSchools = schools.filter(school => {
    return (isAr ? school.nameAr : school.nameEn).toLowerCase().includes(searchQuery.toLowerCase()) ||
           (isAr ? school.locationAr : school.locationEn).toLowerCase().includes(searchQuery.toLowerCase())
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
      </div>

      {/* Schools List */}
      <div className="px-4 pb-24">
        {filteredSchools.length === 0 ? (
          <div className="text-center py-12">
            <Building2 size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">{t.noSchools}</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredSchools.map((school) => (
              <div key={school.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center">
                    <Building2 size={24} className="text-violet-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-gray-800">{isAr ? school.nameAr : school.nameEn}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${school.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                        {school.status === 'active' ? t.active : t.pending}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{isAr ? school.locationAr : school.locationEn}</p>

                    {school.status === 'active' && (
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Users size={14} />
                          <span>{school.students}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ShoppingCart size={14} />
                          <span>{school.orders}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp size={14} />
                          <span className="text-violet-600 font-medium">{school.revenue.toLocaleString()}</span>
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
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
