import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Medius, a product lab that builds, operates, and scales software companies.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          About Medius
        </h1>
        <p className="mt-6 text-lg text-muted max-w-2xl">
          We&apos;re a product lab that builds, operates, and scales software
          companies. We identify high-impact opportunities, develop purpose-built
          platforms, and grow them into standalone businesses.
        </p>
      </section>

      {/* Mission Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-2xl md:text-3xl font-semibold">Mission</h2>
          <p className="mt-6 text-lg text-muted max-w-3xl">
            Enable organizations to operate smarter through technology—by
            creating digital products that solve real operational problems at
            scale.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-2xl md:text-3xl font-semibold">What We Do</h2>
          <p className="mt-4 text-muted max-w-2xl">
            Medius operates as a parent company for a portfolio of software
            products. Each product is:
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Wholly Owned",
                description:
                  "We don't build for clients. We build products we own and operate.",
              },
              {
                title: "Independently Operated",
                description:
                  "Each product runs with dedicated teams focused on its success.",
              },
              {
                title: "Shared Infrastructure",
                description:
                  "Products benefit from centralized engineering, design, and operations.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-border rounded-lg p-6">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-2xl md:text-3xl font-semibold">Our Approach</h2>

          <div className="mt-12 space-y-12">
            {[
              {
                step: "01",
                title: "Identify",
                description:
                  "Find sectors with operational inefficiencies and underserved digital needs. We look for problems where technology can create meaningful efficiency gains.",
              },
              {
                step: "02",
                title: "Build",
                description:
                  "Develop focused platforms that solve specific problems well. We prioritize simplicity and usability over feature bloat.",
              },
              {
                step: "03",
                title: "Scale",
                description:
                  "Grow products through disciplined execution and reinvestment. We focus on sustainable growth over vanity metrics.",
              },
              {
                step: "04",
                title: "Operate",
                description:
                  "Run products as long-term businesses, not flip-and-exit ventures. We're building for lasting impact.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-8">
                <div className="text-4xl font-semibold text-muted/30">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-muted max-w-xl">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Capabilities Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Shared Capabilities
          </h2>
          <p className="mt-4 text-muted max-w-2xl">
            All Medius products benefit from centralized expertise:
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Product & Design",
                items: ["User research", "UX/UI design", "Product strategy"],
              },
              {
                title: "Engineering",
                items: [
                  "Shared technical standards",
                  "Infrastructure",
                  "Tooling",
                ],
              },
              {
                title: "Operations",
                items: ["Finance", "Legal", "HR", "Compliance"],
              },
              {
                title: "Growth",
                items: [
                  "Go-to-market strategy",
                  "Partnerships",
                  "Expansion playbooks",
                ],
              },
            ].map((capability) => (
              <div key={capability.title}>
                <h3 className="font-semibold">{capability.title}</h3>
                <ul className="mt-3 space-y-1">
                  {capability.items.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
