import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight max-w-3xl">
          Digital products, built to scale.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl">
          Medius is a product lab that builds, operates, and scales software
          companies. We identify high-impact opportunities and grow them into
          standalone businesses.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/portfolio">View Portfolio</Button>
          <Button href="/contact" variant="secondary">
            Get in Touch
          </Button>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-2xl md:text-3xl font-semibold">What We Do</h2>
          <p className="mt-4 text-muted max-w-2xl">
            We operate as a parent company for a portfolio of software products.
            Each product is wholly owned by Medius, independently operated, and
            built on shared infrastructure.
          </p>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Identify",
                description:
                  "Find sectors with operational inefficiencies and underserved digital needs",
              },
              {
                title: "Build",
                description:
                  "Develop focused platforms that solve specific problems well",
              },
              {
                title: "Scale",
                description:
                  "Grow products through disciplined execution and reinvestment",
              },
              {
                title: "Operate",
                description:
                  "Run products as long-term businesses, not flip-and-exit ventures",
              },
            ].map((item, index) => (
              <div key={item.title}>
                <div className="text-sm text-muted font-mono">
                  0{index + 1}
                </div>
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">Portfolio</h2>
            <Button href="/portfolio" variant="secondary">
              View All
            </Button>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <ProductCard
              name="School Meal Delivery Platform"
              description="A mobile platform for school meal ordering in Egypt. Connecting parents, schools, and suppliers with a streamlined ordering and delivery system."
              status="In Development"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Interested in working with us?
          </h2>
          <p className="mt-4 text-muted">
            Whether you&apos;re a potential partner, investor, or looking to
            join our team.
          </p>
          <div className="mt-8">
            <Button href="/contact">Get in Touch</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
