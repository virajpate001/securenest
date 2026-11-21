import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

import Topbar from "@/components/layout/Topbar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://securenest.in"),
  title: {
    default: "SecureNest | Vehicle Insurance Assistance",
    template: "%s | SecureNest",
  },
  description:
    "Explore private and commercial vehicle insurance options with SecureNest.",
  openGraph: {
    type: "website",
    siteName: "SecureNest",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Topbar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}