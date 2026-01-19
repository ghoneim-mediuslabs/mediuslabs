import { Metadata } from "next";
import { getTranslations, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore the products built and operated by Medius.",
};

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  const products = [
    {
      name: t.portfolio.schoolMeal.name,
      description: t.portfolio.schoolMeal.description,
      status: "In Development" as const,
      statusLabel: t.portfolio.status.inDevelopment,
      details: {
        problem: t.portfolio.schoolMeal.problem,
        solution: t.portfolio.schoolMeal.solution,
        stakeholders: t.portfolio.schoolMeal.stakeholdersList,
        market: t.portfolio.schoolMeal.marketValue,
      },
      demoUrl: t.portfolio.schoolMeal.demoUrl,
      viewDemo: t.portfolio.schoolMeal.viewDemo,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          {t.portfolio.title}
        </h1>
        <p className="mt-6 text-lg text-muted max-w-2xl">
          {t.portfolio.subtitle}
        </p>
      </section>

      {/* Products Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="space-y-10">
            {products.map((product) => (
              <div key={product.name} className="border border-border rounded-lg p-8">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <h2 className="text-2xl font-semibold">{product.name}</h2>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      product.status === "In Development"
                        ? "bg-yellow-100 text-yellow-800"
                        : product.status === "Live"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {product.statusLabel}
                  </span>
                </div>

                <p className="mt-4 text-muted">{product.description}</p>

                <div className="mt-8 grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-muted">
                      {t.portfolio.theProblem}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {product.details.problem.map((item, i) => (
                        <li key={i} className="text-sm flex gap-2">
                          <span className="text-muted">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-muted">
                      {t.portfolio.theSolution}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {product.details.solution.map((item, i) => (
                        <li key={i} className="text-sm flex gap-2">
                          <span className="text-muted">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border flex flex-wrap gap-8 items-end">
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-muted">
                      {t.portfolio.stakeholders}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {product.details.stakeholders.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-2 py-1 bg-foreground/5 rounded"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-muted">
                      {t.portfolio.market}
                    </h3>
                    <p className="mt-2 text-sm">{product.details.market}</p>
                  </div>

                  {product.demoUrl && (
                    <div className="flex-1 flex justify-end">
                      <a
                        href={product.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                      >
                        {product.viewDemo}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-10 pt-10 border-t border-border">
            <h2 className="text-xl font-semibold text-muted">{t.portfolio.comingSoon.title}</h2>
            <p className="mt-2 text-sm text-muted">
              {t.portfolio.comingSoon.subtitle}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
