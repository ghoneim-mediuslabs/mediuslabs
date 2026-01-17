# School-Mart Demo v2

## Overview

This document outlines the requirements for Demo v2 of the School-Mart platform - a comprehensive marketplace connecting parents, schools, and suppliers for all school-related purchases and services.

---

## New Features

### 1. Landing Page

A beautiful, modern landing page that serves as the entry point to the platform.

**Path:** `/[locale]/` (root path - replaces current parent view to preserve shared links)

**Requirements:**
- Mobile-first, fully responsive design
- Fantastic visual appeal with modern UI/UX
- Clear explanation of the School-Mart concept and value proposition
- Sections:
  - Hero section with tagline and call-to-action
  - How it works (for parents, schools, and suppliers)
  - Key benefits/features
  - Testimonials or social proof
  - Footer with links

**Navigation Links:**
The landing page should provide clear access to all user views:
- **Parent View** `/[locale]/parent` - Access the parent portal (moved from root)
- **School View** `/[locale]/school` - Access the school administration portal
- **Supplier View** `/[locale]/supplier` - Access the supplier dashboard (new)

---

### 2. School Groups Management View

A new administrative view for managing school groups/districts.

**Purpose:**
Allow administrators to manage multiple schools as groups (e.g., school districts, franchise networks, educational organizations).

**Features:**
- List all school groups
- Create new school group
- Edit school group details
- Add/remove schools from a group
- View group-level analytics and reporting
- Manage group-wide settings and policies
- Bulk operations across schools in a group

**Data Model Considerations:**
- School Group: id, name, description, logo, settings
- School Group -> Schools (one-to-many relationship)
- Group-level administrators

---

## Views Structure (v2)

### Landing Page (`/[locale]/`)
- Entry point to the platform (NEW)

### Parent View (`/[locale]/parent`)
- Canteen orders
- Academic supplies
- Uniforms
- Events
- Cart
- Profile
- Notifications

### School View (`/[locale]/school`)
- School management dashboard (moved from `/admin`)

### Supplier View (`/[locale]/supplier`)
- Supplier dashboard (NEW)

### School Groups View (`/[locale]/groups`)
- School groups management (NEW)

---

## Technical Notes

- Framework: Next.js with App Router
- Styling: Tailwind CSS
- Internationalization: Locale-based routing (`/[locale]/`)
- Mobile-friendly: All new views must be responsive

---

## Priority Order

1. Landing Page (high priority - first impression)
2. School Groups Management View
3. Polish and connect all views
