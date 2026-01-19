import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv'

interface SchoolGroup {
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

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const groups = await getGroups()
  const group = groups.find(g => g.slug === params.slug)

  if (!group) {
    return NextResponse.json(
      { error: 'Group not found' },
      { status: 404 }
    )
  }

  return NextResponse.json(group)
}

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const body = await request.json()
  const { name, nameEn, logo, schoolSlugs } = body

  const groups = await getGroups()
  const index = groups.findIndex(g => g.slug === params.slug)

  if (index === -1) {
    return NextResponse.json(
      { error: 'Group not found' },
      { status: 404 }
    )
  }

  groups[index] = {
    ...groups[index],
    ...(name && { name }),
    ...(nameEn && { nameEn }),
    ...(logo !== undefined && { logo }),
    ...(schoolSlugs !== undefined && { schoolSlugs }),
  }

  await saveGroups(groups)
  return NextResponse.json(groups[index])
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const groups = await getGroups()
  const index = groups.findIndex(g => g.slug === params.slug)

  if (index === -1) {
    return NextResponse.json(
      { error: 'Group not found' },
      { status: 404 }
    )
  }

  groups.splice(index, 1)
  await saveGroups(groups)

  return NextResponse.json({ success: true })
}
