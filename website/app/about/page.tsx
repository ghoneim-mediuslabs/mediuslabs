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
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
          We build products that matter
        </h1>
        <p className="mt-6 text-xl text-muted max-w-2xl">
          Medius is a product lab that builds, operates, and scales software
          companies. We don&apos;t chase trends—we find inefficiencies and build
          solutions that last.
        </p>
      </section>

      {/* Mission Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-lg text-muted">
              Enable organizations to operate smarter through technology—by
              creating digital products that solve real operational problems at
              scale.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-2xl font-semibold">How We Work</h2>
          <p className="mt-4 text-muted max-w-xl">
            We operate as a parent company for a portfolio of software products.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Wholly Owned",
                description: "We build products we own and operate—no client work.",
              },
              {
                title: "Independently Operated",
                description: "Each product has dedicated teams focused on its success.",
              },
              {
                title: "Shared Infrastructure",
                description: "Centralized engineering, design, and operations.",
              },
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
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-2xl font-semibold">Our Process</h2>

          <div className="mt-12 grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Identify", description: "Find sectors with operational inefficiencies" },
              { step: "02", title: "Build", description: "Develop focused platforms that solve problems well" },
              { step: "03", title: "Scale", description: "Grow through disciplined execution" },
              { step: "04", title: "Operate", description: "Run as long-term businesses" },
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
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold">Want to learn more?</h2>
              <p className="mt-2 text-muted">
                Check out our portfolio or get in touch.
              </p>
            </div>
            <div className="flex gap-4">
              <Button href="/portfolio">Portfolio</Button>
              <Button href="/contact" variant="secondary">Contact</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
