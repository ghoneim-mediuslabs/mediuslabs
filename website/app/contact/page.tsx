"use client";

import { useState } from "react";

const reasons = [
  "Partnership Inquiry",
  "Investment",
  "Join Our Team",
  "General Question",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // For now, just simulate a submission
    // Replace with actual form submission (Formspree, API route, etc.)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", email: "", reason: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Contact Us
        </h1>
        <p className="mt-6 text-lg text-muted max-w-2xl">
          Whether you&apos;re a potential partner, investor, or looking to join
          our team, we&apos;d love to hear from you.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-semibold">Send a Message</h2>

              {status === "success" ? (
                <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">
                    Message sent successfully!
                  </p>
                  <p className="mt-2 text-sm text-green-700">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="reason"
                      className="block text-sm font-medium mb-2"
                    >
                      Reason for Contact
                    </label>
                    <select
                      id="reason"
                      required
                      value={formData.reason}
                      onChange={(e) =>
                        setFormData({ ...formData, reason: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 bg-background"
                    >
                      <option value="">Select a reason</option>
                      {reasons.map((reason) => (
                        <option key={reason} value={reason}>
                          {reason}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </button>

                  {status === "error" && (
                    <p className="text-red-600 text-sm">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold">Get in Touch</h2>

              <div className="mt-8 space-y-8">
                <div>
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-muted">
                    Email
                  </h3>
                  <p className="mt-2">
                    <a
                      href="mailto:hello@medius.io"
                      className="hover:underline"
                    >
                      hello@medius.io
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-muted">
                    Location
                  </h3>
                  <p className="mt-2">Cairo, Egypt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
