import Link from "next/link";
import Image from "next/image";
import { type Locale, type Translations } from "@/lib/i18n";

interface FooterProps {
  locale: Locale;
  translations: Translations;
}

export default function Footer({ locale, translations: t }: FooterProps) {
  const navigation = [
    { name: t.nav.home, href: `/${locale}` },
    { name: t.nav.about, href: `/${locale}/about` },
    { name: t.nav.portfolio, href: `/${locale}/portfolio` },
    { name: t.nav.contact, href: `/${locale}/contact` },
  ];

  return (
    <footer className="border-t border-border mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <Link href={`/${locale}`} className="flex items-center gap-1 text-lg font-semibold">
              <Image src="/logo.svg" alt="Medius" width={28} height={28} />
              <span>Medius</span>
            </Link>
            <p className="mt-2 text-sm text-muted">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
