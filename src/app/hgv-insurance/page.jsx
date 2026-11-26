import InnerHero from "@/components/sections/InnerHero";
import PageCTA from "@/components/sections/PageCTA";
import Container from "@/components/ui/Container";
import Prose from "@/components/ui/Prose";
import Reveal from "@/components/ui/Reveal";
import { RevealStagger, RevealItem } from "@/components/ui/RevealStagger";
import { Truck, Container as ContainerIcon, FileText } from "lucide-react";

export const metadata = {
  title: "HGV Insurance",
  description: "HGV means Heavy Goods Vehicle. This may include eligible heavy cargo trucks and multi-axle goods carriers.",
};

const cards = [
  { icon: Truck, title: "Heavy goods truck", desc: "Explore insurance options for eligible heavy goods vehicles." },
  { icon: ContainerIcon, title: "Multi-axle carrier", desc: "Enquire about cover for eligible multi-axle goods carriers." },
  { icon: FileText, title: "Vehicle details", desc: "Keep RC, carrying capacity and permitted-use information ready." },
];

export default function HGVPage() {
  return (
    <>
      <InnerHero
        breadcrumb="HGV Insurance"
        eyebrow="HEAVY GOODS VEHICLE"
        title="HGV Insurance"
        description="HGV means Heavy Goods Vehicle. This may include eligible heavy cargo trucks and multi-axle goods carriers. The vehicle's RC, gross vehicle weight, use and insurer rules determine eligibility."
      />

      <section className="py-16 md:py-24">
        <Container>
          <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
              <h2>Before making an enquiry</h2>
              <p>
                Confirm the vehicle class, registration details, gross vehicle weight where relevant, permitted use and applicable permit requirements. Do not rely on a generic label alone to select an insurance product.
              </p>
              <h2>Coverage and policy terms</h2>
              <p>
                Available third-party and own-damage options, exclusions, deductibles and add-ons vary by insurer and product. Review the policy wording and proposal details carefully.
              </p>
            </Prose>
          </Reveal>
        </Container>
      </section>

      <PageCTA />
    </>
  );
}