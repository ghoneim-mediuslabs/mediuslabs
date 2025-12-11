import { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Medius, a product lab that builds, operates, and scales software companies.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-40 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              We build products that{" "}
              <span className="text-primary">matter</span>
            </h1>
            <p className="mt-8 text-xl text-muted leading-relaxed">
              Medius is a product lab that builds, operates, and scales software
              companies. We identify high-impact opportunities, develop purpose-built
              platforms, and grow them into standalone businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-medium text-primary uppercase tracking-wider">
                Our Mission
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
                Enable organizations to operate smarter through technology
              </h2>
            </div>
            <div>
              <p className="text-xl text-background/70 leading-relaxed">
                By creating digital products that solve real operational problems
                at scale. We don&apos;t chase trends—we find inefficiencies and
                build solutions that last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-foreground/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold">
              What makes Medius different
            </h2>
            <p className="mt-6 text-lg text-muted">
              We operate as a parent company for a portfolio of software products.
              Here&apos;s what that means:
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: "Wholly Owned",
                description:
                  "We don't build for clients. We build products we own and operate. This gives us complete control over the vision and long-term direction.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
                title: "Independently Operated",
                description:
                  "Each product runs with dedicated teams focused on its success. Autonomy with accountability—the best of both worlds.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
                title: "Shared Infrastructure",
                description:
                  "Products benefit from centralized engineering, design, and operations. Build once, leverage everywhere.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="relative p-8 rounded-2xl border border-border bg-background hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold sticky top-24">
                Our approach to building products
              </h2>
            </div>

            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Identify",
                  description:
                    "Find sectors with operational inefficiencies and underserved digital needs. We look for problems where technology can create meaningful efficiency gains—not just incremental improvements.",
                },
                {
                  step: "02",
                  title: "Build",
                  description:
                    "Develop focused platforms that solve specific problems well. We prioritize simplicity and usability over feature bloat. Every feature must earn its place.",
                },
                {
                  step: "03",
                  title: "Scale",
                  description:
                    "Grow products through disciplined execution and reinvestment. We focus on sustainable growth over vanity metrics. Revenue and retention matter more than downloads.",
                },
                {
                  step: "04",
                  title: "Operate",
                  description:
                    "Run products as long-term businesses, not flip-and-exit ventures. We're building for lasting impact, not quick exits.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="relative pl-16 border-l-2 border-border hover:border-primary transition-colors"
                >
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-muted leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shared Capabilities Section */}
      <section className="bg-foreground/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Shared capabilities
            </h2>
            <p className="mt-6 text-lg text-muted">
              All Medius products benefit from centralized expertise across four
              key areas.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                ),
                title: "Product & Design",
                items: ["User research & testing", "UX/UI design systems", "Product strategy & roadmapping"],
                color: "from-purple-500/20 to-pink-500/20",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                ),
                title: "Engineering",
                items: ["Shared technical standards", "Cloud infrastructure", "Development tooling & CI/CD"],
                color: "from-blue-500/20 to-cyan-500/20",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                ),
                title: "Operations",
                items: ["Finance & accounting", "Legal & compliance", "HR & talent acquisition"],
                color: "from-green-500/20 to-emerald-500/20",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                ),
                title: "Growth",
                items: ["Go-to-market strategy", "Partnership development", "Market expansion playbooks"],
                color: "from-orange-500/20 to-amber-500/20",
              },
            ].map((capability) => (
              <div
                key={capability.title}
                className="p-8 rounded-2xl border border-border bg-background hover:border-primary/30 transition-colors"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${capability.color} flex items-center justify-center text-primary`}>
                  {capability.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{capability.title}</h3>
                <ul className="mt-4 space-y-2">
                  {capability.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Want to learn more?
          </h2>
          <p className="mt-6 text-lg text-muted max-w-xl mx-auto">
            Check out our portfolio to see what we&apos;re building, or get in
            touch to start a conversation.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button href="/portfolio">View Portfolio</Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
