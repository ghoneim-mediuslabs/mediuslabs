import { Metadata } from "next";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore the products built and operated by Medius.",
};

const products = [
  {
    name: "School Meal Delivery Platform",
    description:
      "A mobile platform for school meal ordering in Egypt. Each school is linked to exactly one assigned supplier—no marketplace, no complexity. Parents order, suppliers prepare in batch, schools distribute and confirm delivery.",
    status: "In Development" as const,
    details: {
      problem: [
        "Parents lack time to prep healthy meals; kids resort to junk food",
        "Schools have no visibility on what students eat",
        "Suppliers can't predict daily demand",
      ],
      solution: [
        "Parents order from their school's designated supplier",
        "Supplier prepares meals in batch and delivers to the school",
        "School distributes to students and confirms delivery",
        "Payment is released only after confirmation",
      ],
      stakeholders: ["Parents", "Schools", "Suppliers", "Floor Admins"],
      market: "Egypt",
    },
  },
];

export default function PortfolioPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Portfolio
        </h1>
        <p className="mt-6 text-lg text-muted max-w-2xl">
          Products built and operated by Medius. Each product is wholly owned,
          independently operated, and built on shared infrastructure.
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
                    {product.status}
                  </span>
                </div>

                <p className="mt-4 text-muted">{product.description}</p>

                <div className="mt-8 grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-muted">
                      The Problem
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
                      The Solution
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

                <div className="mt-8 pt-8 border-t border-border flex flex-wrap gap-8">
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-muted">
                      Stakeholders
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
                      Market
                    </h3>
                    <p className="mt-2 text-sm">{product.details.market}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-10 pt-10 border-t border-border">
            <h2 className="text-xl font-semibold text-muted">Coming Soon</h2>
            <p className="mt-2 text-sm text-muted">
              More products in the pipeline. Stay tuned.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
