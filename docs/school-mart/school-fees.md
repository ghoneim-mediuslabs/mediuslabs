# School-Mart: School Fees Payment Service

## Overview

Add a **School Fees Payment** service to the Parent portal, allowing parents to view fee breakdowns by category and add them to the cart for checkout. This is the 5th service module alongside Academic, Uniforms, Canteen, and Events.

**Goal:** Demonstrate how parents can view, track, and pay school fees from the app — covering tuition, activities, transportation, and other fees — using the same add-to-cart flow as other services.

---

## Data Model

### SchoolFee

```typescript
interface SchoolFee {
  id: string
  type: 'tuition' | 'activities' | 'transport' | 'other'
  name: string        // Arabic name
  nameEn: string      // English name
  amount: number       // Amount in EGP
  dueDate: string      // e.g. "15 يناير"
  dueDateEn: string    // e.g. "Jan 15"
  status: 'unpaid' | 'partial' | 'paid'
  paidAmount: number   // Amount already paid (for partial)
}
```

### Mock Data

| Type | Name (AR) | Name (EN) | Amount | Due Date | Status |
|------|-----------|-----------|--------|----------|--------|
| tuition | الرسوم الدراسية - الفصل الثاني | Tuition - Term 2 | 12,500 | 15 يناير | unpaid |
| activities | رسوم الأنشطة | Activities Fee | 1,500 | 1 فبراير | unpaid |
| transport | رسوم النقل المدرسي | School Transport | 3,000 | 15 يناير | paid |
| other | رسوم التأمين الصحي | Health Insurance Fee | 800 | 1 مارس | unpaid |
| tuition | الرسوم الدراسية - الفصل الأول | Tuition - Term 1 | 12,500 | 15 سبتمبر | paid |

---

## UI Design

### Page Structure

Follows the same pattern as other service pages:

1. **AppHeader** — Colored header (`bg-fees`) with back button and title
2. **Student Profile Card** — Selected child info with school logo
3. **Fee Summary Card** — Total due, total paid, outstanding balance
4. **Fee Items** — List of fees with status badges and "Add to Cart" buttons
5. **Fixed Bottom Bar** — Shows total outstanding and "Add All to Cart" button (like canteen order summary)

### Fee Item Card

Each fee displays:
- Fee type icon (based on category)
- Fee name (bilingual)
- Amount (and remaining amount for partial payments)
- Due date
- Status badge: Unpaid (red), Partial (amber), Paid (green)
- **Unpaid/Partial:** "Add to Cart" button → toggles to "Added" (green checkmark)
- **Paid:** No action button, just a "Paid" badge

### Fee Summary

Top card showing:
- Total fees for the term
- Amount paid
- Outstanding balance (highlighted)

### Add to Cart Flow

When "Add to Cart" is clicked on an individual fee:
- Button toggles to green "Added" state with checkmark (same pattern as uniforms/academic `addToCart`)
- Clicking again removes from cart (toggle behavior)

When "Add All to Cart" is clicked:
- All unpaid/partial fees are added to cart
- Bottom bar updates to show count

This matches the existing demo pattern — the cart page (`/parent/cart`) has its own static mock data, so the "added" state is a local UI toggle on the fees page, consistent with how uniforms and academic pages work.

---

## Translations

```typescript
fees: {
  title: string           // "الرسوم المدرسية" / "School Fees"
  totalFees: string       // "إجمالي الرسوم" / "Total Fees"
  paid: string            // "المدفوع" / "Paid"
  outstanding: string     // "المتبقي" / "Outstanding"
  addToCart: string        // "أضف للسلة" / "Add to Cart"
  added: string           // "تمت الإضافة" / "Added"
  addAllToCart: string     // "إضافة الكل للسلة" / "Add All to Cart"
  paidStatus: string      // "تم الدفع" / "Paid"
  unpaidStatus: string    // "غير مدفوع" / "Unpaid"
  partialStatus: string   // "دفع جزئي" / "Partial"
  dueDate: string         // "تاريخ الاستحقاق" / "Due Date"
  tuition: string         // "الرسوم الدراسية" / "Tuition"
  activities: string      // "الأنشطة" / "Activities"
  transport: string       // "النقل" / "Transport"
  other: string           // "أخرى" / "Other"
}
```

