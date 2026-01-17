'use client'

import { useState } from 'react'
import { Plus, Search, Package, Edit2, Trash2 } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { useSchool } from '@/lib/school-context'
import AppHeader from '@/components/ui/AppHeader'

const products = [
  { id: '1', nameAr: 'قميص أبيض', nameEn: 'White Shirt', price: 180, stock: 45, category: 'uniform', icon: '👕' },
  { id: '2', nameAr: 'بنطلون كحلي', nameEn: 'Navy Pants', price: 220, stock: 32, category: 'uniform', icon: '👖' },
  { id: '3', nameAr: 'كتاب الرياضيات', nameEn: 'Math Book', price: 85, stock: 120, category: 'academic', icon: '📚' },
  { id: '4', nameAr: 'كتاب العلوم', nameEn: 'Science Book', price: 85, stock: 98, category: 'academic', icon: '🔬' },
  { id: '5', nameAr: 'ساندوتش فراخ', nameEn: 'Chicken Sandwich', price: 35, stock: 50, category: 'canteen', icon: '🥪' },
  { id: '6', nameAr: 'عصير برتقال', nameEn: 'Orange Juice', price: 15, stock: 100, category: 'canteen', icon: '🧃' },
]

const categories = [
  { id: 'all', labelAr: 'الكل', labelEn: 'All' },
  { id: 'uniform', labelAr: 'الزي', labelEn: 'Uniform' },
  { id: 'academic', labelAr: 'أكاديمي', labelEn: 'Academic' },
  { id: 'canteen', labelAr: 'كانتين', labelEn: 'Canteen' },
]

export default function SchoolProducts({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const { buildHref } = useSchool()

  const t = {
    title: isAr ? 'المنتجات' : 'Products',
    search: isAr ? 'بحث عن منتج...' : 'Search products...',
    addProduct: isAr ? 'إضافة منتج' : 'Add Product',
    inStock: isAr ? 'في المخزون' : 'in stock',
    noProducts: isAr ? 'لا توجد منتجات' : 'No products found',
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
        color="bg-emerald-600"
        showBack
        backHref={`/${locale}/school`}
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

      {/* Categories */}
      <div className="px-4 py-2">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === cat.id
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-emerald-300'
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
                    <p className="font-semibold text-gray-800">{isAr ? product.nameAr : product.nameEn}</p>
                    <p className="text-sm text-gray-500">
                      {product.price} {isAr ? 'ج.م' : 'EGP'} • {product.stock} {t.inStock}
                    </p>
                  </div>
                  <div className="flex gap-2">
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
