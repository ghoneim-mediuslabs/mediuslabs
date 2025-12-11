# Medius Website — Product Requirements Document

## Overview

A marketing website for Medius that communicates who we are, what we build, and establishes credibility as a product lab.

---

## Goals

1. **Establish identity** — Position Medius as a product lab that builds and operates software companies
2. **Showcase portfolio** — Highlight current and future products
3. **Build credibility** — Professional presence for partners, investors, and talent
4. **Enable contact** — Simple way for interested parties to reach out

---

## Target Audience

- Potential partners (schools, suppliers, businesses)
- Investors
- Talent / job seekers
- General visitors curious about Medius or its products

---

## Pages

### 1. Home

**Purpose**: Introduce Medius and direct visitors to relevant sections

**Content**:
- Hero: Tagline + one-liner about what Medius does
- Brief "What We Do" section
- Portfolio preview (featured product cards)
- CTA to contact or learn more

---

### 2. About

**Purpose**: Explain the Medius model and vision

**Content**:
- Mission statement
- How we operate (identify → build → scale → operate)
- Shared capabilities (product, engineering, operations, growth)
- Team section (founders, key people) — *if ready*

---

### 3. Portfolio

**Purpose**: Showcase products built by Medius

**Content**:
- List of products with:
  - Name
  - Status (In Development, Live, etc.)
  - One-liner description
  - Link to product page or external site
- Initially just the School Meal Delivery Platform

---

### 4. Contact

**Purpose**: Allow visitors to get in touch

**Content**:
- Contact form (name, email, message, reason for contact)
- Email address
- Social links (if applicable)

---

## Design Requirements

- **Style**: Clean, minimal, professional
- **Responsive**: Mobile-first design
- **Brand**: Consistent with Medius identity (colors, typography TBD)
- **Performance**: Fast load times, no unnecessary bloat

---

## Technical Requirements

- Static site (no backend needed initially)
- Hosting: Vercel, Netlify, or similar
- Framework: Next.js, Astro, or plain HTML/CSS — *TBD based on team preference*
- Contact form: Can use Formspree, Netlify Forms, or similar service

---

## Out of Scope (v1)

- Blog
- Careers page with job listings
- Product-specific subdomains or microsites
- CMS integration
- Analytics dashboard (basic analytics like Plausible/GA is fine)

---

## Open Questions

1. What is the Medius brand identity? (logo, colors, typography)
2. Do we want to show team members on the site?
3. Should each product have its own detailed page, or just link externally?
4. Any specific integrations needed for the contact form?

---

## Success Metrics

- Site is live and accessible
- Visitors can understand what Medius does within 10 seconds
- Contact form successfully receives submissions
