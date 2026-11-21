import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "What is the difference between third-party and comprehensive insurance?", a: "Third-party insurance covers specified legal liabilities to third parties. Comprehensive policies generally include third-party liability and own-damage cover, subject to policy terms, exclusions and add-ons." },
  { q: "Can I enquire about a brand-new vehicle?", a: "Yes. You can submit an enquiry for a new vehicle. The required details and available options depend on the vehicle and insurer." },
  { q: "Can SecureNest help with renewals?", a: "You can contact SecureNest for renewal-related assistance. Renewal terms, inspection requirements and availability depend on the insurer." },
  { q: "What do LPV, LMV, LGV and HGV mean?", a: "They refer to Light Passenger Vehicle, Light Motor Vehicle, Light Goods Vehicle and Heavy Goods Vehicle. Confirm the exact class using the vehicle's RC and applicable rules." },
];

export default function FAQSection() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <Eyebrow dark>Have Questions?</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-ink md:text-4xl">
            Frequently asked <span className="text-gold-dark">questions</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Quick answers to common vehicle insurance questions.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col">
          {faqs.map((faq, i) => (
            <details key={i} className="group border-b border-line py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-sm font-bold text-ink">
                {faq.q}
                <span className="text-gold-dark group-open:hidden"><Plus className="h-5 w-5" /></span>
                <span className="hidden text-gold-dark group-open:block"><Minus className="h-5 w-5" /></span>
              </summary>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                {faq.a}
              </p>
            </details>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}