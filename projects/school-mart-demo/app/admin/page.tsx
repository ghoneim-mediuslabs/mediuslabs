'use client'

import { useState, useEffect } from 'react'
import { Plus, Pencil, Trash2, Copy, ExternalLink, X, Building2, School as SchoolIcon } from 'lucide-react'

interface School {
  slug: string
  name: string
  nameEn: string
  logo: string
  groupSlug?: string
}

interface SchoolGroup {
  slug: string
  name: string
  nameEn: string
  logo: string
  schoolSlugs: string[]
}

export default function AdminPage() {
  const [schools, setSchools] = useState<School[]>([])
  const [groups, setGroups] = useState<SchoolGroup[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // School form state
  const [showSchoolForm, setShowSchoolForm] = useState(false)
  const [editingSchool, setEditingSchool] = useState<School | null>(null)
  const [schoolFormData, setSchoolFormData] = useState({ slug: '', name: '', nameEn: '', logo: '', groupSlug: '' })

  // Group form state
  const [showGroupForm, setShowGroupForm] = useState(false)
  const [editingGroup, setEditingGroup] = useState<SchoolGroup | null>(null)
  const [groupFormData, setGroupFormData] = useState({ slug: '', name: '', nameEn: '', logo: '', schoolSlugs: [] as string[] })

  const [copied, setCopied] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'schools' | 'groups'>('schools')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [schoolsRes, groupsRes] = await Promise.all([
        fetch('/api/schools'),
        fetch('/api/groups')
      ])
      const schoolsData = await schoolsRes.json()
      const groupsData = await groupsRes.json()
      setSchools(schoolsData)
      setGroups(groupsData)
    } catch (error) {
      console.error('Failed to fetch data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // School handlers
  const handleSchoolSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const url = editingSchool
      ? `/api/schools/${editingSchool.slug}`
      : '/api/schools'
    const method = editingSchool ? 'PUT' : 'POST'

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...schoolFormData,
          groupSlug: schoolFormData.groupSlug || undefined
        }),
      })

      if (res.ok) {
        fetchData()
        resetSchoolForm()
      }
    } catch (error) {
      console.error('Failed to save school:', error)
    }
  }

  const handleSchoolDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this school?')) return

    try {
      const res = await fetch(`/api/schools/${slug}`, { method: 'DELETE' })
      if (res.ok) {
        fetchData()
      }
    } catch (error) {
      console.error('Failed to delete school:', error)
    }
  }

  const handleSchoolEdit = (school: School) => {
    setEditingSchool(school)
    setSchoolFormData({
      slug: school.slug,
      name: school.name,
      nameEn: school.nameEn,
      logo: school.logo,
      groupSlug: school.groupSlug || ''
    })
    setShowSchoolForm(true)
  }

  const resetSchoolForm = () => {
    setShowSchoolForm(false)
    setEditingSchool(null)
    setSchoolFormData({ slug: '', name: '', nameEn: '', logo: '', groupSlug: '' })
  }

  // Group handlers
  const handleGroupSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const url = editingGroup
      ? `/api/groups/${editingGroup.slug}`
      : '/api/groups'
    const method = editingGroup ? 'PUT' : 'POST'

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(groupFormData),
      })

      if (res.ok) {
        fetchData()
        resetGroupForm()
      }
    } catch (error) {
      console.error('Failed to save group:', error)
    }
  }

  const handleGroupDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this group?')) return

    try {
      const res = await fetch(`/api/groups/${slug}`, { method: 'DELETE' })
      if (res.ok) {
        fetchData()
      }
    } catch (error) {
      console.error('Failed to delete group:', error)
    }
  }

  const handleGroupEdit = (group: SchoolGroup) => {
    setEditingGroup(group)
    setGroupFormData({
      slug: group.slug,
      name: group.name,
      nameEn: group.nameEn,
      logo: group.logo,
      schoolSlugs: group.schoolSlugs || []
    })
    setShowGroupForm(true)
  }

  const resetGroupForm = () => {
    setShowGroupForm(false)
    setEditingGroup(null)
    setGroupFormData({ slug: '', name: '', nameEn: '', logo: '', schoolSlugs: [] })
  }

  const toggleSchoolInGroup = (schoolSlug: string) => {
    setGroupFormData(prev => ({
      ...prev,
      schoolSlugs: prev.schoolSlugs.includes(schoolSlug)
        ? prev.schoolSlugs.filter(s => s !== schoolSlug)
        : [...prev.schoolSlugs, schoolSlug]
    }))
  }

  const getDemoUrl = (slug: string, locale: string, type: 'school' | 'group') => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
    return `${baseUrl}/${locale}?${type}=${slug}`
  }

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const getGroupName = (groupSlug: string) => {
    const group = groups.find(g => g.slug === groupSlug)
    return group?.nameEn || groupSlug
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">School Demo Manager</h1>
          <p className="text-gray-600">Manage schools and groups for targeted demos</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('schools')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'schools'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <SchoolIcon size={18} />
            Schools ({schools.length})
          </button>
          <button
            onClick={() => setActiveTab('groups')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'groups'
                ? 'bg-violet-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Building2 size={18} />
            Groups ({groups.length})
          </button>
        </div>

        {/* Schools Tab */}
        {activeTab === 'schools' && (
          <>
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setShowSchoolForm(true)}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus size={20} />
                Add School
              </button>
            </div>

            {/* School Form Modal */}
            {showSchoolForm && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">
                      {editingSchool ? 'Edit School' : 'Add School'}
                    </h2>
                    <button onClick={resetSchoolForm} className="text-gray-400 hover:text-gray-600">
                      <X size={24} />
                    </button>
                  </div>

                  <form onSubmit={handleSchoolSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        URL Slug
                      </label>
                      <input
                        type="text"
                        value={schoolFormData.slug}
                        onChange={e => setSchoolFormData({ ...schoolFormData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                        placeholder="al-noor"
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                        disabled={!!editingSchool}
                      />
                      <p className="text-xs text-gray-500 mt-1">Used in demo URL: ?school=al-noor</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        School Name (Arabic)
                      </label>
                      <input
                        type="text"
                        value={schoolFormData.name}
                        onChange={e => setSchoolFormData({ ...schoolFormData, name: e.target.value })}
                        placeholder="مدرسة النور الدولية"
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right"
                        dir="rtl"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        School Name (English)
                      </label>
                      <input
                        type="text"
                        value={schoolFormData.nameEn}
                        onChange={e => setSchoolFormData({ ...schoolFormData, nameEn: e.target.value })}
                        placeholder="Al Noor International School"
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Logo URL (optional)
                      </label>
                      <input
                        type="url"
                        value={schoolFormData.logo}
                        onChange={e => setSchoolFormData({ ...schoolFormData, logo: e.target.value })}
                        placeholder="https://example.com/logo.png"
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Parent Group (optional)
                      </label>
                      <select
                        value={schoolFormData.groupSlug}
                        onChange={e => setSchoolFormData({ ...schoolFormData, groupSlug: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">No group</option>
                        {groups.map(group => (
                          <option key={group.slug} value={group.slug}>
                            {group.nameEn}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={resetSchoolForm}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        {editingSchool ? 'Save Changes' : 'Add School'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Schools List */}
            {isLoading ? (
              <div className="text-center py-12 text-gray-500">Loading...</div>
            ) : schools.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl">
                <p className="text-gray-500 mb-4">No schools configured yet</p>
                <button
                  onClick={() => setShowSchoolForm(true)}
                  className="text-blue-600 hover:underline"
                >
                  Add your first school
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {schools.map(school => (
                  <div key={school.slug} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-start gap-4">
                      <img
                        src={school.logo || '/logos/school-default.svg'}
                        alt=""
                        className="w-16 h-16 rounded-lg object-cover bg-gray-100"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900">{school.nameEn}</h3>
                        <p className="text-gray-600 text-right" dir="rtl">{school.name}</p>
                        <p className="text-sm text-gray-400 mt-1">slug: {school.slug}</p>
                        {school.groupSlug && (
                          <p className="text-sm text-violet-600 mt-1">
                            <Building2 size={14} className="inline mr-1" />
                            {getGroupName(school.groupSlug)}
                          </p>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleSchoolEdit(school)}
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Pencil size={18} />
                        </button>
                        <button
                          onClick={() => handleSchoolDelete(school.slug)}
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Demo Links */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500 mb-2">Demo Links</p>
                      <div className="flex flex-wrap gap-2">
                        {['ar', 'en'].map(locale => (
                          <div key={locale} className="flex items-center gap-1 bg-gray-100 rounded-lg px-3 py-1.5">
                            <span className="text-xs text-gray-600 font-mono">
                              /{locale}?school={school.slug}
                            </span>
                            <button
                              onClick={() => copyToClipboard(getDemoUrl(school.slug, locale, 'school'), `${school.slug}-${locale}`)}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                              title="Copy URL"
                            >
                              {copied === `${school.slug}-${locale}` ? (
                                <span className="text-xs text-green-600">Copied!</span>
                              ) : (
                                <Copy size={14} className="text-gray-400" />
                              )}
                            </button>
                            <a
                              href={getDemoUrl(school.slug, locale, 'school')}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                              title="Open demo"
                            >
                              <ExternalLink size={14} className="text-gray-400" />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Groups Tab */}
        {activeTab === 'groups' && (
          <>
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setShowGroupForm(true)}
                className="flex items-center gap-2 bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition-colors"
              >
                <Plus size={20} />
                Add Group
              </button>
            </div>

            {/* Group Form Modal */}
            {showGroupForm && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">
                      {editingGroup ? 'Edit Group' : 'Add Group'}
                    </h2>
                    <button onClick={resetGroupForm} className="text-gray-400 hover:text-gray-600">
                      <X size={24} />
                    </button>
                  </div>

                  <form onSubmit={handleGroupSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        URL Slug
                      </label>
                      <input
                        type="text"
                        value={groupFormData.slug}
                        onChange={e => setGroupFormData({ ...groupFormData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                        placeholder="egyptian-schools"
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                        required
                        disabled={!!editingGroup}
                      />
                      <p className="text-xs text-gray-500 mt-1">Used in demo URL: ?group=egyptian-schools</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Group Name (Arabic)
                      </label>
                      <input
                        type="text"
                        value={groupFormData.name}
                        onChange={e => setGroupFormData({ ...groupFormData, name: e.target.value })}
                        placeholder="مجموعة المدارس المصرية"
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-right"
                        dir="rtl"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Group Name (English)
                      </label>
                      <input
                        type="text"
                        value={groupFormData.nameEn}
                        onChange={e => setGroupFormData({ ...groupFormData, nameEn: e.target.value })}
                        placeholder="Egyptian Schools Group"
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Logo URL (optional)
                      </label>
                      <input
                        type="url"
                        value={groupFormData.logo}
                        onChange={e => setGroupFormData({ ...groupFormData, logo: e.target.value })}
                        placeholder="https://example.com/logo.png"
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Schools in Group
                      </label>
                      {schools.length === 0 ? (
                        <p className="text-sm text-gray-500 py-2">No schools available. Create schools first.</p>
                      ) : (
                        <div className="border rounded-lg max-h-40 overflow-y-auto">
                          {schools.map(school => (
                            <label
                              key={school.slug}
                              className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                            >
                              <input
                                type="checkbox"
                                checked={groupFormData.schoolSlugs.includes(school.slug)}
                                onChange={() => toggleSchoolInGroup(school.slug)}
                                className="rounded text-violet-600 focus:ring-violet-500"
                              />
                              <span className="text-sm">{school.nameEn}</span>
                            </label>
                          ))}
                        </div>
                      )}
                      <p className="text-xs text-gray-500 mt-1">
                        {groupFormData.schoolSlugs.length} school(s) selected
                      </p>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={resetGroupForm}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
                      >
                        {editingGroup ? 'Save Changes' : 'Add Group'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Groups List */}
            {isLoading ? (
              <div className="text-center py-12 text-gray-500">Loading...</div>
            ) : groups.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl">
                <p className="text-gray-500 mb-4">No groups configured yet</p>
                <button
                  onClick={() => setShowGroupForm(true)}
                  className="text-violet-600 hover:underline"
                >
                  Add your first group
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {groups.map(group => (
                  <div key={group.slug} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-start gap-4">
                      <img
                        src={group.logo || '/logos/group-default.svg'}
                        alt=""
                        className="w-16 h-16 rounded-lg object-cover bg-violet-100"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900">{group.nameEn}</h3>
                        <p className="text-gray-600 text-right" dir="rtl">{group.name}</p>
                        <p className="text-sm text-gray-400 mt-1">slug: {group.slug}</p>
                        <p className="text-sm text-violet-600 mt-1">
                          <SchoolIcon size={14} className="inline mr-1" />
                          {group.schoolSlugs?.length || 0} school(s)
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleGroupEdit(group)}
                          className="p-2 text-gray-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-colors"
                        >
                          <Pencil size={18} />
                        </button>
                        <button
                          onClick={() => handleGroupDelete(group.slug)}
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Schools in group */}
                    {group.schoolSlugs && group.schoolSlugs.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <p className="text-xs text-gray-500 mb-2">Schools</p>
                        <div className="flex flex-wrap gap-2">
                          {group.schoolSlugs.map(slug => {
                            const school = schools.find(s => s.slug === slug)
                            return (
                              <span
                                key={slug}
                                className="text-xs bg-violet-50 text-violet-700 px-2 py-1 rounded"
                              >
                                {school?.nameEn || slug}
                              </span>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    {/* Demo Links */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500 mb-2">Demo Links</p>
                      <div className="flex flex-wrap gap-2">
                        {['ar', 'en'].map(locale => (
                          <div key={locale} className="flex items-center gap-1 bg-violet-50 rounded-lg px-3 py-1.5">
                            <span className="text-xs text-violet-700 font-mono">
                              /{locale}?group={group.slug}
                            </span>
                            <button
                              onClick={() => copyToClipboard(getDemoUrl(group.slug, locale, 'group'), `group-${group.slug}-${locale}`)}
                              className="p-1 hover:bg-violet-100 rounded transition-colors"
                              title="Copy URL"
                            >
                              {copied === `group-${group.slug}-${locale}` ? (
                                <span className="text-xs text-green-600">Copied!</span>
                              ) : (
                                <Copy size={14} className="text-violet-400" />
                              )}
                            </button>
                            <a
                              href={getDemoUrl(group.slug, locale, 'group')}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1 hover:bg-violet-100 rounded transition-colors"
                              title="Open demo"
                            >
                              <ExternalLink size={14} className="text-violet-400" />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
