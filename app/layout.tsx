import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { copy } from "@/lib/copy"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: copy.site.metaTitle,
  description: copy.site.metaDescription,
  openGraph: {
    title: copy.site.metaTitle,
    description: copy.site.metaDescription,
    url: copy.site.url,
    siteName: copy.site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: copy.site.metaTitle,
    description: copy.site.metaDescription,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
