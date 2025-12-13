import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Medius — Digital products, built to scale.",
    template: "%s — Medius",
  },
  description:
    "Medius is a product lab that builds, operates, and scales software companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
