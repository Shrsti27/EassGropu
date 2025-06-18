import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "EASS Security Services Pvt. Ltd. - Protecting What Matters Most Since 1984",
  description:
    "Professional security services led by retired Army officers. Comprehensive security solutions across India including personal protection, corporate security, investigation, CCTV installation, and specialized manpower services. Military-grade discipline and 40+ years of trusted service.",
  keywords: [
    "security services India",
    "personal bodyguard",
    "corporate security",
    "investigation services",
    "CCTV installation",
    "retired army officers security",
    "military grade security",
    "pan India security services",
    "professional security agency",
    "EASS Security",
    "Delhi security services",
    "verification services",
    "legal recovery",
    "manpower supply",
    "bouncer security",
    "lady security guards",
    "VIP protection",
    "24x7 security support",
    "security gallery",
    "security training",
    "armed security guards",
  ].join(", "),
  authors: [{ name: "EASS Security Services Pvt. Ltd." }],
  creator: "EASS Security Services Pvt. Ltd.",
  publisher: "EASS Security Services Pvt. Ltd.",
  robots: "index, follow",
  openGraph: {
    title: "EASS Security Services - Military-Grade Security Solutions Since 1984",
    description:
      "Professional security services led by retired Army officers across India. Personal protection, corporate security, investigation, and comprehensive security solutions with extensive gallery showcase.",
    url: "https://www.easssecurity.com",
    siteName: "EASS Security Services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EASS Security Services - Professional Security Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EASS Security Services - Military-Grade Security Solutions",
    description: "Professional security services led by retired Army officers across India with comprehensive gallery.",
    images: ["/twitter-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
