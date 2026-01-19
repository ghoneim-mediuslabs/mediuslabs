'use client'

import Link from 'next/link'
import { Globe, Users, School, Truck, Building2, ArrowRight, ArrowLeft, CheckCircle2, Sparkles, XCircle, Banknote, MessageSquare, BarChart3, Shield, Smartphone, Zap, HeartHandshake, Phone, Mail, MapPin } from 'lucide-react'
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
    borderColor: 'border-blue-200',
    labelAr: 'ولي الأمر',
    labelEn: 'Parent Portal',
    descAr: 'تطبيق واحد لكل احتياجات أبنائك - الزي، الكتب، الوجبات، الرحلات',
    descEn: 'One app for all your children\'s needs - uniforms, books, meals, trips',
  },
  {
    id: 'school',
    href: '/school',
    icon: School,
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
    labelAr: 'المدرسة',
    labelEn: 'School Portal',
    descAr: 'لوحة تحكم متكاملة لإدارة الخدمات والموردين والتحليلات',
    descEn: 'Complete dashboard to manage services, vendors, and analytics',
  },
  {
    id: 'supplier',
    href: '/supplier',
    icon: Truck,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-200',
    labelAr: 'المورد',
    labelEn: 'Supplier Portal',
    descAr: 'وصول مباشر للمدارس، إدارة الطلبات، وتحصيل سهل',
    descEn: 'Direct access to schools, order management, and easy collection',
  },
  {
    id: 'group',
    href: '/group',
    icon: Building2,
    color: 'from-violet-500 to-violet-600',
    bgColor: 'bg-violet-50',
    iconColor: 'text-violet-600',
    borderColor: 'border-violet-200',
    labelAr: 'مجموعة المدارس',
    labelEn: 'School Group',
    descAr: 'رؤية شاملة وتحليلات موحدة لجميع فروع المجموعة',
    descEn: 'Unified visibility and analytics across all branches',
  },
]

const painPoints = [
  {
    icon: XCircle,
    titleAr: 'أنظمة متفرقة',
    titleEn: 'Fragmented Systems',
    descAr: 'كل خدمة لها تطبيق أو نظام مختلف - الكانتين، الزي، الكتب، الرحلات',
    descEn: 'Each service has a different app - canteen, uniforms, books, trips',
  },
  {
    icon: Banknote,
    titleAr: 'مشاكل الدفع النقدي',
    titleEn: 'Cash Handling Issues',
    descAr: 'تحصيل نقدي، فواتير ضائعة، ومتابعة صعبة للمدفوعات',
    descEn: 'Cash collection, lost receipts, and difficult payment tracking',
  },
  {
    icon: MessageSquare,
    titleAr: 'تواصل ضعيف',
    titleEn: 'Poor Communication',
    descAr: 'أولياء الأمور لا يعرفون ما يحتاجه أبناؤهم أو موعد الفعاليات',
    descEn: 'Parents don\'t know what their children need or when events are',
  },
  {
    icon: BarChart3,
    titleAr: 'غياب الرؤية الشاملة',
    titleEn: 'No Visibility',
    descAr: 'مجموعات المدارس لا تملك رؤية موحدة لأداء الفروع',
    descEn: 'School groups have no unified view of branch performance',
  },
]

const benefits = [
  {
    icon: Smartphone,
    titleAr: 'تطبيق واحد للجميع',
    titleEn: 'One App for All',
    descAr: 'كل الخدمات المدرسية في مكان واحد',
    descEn: 'All school services in one place',
  },
  {
    icon: Banknote,
    titleAr: 'مدرسة بلا نقد',
    titleEn: 'Cashless School',
    descAr: 'محفظة رقمية ودفع إلكتروني آمن',
    descEn: 'Digital wallet and secure e-payments',
  },
  {
    icon: BarChart3,
    titleAr: 'تحليلات فورية',
    titleEn: 'Real-time Analytics',
    descAr: 'تقارير وإحصائيات لحظية للإدارة',
    descEn: 'Instant reports and stats for management',
  },
  {
    icon: Zap,
    titleAr: 'تواصل فعال',
    titleEn: 'Better Engagement',
    descAr: 'إشعارات فورية وتواصل مباشر مع الأهل',
    descEn: 'Instant notifications and direct parent communication',
  },
  {
    icon: Shield,
    titleAr: 'أمان وموثوقية',
    titleEn: 'Secure & Reliable',
    descAr: 'حماية كاملة للبيانات والمعاملات',
    descEn: 'Complete data and transaction protection',
  },
  {
    icon: Globe,
    titleAr: 'عربي وإنجليزي',
    titleEn: 'Arabic & English',
    descAr: 'واجهة ثنائية اللغة بالكامل',
    descEn: 'Fully bilingual interface',
  },
]

