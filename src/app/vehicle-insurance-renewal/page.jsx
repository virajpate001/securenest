import InnerHero from "@/components/sections/InnerHero";
import PageCTA from "@/components/sections/PageCTA";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Prose from "@/components/ui/Prose";
import Reveal from "@/components/ui/Reveal";
import { RevealStagger, RevealItem } from "@/components/ui/RevealStagger";
import { RefreshCw, AlertTriangle, ShieldCheck, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Vehicle Insurance Renewal",
  description: "Check your policy expiry date and enquire about renewal options before your policy lapses.",
};

const cards = [
  { icon: CheckCircle2, title: "Retain No Claim Bonus", desc: "Renew on time to keep your accumulated NCB discount on the premium." },
  { icon: ShieldCheck, title: "Continuous Coverage", desc: "Avoid gaps in coverage that leave you vulnerable to liabilities." },
  { icon: AlertTriangle, title: "Avoid Lapse Penalties", desc: "Prevent the need for a physical inspection or losing NCB due to a lapsed policy." },
];

export default function RenewalPage() {
  return (
    <>
      <InnerHero
        breadcrumb="Vehicle Insurance Renewal"
        eyebrow="POLICY RENEWAL"
        title="Vehicle Insurance Renewal"
        description="Is your vehicle policy due for renewal? Check your policy expiry date and enquire about renewal options before your policy lapses. Terms, inspection requirements and availability may vary."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <Eyebrow dark>Why Renew On Time?</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-ink">
                Stay <span className="text-gold-dark">protected</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="max-w-md">
              <p className="text-sm text-muted">
                Driving with an expired policy is a legal offense. Renewing before the expiry date ensures continuous protection and preserves your No Claim Bonus.
              </p>
            </Reveal>
          </div>

          <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c) => (
              <RevealItem key={c.title} className="rounded-card border border-line bg-white p-6">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-cream text-gold-dark">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-sm font-extrabold text-ink">{c.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{c.desc}</p>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal delay={0.2} className="mt-12">
            <Prose>
              <h2>What happens if my policy lapses?</h2>
              <p>
                If your policy expires beyond the grace period (usually 15-30 days), you lose your No Claim Bonus. Furthermore, the insurer will require a physical inspection of your vehicle before issuing a new policy to ensure it is in good condition.
              </p>
              <h2>What you need to renew</h2>
              <ul>
                <li>Previous policy copy.</li>
                <li>Registration certificate (RC).</li>
                <li>Payment for the premium.</li>
              </ul>
            </Prose>
            
            <div className="mt-10 flex justify-center">
              <Button as="a" href="/get-a-quote?requirement=Policy+Renewal" variant="gold" size="lg">
                Start a renewal enquiry →
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <PageCTA />
    </>
  );
}