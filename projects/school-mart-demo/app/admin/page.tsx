'use client'

import { useState, useEffect } from 'react'
import { Plus, Pencil, Trash2, Copy, ExternalLink, X } from 'lucide-react'

interface School {
  slug: string
  name: string
  nameEn: string
  logo: string
}

export default function AdminPage() {
  const [schools, setSchools] = useState<School[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingSchool, setEditingSchool] = useState<School | null>(null)
  const [formData, setFormData] = useState({ slug: '', name: '', nameEn: '', logo: '' })
  const [copied, setCopied] = useState<string | null>(null)

  useEffect(() => {
    fetchSchools()
  }, [])

  const fetchSchools = async () => {
    try {
      const res = await fetch('/api/schools')
      const data = await res.json()
      setSchools(data)
    } catch (error) {
      console.error('Failed to fetch schools:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const url = editingSchool
      ? `/api/schools/${editingSchool.slug}`
      : '/api/schools'
    const method = editingSchool ? 'PUT' : 'POST'

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        fetchSchools()
        resetForm()
      }
    } catch (error) {
      console.error('Failed to save school:', error)
    }
  }

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this school?')) return

    try {
      const res = await fetch(`/api/schools/${slug}`, { method: 'DELETE' })
      if (res.ok) {
        fetchSchools()
      }
    } catch (error) {
      console.error('Failed to delete school:', error)
    }
  }

  const handleEdit = (school: School) => {
    setEditingSchool(school)
    setFormData(school)
    setShowForm(true)
  }

  const resetForm = () => {
    setShowForm(false)
    setEditingSchool(null)
    setFormData({ slug: '', name: '', nameEn: '', logo: '' })
  }

  const getDemoUrl = (slug: string, locale: string) => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
    return `${baseUrl}/${locale}?school=${slug}`
  }

  const copyToClipboard = (text: string, slug: string) => {
    navigator.clipboard.writeText(text)
    setCopied(slug)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">School Demo Manager</h1>
                <p className="text-gray-600">Add and manage schools for targeted demos</p>
              </div>
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus size={20} />
                Add School
              </button>
            </div>

            {/* Form Modal */}
            {showForm && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">
                      {editingSchool ? 'Edit School' : 'Add School'}
                    </h2>
                    <button onClick={resetForm} className="text-gray-400 hover:text-gray-600">
                      <X size={24} />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        URL Slug
                      </label>
                      <input
                        type="text"
                        value={formData.slug}
                        onChange={e => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
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
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
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
                        value={formData.nameEn}
                        onChange={e => setFormData({ ...formData, nameEn: e.target.value })}
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
                        value={formData.logo}
                        onChange={e => setFormData({ ...formData, logo: e.target.value })}
                        placeholder="https://example.com/logo.png"
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">Leave empty to use default logo</p>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={resetForm}
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
                  onClick={() => setShowForm(true)}
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
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(school)}
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Pencil size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(school.slug)}
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
                              onClick={() => copyToClipboard(getDemoUrl(school.slug, locale), `${school.slug}-${locale}`)}
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
                              href={getDemoUrl(school.slug, locale)}
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
          </div>
        </div>
  )
}
