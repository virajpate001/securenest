import InnerHero from "@/components/sections/InnerHero";
import PageCTA from "@/components/sections/PageCTA";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Prose from "@/components/ui/Prose";
import Reveal from "@/components/ui/Reveal";
import { RevealStagger, RevealItem } from "@/components/ui/RevealStagger";
import { CarTaxiFront, Users, Package, Zap, RefreshCw } from "lucide-react";

export const metadata = {
  title: "Three Wheeler Insurance",
  description: "Explore insurance options for eligible private or commercial three-wheelers.",
};

const cards = [
  { icon: CarTaxiFront, title: "Private three-wheeler", desc: "Explore options for three-wheelers registered for personal use." },
  { icon: Users, title: "Passenger-carrying vehicle", desc: "Insurance options for auto-rickshaws and commercial passenger three-wheelers." },
  { icon: Package, title: "Goods-carrying three-wheeler", desc: "Enquire about cover for small commercial goods carriers and delivery autos." },
  { icon: Zap, title: "Electric three-wheeler", desc: "Understand specific coverage and add-ons available for e-rickshaws and electric autos." },
];

export default function ThreeWheelerPage() {
  return (
    <>
      <InnerHero
        breadcrumb="Three Wheeler Insurance"
        eyebrow="THREE WHEELER INSURANCE"
        title="Three Wheeler Insurance"
        description="Find out about insurance options for eligible private or commercial three-wheelers. Registration class and permitted use help determine the appropriate product."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <Eyebrow dark>Understand Your Options</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-ink">
                Explore <span className="text-brand-yellow">three wheeler insurance</span>
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
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-cream text-brand-yellow">
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
                <li>Vehicle registration details and whether the use is private or commercial.</li>
                <li>Third-party liability and own-damage coverage, where applicable.</li>
                <li>Policy exclusions, deductibles, add-ons and claim conditions.</li>
                <li>Insurer eligibility and underwriting requirements for e-rickshaws or passenger vehicles.</li>
              </ul>
              <h2>Documents you may be asked for</h2>
              <p>
                Depending on the vehicle and transaction, the insurer may request the registration certificate, commercial permit (if applicable), existing policy details, and identity/contact details. Share documents only through an authorized and secure channel.
              </p>
            </Prose>
          </Reveal>
        </Container>
      </section>

      <PageCTA />
    </>
  );
}