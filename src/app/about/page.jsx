import InnerHero from "@/components/sections/InnerHero";
import PageCTA from "@/components/sections/PageCTA";
import Container from "@/components/ui/Container";
import Prose from "@/components/ui/Prose";
import Reveal from "@/components/ui/Reveal";
import { RevealStagger, RevealItem } from "@/components/ui/RevealStagger";
import { Car, Truck, RefreshCw, BookOpen } from "lucide-react";

export const metadata = {
  title: "About SecureNest",
  description: "SecureNest is a vehicle insurance assistance brand focused on helping customers understand private and commercial vehicle insurance enquiries.",
};

const cards = [
  { icon: Car, title: "Private vehicle enquiries", desc: "Car, bike and eligible three-wheeler insurance enquiries." },
  { icon: Truck, title: "Commercial vehicle enquiries", desc: "Passenger and goods-carrying vehicle insurance enquiries." },
  { icon: RefreshCw, title: "Renewal assistance", desc: "Guidance on renewal information and next steps." },
  { icon: BookOpen, title: "Insurance awareness", desc: "General information about policy terms and coverage." },
];

export default function AboutPage() {
  return (
    <>
      <InnerHero
        breadcrumb="About SecureNest"
        eyebrow="WHO WE ARE"
        title="About SecureNest"
        description="SecureNest is a vehicle insurance assistance brand focused on helping customers understand private and commercial vehicle insurance enquiries."
      />

      <section className="py-16 md:py-24">
        <Container className="max-w-4xl">
          <Reveal>
            <Prose>
              <h2>Our purpose</h2>
              <p>
                Our aim is to make vehicle insurance enquiries easier to navigate by helping customers identify their vehicle category, understand common policy terms and connect with the appropriate authorized insurance channel.
              </p>
            </Prose>
          </Reveal>

          <RevealStagger className="my-12 grid gap-4 sm:grid-cols-2">
            {cards.map((c) => (
              <RevealItem key={c.title} className="rounded-card border border-line bg-white p-6">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-cream text-gold-dark">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-base font-extrabold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.desc}</p>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal delay={0.2}>
            <Prose>
              <h2>Our role</h2>
              <p>
                SecureNest is not an insurance company. The insurer issues the policy and determines underwriting, premium, coverage, exclusions and claims decisions. The actual role and authorization of the person or intermediary handling an enquiry must be disclosed accurately.
              </p>
            </Prose>
          </Reveal>
        </Container>
      </section>

      <PageCTA />
    </>
  );
}