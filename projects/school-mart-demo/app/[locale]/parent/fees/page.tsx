'use client'

import { useState } from 'react'
import { GraduationCap, Trophy, Bus, CircleDollarSign, Check, ShoppingCart } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { schoolFees, wallet, children, schools as mockSchools } from '@/lib/mock-data'
import { useSchool } from '@/lib/school-context'
import AppHeader from '@/components/ui/AppHeader'

const feeTypeIcons: Record<string, typeof GraduationCap> = {
  tuition: GraduationCap,
  activities: Trophy,
  transport: Bus,
  other: CircleDollarSign,
}

const feeTypeColors: Record<string, { bg: string; text: string }> = {
  tuition: { bg: 'bg-blue-100', text: 'text-blue-600' },
  activities: { bg: 'bg-purple-100', text: 'text-purple-600' },
  transport: { bg: 'bg-amber-100', text: 'text-amber-600' },
  other: { bg: 'bg-gray-100', text: 'text-gray-600' },
}

export default function FeesPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const [cartItems, setCartItems] = useState<Set<string>>(new Set())
  const { demoSchool, isOverrideMode, getSchoolLogo } = useSchool()

  const child = children[0]
  const school = isOverrideMode && demoSchool
    ? { id: 'demo', name: demoSchool.name, nameEn: demoSchool.nameEn, logo: getSchoolLogo() }
    : mockSchools.find(s => s.id === child.schoolId) || mockSchools[0]

  const t = {
    title: isAr ? 'الرسوم المدرسية' : 'School Fees',
    totalFees: isAr ? 'إجمالي الرسوم' : 'Total Fees',
    paid: isAr ? 'المدفوع' : 'Paid',
    outstanding: isAr ? 'المتبقي' : 'Outstanding',
    addToCart: isAr ? 'أضف للسلة' : 'Add to Cart',
    added: isAr ? 'تمت الإضافة' : 'Added',
    addAllToCart: isAr ? 'إضافة الكل للسلة' : 'Add All to Cart',
    paidStatus: isAr ? 'تم الدفع' : 'Paid',
    unpaidStatus: isAr ? 'غير مدفوع' : 'Unpaid',
    partialStatus: isAr ? 'دفع جزئي' : 'Partial',
    dueDate: isAr ? 'تاريخ الاستحقاق' : 'Due Date',
    tuition: isAr ? 'الرسوم الدراسية' : 'Tuition',
    activities: isAr ? 'الأنشطة' : 'Activities',
    transport: isAr ? 'النقل' : 'Transport',
    other: isAr ? 'أخرى' : 'Other',
    items: isAr ? 'عناصر' : 'items',
  }

  const totalFees = schoolFees.reduce((sum, fee) => sum + fee.amount, 0)
  const totalPaid = schoolFees.reduce((sum, fee) => sum + fee.paidAmount, 0)
  const totalOutstanding = totalFees - totalPaid

  const unpaidFees = schoolFees.filter(fee => fee.status !== 'paid')

  const toggleCart = (id: string) => {
    setCartItems(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const addAllToCart = () => {
    setCartItems(new Set(unpaidFees.map(fee => fee.id)))
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return { label: t.paidStatus, style: 'bg-emerald-100 text-emerald-700' }
      case 'partial':
        return { label: t.partialStatus, style: 'bg-amber-100 text-amber-700' }
      default:
        return { label: t.unpaidStatus, style: 'bg-red-100 text-red-700' }
    }
  }

  const getFeeTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      tuition: t.tuition,
      activities: t.activities,
      transport: t.transport,
      other: t.other,
    }
    return labels[type] || type
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader
        title={t.title}
        locale={locale}
        color="bg-fees"
        showBack
        backHref={`/${locale}/parent`}
      />

      {/* Student Profile Card */}
      <div className="px-4 pt-4">
        <div className="bg-emerald-50 rounded-xl p-3 flex items-center gap-3">
          <img src={school.logo} alt="" className="w-8 h-8 rounded-lg" />
          <div>
            <span className="font-semibold text-gray-800">
              {isAr ? child.name : child.nameEn}
            </span>
            <span className="text-gray-500 mx-2">-</span>
            <span className="text-gray-600">{isAr ? child.grade : child.gradeEn}</span>
            <p className="text-xs text-gray-500">{isAr ? school.name : school.nameEn}</p>
          </div>
        </div>
      </div>

      {/* Fee Summary Card */}
      <div className="px-4 py-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <p className="text-xs text-gray-500 mb-1">{t.totalFees}</p>
              <p className="text-lg font-bold text-gray-800">{totalFees.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">{t.paid}</p>
              <p className="text-lg font-bold text-emerald-600">{totalPaid.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">{t.outstanding}</p>
              <p className="text-lg font-bold text-red-600">{totalOutstanding.toLocaleString()}</p>
            </div>
          </div>
          <div className="mt-3 w-full bg-gray-100 rounded-full h-2">
            <div
              className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(totalPaid / totalFees) * 100}%` }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-1 text-center">
            {Math.round((totalPaid / totalFees) * 100)}% {t.paid}
          </p>
        </div>
      </div>

      {/* Fee Items */}
      <div className="px-4 pb-4">
        <div className="space-y-3">
          {schoolFees.map((fee) => {
            const Icon = feeTypeIcons[fee.type] || CircleDollarSign
            const colors = feeTypeColors[fee.type] || feeTypeColors.other
            const badge = getStatusBadge(fee.status)
            const inCart = cartItems.has(fee.id)
            const remainingAmount = fee.amount - fee.paidAmount

            return (
              <div key={fee.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex gap-3">
                  <div className={`w-10 h-10 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon size={20} className={colors.text} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-gray-800 text-sm">
                          {isAr ? fee.name : fee.nameEn}
                        </h3>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {getFeeTypeLabel(fee.type)} &bull; {t.dueDate}: {isAr ? fee.dueDate : fee.dueDateEn}
                        </p>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${badge.style}`}>
                        {badge.label}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div>
                        <span className="font-bold text-gray-800">
                          {fee.amount.toLocaleString()} {isAr ? 'ج.م' : 'EGP'}
                        </span>
                        {fee.status === 'partial' && (
                          <span className="text-xs text-gray-500 ms-2">
                            ({isAr ? 'متبقي' : 'remaining'}: {remainingAmount.toLocaleString()})
                          </span>
                        )}
                      </div>
                    </div>
                    {fee.status !== 'paid' && (
                      <button
                        onClick={() => toggleCart(fee.id)}
                        className={`w-full mt-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                          inCart
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-fees text-white hover:opacity-90'
                        }`}
                      >
                        {inCart ? (
                          <span className="flex items-center justify-center gap-2">
                            <Check size={16} />
                            {t.added}
                          </span>
                        ) : (
                          t.addToCart
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      {unpaidFees.length > 0 && (
        <div className="fixed bottom-20 left-0 right-0 px-4 pb-4">
          <div className="max-w-[430px] mx-auto">
            <button
              onClick={addAllToCart}
              className="w-full bg-fees text-white rounded-xl p-4 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm opacity-90">
                  {t.outstanding}: {totalOutstanding.toLocaleString()} {isAr ? 'ج.م' : 'EGP'}
                  {cartItems.size > 0 && ` (${cartItems.size} ${t.items})`}
                </span>
                <span className="font-semibold flex items-center gap-2">
                  <ShoppingCart size={16} />
                  {t.addAllToCart}
                </span>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
