# Medius Website — Implementation Plan

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Hosting**: Vercel
- **Contact Form**: Formspree or Vercel serverless function
- **Analytics**: Plausible or Vercel Analytics (optional)

---

## Phase 1: Setup

- [ ] Initialize Next.js project with TypeScript
- [ ] Configure Tailwind CSS
- [ ] Set up project structure
- [ ] Create base layout (header, footer, navigation)
- [ ] Set up Vercel project and connect repo

---

## Phase 2: Design System

- [ ] Define color palette and typography
- [ ] Create reusable components:
  - Button
  - Card
  - Section container
  - Navigation
  - Footer
- [ ] Add Medius logo (placeholder if not ready)

---

## Phase 3: Pages

### Home (`/`)
- [ ] Hero section with tagline: "Digital products, built to scale."
- [ ] "What We Do" brief section
- [ ] Portfolio preview (product cards)
- [ ] CTA section

### About (`/about`)
- [ ] Mission statement
- [ ] How we operate (identify → build → scale → operate)
- [ ] Shared capabilities section
- [ ] Team section (optional / placeholder)

### Portfolio (`/portfolio`)
- [ ] Product card grid
- [ ] School Meal Delivery Platform entry
  - Status badge: "In Development"
  - Description
  - Link to detail or external (TBD)

### Contact (`/contact`)
- [ ] Contact form (name, email, message, reason)
- [ ] Email address display
- [ ] Social links (if applicable)
- [ ] Formspree integration

---

## Phase 4: Polish

- [ ] Responsive design review (mobile, tablet, desktop)
- [ ] SEO basics (meta tags, Open Graph, favicon)
- [ ] 404 page
- [ ] Loading states
- [ ] Performance optimization (images, fonts)

---

## Phase 5: Launch

- [ ] Final review
- [ ] Connect custom domain (medius.com or similar)
- [ ] DNS configuration
- [ ] SSL verification
- [ ] Go live

---

## File Structure

```
medius-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx              # Home
│   ├── about/
│   │   └── page.tsx
│   ├── portfolio/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── ...
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
├── lib/
│   └── ...
├── public/
│   ├── logo.svg
│   └── ...
├── styles/
│   └── globals.css
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## Open Items

1. Medius logo and brand colors
2. Team photos/bios (if including team section)
3. Custom domain name
4. Formspree account or alternative form solution

---

## Dependencies

```json
{
  "next": "^14.x",
  "react": "^18.x",
  "typescript": "^5.x",
  "tailwindcss": "^3.x",
  "@tailwindcss/typography": "^0.5.x"
}
```
