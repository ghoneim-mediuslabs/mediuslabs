# School-Mart Demo v3: Custom School Groups

## Overview

This document outlines the requirements for Demo v3 of the School-Mart platform - adding the ability to create and manage custom school groups, with URL-based context switching between `?group=` and `?school=` parameters.

**Goal:** Enable sales demos that can showcase the platform for entire school groups (districts, franchises, educational organizations) with proper branding and multi-school context.

---

## Data Models

### DemoSchoolGroup (NEW)

```typescript
interface DemoSchoolGroup {
  slug: string        // URL slug (e.g., "education-group")
  name: string        // Arabic name
  nameEn: string      // English name
  logo?: string       // Logo URL (optional)
  schoolSlugs: string[] // Schools in this group (ordered)
}
```

### DemoSchool (UPDATED)

```typescript
interface DemoSchool {
  slug: string
  name: string
  nameEn: string
  logo?: string
  groupSlug?: string  // NEW: optional link to parent group
}
```

---

## URL Behavior

The platform supports two URL parameters for context switching:

| URL Pattern | Parent/School App | Group App | Group Portal Visible |
|-------------|-------------------|-----------|----------------------|
| No params (default) | Default/sample data | Default/sample data | **Yes** (sample group) |
| `?group=xyz` | Uses first school in group | Shows group context | Yes |
| `?school=abc` (school has group) | Uses that school | Shows school's parent group | Yes |
| `?school=abc` (school has no group) | Uses that school | N/A | **Hidden** |

### Examples

1. **No URL params:** `/`
   - Landing page shows default School-Mart branding
   - All portals visible (including Group)
   - Group portal links to sample/default group view

2. **Group URL:** `/?group=egyptian-schools`
   - Landing page shows group branding
   - Parent/School apps use first school in group's `schoolSlugs` array (or sample school if group has no schools)
   - Group app shows the group's dashboard

3. **School URL (with group):** `/?school=al-noor`
   - Landing page shows school branding
   - Parent/School apps use Al Noor school
   - Group app shows the parent group's dashboard

4. **School URL (no group):** `/?school=standalone-school`
   - Landing page shows school branding
   - Parent/School apps use that school
   - Group portal card is **hidden** on landing page (only case where it's hidden)

---

## API Endpoints

### Groups API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/groups` | List all groups |
| POST | `/api/groups` | Create new group |
| GET | `/api/groups/[slug]` | Get single group |
| PUT | `/api/groups/[slug]` | Update group |
| DELETE | `/api/groups/[slug]` | Delete group |

### Schools API (Updated)

The existing schools API is updated to handle the `groupSlug` field:

| Method | Endpoint | Changes |
|--------|----------|---------|
| POST | `/api/schools` | Accepts optional `groupSlug` |
| PUT | `/api/schools/[slug]` | Can update `groupSlug` |

---

## Files to Create

### 1. Group API Routes
- `app/api/groups/route.ts` - GET all, POST new group
- `app/api/groups/[slug]/route.ts` - GET/PUT/DELETE single group

---

## Files to Modify

### 1. `lib/school-context.tsx`

**Changes:**
- Add `DemoSchoolGroup` interface export
- Add `groupSlug?: string` to `DemoSchool` interface
- Add group state: `demoGroup`, `isGroupMode`
- Handle `?group=` URL parameter:
  - Fetch group data from `/api/groups/[slug]`
  - Derive active school from first item in `schoolSlugs`
- Handle `?school=` URL parameter with group lookup:
  - If school has `groupSlug`, fetch that group
- Update `buildHref` to preserve both school and group params appropriately

**New Context Values:**
```typescript
interface SchoolContextType {
  // Existing
  demoSchool: DemoSchool | null
  isOverrideMode: boolean
  isLoading: boolean
  schoolSlug: string | null
  getSchoolLogo: (fallbackLogo?: string) => string
  buildHref: (path: string) => string

  // New
  demoGroup: DemoSchoolGroup | null
  groupSlug: string | null
  isGroupMode: boolean
  getGroupLogo: (fallbackLogo?: string) => string
}
```

### 2. `app/admin/page.tsx`

**Changes:**
- Add "School Groups" section (similar UI pattern to Schools section)
- Group form fields: slug, name, nameEn, logo
- School selector for adding schools to group (multi-select or drag-drop)
- When creating/editing schools, add dropdown to select parent group
- Generate demo URLs with both `?school=` and `?group=` params

**New UI Sections:**
1. **Groups List** - Cards showing each group with its schools
2. **Group Form Modal** - Create/edit group with school selection
3. **School Form Update** - Add group dropdown selector

### 3. `app/[locale]/page.tsx` (Landing Page)

**Changes:**
- Conditionally hide Group portal card if:
  - Not in group mode AND
  - Current school has no `groupSlug`
- Show group branding in header when in group mode
- Update hero section to show group name when applicable

### 4. `app/api/schools/route.ts`

**Changes:**
- Accept `groupSlug` in POST body
- Include `groupSlug` in School interface

### 5. `app/api/schools/[slug]/route.ts`

**Changes:**
- Accept `groupSlug` in PUT body
- Allow updating/clearing group assignment

---

## Implementation Steps

### Phase 1: Backend
1. Create group API routes (`app/api/groups/`)
2. Update school API to handle `groupSlug`

### Phase 2: Context
3. Update `school-context.tsx` with group support
4. Add group fetching logic
5. Update `buildHref` for proper URL handling

### Phase 3: Admin Panel
6. Add groups management section
7. Add group selector to school form
8. Update demo URL generation

### Phase 4: Frontend
9. Update landing page for group context
10. Conditionally show/hide group portal

---

## Verification Checklist

### Group Creation
- [ ] Can create a new group in admin panel
- [ ] Can assign schools to a group
- [ ] Can edit group details
- [ ] Can delete a group

### School-Group Assignment
- [ ] Can assign a school to a group when creating
- [ ] Can change a school's group assignment
- [ ] Can remove a school from a group

### URL Behavior - Group Mode (`?group=xyz`)
- [ ] Landing page shows group branding
- [ ] Parent app uses first school in group
- [ ] School app uses first school in group
- [ ] Group app shows group context
- [ ] URL parameter persists across navigation

### URL Behavior - School Mode with Group (`?school=abc`)
- [ ] Landing page shows school branding
- [ ] Parent/School apps use that specific school
- [ ] Group app shows parent group context
- [ ] Group portal is visible

### URL Behavior - No Parameters (Default)
- [ ] Landing page shows default School-Mart branding
- [ ] All portals visible including Group
- [ ] Group portal links to default group view

### URL Behavior - School Mode without Group
- [ ] Landing page shows school branding
- [ ] Parent/School apps use that school
- [ ] Group portal is hidden on landing page (only case where hidden)

### Edge Cases
- [ ] Empty group (no schools) falls back to sample school for Parent/School apps
- [ ] Invalid group slug shows appropriate fallback
- [ ] Invalid school slug shows appropriate fallback
- [ ] School removed from group updates correctly

---

## Technical Notes

- Groups stored in Vercel KV under "groups" key
- Schools stored in Vercel KV under "schools" key (existing)
- Group-school relationship is bidirectional:
  - Group has `schoolSlugs: string[]`
  - School has `groupSlug?: string`
- When updating relationships, both sides should be kept in sync

---

## Future Considerations (Out of Scope)

- Group-level settings that cascade to schools
- Group admin user management
- Cross-school analytics in group view
- Bulk operations across group schools
