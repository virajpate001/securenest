import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { Check } from "lucide-react";

export default function SplitFeature() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
        <Reveal className="relative h-[300px] overflow-hidden rounded-[2rem] md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800"
            alt="New vehicle purchase"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <div className="text-xs font-bold tracking-widest text-gold">NEW VEHICLE</div>
            <div className="mt-1 font-display text-lg font-extrabold">NEW JOURNEY</div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <Eyebrow dark>Just Bought A Vehicle?</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-ink md:text-4xl">
            Start your journey with the <span className="text-gold-dark">right cover.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Explore insurance options for a newly purchased car, bike, three-wheeler or commercial vehicle. Get assistance understanding coverage, policy terms and next steps.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-ink">
            {["New car insurance enquiries", "New bike insurance enquiries", "New three-wheeler insurance enquiries", "New commercial vehicle enquiries"].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <Check className="h-4 w-4 text-gold-dark" /> {item}
              </li>
            ))}
          </ul>
          <Button as="a" href="/get-a-quote?requirement=Brand+New+Vehicle" variant="navy" size="lg" className="mt-8">
  Enquire about a new vehicle →
</Button>
        </Reveal>
      </Container>
    </section>
  );
}