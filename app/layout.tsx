import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";
import { ConsoleBanner } from "@/components/ConsoleBanner";
import { Terminal } from "@/components/Terminal";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.title}`,
    template: `%s | Justine Mahinyila`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.title}`,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.title}`,
    description: site.description,
  },
  icons: {
    icon: [
      { url: "/logo/jc-tile-animated.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: { index: true, follow: true },
  alternates: {
    types: { "application/rss+xml": "/feed.xml" },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.name,
  alternateName: "Justine Mahinyila",
  url: site.url,
  image: `${site.url}/justine.jpg`,
  jobTitle: "Solution Architect & Software Consultant",
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dar es Salaam",
    addressCountry: "TZ",
  },
  knowsLanguage: ["en", "sw"],
  knowsAbout: [
    "Solution Architecture",
    "Fintech Engineering",
    "Apache Kafka",
    "WhatsApp Business API",
    "AI Strategy",
    "Cybersecurity Training",
  ],
  sameAs: [site.linkedin, site.github],
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#business`,
  name: "Justine Mahinyila — Solution Architecture & Software Consulting",
  url: site.url,
  image: `${site.url}/opengraph-image`,
  email: site.email,
  telephone: "+255757714834",
  founder: { "@id": `${site.url}/#person` },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dar es Salaam",
    addressCountry: "TZ",
  },
  areaServed: [
    { "@type": "Country", name: "Tanzania" },
    { "@type": "Place", name: "East Africa" },
  ],
  description:
    "Solution architecture, fintech engineering, WhatsApp Business automation, custom product development, AI implementation, and corporate IT training in Dar es Salaam, Tanzania.",
  priceRange: "$$",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-brand-bg min-h-screen text-brand-text">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CommandPalette />
        <ConsoleBanner />
        <Terminal />
      </body>
    </html>
  );
}
