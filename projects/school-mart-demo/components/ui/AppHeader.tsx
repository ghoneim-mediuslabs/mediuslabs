'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowLeft, ArrowRight, Globe, ChevronDown, Check, School } from 'lucide-react'
import { useState } from 'react'
import type { Locale } from '@/lib/i18n'
import { useSchool } from '@/lib/school-context'

interface Child {
  id: string
  name: string
  nameEn: string
  grade: string
  gradeEn: string
  schoolId: string
}

interface School {
  id: string
  name: string
  nameEn: string
  logo: string
}

interface AppHeaderProps {
  title?: string
  locale: Locale
  color?: string
  showBack?: boolean
  backHref?: string
  childrenList?: Child[]
  selectedChild?: Child
  onSelectChild?: (child: Child) => void
  school?: School
  schools?: School[]
}

export default function AppHeader({
  title,
  locale,
  color,
  showBack = false,
  backHref,
  childrenList,
  selectedChild,
  onSelectChild,
  school,
  schools = [],
}: AppHeaderProps) {
  const pathname = usePathname()
  const isRtl = locale === 'ar'
  const BackArrow = isRtl ? ArrowRight : ArrowLeft
  const otherLocale = locale === 'ar' ? 'en' : 'ar'
  const [showDropdown, setShowDropdown] = useState(false)
  const { buildHref } = useSchool()

  // Replace current locale with other locale in path (preserving school param)
  const switchedPath = buildHref(pathname.replace(`/${locale}`, `/${otherLocale}`))

  // Get child display info
  const getChildName = (child: Child) => {
    return locale === 'ar' ? child.name.split(' ')[0] : child.nameEn.split(' ')[0]
  }

  const getChildGrade = (child: Child) => {
    return locale === 'ar' ? child.grade : child.gradeEn
  }

  const getSchoolName = () => {
    if (!school) return ''
    return locale === 'ar' ? school.name : school.nameEn
  }

  const getSchoolForChild = (child: Child) => {
    return schools.find(s => s.id === child.schoolId)
  }

  const handleSelectChild = (child: Child) => {
    onSelectChild?.(child)
    setShowDropdown(false)
  }

  // If we have child selection, show the new clean header style
  if (selectedChild && childrenList && onSelectChild) {
    return (
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 sticky top-0 z-40">
        {/* Language Switcher - Left side */}
        <Link
          href={switchedPath}
          className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 transition-colors px-3 py-1.5 rounded-full text-sm text-gray-700"
        >
          <Globe size={14} />
          <span>{locale === 'ar' ? 'En' : 'ع'}</span>
        </Link>

        {/* Child & School Selector - Center/Right */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-gray-100"
          >
            <ChevronDown className="h-4 w-4 text-gray-400" />
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-800">{getSchoolName()}</p>
              <p className="text-xs text-gray-500">
                {getChildName(selectedChild)} - {getChildGrade(selectedChild)}
              </p>
            </div>
            {school?.logo ? (
              <img src={school.logo} alt="" className="h-10 w-10 rounded-full object-cover" />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                <School className="h-5 w-5 text-white" />
              </div>
            )}
          </button>

          {showDropdown && (
            <div className="absolute top-full end-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden min-w-[240px] z-50">
              {childrenList.map((child) => {
                const childSchool = getSchoolForChild(child)
                return (
                  <button
                    key={child.id}
                    onClick={() => handleSelectChild(child)}
                    className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-right border-b last:border-b-0 ${
                      selectedChild.id === child.id ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="w-5 flex justify-center">
                      {selectedChild.id === child.id && (
                        <Check size={18} className="text-emerald-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm ${selectedChild.id === child.id ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
                        {locale === 'ar' ? child.name : child.nameEn}
                      </p>
                      <p className="text-xs text-gray-500">
                        {locale === 'ar' ? child.grade : child.gradeEn}
                      </p>
                    </div>
                    {childSchool?.logo && (
                      <img src={childSchool.logo} alt="" className="h-8 w-8 rounded-full object-cover" />
                    )}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </header>
    )
  }

  // Fallback to simple header for other pages
  return (
    <header className={`${color || 'bg-gray-800'} text-white px-4 py-3 flex items-center justify-between sticky top-0 z-40`}>
      <div className="flex items-center gap-3">
        {showBack && backHref && (
          <Link href={buildHref(backHref)} className="p-1 -m-1 hover:opacity-80 transition-opacity">
            <BackArrow size={20} />
          </Link>
        )}
        {title && <h1 className="font-semibold text-lg">{title}</h1>}
      </div>

      <Link
        href={switchedPath}
        className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 transition-colors px-3 py-1.5 rounded-full text-sm"
      >
        <Globe size={14} />
        <span>{locale === 'ar' ? 'En' : 'ع'}</span>
      </Link>
    </header>
  )
}
