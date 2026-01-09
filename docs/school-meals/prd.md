# School Meal Delivery System — PRD

## Product Overview

A mobile platform for the Egyptian market that enables parents to order healthy meals for their children, delivered directly to schools through a designated supplier model.

**Target Market:** Egyptian schools (K-12)

---

## Problem Statement

| Stakeholder | Pain Points |
|-------------|-------------|
| Parents | No time to prep meals, forget to pack lunch, children buy unhealthy snacks |
| Students | Lose pocket money, short breaks limit buying options |
| Schools | No visibility on student nutrition, unmanaged supplier relationships |
| Suppliers | Unpredictable demand, no order management system |

---

## Solution

A B2B2C platform where each school is linked to exactly one food supplier. Parents order through the app, suppliers batch-prepare meals, and school staff handle in-school delivery with confirmation.

---

## User Types

| Role | Description |
|------|-------------|
| Parent | Orders meals, pays online, tracks delivery |
| Supplier | Manages menu, prepares orders, delivers to school |
| Floor Admin | Receives orders at school, confirms delivery to students |
| School Admin | Manages supplier relationship, views reports |

---

## Core Features

### 1. Parent App
- **Registration:** Name, phone, school selection, child details (name, grade, class, health notes/allergies)
- **Menu browsing:** View school's supplier menu by category
  - Meats
  - Cheese
  - Eggs & dried meats
  - Vegetables
  - Fruits
  - Desserts
  - Healthy meals
- **Ordering:** Select meal, choose date, repeat for multiple days or set weekly schedule
- **Payment:** Visa cards, e-wallets (Vodafone Cash, etc.)
- **Tracking:** Real-time order status until delivery confirmation

### 2. Supplier Dashboard
- Menu management (items, pricing, availability)
- Daily order list by school
- Batch preparation workflow
- Delivery confirmation
- Payout tracking

### 3. Floor Admin App
- View incoming orders for the day
- Confirm receipt from supplier
- Confirm delivery to individual students
- Flag issues/missing items

### 4. School Admin Dashboard
- Supplier agreement management
- Delivery reports
- Commission tracking

---

## Order Flow

```
1. Parent places order (before cutoff: 2+ hrs before 10 AM)
        ↓
2. Supplier receives aggregated daily orders
        ↓
3. Supplier prepares batch & delivers to school
        ↓
4. Floor Admin receives & distributes to students
        ↓
5. Floor Admin confirms delivery in app
        ↓
6. Payment released to supplier (minus commission)
```

---

## Payment Model

- **Escrow system:** Payment held until school confirms delivery
- **Commission:** Fixed percentage per order to school
- **Platform fee:** Percentage per transaction

---

## MVP Scope

### In Scope
- Parent registration & child management
- Single-school, single-supplier ordering
- Basic menu with categories
- Order scheduling (single day + recurring)
- Card & e-wallet payments
- Floor admin delivery confirmation
- Supplier order list & payout view

### Out of Scope (Future)
- Ministry of Education reporting dashboard
- Multi-child meal bundling discounts
- Nutritional tracking & recommendations
- Subscription meal plans
- In-app chat between parents and suppliers

---

## Success Metrics

| Metric | Target (6 months) |
|--------|-------------------|
| Schools onboarded | 10 |
| Daily orders | 500+ |
| Order confirmation rate | >95% |
| Parent retention (monthly) | >70% |
| Supplier satisfaction | >4/5 |

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Low parent adoption | Partner with schools for in-app promotion, offer first-order discount |
| Supplier delivery delays | Strict cutoff times, penalty for late delivery |
| Floor admin not confirming | Push notifications, escalation to school admin |
| Payment disputes | Escrow + photo confirmation option |

---

## Technical Considerations

- Mobile-first (iOS & Android)
- Arabic-first UI with English support
- Offline-capable order confirmation for floor admins
- Integration with local payment gateways (Fawry, PayMob, etc.)
