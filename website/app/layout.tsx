import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Medius — Digital products, built to scale.",
    template: "%s — Medius",
  },
  description:
    "Medius is a product lab that builds, operates, and scales software companies.",
  keywords: ["product lab", "software", "startups", "Egypt", "technology"],
  authors: [{ name: "Medius" }],
  openGraph: {
    title: "Medius — Digital products, built to scale.",
    description:
      "Medius is a product lab that builds, operates, and scales software companies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medius — Digital products, built to scale.",
    description:
      "Medius is a product lab that builds, operates, and scales software companies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
