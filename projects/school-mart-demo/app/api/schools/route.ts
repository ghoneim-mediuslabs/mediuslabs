import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

export interface School {
  slug: string
  name: string
  nameEn: string
  logo: string
}

const dataPath = join(process.cwd(), 'data', 'schools.json')

function getSchools(): School[] {
  try {
    const data = readFileSync(dataPath, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

function saveSchools(schools: School[]) {
  writeFileSync(dataPath, JSON.stringify(schools, null, 2))
}

export async function GET() {
  const schools = getSchools()
  return NextResponse.json(schools)
}

export async function POST(request: Request) {
  const body = await request.json()
  const { slug, name, nameEn, logo = '' } = body

  if (!slug || !name || !nameEn) {
    return NextResponse.json(
      { error: 'slug, name, and nameEn are required' },
      { status: 400 }
    )
  }

  const schools = getSchools()

  if (schools.some(s => s.slug === slug)) {
    return NextResponse.json(
      { error: 'School with this slug already exists' },
      { status: 409 }
    )
  }

  const newSchool: School = { slug, name, nameEn, logo }
  schools.push(newSchool)
  saveSchools(schools)

  return NextResponse.json(newSchool, { status: 201 })
}
