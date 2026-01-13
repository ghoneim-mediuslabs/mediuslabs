'use client'

import { useState } from 'react'
import { Clock, Check, FileCheck } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { events, wallet } from '@/lib/mock-data'
import AppHeader from '@/components/ui/AppHeader'

export default function EventsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const [registered, setRegistered] = useState<string[]>([])
  const [consented, setConsented] = useState<string[]>([])

  const t = {
    title: isAr ? 'الفعاليات والرحلات' : 'Events & Trips',
    upcoming: isAr ? 'الفعاليات القادمة' : 'Upcoming Events',
    seatsLeft: isAr ? 'مقعد متبقي' : 'seats left',
    registerNow: isAr ? 'سجّل الآن' : 'Register Now',
    registered: isAr ? 'تم التسجيل' : 'Registered',
    sendConsent: isAr ? 'إرسال الموافقة' : 'Send Consent',
    consentSent: isAr ? 'تم الإرسال' : 'Consent Sent',
    consentRequired: isAr ? 'موافقة مطلوبة' : 'Consent Required',
    free: isAr ? 'مجاني' : 'Free',
    details: isAr ? 'التفاصيل' : 'Details',
  }

  const toggleRegister = (id: string) => {
    setRegistered(prev =>
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    )
  }

  const toggleConsent = (id: string) => {
    setConsented(prev =>
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader
        title={t.title}
        locale={locale}
        color="bg-events"
        showBack
        backHref={`/${locale}`}
      />

      {/* Events List */}
      <div className="px-4 py-4 pb-24">
        <h2 className="text-sm font-medium text-gray-500 mb-3">{t.upcoming}</h2>
        <div className="space-y-4">
          {events.map((event) => {
            const isRegistered = registered.includes(event.id)
            const isConsented = consented.includes(event.id)

            return (
              <div key={event.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex gap-3">
                  {/* Date Badge */}
                  <div className="w-14 h-14 bg-teal-50 rounded-xl flex flex-col items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-events">{event.date}</span>
                    <span className="text-[10px] text-gray-500">
                      {isAr ? event.month : event.monthEn}
                    </span>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {isAr ? event.name : event.nameEn}
                    </h3>
                    <p className="text-sm text-gray-500 mb-1">
                      {isAr ? event.grades : event.gradesEn}
                      {event.seatsLeft && (
                        <span> • {event.seatsLeft} {t.seatsLeft}</span>
                      )}
                    </p>
                    {event.price > 0 ? (
                      <p className="text-emerald-600 font-semibold">
                        {event.price} {isAr ? wallet.currencyAr : wallet.currency}
                      </p>
                    ) : (
                      <p className="text-gray-500">{t.free}</p>
                    )}
                    {event.requiresConsent && !event.price && (
                      <p className="text-canteen text-sm flex items-center gap-1 mt-1">
                        <Clock size={14} />
                        {t.consentRequired}
                      </p>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-4">
                  {event.requiresConsent ? (
                    <button
                      onClick={() => toggleConsent(event.id)}
                      className={`flex-1 py-2.5 rounded-lg font-medium transition-colors ${
                        isConsented
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
                      }`}
                    >
                      {isConsented ? (
                        <span className="flex items-center justify-center gap-2">
                          <FileCheck size={18} />
                          {t.consentSent}
                        </span>
                      ) : (
                        t.sendConsent
                      )}
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleRegister(event.id)}
                        className={`flex-1 py-2.5 rounded-lg font-medium transition-colors ${
                          isRegistered
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-events text-white hover:bg-teal-700'
                        }`}
                      >
                        {isRegistered ? (
                          <span className="flex items-center justify-center gap-2">
                            <Check size={18} />
                            {t.registered}
                          </span>
                        ) : (
                          t.registerNow
                        )}
                      </button>
                      <button className="flex-1 py-2.5 rounded-lg font-medium text-events border border-events hover:bg-teal-50 transition-colors">
                        {t.details}
                      </button>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
