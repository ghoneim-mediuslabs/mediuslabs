import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-40">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Building the future of digital products
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight max-w-4xl leading-[1.1]">
            Digital products,{" "}
            <span className="text-primary">built to scale.</span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-muted max-w-2xl leading-relaxed">
            Medius is a product lab that builds, operates, and scales software
            companies. We turn high-impact opportunities into standalone businesses.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/portfolio">View Portfolio</Button>
            <Button href="/contact" variant="secondary">
              Get in Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 pt-12 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "1", label: "Active Product" },
              { value: "Egypt", label: "Target Market" },
              { value: "2025", label: "Founded" },
              { value: "B2B2C", label: "Business Model" },
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
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold">How We Work</h2>
            <p className="mt-6 text-lg text-muted">
              We operate as a parent company for a portfolio of software products.
              Each product is wholly owned, independently operated, and built on
              shared infrastructure.
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
                title: "Identify",
                description:
                  "Find sectors with operational inefficiencies and underserved digital needs",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                ),
                title: "Build",
                description:
                  "Develop focused platforms that solve specific problems well",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                ),
                title: "Scale",
                description:
                  "Grow products through disciplined execution and reinvestment",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: "Operate",
                description:
                  "Run products as long-term businesses, not flip-and-exit ventures",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="relative p-6 rounded-2xl border border-border bg-background hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div className="absolute top-6 right-6 text-4xl font-bold text-foreground/5">
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
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold">
                Shared capabilities across all products
              </h2>
              <p className="mt-6 text-lg text-muted">
                Every Medius product benefits from centralized expertise in product
                development, engineering, operations, and growth.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  { title: "Product & Design", desc: "User research, UX/UI, product strategy" },
                  { title: "Engineering", desc: "Shared standards, infrastructure, tooling" },
                  { title: "Operations", desc: "Finance, legal, HR, compliance" },
                  { title: "Growth", desc: "Go-to-market, partnerships, expansion" },
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
                { value: "100%", label: "Owned Products", sublabel: "No client work" },
                { value: "Long-term", label: "Focus", sublabel: "Build to last" },
                { value: "Shared", label: "Infrastructure", sublabel: "Efficiency at scale" },
                { value: "Independent", label: "Operations", sublabel: "Dedicated teams" },
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
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold">Our Portfolio</h2>
              <p className="mt-4 text-lg text-muted max-w-xl">
                Products we&apos;re building and operating. Each one solves real
                problems for real people.
              </p>
            </div>
            <Button href="/portfolio" variant="secondary">
              View All Products
            </Button>
          </div>

          <div className="mt-12">
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                    In Development
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold">School Meal Delivery Platform</h3>
                  <p className="mt-2 text-muted max-w-2xl">
                    A mobile platform for school meal ordering in Egypt. Connecting
                    parents, schools, and suppliers with a streamlined B2B2C model.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border grid sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted font-medium">Market</div>
                  <div className="mt-1 font-medium">Egypt</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted font-medium">Stakeholders</div>
                  <div className="mt-1 font-medium">Parents, Schools, Suppliers</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted font-medium">Model</div>
                  <div className="mt-1 font-medium">B2B2C with escrow payments</div>
                </div>
              </div>

              <div className="mt-8">
                <Button href="/portfolio" variant="secondary">
                  Learn More
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

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-2xl mx-auto">
            Ready to build something great together?
          </h2>
          <p className="mt-6 text-lg text-muted max-w-xl mx-auto">
            Whether you&apos;re a potential partner, investor, or looking to join
            our team—we&apos;d love to hear from you.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button href="/contact">Get in Touch</Button>
            <Button href="/about" variant="secondary">
              Learn About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
