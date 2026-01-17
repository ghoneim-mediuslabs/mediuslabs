'use client'

import { useState } from 'react'
import { Search, Building2, MapPin, Phone, Mail, ChevronRight, ChevronLeft } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { useSchool } from '@/lib/school-context'
import AppHeader from '@/components/ui/AppHeader'

const schools = [
  { id: '1', nameAr: 'مدرسة النور', nameEn: 'Al Noor School', locationAr: 'المعادي، القاهرة', locationEn: 'Maadi, Cairo', orders: 45, totalSpent: 125000, status: 'active' },
  { id: '2', nameAr: 'مدرسة الأمل', nameEn: 'Al Amal School', locationAr: 'مدينة نصر، القاهرة', locationEn: 'Nasr City, Cairo', orders: 38, totalSpent: 98000, status: 'active' },
  { id: '3', nameAr: 'مدرسة الفجر', nameEn: 'Al Fajr School', locationAr: 'الدقي، الجيزة', locationEn: 'Dokki, Giza', orders: 32, totalSpent: 76000, status: 'active' },
  { id: '4', nameAr: 'مدرسة الإيمان', nameEn: 'Al Iman School', locationAr: 'المهندسين، الجيزة', locationEn: 'Mohandeseen, Giza', orders: 28, totalSpent: 64000, status: 'pending' },
  { id: '5', nameAr: 'مدرسة السلام', nameEn: 'Al Salam School', locationAr: 'الزمالك، القاهرة', locationEn: 'Zamalek, Cairo', orders: 22, totalSpent: 52000, status: 'active' },
]

export default function SupplierSchools({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const [searchQuery, setSearchQuery] = useState('')
  const Chevron = isAr ? ChevronLeft : ChevronRight

  const t = {
    title: isAr ? 'المدارس' : 'Schools',
    search: isAr ? 'بحث عن مدرسة...' : 'Search schools...',
    noSchools: isAr ? 'لا توجد مدارس' : 'No schools found',
    orders: isAr ? 'طلب' : 'orders',
    totalSpent: isAr ? 'إجمالي المشتريات' : 'Total spent',
    active: isAr ? 'نشط' : 'Active',
    pending: isAr ? 'قيد المراجعة' : 'Pending',
    viewDetails: isAr ? 'عرض التفاصيل' : 'View Details',
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
        color="bg-red-600"
        showBack
        backHref={`/${locale}/supplier`}
      />

      {/* Search */}
      <div className="px-4 pt-4 pb-4">
        <div className="relative">
          <Search size={18} className="absolute start-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder={t.search}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full ps-10 pe-4 py-2.5 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors"
          />
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
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <Building2 size={24} className="text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-gray-800">{isAr ? school.nameAr : school.nameEn}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${school.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                        {school.status === 'active' ? t.active : t.pending}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                      <MapPin size={14} />
                      <span>{isAr ? school.locationAr : school.locationEn}</span>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <div>
                        <span className="text-sm text-gray-500">{school.orders} {t.orders}</span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-sm font-semibold text-red-600">{school.totalSpent.toLocaleString()} {isAr ? 'ج.م' : 'EGP'}</span>
                      </div>
                      <button className="flex items-center gap-1 text-sm text-red-600 font-medium">
                        {t.viewDetails}
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
