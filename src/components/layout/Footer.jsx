import Link from "next/link";

import Container from "@/components/ui/Container";
import BrandLogo from "@/components/shared/BrandLogo";
import { FOOTER_COLUMNS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0a1427] pb-5 pt-14 text-[#cbd3df]">
      <Container>
        <div className="grid gap-8 pb-10 md:grid-cols-4">
          <div>
            <BrandLogo light />
            <p className="mt-4 max-w-[280px] text-[11px] leading-relaxed text-[#8996aa]">
              Secure your tomorrow. Explore private and commercial vehicle
              insurance options with guided assistance.
            </p>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 font-display text-[12px] font-extrabold text-white">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[11px] text-[#aab4c3] transition hover:text-gold"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-5 text-[10px] text-[#8793a6] md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} SecureNest. All rights reserved.</span>
          <span className="flex gap-3">
            <Link href="/privacy-policy" className="hover:text-gold">Privacy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-gold">Terms</Link>
            <span>·</span>
            <Link href="/disclaimer" className="hover:text-gold">Disclaimer</Link>
          </span>
        </div>

        <p className="mt-4 text-[9px] leading-relaxed text-[#748198]">
          SecureNest is an insurance assistance brand, not an insurer.
          Insurance is offered and issued by the respective insurer, subject
          to its underwriting, policy terms, conditions and exclusions.
        </p>
      </Container>
    </footer>
  );
}