import InnerHero from "@/components/sections/InnerHero";
import PageCTA from "@/components/sections/PageCTA";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Prose from "@/components/ui/Prose";
import Reveal from "@/components/ui/Reveal";
import { RevealStagger, RevealItem } from "@/components/ui/RevealStagger";
import { Bike, Zap, RefreshCw, FileText } from "lucide-react";

export const metadata = {
  title: "Two Wheeler Insurance",
  description: "Explore insurance options for motorcycles, scooters and eligible electric two-wheelers.",
};

const cards = [
  { icon: Bike, title: "New bike policy enquiry", desc: "Get assistance understanding coverage for a newly purchased motorcycle or scooter." },
  { icon: FileText, title: "Third-party cover", desc: "Explore the mandatory legal liability coverage required to ride on public roads." },
  { icon: RefreshCw, title: "Policy renewal", desc: "Get help exploring renewal requirements and retaining your No Claim Bonus." },
  { icon: Zap, title: "Electric two-wheeler", desc: "Understand specific coverage and add-ons available for electric scooters and bikes." },
];

export default function TwoWheelerPage() {
  return (
    <>
      <InnerHero
        breadcrumb="Two Wheeler Insurance"
        eyebrow="PRIVATE VEHICLE INSURANCE"
        title="Two Wheeler Insurance"
        description="Explore insurance options for motorcycles, scooters and eligible electric two-wheelers. The right policy depends on vehicle details, use and insurer eligibility."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <Eyebrow dark>Understand Your Options</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-ink">
                Explore <span className="text-gold-dark">two wheeler insurance</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="max-w-md">
              <p className="text-sm text-muted">
                Information is general. Actual cover, eligibility and premium depend on the insurer and policy wording.
              </p>
            </Reveal>
          </div>

          <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
              <h2>What should you check?</h2>
              <ul>
                <li>Vehicle registration details and engine capacity.</li>
                <li>Third-party liability and own-damage coverage, where applicable.</li>
                <li>Policy exclusions, deductibles, add-ons (like Zero Depreciation) and claim conditions.</li>
                <li>Insurer eligibility and underwriting requirements.</li>
              </ul>
              <h2>Documents you may be asked for</h2>
              <p>
                Depending on the vehicle and transaction, the insurer may request the registration certificate, existing policy details, driving license, and identity/contact details. Share documents only through an authorized and secure channel.
              </p>
            </Prose>
          </Reveal>
        </Container>
      </section>

      <PageCTA />
    </>
  );
}