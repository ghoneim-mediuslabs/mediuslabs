import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'School Mart',
  description: 'Parent engagement platform for schools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
