'use client'

import { useState } from 'react'
import { Plus, Search, Banknote, Edit2, Trash2, Eye, EyeOff } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { useSchool } from '@/lib/school-context'
import AppHeader from '@/components/ui/AppHeader'

const fees = [
  { id: '1', nameAr: 'الرسوم الدراسية - الفصل الثاني', nameEn: 'Tuition - Term 2', amount: 12500, dueAr: '15 يناير', dueEn: 'Jan 15', active: true, icon: '🎓' },
  { id: '2', nameAr: 'رسوم الأنشطة', nameEn: 'Activities Fee', amount: 1500, dueAr: '1 فبراير', dueEn: 'Feb 1', active: true, icon: '🏆' },
  { id: '3', nameAr: 'رسوم النقل المدرسي', nameEn: 'School Transport', amount: 3000, dueAr: '15 يناير', dueEn: 'Jan 15', active: true, icon: '🚌' },
  { id: '4', nameAr: 'رسوم التأمين الصحي', nameEn: 'Health Insurance Fee', amount: 800, dueAr: '1 مارس', dueEn: 'Mar 1', active: true, icon: '🏥' },
  { id: '5', nameAr: 'الرسوم الدراسية - الفصل الأول', nameEn: 'Tuition - Term 1', amount: 12500, dueAr: '15 سبتمبر', dueEn: 'Sep 15', active: false, icon: '🎓' },
]

export default function SchoolFeeManagement({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const [searchQuery, setSearchQuery] = useState('')
  const { buildHref } = useSchool()

  const t = {
    title: isAr ? 'إدارة الرسوم' : 'Manage Fees',
    search: isAr ? 'بحث عن رسم...' : 'Search fees...',
    addFee: isAr ? 'إضافة رسم' : 'Add Fee',
    dueDate: isAr ? 'الاستحقاق' : 'Due',
    noFees: isAr ? 'لا توجد رسوم' : 'No fees found',
    active: isAr ? 'نشط' : 'Active',
    inactive: isAr ? 'غير نشط' : 'Inactive',
  }

  const filteredFees = fees.filter(fee =>
    (isAr ? fee.nameAr : fee.nameEn).toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader
        title={t.title}
        locale={locale}
        color="bg-emerald-600"
        showBack
        backHref={`/${locale}/school/products`}
      />

      {/* Search & Add */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search size={18} className="absolute start-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={t.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full ps-10 pe-4 py-2.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-colors"
            />
          </div>
          <button className="bg-emerald-600 text-white px-4 rounded-xl flex items-center gap-2 hover:bg-emerald-700 transition-colors">
            <Plus size={18} />
          </button>
        </div>
      </div>

      {/* Fees List */}
      <div className="px-4 pt-2 pb-24">
        {filteredFees.length === 0 ? (
          <div className="text-center py-12">
            <Banknote size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">{t.noFees}</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredFees.map((fee) => (
              <div key={fee.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
                    {fee.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-gray-800">{isAr ? fee.nameAr : fee.nameEn}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${fee.active ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'}`}>
                        {fee.active ? t.active : t.inactive}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      {fee.amount.toLocaleString()} {isAr ? 'ج.م' : 'EGP'} &bull; {t.dueDate}: {isAr ? fee.dueAr : fee.dueEn}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-400 hover:text-emerald-600 transition-colors">
                      {fee.active ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                    <button className="p-2 text-gray-400 hover:text-emerald-600 transition-colors">
                      <Edit2 size={18} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                      <Trash2 size={18} />
                    </button>
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
