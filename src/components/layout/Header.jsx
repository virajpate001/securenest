"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import Container from "@/components/ui/Container";
import BrandLogo from "@/components/shared/BrandLogo";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-navy/10 bg-white/95 backdrop-blur-md">
      <Container className="flex h-[70px] items-center justify-between gap-6 md:h-[82px]">
        <BrandLogo />

        {/* Desktop nav */}
        <nav className={cn("transition-colors font-manrope font-semibold hover:text-primary", active ? "text-primary" : "text-text-sec")}>
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "transition-colors hover:text-gold-dark",
                  active && "text-gold-dark",
                )}
              >
                {label}
              </Link>
            );
          })}
         <Link href="/get-a-quote" className="inline-flex items-center gap-2 rounded-btn bg-brand-yellow px-5 py-2.5 font-manrope font-bold text-primary transition hover:bg-brand-yellow-hover">
  Get a Quote <span>↗</span>
</Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden"
        >
          {open ? <X className="h-7 w-7 text-navy" /> : <Menu className="h-7 w-7 text-navy" />}
        </button>
      </Container>

      {/* Mobile nav */}
      {open && (
        <div className="absolute inset-x-0 top-full z-40 bg-white shadow-lg md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="border-b border-line py-3 text-sm font-bold text-ink"
              >
                {label}
              </Link>
            ))}
           <Link href="/get-a-quote" className="inline-flex items-center gap-2 rounded-btn bg-brand-yellow px-5 py-2.5 font-manrope font-bold text-primary transition hover:bg-brand-yellow-hover">
  Get a Quote <span>↗</span>
</Link>
          </nav>
        </div>
      )}
    </header>
  );
}