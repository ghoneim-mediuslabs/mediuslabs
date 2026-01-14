'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { useSearchParams } from 'next/navigation'

export interface DemoSchool {
  slug: string
  name: string
  nameEn: string
  logo: string
}

interface SchoolContextType {
  demoSchool: DemoSchool | null
  isOverrideMode: boolean
  isLoading: boolean
  schoolSlug: string | null
  getSchoolLogo: (fallbackLogo?: string) => string
  buildHref: (path: string) => string
}

const SchoolContext = createContext<SchoolContextType | undefined>(undefined)

const DEFAULT_LOGO = '/logos/school-default.svg'

export function SchoolProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams()
  const schoolSlug = searchParams.get('school')
  const [demoSchool, setDemoSchool] = useState<DemoSchool | null>(null)
  const [isLoading, setIsLoading] = useState(!!schoolSlug)

  useEffect(() => {
    if (!schoolSlug) {
      setDemoSchool(null)
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    fetch(`/api/schools/${schoolSlug}`)
      .then(res => {
        if (res.ok) return res.json()
        return null
      })
      .then(data => {
        setDemoSchool(data)
        setIsLoading(false)
      })
      .catch(() => {
        setDemoSchool(null)
        setIsLoading(false)
      })
  }, [schoolSlug])

  const getSchoolLogo = (fallbackLogo?: string) => {
    if (demoSchool?.logo) return demoSchool.logo
    if (fallbackLogo) return fallbackLogo
    return DEFAULT_LOGO
  }

  const buildHref = (path: string) => {
    if (!schoolSlug) return path
    const separator = path.includes('?') ? '&' : '?'
    return `${path}${separator}school=${schoolSlug}`
  }

  return (
    <SchoolContext.Provider
      value={{
        demoSchool,
        isOverrideMode: !!schoolSlug,
        isLoading,
        schoolSlug,
        getSchoolLogo,
        buildHref,
      }}
    >
      {children}
    </SchoolContext.Provider>
  )
}

export function useSchool() {
  const context = useContext(SchoolContext)
  if (context === undefined) {
    throw new Error('useSchool must be used within a SchoolProvider')
  }
  return context
}
