import { Metadata } from "next";
import Button from "@/components/Button";
import { getTranslations, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Medius, a product lab that builds, operates, and scales software companies.",
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  return (
    <div>
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
          {t.about.title}
        </h1>
        <p className="mt-6 text-xl text-muted max-w-2xl">
          {t.about.subtitle}
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            <h2 className="text-2xl font-semibold">{t.about.mission.title}</h2>
            <p className="text-lg text-muted">
              {t.about.mission.content}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 mt-12 pt-12 border-t border-border">
            <h2 className="text-2xl font-semibold">{t.about.vision.title}</h2>
            <p className="text-lg text-muted">
              {t.about.vision.content}
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-semibold">{t.about.howWeWork.title}</h2>
          <p className="mt-4 text-muted max-w-xl">
            {t.about.howWeWork.subtitle}
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-8">
            {[
              t.about.howWeWork.whollyOwned,
              t.about.howWeWork.independentlyOperated,
              t.about.howWeWork.sharedInfrastructure,
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-semibold">{t.about.process.title}</h2>

          <div className="mt-8 grid md:grid-cols-4 gap-8">
            {[
              t.about.process.identify,
              t.about.process.build,
              t.about.process.scale,
              t.about.process.operate,
            ].map((item) => (
              <div key={item.step}>
                <div className="text-sm text-primary font-mono">{item.step}</div>
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold">{t.about.cta.title}</h2>
              <p className="mt-2 text-muted">
                {t.about.cta.subtitle}
              </p>
            </div>
            <div className="flex gap-4">
              <Button href={`/${locale}/portfolio`}>{t.about.cta.portfolio}</Button>
              <Button href={`/${locale}/contact`} variant="secondary">{t.about.cta.contact}</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
