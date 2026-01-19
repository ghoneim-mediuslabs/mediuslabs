'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { useSearchParams } from 'next/navigation'

export interface DemoSchool {
  slug: string
  name: string
  nameEn: string
  logo: string
  groupSlug?: string
}

export interface DemoSchoolGroup {
  slug: string
  name: string
  nameEn: string
  logo: string
  schoolSlugs: string[]
}

interface SchoolContextType {
  demoSchool: DemoSchool | null
  demoGroup: DemoSchoolGroup | null
  isOverrideMode: boolean
  isGroupMode: boolean
  isLoading: boolean
  schoolSlug: string | null
  groupSlug: string | null
  getSchoolLogo: (fallbackLogo?: string) => string
  getGroupLogo: (fallbackLogo?: string) => string
  buildHref: (path: string) => string
  hideGroupPortal: boolean
}

const SchoolContext = createContext<SchoolContextType | undefined>(undefined)

const DEFAULT_LOGO = '/logos/school-default.svg'
const DEFAULT_GROUP_LOGO = '/logos/group-default.svg'

export function SchoolProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams()
  const schoolSlugParam = searchParams.get('school')
  const groupSlugParam = searchParams.get('group')

  const [demoSchool, setDemoSchool] = useState<DemoSchool | null>(null)
  const [demoGroup, setDemoGroup] = useState<DemoSchoolGroup | null>(null)
  const [isLoading, setIsLoading] = useState(!!schoolSlugParam || !!groupSlugParam)

  useEffect(() => {
    const loadData = async () => {
      // Case 1: Group param specified - fetch group and derive school from first in list
      if (groupSlugParam) {
        setIsLoading(true)
        try {
          const groupRes = await fetch(`/api/groups/${groupSlugParam}`)
          if (groupRes.ok) {
            const group: DemoSchoolGroup = await groupRes.json()
            setDemoGroup(group)

            // Get first school in group
            if (group.schoolSlugs && group.schoolSlugs.length > 0) {
              const schoolRes = await fetch(`/api/schools/${group.schoolSlugs[0]}`)
              if (schoolRes.ok) {
                const school = await schoolRes.json()
                setDemoSchool(school)
              } else {
                setDemoSchool(null)
              }
            } else {
              // Group has no schoolSlugs, try to find schools that belong to this group
              const allSchoolsRes = await fetch('/api/schools')
              if (allSchoolsRes.ok) {
                const allSchools: DemoSchool[] = await allSchoolsRes.json()
                const groupSchools = allSchools.filter(s => s.groupSlug === groupSlugParam)
                if (groupSchools.length > 0) {
                  setDemoSchool(groupSchools[0])
                } else {
                  setDemoSchool(null)
                }
              } else {
                setDemoSchool(null)
              }
            }
          } else {
            setDemoGroup(null)
            setDemoSchool(null)
          }
        } catch {
          setDemoGroup(null)
          setDemoSchool(null)
        }
        setIsLoading(false)
        return
      }

      // Case 2: School param specified - fetch school and its parent group if any
      if (schoolSlugParam) {
        setIsLoading(true)
        try {
          const schoolRes = await fetch(`/api/schools/${schoolSlugParam}`)
          if (schoolRes.ok) {
            const school: DemoSchool = await schoolRes.json()
            setDemoSchool(school)

            // If school has a parent group, fetch it
            if (school.groupSlug) {
              const groupRes = await fetch(`/api/groups/${school.groupSlug}`)
              if (groupRes.ok) {
                const group = await groupRes.json()
                setDemoGroup(group)
              } else {
                setDemoGroup(null)
              }
            } else {
              setDemoGroup(null)
            }
          } else {
            setDemoSchool(null)
            setDemoGroup(null)
          }
        } catch {
          setDemoSchool(null)
          setDemoGroup(null)
        }
        setIsLoading(false)
        return
      }

      // Case 3: No params - clear everything
      setDemoSchool(null)
      setDemoGroup(null)
      setIsLoading(false)
    }

    loadData()
  }, [schoolSlugParam, groupSlugParam])

  const getSchoolLogo = (fallbackLogo?: string) => {
    if (demoSchool?.logo) return demoSchool.logo
    if (fallbackLogo) return fallbackLogo
    return DEFAULT_LOGO
  }

  const getGroupLogo = (fallbackLogo?: string) => {
    if (demoGroup?.logo) return demoGroup.logo
    if (fallbackLogo) return fallbackLogo
    return DEFAULT_GROUP_LOGO
  }

  const buildHref = (path: string) => {
    // Preserve group param if in group mode
    if (groupSlugParam) {
      const separator = path.includes('?') ? '&' : '?'
      return `${path}${separator}group=${groupSlugParam}`
    }
    // Preserve school param if in school mode
    if (schoolSlugParam) {
      const separator = path.includes('?') ? '&' : '?'
      return `${path}${separator}school=${schoolSlugParam}`
    }
    return path
  }

  // Hide group portal only when: school is specified AND school has no group
  const hideGroupPortal = !!schoolSlugParam && !demoGroup

  return (
    <SchoolContext.Provider
      value={{
        demoSchool,
        demoGroup,
        isOverrideMode: !!schoolSlugParam || !!groupSlugParam,
        isGroupMode: !!groupSlugParam,
        isLoading,
        schoolSlug: schoolSlugParam,
        groupSlug: groupSlugParam || demoGroup?.slug || null,
        getSchoolLogo,
        getGroupLogo,
        buildHref,
        hideGroupPortal,
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
