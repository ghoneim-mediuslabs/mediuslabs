# Digital School Nutrition Platform - Demo Plan

## Objective
Showcase the platform to schools (administrators + parents) to validate concept and generate interest.

---

## Demo Type
**Static Demo Site** - Polished visual walkthrough with mock data. No backend, no real transactions.

---

## Target Audience
| Audience | What they care about |
|----------|---------------------|
| School Admins | Control, visibility, revenue share, simplicity |
| Parents | Easy ordering, trusted meals, reliable delivery |

---

## Proposed Pages

### 1. Demo Landing (`/demo`)
- Platform overview
- "I am a Parent" → Parent flow
- "I am a School Admin" → Admin flow
- Key benefits for each stakeholder

### 2. Parent Flow (`/demo/parent`)
- **Menu View**: Weekly menu from school's supplier (mock data)
- **Order Screen**: Select items, choose day, see total
- **Confirmation**: Order summary, payment info, delivery details
- Mobile-first design (parents use phones)

### 3. School Admin Flow (`/demo/school`)
- **Dashboard**: Today's orders count, revenue, delivery status
- **Orders List**: Student names, meals, delivery confirmation buttons
- **Reports**: Simple weekly summary (orders, revenue)
- Desktop-friendly design

### 4. (Optional) Supplier View (`/demo/supplier`)
- Order aggregation by school
- Preparation checklist
- Delivery status updates

---

## Content Requirements

### Mock Data Needed
- [ ] Sample menu items (5-8 meals with Arabic names, prices in EGP)
- [ ] Fictional school name
- [ ] Sample student/parent names
- [ ] Sample order data for dashboard

### Copy Needed
- [ ] Platform tagline/value prop
- [ ] Benefits list (parents, schools, suppliers)
- [ ] How it works steps

---

## Technical Approach

- Add routes under `/[locale]/demo/...`
- Reuse existing i18n setup (English + Arabic)
- Static pages with hardcoded mock data
- Mobile-responsive (especially parent flow)
- No authentication needed

---

## Open Questions

1. **Branding**: Use "منصة التغذية المدرسية الرقمية" branding or keep it generic?
2. **Pricing**: Show real price ranges or placeholder amounts?
3. **School Name**: Use a fictional name or "[Your School]" placeholder?
4. **Supplier View**: Include in v1 demo or skip for now?
5. **Call-to-Action**: What should demo viewers do next? (Contact form? WhatsApp?)

---

## Next Steps

1. Finalize scope (which pages, what content)
2. Prepare mock data and copy
3. Build demo pages
4. Review and iterate
