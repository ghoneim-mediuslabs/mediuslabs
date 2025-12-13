# Plan: Add Arabic Language Support

## Overview
Implement i18n with URL prefix strategy (`/ar/...` for Arabic, `/` for English default).

## Implementation

### 1. Create Translation Files
- `website/locales/en.json` - English translations
- `website/locales/ar.json` - Arabic translations

Extract all hardcoded strings from pages and components.

### 2. Create i18n Infrastructure
- `website/lib/i18n.ts` - Translation utilities
  - `getTranslations(locale)` - Load translation file
  - `Locale` type (`'en' | 'ar'`)
  - `locales` array and `defaultLocale` constant

### 3. Restructure App Router for Localization
Move pages under `[locale]` dynamic segment:
```
app/
├── [locale]/
│   ├── layout.tsx      (locale-aware layout)
│   ├── page.tsx        (home)
│   ├── about/page.tsx
│   ├── portfolio/page.tsx
│   └── contact/
│       ├── layout.tsx
│       └── page.tsx
├── layout.tsx          (root layout - minimal)
└── not-found.tsx
```

### 4. Add Middleware for Locale Detection
- `website/middleware.ts`
  - Redirect root `/` to `/en/`
  - Redirect `/ar` routes to `/ar/...`
  - Handle invalid locales

### 5. Update Components

**Header.tsx**:
- Add language switcher button (EN/AR toggle)
- Accept locale prop for navigation labels

**Footer.tsx**:
- Accept locale prop for translated text

**All Pages**:
- Get locale from params
- Load translations using `getTranslations()`
- Pass translations to components

### 6. RTL Support
- Set `dir="rtl"` and `lang="ar"` on `<html>` for Arabic
- Add RTL-specific Tailwind utilities if needed

## Files to Modify
- `website/app/layout.tsx` - Make minimal root layout
- `website/app/[locale]/layout.tsx` - New locale-aware layout
- `website/app/[locale]/page.tsx` - Home with translations
- `website/app/[locale]/about/page.tsx`
- `website/app/[locale]/portfolio/page.tsx`
- `website/app/[locale]/contact/page.tsx`
- `website/app/[locale]/contact/layout.tsx`
- `website/components/Header.tsx` - Add language switcher
- `website/components/Footer.tsx` - Accept translations
- `website/next.config.ts` - Add i18n config if needed

## Files to Create
- `website/locales/en.json`
- `website/locales/ar.json`
- `website/lib/i18n.ts`
- `website/middleware.ts`
