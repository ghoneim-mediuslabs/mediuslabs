'use client'

import { useState } from 'react'
import { Search, Banknote, Shirt, BookOpen, UtensilsCrossed, ChevronDown, ChevronUp } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { useSchool } from '@/lib/school-context'
import AppHeader from '@/components/ui/AppHeader'
import type { LucideIcon } from 'lucide-react'

interface CatalogItem {
  id: string
  nameAr: string
  nameEn: string
  price: number
  icon: string
}

interface Supplier {
  id: string
  nameAr: string
  nameEn: string
  icon: LucideIcon
  color: { bg: string; text: string; light: string }
  items: CatalogItem[]
  revenue: number
}

const suppliers: Supplier[] = [
  {
    id: 'school-fees',
    nameAr: 'الرسوم المدرسية',
    nameEn: 'School Fees',
    icon: Banknote,
    color: { bg: 'bg-emerald-600', text: 'text-emerald-600', light: 'bg-emerald-50' },
    revenue: 320000,
    items: [
      { id: 'f1', nameAr: 'الرسوم الدراسية - الفصل الثاني', nameEn: 'Tuition - Term 2', price: 12500, icon: '🎓' },
      { id: 'f2', nameAr: 'رسوم الأنشطة', nameEn: 'Activities Fee', price: 1500, icon: '🏆' },
      { id: 'f3', nameAr: 'رسوم النقل المدرسي', nameEn: 'School Transport', price: 3000, icon: '🚌' },
      { id: 'f4', nameAr: 'رسوم التأمين الصحي', nameEn: 'Health Insurance Fee', price: 800, icon: '🏥' },
    ],
  },
  {
    id: 'uniform-supplier',
    nameAr: 'شركة الزي المدرسي',
    nameEn: 'School Uniform Co.',
    icon: Shirt,
    color: { bg: 'bg-violet-600', text: 'text-violet-600', light: 'bg-violet-50' },
    revenue: 42000,
    items: [
      { id: 'u1', nameAr: 'قميص أبيض', nameEn: 'White Shirt', price: 180, icon: '👕' },
      { id: 'u2', nameAr: 'بنطلون كحلي', nameEn: 'Navy Pants', price: 220, icon: '👖' },
      { id: 'u3', nameAr: 'حذاء مدرسي', nameEn: 'School Shoes', price: 350, icon: '👟' },
    ],
  },
  {
    id: 'academic-supplier',
    nameAr: 'دار المعرفة للنشر',
    nameEn: 'Knowledge Books',
    icon: BookOpen,
    color: { bg: 'bg-blue-600', text: 'text-blue-600', light: 'bg-blue-50' },
    revenue: 13200,
    items: [
      { id: 'a1', nameAr: 'كتاب العلوم', nameEn: 'Science Book', price: 85, icon: '🔬' },
      { id: 'a2', nameAr: 'كتاب الرياضيات', nameEn: 'Math Book', price: 75, icon: '📐' },
      { id: 'a3', nameAr: 'قاموس إنجليزي', nameEn: 'English Dictionary', price: 120, icon: '📚' },
    ],
  },
  {
    id: 'canteen-supplier',
    nameAr: 'مطبخ المدرسة',
    nameEn: 'School Kitchen',
    icon: UtensilsCrossed,
    color: { bg: 'bg-orange-600', text: 'text-orange-600', light: 'bg-orange-50' },
    revenue: 8500,
    items: [
      { id: 'c1', nameAr: 'ساندويتش جبنة', nameEn: 'Cheese Sandwich', price: 25, icon: '🥪' },
      { id: 'c2', nameAr: 'عصير برتقال', nameEn: 'Orange Juice', price: 15, icon: '🧃' },
      { id: 'c3', nameAr: 'فطيرة بالجبن', nameEn: 'Cheese Pastry', price: 30, icon: '🥐' },
      { id: 'c4', nameAr: 'تفاحة', nameEn: 'Apple', price: 12, icon: '🍎' },
    ],
  },
]

export default function SchoolCatalog({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedSuppliers, setExpandedSuppliers] = useState<Set<string>>(new Set(['school-fees']))
  const { buildHref } = useSchool()

  const t = {
    title: isAr ? 'الكتالوج' : 'Catalog',
    search: isAr ? 'بحث...' : 'Search...',
    items: isAr ? 'عناصر' : 'items',
    revenue: isAr ? 'ج.م إيرادات' : 'EGP revenue',
    noResults: isAr ? 'لا توجد نتائج' : 'No results found',
  }

  const toggleSupplier = (id: string) => {
    setExpandedSuppliers(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const filteredSuppliers = searchQuery
    ? suppliers.map(s => ({
        ...s,
        items: s.items.filter(item =>
          (isAr ? item.nameAr : item.nameEn).toLowerCase().includes(searchQuery.toLowerCase())
        ),
      })).filter(s => s.items.length > 0)
    : suppliers

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader
        title={t.title}
        locale={locale}
        color="bg-emerald-600"
        showBack
        backHref={`/${locale}/school`}
      />

      {/* Search */}
      <div className="px-4 pt-4 pb-2">
        <div className="relative">
          <Search size={18} className="absolute start-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder={t.search}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full ps-10 pe-4 py-2.5 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-colors"
          />
        </div>
      </div>

      {/* Supplier Sections */}
      <div className="px-4 py-2 pb-24 space-y-3">
        {filteredSuppliers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">{t.noResults}</p>
          </div>
        ) : (
          filteredSuppliers.map((supplier) => {
            const Icon = supplier.icon
            const isExpanded = expandedSuppliers.has(supplier.id) || !!searchQuery
            return (
              <div key={supplier.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Supplier Header */}
                <button
                  onClick={() => toggleSupplier(supplier.id)}
                  className="w-full flex items-center gap-3 p-4 text-start hover:bg-gray-50 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-xl ${supplier.color.light} flex items-center justify-center`}>
                    <Icon size={20} className={supplier.color.text} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">
                      {isAr ? supplier.nameAr : supplier.nameEn}
                    </p>
                    <p className="text-xs text-gray-500">
                      {supplier.items.length} {t.items} &bull; {supplier.revenue.toLocaleString()} {t.revenue}
                    </p>
                  </div>
                  {isExpanded ? (
                    <ChevronUp size={18} className="text-gray-400" />
                  ) : (
                    <ChevronDown size={18} className="text-gray-400" />
                  )}
                </button>

                {/* Items */}
                {isExpanded && (
                  <div className="border-t border-gray-100 divide-y divide-gray-50">
                    {supplier.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-3 px-4 py-3">
                        <span className="text-xl w-8 text-center">{item.icon}</span>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-800">
                            {isAr ? item.nameAr : item.nameEn}
                          </p>
                        </div>
                        <span className="text-sm font-semibold text-gray-700">
                          {item.price.toLocaleString()} {isAr ? 'ج.م' : 'EGP'}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
