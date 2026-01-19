'use client'

import { useState, useEffect } from 'react'
import { Building2, Bell, CreditCard, Users, Shield, HelpCircle, LogOut, ChevronRight, ChevronLeft } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { useSchool, DemoSchool } from '@/lib/school-context'
import AppHeader from '@/components/ui/AppHeader'

export default function GroupSettings({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const Chevron = isAr ? ChevronLeft : ChevronRight
  const { demoGroup, groupSlug, getGroupLogo } = useSchool()
  const [schoolCount, setSchoolCount] = useState(0)

  // Fetch schools count
  useEffect(() => {
    const fetchSchoolCount = async () => {
      if (!groupSlug) {
        setSchoolCount(5) // Default sample count
        return
      }
      try {
        const res = await fetch('/api/schools')
        if (res.ok) {
          const allSchools: DemoSchool[] = await res.json()
          const filtered = allSchools.filter(s => s.groupSlug === groupSlug)
          setSchoolCount(filtered.length || 5) // Fall back to 5 if no schools
        }
      } catch {
        setSchoolCount(5)
      }
    }
    fetchSchoolCount()
  }, [groupSlug])

  const groupName = demoGroup
    ? (isAr ? demoGroup.name : demoGroup.nameEn)
    : (isAr ? 'مجموعة المدارس المتحدة' : 'United Schools Group')

  const t = {
    title: isAr ? 'الإعدادات' : 'Settings',
    groupProfile: isAr ? 'ملف المجموعة' : 'Group Profile',
    editProfile: isAr ? 'تعديل بيانات المجموعة' : 'Edit group information',
    notifications: isAr ? 'الإشعارات' : 'Notifications',
    notificationsDesc: isAr ? 'إدارة إعدادات الإشعارات' : 'Manage notification settings',
    billing: isAr ? 'الفواتير' : 'Billing',
    billingDesc: isAr ? 'إدارة الفواتير والاشتراكات' : 'Manage billing & subscriptions',
    admins: isAr ? 'المديرين' : 'Administrators',
    adminsDesc: isAr ? 'إدارة صلاحيات المديرين' : 'Manage admin permissions',
    security: isAr ? 'الأمان' : 'Security',
    securityDesc: isAr ? 'إعدادات الأمان والمصادقة' : 'Security & authentication',
    help: isAr ? 'المساعدة' : 'Help & Support',
    helpDesc: isAr ? 'تواصل مع فريق الدعم' : 'Contact support team',
    logout: isAr ? 'تسجيل الخروج' : 'Logout',
    schools: isAr ? 'مدارس' : 'Schools',
  }

  const menuItems = [
    { icon: Building2, label: t.groupProfile, desc: t.editProfile },
    { icon: Bell, label: t.notifications, desc: t.notificationsDesc },
    { icon: CreditCard, label: t.billing, desc: t.billingDesc },
    { icon: Users, label: t.admins, desc: t.adminsDesc },
    { icon: Shield, label: t.security, desc: t.securityDesc },
    { icon: HelpCircle, label: t.help, desc: t.helpDesc },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader
        title={t.title}
        locale={locale}
        color="bg-violet-600"
        showBack
        backHref={`/${locale}/group`}
      />

      {/* Group Card */}
      <div className="px-4 pt-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            {demoGroup?.logo ? (
              <img src={getGroupLogo()} alt="" className="w-16 h-16 rounded-xl object-cover" />
            ) : (
              <div className="w-16 h-16 rounded-xl bg-violet-100 flex items-center justify-center">
                <Building2 size={32} className="text-violet-600" />
              </div>
            )}
            <div>
              <h2 className="font-bold text-gray-800 text-lg">{groupName}</h2>
              <p className="text-gray-500 text-sm">{schoolCount || 5} {t.schools}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 pt-4 pb-24">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            return (
              <button
                key={index}
                className="w-full flex items-center gap-4 p-4 text-start hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center">
                  <Icon size={20} className="text-violet-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{item.label}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
                <Chevron size={18} className="text-gray-400" />
              </button>
            )
          })}
        </div>

        {/* Logout */}
        <button className="w-full mt-4 flex items-center justify-center gap-2 p-4 bg-white rounded-xl shadow-sm border border-gray-100 text-red-600 hover:bg-red-50 transition-colors">
          <LogOut size={20} />
          <span className="font-medium">{t.logout}</span>
        </button>
      </div>
    </div>
  )
}