---

## Theme Color

- **Color name:** `fees`
- **Hex:** `#059669` (emerald-600 — finance/money themed)
- **CSS variable:** `--color-fees: #059669`
- **Tailwind class:** `bg-fees`

---

## School Portal Impact

The School portal dashboard and relevant pages should show fee collection data:

### Dashboard (`app/[locale]/school/page.tsx`)
- Add a **fee collection stat** to the quick stats grid (e.g. "85% collected" or "320K EGP collected")
- Add fee-related entries to recent orders or a new "Recent Payments" section

### New: Fee Management Page (`app/[locale]/school/fees/page.tsx`)
- Summary cards: total billed, total collected, outstanding, collection rate
- List of fee items with per-fee collection progress (e.g. "Tuition Term 2: 180/240 families paid")
- Status filters: All, Fully Collected, Partially Collected, Overdue
- Families with outstanding fees list

### Bottom Nav
- No change needed — fees management is accessible from the dashboard or as a sub-page

---

## School Group Portal Impact

The Group portal should show aggregated fee data across all schools:

### Dashboard (`app/[locale]/group/page.tsx`)
- Add a **total fees collected** stat to the quick stats grid

### Analytics Page (`app/[locale]/group/analytics/page.tsx`)
- Add "Fees" as a new category in the top categories breakdown
- Show per-school fee collection comparison in the school performance section

### New: Group Fee Overview Page (`app/[locale]/group/fees/page.tsx`)
- Aggregated fee collection stats across all schools
- Per-school collection rate comparison table
- Overall collection rate with trend

---

## Files to Create

| File | Description |
|------|-------------|
| `app/[locale]/parent/fees/page.tsx` | Parent fees page — view & add to cart |
| `app/[locale]/school/fees/page.tsx` | School fee management — collection tracking |
| `app/[locale]/group/fees/page.tsx` | Group fee overview — aggregated stats |

## Files to Modify

| File | Change |
|------|--------|
| `app/[locale]/parent/page.tsx` | Add fees module to `modules` array |
| `app/[locale]/school/page.tsx` | Add fee collection stat to dashboard |
| `app/[locale]/group/page.tsx` | Add fees collected stat to dashboard |
| `app/[locale]/group/analytics/page.tsx` | Add fees category to breakdown |
| `lib/mock-data.ts` | Add `schoolFees` and `feeCollectionStats` mock data |
| `lib/i18n.ts` | Add `fees` section to `Translations` type |
| `tailwind.config.ts` | Add `fees: '#059669'` color |
| `app/globals.css` | Add `--color-fees` CSS variable |

---

## Navigation

- **Entry point:** Service card on Parent dashboard (icon: `Banknote` from lucide-react)
- **Route:** `/[locale]/parent/fees`
- **Back link:** `/[locale]/parent`
- **Color:** Emerald (`bg-fees`)

---

## Verification Checklist

### Parent Portal
- [ ] Fees card appears in Parent dashboard services grid (AR + EN)
- [ ] Fees page loads with correct header, student card, and fee items
- [ ] Fee summary shows correct totals (total, paid, outstanding)
- [ ] Paid fees show green badge with no action button
- [ ] Unpaid fees show "Add to Cart" button that toggles to "Added"
- [ ] "Add All to Cart" adds all unpaid fees at once
- [ ] Summary recalculates outstanding correctly

### School Portal
- [ ] Dashboard shows fee collection stat
- [ ] Fee management page shows collection summary and per-fee progress
- [ ] Status filters work correctly
- [ ] Families with outstanding fees are listed

### School Group Portal
- [ ] Dashboard shows total fees collected stat
- [ ] Analytics page includes fees in category breakdown
- [ ] Group fee overview shows per-school collection comparison

### General
- [ ] `?school=` override mode works correctly across all portals
- [ ] `?group=` override mode works correctly
- [ ] RTL layout correct in Arabic mode
- [ ] LTR layout correct in English mode
