# School Mart Demo - Implementation Plan

## Overview

Build an interactive UI prototype for the Parent Engagement Digital Services Suite (School Mart) with all 4 modules, bilingual support (Arabic RTL + English), using Next.js + Tailwind CSS.

**Code Location:** `projects/school-mart/`

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **i18n:** Custom locale routing (similar to existing website)
- **State:** React useState/useContext for mock data interactions
- **Icons:** Lucide React

## Project Structure

```
projects/school-mart/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx              # Main layout with bottom nav
│   │   ├── page.tsx                # Home/Dashboard
│   │   ├── academic/
│   │   │   └── page.tsx            # Academic Services module
│   │   ├── uniforms/
│   │   │   └── page.tsx            # Uniforms & Supplies module
│   │   ├── canteen/
│   │   │   └── page.tsx            # Smart Canteen module
│   │   └── events/
│   │       └── page.tsx            # Events & Trips module
│   ├── layout.tsx                  # Root layout
│   └── globals.css                 # Global styles
├── components/
│   ├── ui/                         # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── BottomNav.tsx
│   ├── layout/
│   │   ├── AppHeader.tsx           # Module header with back button
│   │   └── AppShell.tsx            # Mobile app shell wrapper
│   └── modules/
│       ├── academic/               # Academic-specific components
│       ├── uniforms/               # Uniforms-specific components
│       ├── canteen/                # Canteen-specific components
│       └── events/                 # Events-specific components
├── lib/
│   ├── i18n.ts                     # i18n configuration
│   └── mock-data.ts                # All mock data for the demo
├── locales/
│   ├── ar.json                     # Arabic translations
│   └── en.json                     # English translations
├── middleware.ts                   # Locale detection
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Implementation Phases

### Phase 1: Project Setup
1. Initialize Next.js project with TypeScript and Tailwind
2. Set up i18n with locale routing (`/ar`, `/en`)
3. Configure RTL support in Tailwind
4. Create base layout and mobile app shell

### Phase 2: Shared Components
1. Build reusable UI components (Button, Card, Badge)
2. Create AppHeader with back navigation and title
3. Build BottomNav with 4 module icons + home
4. Create language switcher component

### Phase 3: Home Dashboard
1. Student selector (mock: Ahmed Ali - Grade 5)
2. Quick stats cards (wallet balance, pending orders)
3. Module navigation cards (4 modules)
4. Recent activity feed

### Phase 4: Academic Services Module
1. Extra lessons list with booking buttons
2. Educational materials catalog
3. Cart/checkout flow (mock)
4. Booking confirmation screen

### Phase 5: Uniforms & Supplies Module
1. Student profile card with saved sizes
2. Product catalog with categories (uniforms, supplies)
3. Size selector linked to student
4. Order summary and checkout

### Phase 6: Smart Canteen Module
1. Wallet balance display with top-up button
2. Tomorrow's menu with quantity selectors
3. Order summary and confirmation
4. Order history view

### Phase 7: Events & Trips Module
1. Upcoming events list with dates
2. Event detail view with registration
3. E-consent flow for free events
4. Registration confirmation

### Phase 8: Polish & Interactions
1. Add transitions and micro-animations
2. Ensure full RTL support works correctly
3. Test responsive behavior
4. Add loading states and feedback

## Module Color Scheme

| Module | Primary Color | Hex |
|--------|--------------|-----|
| Academic Services | Blue | #2563eb |
| Uniforms & Supplies | Purple | #7c3aed |
| Smart Canteen | Orange | #ea580c |
| Events & Trips | Teal | #0d9488 |

## Mock Data

All interactions use local state with mock data:
- 1 parent account with 1-2 children
- 5-6 items per module catalog
- Pre-filled wallet balance (500 EGP)
- 3-4 upcoming events
- Sample order history

## Key Screens (per module)

1. **Academic Services:** List view → Item detail → Booking confirmation
2. **Uniforms:** Catalog → Product detail with size → Cart → Checkout
3. **Canteen:** Menu → Order builder → Confirmation → History
4. **Events:** List → Event detail → Register/Consent → Confirmation

## Verification

1. Run `npm run dev` and open http://localhost:3000
2. Verify language switcher toggles between `/ar` and `/en`
3. Confirm RTL layout works correctly in Arabic
4. Test each module's navigation flow
5. Verify bottom navigation works across all pages
6. Test on mobile viewport (375px width)
