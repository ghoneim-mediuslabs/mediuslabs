import Button from "@/components/Button";
import { getTranslations, type Locale } from "@/lib/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            {t.home.badge}
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight max-w-4xl leading-[1.1]">
            {t.home.title}{" "}
            <span className="text-primary">{t.home.titleHighlight}</span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-muted max-w-2xl leading-relaxed">
            {t.home.subtitle}
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button href={`/${locale}/portfolio`}>{t.home.viewPortfolio}</Button>
            <Button href={`/${locale}/contact`} variant="secondary">
              {t.home.getInTouch}
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "1", label: t.home.stats.activeProduct },
              { value: locale === "ar" ? "مصر" : "Egypt", label: t.home.stats.targetMarket },
              { value: "2025", label: t.home.stats.founded },
              { value: "B2B2C", label: t.home.stats.businessModel },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-semibold text-primary">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-foreground/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold">{t.home.howWeWork.title}</h2>
            <p className="mt-6 text-lg text-muted">
              {t.home.howWeWork.subtitle}
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                ),
                title: t.home.howWeWork.identify.title,
                description: t.home.howWeWork.identify.description,
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                ),
                title: t.home.howWeWork.build.title,
                description: t.home.howWeWork.build.description,
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                ),
                title: t.home.howWeWork.scale.title,
                description: t.home.howWeWork.scale.description,
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: t.home.howWeWork.operate.title,
                description: t.home.howWeWork.operate.description,
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="relative p-6 rounded-2xl border border-border bg-background hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div className="absolute top-6 end-6 text-4xl font-bold text-foreground/5">
                  0{index + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold">
                {t.home.capabilities.title}
              </h2>
              <p className="mt-6 text-lg text-muted">
                {t.home.capabilities.subtitle}
              </p>

              <div className="mt-10 space-y-4">
                {[
                  { title: t.home.capabilities.productDesign.title, desc: t.home.capabilities.productDesign.desc },
                  { title: t.home.capabilities.engineering.title, desc: t.home.capabilities.engineering.desc },
                  { title: t.home.capabilities.operations.title, desc: t.home.capabilities.operations.desc },
                  { title: t.home.capabilities.growth.title, desc: t.home.capabilities.growth.desc },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                t.home.capabilities.cards.owned,
                t.home.capabilities.cards.focus,
                t.home.capabilities.cards.infrastructure,
                t.home.capabilities.cards.operations,
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-6 rounded-2xl border border-border bg-foreground/[0.02] hover:border-primary/30 transition-colors"
                >
                  <div className="text-2xl font-semibold text-primary">{item.value}</div>
                  <div className="mt-1 font-medium">{item.label}</div>
                  <div className="text-xs text-muted">{item.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="bg-foreground/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold">{t.home.portfolio.title}</h2>
              <p className="mt-4 text-lg text-muted max-w-xl">
                {t.home.portfolio.subtitle}
              </p>
            </div>
            <Button href={`/${locale}/portfolio`} variant="secondary">
              {t.home.portfolio.viewAll}
            </Button>
          </div>

          <div className="mt-12">
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                    {t.home.portfolio.inDevelopment}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold">{t.home.portfolio.schoolMeal.title}</h3>
                  <p className="mt-2 text-muted max-w-2xl">
                    {t.home.portfolio.schoolMeal.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border grid sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted font-medium">{t.home.portfolio.schoolMeal.market}</div>
                  <div className="mt-1 font-medium">{t.home.portfolio.schoolMeal.marketValue}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted font-medium">{t.home.portfolio.schoolMeal.stakeholders}</div>
                  <div className="mt-1 font-medium">{t.home.portfolio.schoolMeal.stakeholdersValue}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted font-medium">{t.home.portfolio.schoolMeal.model}</div>
                  <div className="mt-1 font-medium">{t.home.portfolio.schoolMeal.modelValue}</div>
                </div>
              </div>

              <div className="mt-8">
                <Button href={`/${locale}/portfolio`} variant="secondary">
                  {t.home.portfolio.learnMore}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-2xl mx-auto">
            {t.home.cta.title}
          </h2>
          <p className="mt-6 text-lg text-muted max-w-xl mx-auto">
            {t.home.cta.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button href={`/${locale}/contact`}>{t.home.cta.contact}</Button>
            <Button href={`/${locale}/about`} variant="secondary">
              {t.home.cta.about}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
