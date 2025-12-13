"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { type Locale, type Translations } from "@/lib/i18n";

interface HeaderProps {
  locale: Locale;
  translations: Translations;
}

export default function Header({ locale, translations: t }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: t.nav.home, href: `/${locale}` },
    { name: t.nav.about, href: `/${locale}/about` },
    { name: t.nav.portfolio, href: `/${locale}/portfolio` },
    { name: t.nav.contact, href: `/${locale}/contact` },
  ];

  // Get the path without the locale prefix for language switching
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
  const otherLocale = locale === "en" ? "ar" : "en";
  const switchUrl = `/${otherLocale}${pathnameWithoutLocale === "/" ? "" : pathnameWithoutLocale}`;

  return (
    <header className="border-b border-border">
      <nav className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2 text-xl font-semibold tracking-tight">
            <Image src="/logo.svg" alt="Medius" width={32} height={32} />
            <span>Medius</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* Language Switcher */}
            <Link
              href={switchUrl}
              className="px-3 py-1.5 text-sm font-medium border border-border rounded-lg hover:bg-foreground/5 transition-colors"
            >
              {locale === "en" ? "العربية" : "English"}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Mobile Language Switcher */}
            <Link
              href={switchUrl}
              className="px-2 py-1 text-xs font-medium border border-border rounded hover:bg-foreground/5 transition-colors"
            >
              {locale === "en" ? "AR" : "EN"}
            </Link>

            <button
              type="button"
              className="p-2 -m-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">{t.header.toggleMenu}</span>
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-2 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sm text-muted hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
