# School-Mart: School Fees Payment Service

## Overview

Add a **School Fees Payment** service to the Parent portal, allowing parents to view fee breakdowns by category and make mock payments. This is the 5th service module alongside Academic, Uniforms, Canteen, and Events.

**Goal:** Demonstrate how parents can view, track, and pay school fees directly from the app — covering tuition, activities, transportation, and other fees.

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
  dueDate: string      // e.g. "15 يناير" / "Jan 15"
  dueDateEn: string
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
| other | رسوم الكتب والمواد | Books & Materials Fee | 2,200 | 15 سبتمبر | paid |

---

## UI Design

### Page Structure

Follows the same pattern as other service pages:

1. **AppHeader** — Colored header (`bg-fees`) with back button and title
2. **Student Profile Card** — Selected child info with school logo
3. **Fee Summary Card** — Total due, total paid, outstanding balance
4. **Fee Items** — Grouped list of fees with status badges and pay buttons
5. **Pay All Button** — Fixed bottom bar (like canteen order summary) to pay all outstanding fees

### Fee Item Card

Each fee displays:
- Fee type icon (based on category)
- Fee name (bilingual)
- Amount
- Due date
- Status badge: Unpaid (red), Partial (amber), Paid (green)
- "Pay Now" button (for unpaid/partial) → toggles to "Paid" with checkmark

### Fee Summary

Top card showing:
- Total fees for the term
- Amount paid
- Outstanding balance (highlighted)

### Payment Confirmation

When "Pay Now" is clicked:
- Button toggles to green "Paid" state with checkmark (same pattern as academic bookings)
- Fee status updates to "paid"
- Summary card recalculates

When "Pay All" is clicked:
- All unpaid fees toggle to paid
- Confirmation state shown (similar to canteen order confirmed)

---

## Translations

```typescript
fees: {
  title: string           // "الرسوم المدرسية" / "School Fees"
  totalFees: string       // "إجمالي الرسوم" / "Total Fees"
  paid: string            // "المدفوع" / "Paid"
  outstanding: string     // "المتبقي" / "Outstanding"
  payNow: string          // "ادفع الآن" / "Pay Now"
  payAll: string          // "دفع الكل" / "Pay All"
  paidStatus: string      // "تم الدفع" / "Paid"
  unpaidStatus: string    // "غير مدفوع" / "Unpaid"
  partialStatus: string   // "دفع جزئي" / "Partial"
  dueDate: string         // "تاريخ الاستحقاق" / "Due Date"
  tuition: string         // "الرسوم الدراسية" / "Tuition"
  activities: string      // "الأنشطة" / "Activities"
  transport: string       // "النقل" / "Transport"
  other: string           // "أخرى" / "Other"
  allPaid: string         // "تم دفع جميع الرسوم!" / "All Fees Paid!"
  newPayment: string      // "عرض الرسوم" / "View Fees"
}
```

---

## Theme Color

- **Color name:** `fees`
- **Hex:** `#059669` (emerald-600 — finance/money themed)
- **CSS variable:** `--color-fees: #059669`
- **Tailwind class:** `bg-fees`

---

## Files to Create

| File | Description |
|------|-------------|
| `app/[locale]/parent/fees/page.tsx` | Fees page component |

## Files to Modify

| File | Change |
|------|--------|
| `app/[locale]/parent/page.tsx` | Add fees module to `modules` array |
| `lib/mock-data.ts` | Add `schoolFees` mock data export |
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

- [ ] Fees card appears in Parent dashboard services grid (AR + EN)
- [ ] Fees page loads with correct header, student card, and fee items
- [ ] Fee summary shows correct totals
- [ ] "Pay Now" button toggles individual fee to paid state
- [ ] "Pay All" button marks all unpaid fees as paid
- [ ] Summary recalculates after payments
- [ ] `?school=` override mode works correctly
- [ ] RTL layout correct in Arabic mode
- [ ] LTR layout correct in English mode
