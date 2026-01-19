import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv'

export interface School {
  slug: string
  name: string
  nameEn: string
  logo: string
  groupSlug?: string
}

const SCHOOLS_KEY = 'schools'

async function getSchools(): Promise<School[]> {
  try {
    const schools = await kv.get<School[]>(SCHOOLS_KEY)
    return schools || []
  } catch {
    return []
  }
}

async function saveSchools(schools: School[]) {
  await kv.set(SCHOOLS_KEY, schools)
}

export async function GET() {
  const schools = await getSchools()
  return NextResponse.json(schools)
}

export async function POST(request: Request) {
  const body = await request.json()
  const { slug, name, nameEn, logo = '', groupSlug } = body

  if (!slug || !name || !nameEn) {
    return NextResponse.json(
      { error: 'slug, name, and nameEn are required' },
      { status: 400 }
    )
  }

  const schools = await getSchools()

  if (schools.some(s => s.slug === slug)) {
    return NextResponse.json(
      { error: 'School with this slug already exists' },
      { status: 409 }
    )
  }

  const newSchool: School = { slug, name, nameEn, logo, ...(groupSlug && { groupSlug }) }
  schools.push(newSchool)
  await saveSchools(schools)

  return NextResponse.json(newSchool, { status: 201 })
}