const testimonials = [
  {
    quoteAr: 'وفرت علينا ساعات من العمل اليدوي وحلت مشكلة التحصيل النقدي بالكامل',
    quoteEn: 'Saved us hours of manual work and completely solved our cash collection problem',
    nameAr: 'أ. سارة أحمد',
    nameEn: 'Ms. Sara Ahmed',
    roleAr: 'مديرة مدرسة النور',
    roleEn: 'Principal, Al Noor School',
  },
  {
    quoteAr: 'أخيراً أصبح لدينا رؤية واضحة لأداء جميع فروعنا في مكان واحد',
    quoteEn: 'Finally we have clear visibility into all our branches\' performance in one place',
    nameAr: 'م. محمد حسن',
    nameEn: 'Eng. Mohamed Hassan',
    roleAr: 'مدير مجموعة المدارس المتحدة',
    roleEn: 'Director, United Schools Group',
  },
]

export default function LandingPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const otherLocale = locale === 'ar' ? 'en' : 'ar'
  const { demoSchool, demoGroup, isOverrideMode, isGroupMode, getSchoolLogo, getGroupLogo, buildHref, hideGroupPortal } = useSchool()
  const Arrow = isAr ? ArrowLeft : ArrowRight

  // Filter portals - hide group portal if school has no group
  const visiblePortals = hideGroupPortal ? portals.filter(p => p.id !== 'group') : portals

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isGroupMode && demoGroup ? (
              <>
                <img src={getGroupLogo()} alt="" className="h-9 w-9 rounded-lg object-cover" />
                <span className="font-bold text-gray-800">{isAr ? demoGroup.name : demoGroup.nameEn}</span>
              </>
            ) : isOverrideMode && demoSchool ? (
              <>
                <img src={getSchoolLogo()} alt="" className="h-9 w-9 rounded-lg object-cover" />
                <span className="font-bold text-gray-800">{isAr ? demoSchool.name : demoSchool.nameEn}</span>
              </>
            ) : (
              <>
                <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                  <School className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-gray-800 text-lg">School-Mart</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={buildHref(`/${otherLocale}`)}
              className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 transition-colors px-3 py-1.5 rounded-full text-sm text-gray-700"
            >
              <Globe size={14} />
              <span>{locale === 'ar' ? 'En' : 'ع'}</span>
            </Link>
            <a
              href="#contact"
              className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              {isAr ? 'تواصل معنا' : 'Contact Us'}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 pt-12 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          {isGroupMode && demoGroup ? (
            <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle2 size={16} />
              {isAr ? 'خدمات حصرية لـ' : 'Exclusive services for'} {isAr ? demoGroup.name : demoGroup.nameEn}
            </div>
          ) : isOverrideMode && demoSchool ? (
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle2 size={16} />
              {isAr ? 'خدمات حصرية لـ' : 'Exclusive services for'} {isAr ? demoSchool.name : demoSchool.nameEn}
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              {isAr ? 'منصة الخدمات المدرسية الأولى في مصر' : 'Egypt\'s #1 School Services Platform'}
            </div>
          )}

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {isAr ? (
              <>كل خدمات مدرستك<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">في منصة واحدة</span></>
            ) : (
              <>All Your School Services<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">In One Platform</span></>
            )}
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? 'نربط أولياء الأمور بالمدارس والموردين في منصة متكاملة. زي مدرسي، كتب، وجبات، رحلات - كل شيء بضغطة زر'
              : 'We connect parents with schools and suppliers in one integrated platform. Uniforms, books, meals, trips - everything with one tap'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
            >
              {isAr ? 'احجز عرض تجريبي' : 'Book a Demo'}
              <Arrow size={18} />
            </a>
            <a
              href="#portals"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
            >
              {isAr ? 'استكشف المنصة' : 'Explore Platform'}
            </a>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isAr ? 'المشاكل التي نحلها' : 'Problems We Solve'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isAr
                ? 'المدارس تواجه تحديات يومية في إدارة الخدمات والتواصل مع أولياء الأمور'
                : 'Schools face daily challenges managing services and communicating with parents'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {painPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                    <Icon size={24} className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {isAr ? point.titleAr : point.titleEn}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {isAr ? point.descAr : point.descEn}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solution / Portals Section */}
      <section id="portals" className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isAr ? 'الحل المتكامل' : 'The Complete Solution'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isAr
                ? 'أربع بوابات متصلة تخدم جميع أطراف المنظومة التعليمية'
                : 'Four connected portals serving all stakeholders in education'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {visiblePortals.map((portal) => {
              const Icon = portal.icon
              return (
                <Link
                  key={portal.id}
                  href={buildHref(`/${locale}${portal.href}`)}
                  className={`group bg-white rounded-2xl p-6 border-2 ${portal.borderColor} hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className={`w-14 h-14 ${portal.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className={portal.iconColor} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {isAr ? portal.labelAr : portal.labelEn}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {isAr ? portal.descAr : portal.descEn}
                  </p>
                  <span className={`inline-flex items-center gap-1 text-sm font-medium ${portal.iconColor}`}>
                    {isAr ? 'جرب الآن' : 'Try Now'}
                    <Arrow size={16} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-blue-600 to-violet-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {isAr ? 'لماذا School-Mart؟' : 'Why School-Mart?'}
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              {isAr
                ? 'نقدم حلاً شاملاً يوفر الوقت والجهد ويحسن تجربة الجميع'
                : 'We provide a comprehensive solution that saves time and improves everyone\'s experience'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20"
                >
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">
                    {isAr ? benefit.titleAr : benefit.titleEn}
                  </h3>
                  <p className="text-sm text-blue-100">
                    {isAr ? benefit.descAr : benefit.descEn}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {isAr ? 'أرقام تتحدث' : 'Numbers That Speak'}
              </h2>
              <p className="text-slate-400">
                {isAr ? 'نمو متسارع وثقة متزايدة' : 'Rapid growth and increasing trust'}
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-4xl sm:text-5xl font-bold text-white mb-1">500+</p>
                <p className="text-slate-400">{isAr ? 'مدرسة' : 'Schools'}</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold text-white mb-1">50K+</p>
                <p className="text-slate-400">{isAr ? 'ولي أمر' : 'Parents'}</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold text-white mb-1">1M+</p>
                <p className="text-slate-400">{isAr ? 'معاملة' : 'Transactions'}</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold text-white mb-1">98%</p>
                <p className="text-slate-400">{isAr ? 'رضا العملاء' : 'Satisfaction'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Groups Section */}
      <section className="px-4 py-16 bg-violet-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Building2 size={16} />
                {isAr ? 'لمجموعات المدارس' : 'For School Groups'}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {isAr ? 'رؤية موحدة لجميع فروعك' : 'Unified View Across All Branches'}
              </h2>
              <p className="text-gray-600 mb-6">
                {isAr
                  ? 'إذا كنت تدير مجموعة مدارس، نقدم لك لوحة تحكم مركزية لمتابعة الأداء، توحيد الموردين، ومقارنة الإيرادات عبر جميع الفروع'
                  : 'If you manage a school group, we offer a centralized dashboard to track performance, standardize vendors, and compare revenue across all branches'}
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  { ar: 'تحليلات موحدة لجميع المدارس', en: 'Unified analytics for all schools' },
                  { ar: 'إدارة مركزية للموردين والأسعار', en: 'Centralized vendor and pricing management' },
                  { ar: 'مقارنة الأداء بين الفروع', en: 'Performance comparison across branches' },
                  { ar: 'تقارير تنفيذية للإدارة العليا', en: 'Executive reports for top management' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-violet-600 flex-shrink-0" />
                    <span className="text-gray-700">{isAr ? item.ar : item.en}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={buildHref(`/${locale}/group`)}
                className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                {isAr ? 'جرب بوابة المجموعات' : 'Try Group Portal'}
                <Arrow size={18} />
              </Link>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-violet-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center">
                    <Building2 size={20} className="text-violet-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{isAr ? 'مجموعة المدارس المتحدة' : 'United Schools Group'}</p>
                    <p className="text-sm text-gray-500">{isAr ? '12 فرع' : '12 branches'}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-violet-50 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-violet-600">1.2M</p>
                    <p className="text-xs text-gray-600">{isAr ? 'إيرادات الشهر' : 'Monthly Revenue'}</p>
                  </div>
                  <div className="bg-emerald-50 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-emerald-600">+18%</p>
                    <p className="text-xs text-gray-600">{isAr ? 'نمو' : 'Growth'}</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-blue-600">8.5K</p>
                    <p className="text-xs text-gray-600">{isAr ? 'طلب' : 'Orders'}</p>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-amber-600">15K</p>
                    <p className="text-xs text-gray-600">{isAr ? 'طالب' : 'Students'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isAr ? 'ماذا يقول عملاؤنا' : 'What Our Clients Say'}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{isAr ? testimonial.quoteAr : testimonial.quoteEn}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{isAr ? testimonial.nameAr : testimonial.nameEn}</p>
                  <p className="text-sm text-gray-500">{isAr ? testimonial.roleAr : testimonial.roleEn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-blue-600 to-violet-600">
        <div className="max-w-4xl mx-auto text-center">
          <HeartHandshake size={48} className="text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {isAr ? 'جاهز للانضمام؟' : 'Ready to Join?'}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {isAr
              ? 'انضم لمئات المدارس التي تثق بنا. احجز عرضاً تجريبياً مجانياً اليوم'
              : 'Join hundreds of schools that trust us. Book a free demo today'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              {isAr ? 'احجز عرض تجريبي' : 'Book a Demo'}
            </a>
            <a
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors"
            >
              {isAr ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isAr ? 'تواصل معنا' : 'Contact Us'}
            </h2>
            <p className="text-gray-600">
              {isAr ? 'نحن هنا للإجابة على استفساراتك' : 'We\'re here to answer your questions'}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <a
              href="tel:+201234567890"
              className="flex flex-col items-center gap-3 bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Phone size={24} className="text-blue-600" />
              </div>
              <p className="font-semibold text-gray-900">{isAr ? 'اتصل بنا' : 'Call Us'}</p>
              <p className="text-gray-600 text-sm" dir="ltr">+20 123 456 7890</p>
            </a>

            <a
              href="mailto:hello@mediuslabs.io"
              className="flex flex-col items-center gap-3 bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <Mail size={24} className="text-emerald-600" />
              </div>
              <p className="font-semibold text-gray-900">{isAr ? 'راسلنا' : 'Email Us'}</p>
              <p className="text-gray-600 text-sm">hello@mediuslabs.io</p>
            </a>

            <div className="flex flex-col items-center gap-3 bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center">
                <MapPin size={24} className="text-violet-600" />
              </div>
              <p className="font-semibold text-gray-900">{isAr ? 'موقعنا' : 'Location'}</p>
              <p className="text-gray-600 text-sm text-center">{isAr ? 'القاهرة، مصر' : 'Cairo, Egypt'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center">
                <School className="h-6 w-6 text-gray-900" />
              </div>
              <span className="font-bold text-xl">School-Mart</span>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                {isAr ? 'من نحن' : 'About'}
              </a>
              <a href="#" className="hover:text-white transition-colors">
                {isAr ? 'الخصوصية' : 'Privacy'}
              </a>
              <a href="#" className="hover:text-white transition-colors">
                {isAr ? 'الشروط' : 'Terms'}
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center space-y-2">
            <p className="text-gray-400 text-sm">
              {isAr ? 'منتج من' : 'A product by'}{' '}
              <a
                href="https://mediuslabs.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors font-medium"
              >
                Medius Labs
              </a>
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 School-Mart. {isAr ? 'جميع الحقوق محفوظة' : 'All rights reserved'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
