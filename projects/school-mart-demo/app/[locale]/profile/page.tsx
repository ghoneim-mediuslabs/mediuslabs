'use client'

import { User, Mail, Phone, School, CreditCard, Settings, LogOut } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { children, schools as mockSchools, wallet } from '@/lib/mock-data'
import { useSchool } from '@/lib/school-context'
import AppHeader from '@/components/ui/AppHeader'

export default function ProfilePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const { demoSchool, isOverrideMode, getSchoolLogo } = useSchool()
  const child = children[0]
  const school = isOverrideMode && demoSchool
    ? { id: 'demo', name: demoSchool.name, nameEn: demoSchool.nameEn, logo: getSchoolLogo() }
    : mockSchools.find(s => s.id === child.schoolId) || mockSchools[0]

  const t = {
    title: isAr ? 'حسابي' : 'My Profile',
    parentInfo: isAr ? 'بيانات ولي الأمر' : 'Parent Information',
    children: isAr ? 'الأبناء' : 'Children',
    wallet: isAr ? 'المحفظة' : 'Wallet',
    settings: isAr ? 'الإعدادات' : 'Settings',
    logout: isAr ? 'تسجيل الخروج' : 'Logout',
    balance: isAr ? 'الرصيد الحالي' : 'Current Balance',
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader
        title={t.title}
        locale={locale}
        color="bg-gray-800"
        showBack
        backHref={`/${locale}`}
      />

      {/* Parent Info */}
      <div className="px-4 pt-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <User size={32} className="text-blue-600" />
            </div>
            <div>
              <h2 className="font-bold text-gray-800 text-lg">{isAr ? 'أحمد محمد علي' : 'Ahmed Mohamed Ali'}</h2>
              <p className="text-gray-500 text-sm">{isAr ? 'ولي أمر' : 'Parent'}</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-600">
              <Mail size={18} />
              <span className="text-sm">ahmed.ali@email.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Phone size={18} />
              <span className="text-sm">+20 100 123 4567</span>
            </div>
          </div>
        </div>
      </div>

      {/* Children */}
      <div className="px-4 pt-4">
        <h3 className="font-semibold text-gray-800 mb-3">{t.children}</h3>
        <div className="space-y-3">
          {children.map((child) => {
            const childSchool = isOverrideMode && demoSchool
              ? { id: 'demo', name: demoSchool.name, nameEn: demoSchool.nameEn, logo: getSchoolLogo() }
              : mockSchools.find(s => s.id === child.schoolId)
            return (
              <div key={child.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
                <img src={childSchool?.logo} alt="" className="w-10 h-10 rounded-lg" />
                <div>
                  <p className="font-semibold text-gray-800">{isAr ? child.name : child.nameEn}</p>
                  <p className="text-sm text-gray-500">{isAr ? child.grade : child.gradeEn}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Wallet */}
      <div className="px-4 pt-4">
        <h3 className="font-semibold text-gray-800 mb-3">{t.wallet}</h3>
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CreditCard size={24} />
              <div>
                <p className="text-sm opacity-80">{t.balance}</p>
                <p className="text-2xl font-bold">{wallet.balance} {isAr ? wallet.currencyAr : wallet.currency}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 pt-4 pb-24">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y">
          <button className="w-full flex items-center gap-3 p-4 text-gray-700 hover:bg-gray-50 transition-colors">
            <Settings size={20} />
            <span>{t.settings}</span>
          </button>
          <button className="w-full flex items-center gap-3 p-4 text-red-600 hover:bg-red-50 transition-colors">
            <LogOut size={20} />
            <span>{t.logout}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
