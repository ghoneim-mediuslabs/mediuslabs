'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowLeft, ArrowRight, MoreVertical, Globe, ChevronDown, Check } from 'lucide-react'
import { useState } from 'react'
import type { Locale } from '@/lib/i18n'

interface Child {
  id: string
  name: string
  nameEn: string
  grade: string
  gradeEn: string
  schoolId: string
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
}

export default function AppHeader({
  title,
  locale,
  color = 'bg-gray-800',
  showBack = false,
  backHref,
  childrenList,
  selectedChild,
  onSelectChild,
}: AppHeaderProps) {
  const pathname = usePathname()
  const isRtl = locale === 'ar'
  const BackArrow = isRtl ? ArrowRight : ArrowLeft
  const otherLocale = locale === 'ar' ? 'en' : 'ar'
  const [showDropdown, setShowDropdown] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  // Replace current locale with other locale in path
  const switchedPath = pathname.replace(`/${locale}`, `/${otherLocale}`)

  // Get first name only
  const getFirstName = (child: Child) => {
    const name = locale === 'ar' ? child.name : child.nameEn
    return name.split(' ')[0]
  }

  const handleSelectChild = (child: Child) => {
    onSelectChild?.(child)
    setShowDropdown(false)
  }

  return (
    <header className={`${color} text-white px-4 py-3 flex items-center justify-between sticky top-0 z-40`}>
      <div className="flex items-center gap-3">
        {/* Menu Button */}
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-1 -m-1 hover:opacity-80 transition-opacity"
          >
            <MoreVertical size={20} />
          </button>

          {showMenu && (
            <div className="absolute top-full start-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden min-w-[140px] z-50">
              <Link
                href={switchedPath}
                className="flex items-center gap-2 px-3 py-2.5 hover:bg-gray-50 transition-colors text-gray-800 text-sm"
                onClick={() => setShowMenu(false)}
              >
                <Globe size={16} className="text-gray-500" />
                <span>{locale === 'ar' ? 'English' : 'العربية'}</span>
              </Link>
            </div>
          )}
        </div>

        {showBack && backHref && (
          <Link href={backHref} className="p-1 -m-1 hover:opacity-80 transition-opacity">
            <BackArrow size={20} />
          </Link>
        )}
        {title && <h1 className="font-semibold text-lg">{title}</h1>}
      </div>

      {/* Child Selector */}
      {selectedChild && childrenList && onSelectChild && (
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-1 bg-white/20 hover:bg-white/30 transition-colors px-3 py-1.5 rounded-full text-sm"
          >
            <span>{getFirstName(selectedChild)}</span>
            <ChevronDown size={14} />
          </button>

          {showDropdown && (
            <div className="absolute top-full end-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden min-w-[160px] z-50">
              {childrenList.map((child) => (
                <button
                  key={child.id}
                  onClick={() => handleSelectChild(child)}
                  className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-50 transition-colors text-gray-800 text-sm border-b last:border-b-0"
                >
                  <span className={selectedChild.id === child.id ? 'font-semibold' : ''}>
                    {getFirstName(child)}
                  </span>
                  {selectedChild.id === child.id && (
                    <Check size={16} className="text-emerald-600" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </header>
  )
}
