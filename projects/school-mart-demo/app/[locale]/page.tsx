'use client'

import Link from 'next/link'
import { Globe, Users, School, Truck, Building2, ArrowRight, ArrowLeft, CheckCircle2, ShoppingBag, CreditCard, Bell, Sparkles } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { useSchool } from '@/lib/school-context'

const portals = [
  {
    id: 'parent',
    href: '/parent',
    icon: Users,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    labelAr: 'ولي الأمر',
    labelEn: 'Parent Portal',
    descAr: 'اطلب الزي والكتب، اشحن المحفظة، وتابع كل ما يخص أبنائك',
    descEn: 'Order uniforms, books, top up wallet, and track everything for your children',
  },
  {
    id: 'school',
    href: '/school',
    icon: School,
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    labelAr: 'المدرسة',
    labelEn: 'School Portal',
    descAr: 'أدر المنتجات والطلبات وتابع إيرادات المدرسة',
    descEn: 'Manage products, orders, and track school revenue',
  },
  {
    id: 'supplier',
    href: '/supplier',
    icon: Truck,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600',
    labelAr: 'المورد',
    labelEn: 'Supplier Portal',
    descAr: 'أدر كتالوج المنتجات وتلقى الطلبات من المدارس',
    descEn: 'Manage product catalog and receive orders from schools',
  },
  {
    id: 'group',
    href: '/group',
    icon: Building2,
    color: 'from-violet-500 to-violet-600',
    bgColor: 'bg-violet-50',
    iconColor: 'text-violet-600',
    labelAr: 'مجموعة المدارس',
    labelEn: 'School Group',
    descAr: 'راقب وحلل أداء جميع مدارس المجموعة',
    descEn: 'Monitor and analyze performance across all schools',
  },
]

const howItWorks = [
  {
    icon: ShoppingBag,
    titleAr: 'اطلب بسهولة',
    titleEn: 'Order Easily',
    descAr: 'تصفح المنتجات واطلب الزي والكتب والوجبات بضغطة زر',
    descEn: 'Browse products and order uniforms, books, and meals with one tap',
  },
  {
    icon: CreditCard,
    titleAr: 'ادفع بأمان',
    titleEn: 'Pay Securely',
    descAr: 'اشحن المحفظة أو ادفع مباشرة بطرق دفع متعددة',
    descEn: 'Top up wallet or pay directly with multiple payment methods',
  },
  {
    icon: Bell,
    titleAr: 'تابع وتلقى إشعارات',
    titleEn: 'Track & Get Notified',
    descAr: 'تابع طلباتك وتلقى إشعارات فورية عن كل جديد',
    descEn: 'Track orders and receive instant notifications about updates',
  },
]

export default function LandingPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const otherLocale = locale === 'ar' ? 'en' : 'ar'
  const { demoSchool, isOverrideMode, getSchoolLogo, buildHref } = useSchool()
  const Arrow = isAr ? ArrowLeft : ArrowRight

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isOverrideMode && demoSchool ? (
              <>
                <img src={getSchoolLogo()} alt="" className="h-8 w-8 rounded-lg object-cover" />
                <span className="font-bold text-gray-800">{isAr ? demoSchool.name : demoSchool.nameEn}</span>
              </>
            ) : (
              <>
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <School className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-gray-800">School-Mart</span>
              </>
            )}
          </div>
          <Link
            href={buildHref(`/${otherLocale}`)}
            className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 transition-colors px-3 py-1.5 rounded-full text-sm text-gray-700"
          >
            <Globe size={14} />
            <span>{locale === 'ar' ? 'En' : 'ع'}</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 pt-8 pb-10 text-center">
        <div className="max-w-md mx-auto">
          {isOverrideMode && demoSchool ? (
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in">
              <CheckCircle2 size={16} />
              {isAr ? 'خدمات حصرية لـ' : 'Exclusive services for'} {isAr ? demoSchool.name : demoSchool.nameEn}
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles size={16} />
              {isAr ? 'منصة الخدمات المدرسية المتكاملة' : 'The Complete School Services Platform'}
            </div>
          )}

          <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {isAr ? (
              <>كل ما تحتاجه المدرسة<br /><span className="text-blue-600">في مكان واحد</span></>
            ) : (
              <>Everything Your School Needs<br /><span className="text-blue-600">In One Place</span></>
            )}
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            {isAr
              ? 'من الزي المدرسي والكتب إلى وجبات الكانتين والفعاليات، نربط أولياء الأمور بالمدارس والموردين بسلاسة تامة'
              : 'From uniforms and books to canteen meals and events, we seamlessly connect parents, schools, and suppliers'}
          </p>

          {/* Quick Action for Parents */}
          <Link
            href={buildHref(`/${locale}/parent`)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {isAr ? 'ابدأ كولي أمر' : 'Start as Parent'}
            <Arrow size={18} />
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-8 bg-gray-50">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            {isAr ? 'كيف يعمل؟' : 'How It Works'}
          </h2>
          <div className="space-y-4">
            {howItWorks.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {isAr ? step.titleAr : step.titleEn}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isAr ? step.descAr : step.descEn}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portal Cards */}
      <section className="px-4 py-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
            {isAr ? 'اختر البوابة المناسبة' : 'Choose Your Portal'}
          </h2>
          <p className="text-gray-500 text-center mb-6">
            {isAr ? 'نخدم جميع أطراف المنظومة التعليمية' : 'We serve all stakeholders in education'}
          </p>
          <div className="grid grid-cols-2 gap-3">
            {portals.map((portal) => {
              const Icon = portal.icon
              return (
                <Link
                  key={portal.id}
                  href={buildHref(`/${locale}${portal.href}`)}
                  className="group bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
                >
                  <div className={`w-12 h-12 ${portal.bgColor} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} className={portal.iconColor} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {isAr ? portal.labelAr : portal.labelEn}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {isAr ? portal.descAr : portal.descEn}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-8 bg-gradient-to-r from-blue-600 to-violet-600 text-white">
        <div className="max-w-md mx-auto">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold">500+</p>
              <p className="text-sm opacity-80">{isAr ? 'مدرسة' : 'Schools'}</p>
            </div>
            <div>
              <p className="text-2xl font-bold">50K+</p>
              <p className="text-sm opacity-80">{isAr ? 'ولي أمر' : 'Parents'}</p>
            </div>
            <div>
              <p className="text-2xl font-bold">200+</p>
              <p className="text-sm opacity-80">{isAr ? 'مورد' : 'Suppliers'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 bg-gray-900 text-white">
        <div className="max-w-md mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center">
              <School className="h-5 w-5 text-gray-900" />
            </div>
            <span className="font-bold">School-Mart</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            {isAr
              ? 'نربط المدارس وأولياء الأمور والموردين في منصة واحدة متكاملة'
              : 'Connecting schools, parents, and suppliers in one integrated platform'}
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              {isAr ? 'من نحن' : 'About'}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {isAr ? 'تواصل معنا' : 'Contact'}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {isAr ? 'الشروط' : 'Terms'}
            </a>
          </div>
          <p className="text-gray-500 text-xs mt-6">
            © 2024 School-Mart. {isAr ? 'جميع الحقوق محفوظة' : 'All rights reserved'}
          </p>
        </div>
      </footer>
    </div>
  )
}
