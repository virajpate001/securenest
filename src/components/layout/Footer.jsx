import Link from "next/link";
import Container from "@/components/ui/Container";
import BrandLogo from "@/components/shared/BrandLogo";
import { FOOTER_COLUMNS } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border-soft bg-bg-sec pb-8 pt-16">
      <Container>
        <div className="grid gap-10 pb-12 md:grid-cols-4 lg:gap-8">
          <div>
            <BrandLogo />
            <p className="mt-5 max-w-[280px] text-sm leading-relaxed text-text-sec">
              Secure your tomorrow. Explore private and commercial vehicle
              insurance options with guided assistance.
            </p>

            <Reveal className="rounded-card bg-white p-4 mt-4" >
                      
                       <div className="mt-6 space-y-4 text-sm">
                         <p><strong>WhatsApp:</strong> +91 98765 43210</p>
                         <p><strong>Email:</strong> support@securenest.in</p>
                         <p><strong>Service area:</strong> All India</p>
                         <p><strong>Business hours:</strong> Mon-Sat, 9:00 AM - 6:00 PM</p>
                       </div>
                     </Reveal>
          </div>
          
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 font-display text-sm font-bold text-primary">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm font-medium text-text-sec transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-border-soft pt-8 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
          <span>©2026 SecureNest. All rights reserved.</span>
          <span className="flex gap-4">
            <Link href="/privacy-policy" className="transition-colors hover:text-primary">Privacy</Link>
            <span>·</span>
            <Link href="/terms" className="transition-colors hover:text-primary">Terms</Link>
            <span>·</span>
            <Link href="/disclaimer" className="transition-colors hover:text-primary">Disclaimer</Link>
          </span>
        </div>

        <p className="mt-6 max-w-4xl text-xs leading-relaxed text-text-muted">
          SecureNest is an insurance assistance brand, not an insurer.
          Insurance is offered and issued by the respective insurer, subject
          to its underwriting, policy terms, conditions and exclusions.
        </p>
      </Container>
    </footer>
  );
}