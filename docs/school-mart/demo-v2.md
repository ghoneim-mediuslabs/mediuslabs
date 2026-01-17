# School-Mart Demo v2

## Overview

This document outlines the requirements for Demo v2 of the School-Mart platform - a comprehensive marketplace connecting parents, schools, suppliers, and school groups for all school-related purchases and services.

**Actors:**
- **Parent** - Orders school supplies, uniforms, canteen items for their children
- **School** - Manages their school's marketplace, products, and orders
- **Supplier** - Provides products to schools
- **Group** - Organization managing multiple schools (e.g., district, franchise)

---

## New Features

### 1. Landing Page (NEW)

A beautiful, modern landing page that serves as the entry point to the platform.

**Path:** `/[locale]/` (root path - replaces current parent view to preserve shared links)

**Query Parameter:** `?school=<school_id>` - Maintain existing behavior. When a school parameter is present, the landing page should be contextualized to that school (branding, available products, etc.)

**Requirements:**
- Mobile-first, fully responsive design
- Fantastic visual appeal with modern UI/UX
- Clear explanation of the School-Mart concept and value proposition
- Sections:
  - Hero section with tagline and call-to-action
  - How it works (for parents, schools, suppliers, and groups)
  - Key benefits/features
  - Testimonials or social proof
  - Footer with links

**Navigation Links:**
The landing page should provide clear access to all user views:
- **Parent View** `/[locale]/parent`
- **School View** `/[locale]/school`
- **Supplier View** `/[locale]/supplier`
- **Group View** `/[locale]/group`

---

### 2. School View (NEW)

A full mobile app experience for individual school administrators to manage their school's marketplace.

**Path:** `/[locale]/school` (with subpages like `/school/products`, `/school/orders`, etc.)

**App Structure:**
- Own bottom navigation (Dashboard, Products, Orders, Settings)
- Own app header with school branding
- Consistent with Parent app design language

**Features:**
- **Dashboard** - School overview with key metrics (orders, revenue, products, students)
- **Products** - Product management (add/edit/remove products available to parents)
- **Orders** - Order management (view and process incoming orders)
- **Settings** - School settings, branding, parent/student management
- Reports and analytics

---

### 3. Supplier View (NEW)

A full mobile app experience for suppliers to manage their products and orders across schools.

**Path:** `/[locale]/supplier` (with subpages like `/supplier/catalog`, `/supplier/orders`, etc.)

**App Structure:**
- Own bottom navigation (Dashboard, Catalog, Orders, Schools)
- Own app header with supplier branding
- Consistent with Parent app design language

**Features:**
- **Dashboard** - Supplier overview with metrics (orders, revenue, products, partner schools)
- **Catalog** - Product catalog management with inventory tracking
- **Orders** - Order fulfillment (orders from schools)
- **Schools** - School relationships (which schools they supply to)
- Reports and analytics

---

### 4. Group View (NEW)

A full mobile app experience for school group administrators (e.g., school districts, franchise networks, educational organizations).

**Path:** `/[locale]/group` (with subpages like `/group/schools`, `/group/analytics`, etc.)

**App Structure:**
- Own bottom navigation (Dashboard, Schools, Analytics, Settings)
- Own app header with group branding
- Consistent with Parent app design language

**Features:**
- **Dashboard** - Overview of all schools in the group with key metrics
- **Schools** - List and manage individual schools, add/remove schools
- **Analytics** - Group-level analytics and reporting across all schools
- **Settings** - Group-wide settings and policies, bulk operations

---

## Existing Features (Moving)

### Parent View (EXISTING - path change only)

**Current Path:** `/[locale]/`
**New Path:** `/[locale]/parent?school=<school_id>`

The existing parent functionality moves to a new path. All features remain the same:
- Canteen orders
- Academic supplies
- Uniforms
- Events
- Cart
- Profile
- Notifications

---

## Views Structure Summary

| View | Path | Bottom Nav | Status |
|------|------|------------|--------|
| Landing Page | `/[locale]/` | None | NEW |
| Parent App | `/[locale]/parent/**` | Home, Cart, Notifications, Profile | MOVED |
| School App | `/[locale]/school/**` | Dashboard, Products, Orders, Settings | NEW |
| Supplier App | `/[locale]/supplier/**` | Dashboard, Catalog, Orders, Schools | NEW |
| Group App | `/[locale]/group/**` | Dashboard, Schools, Analytics, Settings | NEW |

Each app (Parent, School, Supplier, Group) is a self-contained mobile app experience with its own:
- Bottom navigation
- App header
- Subpages for each feature
- Layout with consistent design language

---

## Technical Notes

- Framework: Next.js with App Router
- Styling: Tailwind CSS
- Internationalization: Locale-based routing (`/[locale]/`)
- Mobile-friendly: All new views must be responsive

---

## Non-Functional Requirements

### Mobile-First Design
- Primary target: 375px mobile viewport
- All views must be fully functional on mobile devices
- Touch-friendly interactions (minimum 44px touch targets)
- Responsive breakpoints for tablet and desktop

### Internationalization & RTL
- Full bilingual support: Arabic (RTL) and English (LTR)
- Language switcher accessible from all views
- RTL layout must work correctly for Arabic locale
- Inline translations pattern: `isAr ? 'Arabic' : 'English'`

### Visual Polish & Animations
- Smooth page transitions between views
- Micro-animations for interactive elements:
  - Button hover/press states
  - Card hover effects
  - Loading spinners
  - Success/error feedback animations
- Consistent transition timing (150-300ms)

### Loading States & Feedback
- Skeleton loaders for content loading
- Button loading states during actions
- Toast notifications for user feedback
- Empty states for lists with no data

### Color Scheme

| Module/View | Primary Color | Hex |
|-------------|---------------|-----|
| Academic Services | Blue | `#2563eb` |
| Uniforms & Supplies | Purple | `#7c3aed` |
| Smart Canteen | Orange | `#ea580c` |
| Events & Trips | Teal | `#0d9488` |
| School Portal | Emerald | `#059669` |
| Supplier Portal | Red | `#dc2626` |
| Group Portal | Violet | `#7c3aed` |

### Design Language Consistency
- All views must follow the same design patterns as Parent view:
  - `AppHeader` component for headers
  - Welcome section with gradient background (`from-{color}-50 to-gray-50`)
  - 3-column stats grid with colored backgrounds
  - 2-column quick actions grid
  - Card styling: `bg-white rounded-xl p-4 shadow-sm border border-gray-100`
  - Section headers: `font-semibold text-gray-800 mb-3`
  - Consistent spacing: `px-4` padding, `pb-4`/`pb-8` margins

### Accessibility
- Proper contrast ratios for text
- Focus states for keyboard navigation
- Semantic HTML structure
- Alt text for images

---

## Priority Order

1. Landing Page (high priority - first impression)
2. School View
3. Supplier View
4. Group View
5. Polish and connect all views
