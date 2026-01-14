import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

interface School {
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

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const schools = getSchools()
  const school = schools.find(s => s.slug === params.slug)

  if (!school) {
    return NextResponse.json(
      { error: 'School not found' },
      { status: 404 }
    )
  }

  return NextResponse.json(school)
}

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const body = await request.json()
  const { name, nameEn, logo } = body

  const schools = getSchools()
  const index = schools.findIndex(s => s.slug === params.slug)

  if (index === -1) {
    return NextResponse.json(
      { error: 'School not found' },
      { status: 404 }
    )
  }

  schools[index] = {
    ...schools[index],
    ...(name && { name }),
    ...(nameEn && { nameEn }),
    ...(logo !== undefined && { logo }),
  }

  saveSchools(schools)
  return NextResponse.json(schools[index])
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const schools = getSchools()
  const index = schools.findIndex(s => s.slug === params.slug)

  if (index === -1) {
    return NextResponse.json(
      { error: 'School not found' },
      { status: 404 }
    )
  }

  schools.splice(index, 1)
  saveSchools(schools)

  return NextResponse.json({ success: true })
}
