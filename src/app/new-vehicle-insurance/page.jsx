import InnerHero from "@/components/sections/InnerHero";
import PageCTA from "@/components/sections/PageCTA";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Prose from "@/components/ui/Prose";
import Reveal from "@/components/ui/Reveal";
import { RevealStagger, RevealItem } from "@/components/ui/RevealStagger";
import { Car, Bike, CarTaxiFront, Truck, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "New Vehicle Insurance",
  description: "Explore insurance options for a newly purchased car, bike, three-wheeler or commercial vehicle.",
};

const cards = [
  { icon: Car, title: "New car insurance", desc: "Get assistance understanding coverage for a newly purchased four-wheeler." },
  { icon: Bike, title: "New bike insurance", desc: "Explore options for a brand-new motorcycle or scooter." },
  { icon: CarTaxiFront, title: "New three-wheeler", desc: "Enquire about insurance for a recently purchased auto or e-rickshaw." },
  { icon: Truck, title: "New commercial vehicle", desc: "Understand requirements for insuring a new goods or passenger transport vehicle." },
];

export default function NewVehiclePage() {
  return (
    <>
      <InnerHero
        breadcrumb="New Vehicle Insurance"
        eyebrow="JUST BOUGHT A VEHICLE?"
        title="New Vehicle Insurance"
        description="Start your journey with the right cover. Explore insurance options for a newly purchased car, bike, three-wheeler or commercial vehicle. Get assistance understanding coverage, policy terms and next steps."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <Eyebrow dark>Protect Your Investment</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-ink">
                Coverage for your <span className="text-brand-yellow">new vehicle</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="max-w-md">
              <p className="text-sm text-muted">
                New vehicles usually require comprehensive coverage. Learn about add-ons like Zero Depreciation that protect the full value of new parts.
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
              <h2>Why comprehensive cover is important for new vehicles</h2>
              <p>
                When you buy a new vehicle, its value is at its highest. Comprehensive insurance protects against accidents, theft, and natural disasters. It also allows you to add crucial add-ons like Zero Depreciation (which ensures you get the full cost of replacing plastic and rubber parts without depreciation deductions) and Engine Protection.
              </p>
              <h2>What you might need</h2>
              <ul>
                <li>Invoice copy of the new vehicle.</li>
                <li>Registration details (or temporary registration).</li>
                <li>Driving license and identity proof.</li>
              </ul>
            </Prose>
            
            <div className="mt-10 flex justify-center">
              <Button as="a" href="/get-a-quote?requirement=Brand+New+Vehicle" variant="navy" size="lg">
                Enquire about a new vehicle →
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <PageCTA />
    </>
  );
}