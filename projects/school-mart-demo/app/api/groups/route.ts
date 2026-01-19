import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv'

export interface SchoolGroup {
  slug: string
  name: string
  nameEn: string
  logo: string
  schoolSlugs: string[]
}

const GROUPS_KEY = 'groups'

async function getGroups(): Promise<SchoolGroup[]> {
  try {
    const groups = await kv.get<SchoolGroup[]>(GROUPS_KEY)
    return groups || []
  } catch {
    return []
  }
}

async function saveGroups(groups: SchoolGroup[]) {
  await kv.set(GROUPS_KEY, groups)
}

export async function GET() {
  const groups = await getGroups()
  return NextResponse.json(groups)
}

export async function POST(request: Request) {
  const body = await request.json()
  const { slug, name, nameEn, logo = '', schoolSlugs = [] } = body

  if (!slug || !name || !nameEn) {
    return NextResponse.json(
      { error: 'slug, name, and nameEn are required' },
      { status: 400 }
    )
  }

  const groups = await getGroups()

  if (groups.some(g => g.slug === slug)) {
    return NextResponse.json(
      { error: 'Group with this slug already exists' },
      { status: 409 }
    )
  }

  const newGroup: SchoolGroup = { slug, name, nameEn, logo, schoolSlugs }
  groups.push(newGroup)
  await saveGroups(groups)

  return NextResponse.json(newGroup, { status: 201 })
}
