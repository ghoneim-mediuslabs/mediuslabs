'use client'

import { Bell, Calendar, ShoppingBag, CreditCard, Info } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import AppHeader from '@/components/ui/AppHeader'

const notifications = [
  { id: '1', type: 'event', titleAr: 'رحلة المتحف المصري', titleEn: 'Egyptian Museum Trip', descAr: 'تم فتح باب التسجيل - المقاعد محدودة!', descEn: 'Registration open - Limited seats!', time: '2h', icon: Calendar, color: 'bg-teal-100 text-teal-600' },
  { id: '2', type: 'order', titleAr: 'طلب الزي جاهز', titleEn: 'Uniform Order Ready', descAr: 'طلبك جاهز للاستلام من المدرسة', descEn: 'Your order is ready for pickup at school', time: '5h', icon: ShoppingBag, color: 'bg-purple-100 text-purple-600' },
  { id: '3', type: 'wallet', titleAr: 'تم شحن المحفظة', titleEn: 'Wallet Topped Up', descAr: 'تم إضافة 200 ج.م للمحفظة بنجاح', descEn: '200 EGP added to wallet successfully', time: '1d', icon: CreditCard, color: 'bg-emerald-100 text-emerald-600' },
  { id: '4', type: 'info', titleAr: 'تحديث جدول الكانتين', titleEn: 'Canteen Menu Updated', descAr: 'تم تحديث قائمة الطعام لهذا الأسبوع', descEn: 'This week\'s menu has been updated', time: '2d', icon: Info, color: 'bg-blue-100 text-blue-600' },
]

export default function NotificationsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'

  const t = {
    title: isAr ? 'الإشعارات' : 'Notifications',
    today: isAr ? 'اليوم' : 'Today',
    earlier: isAr ? 'سابقاً' : 'Earlier',
    ago: isAr ? 'منذ' : 'ago',
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

      <div className="px-4 pt-4 pb-24">
        <div className="space-y-3">
          {notifications.map((notif) => {
            const Icon = notif.icon
            return (
              <div key={notif.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${notif.color}`}>
                    <Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-gray-800">
                        {isAr ? notif.titleAr : notif.titleEn}
                      </h3>
                      <span className="text-xs text-gray-400">{notif.time}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {isAr ? notif.descAr : notif.descEn}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
