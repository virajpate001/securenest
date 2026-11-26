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
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-white/90 backdrop-blur-md">
      <Container className="flex h-[80px] items-center justify-between gap-6">
        
        {/* Logo */}
        <BrandLogo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "font-manrope text-sm font-semibold transition-colors duration-200",
                  active 
                    ? "text-primary" 
                    : "text-text-sec hover:text-primary"
                )}
              >
                {label}
              </Link>
            );
          })}
          
          <Link
            href="/get-a-quote"
            className="ml-4 inline-flex items-center gap-2 rounded-btn bg-brand-yellow px-6 py-3 font-manrope text-sm font-bold text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-yellow-hover hover:shadow-md"
          >
            Get a Quote <span className="text-lg leading-none">↗</span>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-xl bg-bg-soft text-primary transition-colors hover:bg-border-soft lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile Navigation Drawer */}
      <div
        className={cn(
          "absolute inset-x-0 top-full z-40 h-[calc(100vh-80px)] overflow-y-auto bg-white transition-all duration-300 ease-in-out lg:hidden",
          open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col px-6 py-6 pb-24">
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "border-b border-border-soft py-4 font-manrope text-base font-semibold transition-colors",
                  active ? "text-brand-yellow" : "text-primary"
                )}
              >
                {label}
              </Link>
            );
          })}
          
          <Link
            href="/get-a-quote"
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-btn bg-brand-yellow px-6 py-4 font-manrope text-base font-bold text-primary shadow-sm transition-colors hover:bg-brand-yellow-hover"
          >
            Get a Quote <span className="text-xl leading-none">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}