import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv'

interface School {
  slug: string
  name: string
  nameEn: string
  logo: string
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

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const schools = await getSchools()
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

  const schools = await getSchools()
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

  await saveSchools(schools)
  return NextResponse.json(schools[index])
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const schools = await getSchools()
  const index = schools.findIndex(s => s.slug === params.slug)

  if (index === -1) {
    return NextResponse.json(
      { error: 'School not found' },
      { status: 404 }
    )
  }

  schools.splice(index, 1)
  await saveSchools(schools)

  return NextResponse.json({ success: true })
}
