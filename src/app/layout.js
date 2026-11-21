import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Topbar from "@/components/layout/Topbar";
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
  title: "SecureNest | Vehicle Insurance Assistance",
  description: "Explore private and commercial vehicle insurance options with SecureNest.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable}`}>
       <body>
        <Topbar />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}