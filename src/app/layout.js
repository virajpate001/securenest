import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import JsonLd from "@/components/shared/JsonLd";


import Topbar from "@/components/layout/Topbar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SecureNest | Vehicle Insurance Assistance",
    template: "%s | SecureNest",
  },
  description:
    "Explore private and commercial vehicle insurance options with SecureNest. Clear guidance for cars, bikes, and commercial vehicles.",
  keywords: ["vehicle insurance", "car insurance", "bike insurance", "commercial vehicle insurance", "SecureNest"],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    url: SITE_URL,
    title: "SecureNest | Vehicle Insurance Assistance",
    description: "Explore private and commercial vehicle insurance options with SecureNest.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SecureNest" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SecureNest | Vehicle Insurance",
    description: "Explore private and commercial vehicle insurance options.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col">
  <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: "SecureNest",
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.jpg`,
    description: "Vehicle insurance assistance for every journey.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9209543850", // Replace with your number
      contactType: "customer service",
    },
  }} />
  <Topbar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}