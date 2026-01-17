'use client'

import { useState } from 'react'
import { Plus, Search, Package, Edit2, Trash2, Eye, EyeOff } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { useSchool } from '@/lib/school-context'
import AppHeader from '@/components/ui/AppHeader'

const products = [
  { id: '1', nameAr: 'قميص أبيض', nameEn: 'White Shirt', price: 180, minOrder: 50, active: true, category: 'uniform', icon: '👕' },
  { id: '2', nameAr: 'بنطلون كحلي', nameEn: 'Navy Pants', price: 220, minOrder: 50, active: true, category: 'uniform', icon: '👖' },
  { id: '3', nameAr: 'كتاب الرياضيات', nameEn: 'Math Book', price: 85, minOrder: 100, active: true, category: 'academic', icon: '📚' },
  { id: '4', nameAr: 'كتاب العلوم', nameEn: 'Science Book', price: 85, minOrder: 100, active: true, category: 'academic', icon: '🔬' },
  { id: '5', nameAr: 'دفتر A4', nameEn: 'A4 Notebook', price: 15, minOrder: 200, active: false, category: 'supplies', icon: '📓' },
  { id: '6', nameAr: 'أقلام رصاص (12)', nameEn: 'Pencils (12pk)', price: 25, minOrder: 100, active: true, category: 'supplies', icon: '✏️' },
]

const categories = [
  { id: 'all', labelAr: 'الكل', labelEn: 'All' },
  { id: 'uniform', labelAr: 'الزي', labelEn: 'Uniform' },
  { id: 'academic', labelAr: 'أكاديمي', labelEn: 'Academic' },
  { id: 'supplies', labelAr: 'مستلزمات', labelEn: 'Supplies' },
]

export default function SupplierCatalog({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const { buildHref } = useSchool()

  const t = {
    title: isAr ? 'الكتالوج' : 'Catalog',
    search: isAr ? 'بحث عن منتج...' : 'Search products...',
    addProduct: isAr ? 'إضافة منتج' : 'Add Product',
    minOrder: isAr ? 'حد أدنى' : 'Min order',
    noProducts: isAr ? 'لا توجد منتجات' : 'No products found',
    active: isAr ? 'نشط' : 'Active',
    inactive: isAr ? 'غير نشط' : 'Inactive',
  }

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory
    const matchesSearch = (isAr ? product.nameAr : product.nameEn).toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
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
              className="w-full ps-10 pe-4 py-2.5 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-colors"
            />
          </div>
          <button className="bg-red-600 text-white px-4 rounded-xl flex items-center gap-2 hover:bg-red-700 transition-colors">
            <Plus size={18} />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 py-2">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === cat.id
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-red-300'
              }`}
            >
              {isAr ? cat.labelAr : cat.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Products List */}
      <div className="px-4 pb-24">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <Package size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">{t.noProducts}</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
                    {product.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-gray-800">{isAr ? product.nameAr : product.nameEn}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${product.active ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'}`}>
                        {product.active ? t.active : t.inactive}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      {product.price} {isAr ? 'ج.م' : 'EGP'} • {t.minOrder}: {product.minOrder}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                      {product.active ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
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
