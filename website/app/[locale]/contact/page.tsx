"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { getTranslations, type Locale } from "@/lib/i18n";

export default function ContactPage() {
  const params = useParams();
  const locale = params.locale as Locale;
  const t = getTranslations(locale);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const reasons = [
    { value: "partnership", label: t.contact.reasons.partnership },
    { value: "investment", label: t.contact.reasons.investment },
    { value: "joinTeam", label: t.contact.reasons.joinTeam },
    { value: "general", label: t.contact.reasons.general },
    { value: "other", label: t.contact.reasons.other },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

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
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          {t.contact.title}
        </h1>
        <p className="mt-6 text-lg text-muted max-w-2xl">
          {t.contact.subtitle}
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-semibold">{t.contact.form.title}</h2>

              {status === "success" ? (
                <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">
                    {t.contact.form.success.title}
                  </p>
                  <p className="mt-2 text-sm text-green-700">
                    {t.contact.form.success.subtitle}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      {t.contact.form.name}
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
                      {t.contact.form.email}
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
                      {t.contact.form.reason}
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
                      <option value="">{t.contact.form.reasonPlaceholder}</option>
                      {reasons.map((reason) => (
                        <option key={reason.value} value={reason.value}>
                          {reason.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      {t.contact.form.message}
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
                    {status === "submitting" ? t.contact.form.submitting : t.contact.form.submit}
                  </button>

                  {status === "error" && (
                    <p className="text-red-600 text-sm">
                      {t.contact.form.error}
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold">{t.contact.info.title}</h2>

              <div className="mt-8 space-y-8">
                <div>
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-muted">
                    {t.contact.info.email}
                  </h3>
                  <p className="mt-2">
                    <a
                      href="mailto:hello@mediuslabs.io"
                      className="hover:underline"
                    >
                      hello@mediuslabs.io
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-muted">
                    {t.contact.info.location}
                  </h3>
                  <p className="mt-2">{t.contact.info.locationValue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
