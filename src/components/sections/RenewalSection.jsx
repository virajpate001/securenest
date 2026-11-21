import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { RefreshCw } from "lucide-react";

export default function RenewalSection() {
  return (
    <section className="overflow-hidden bg-navy py-20 text-white md:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <Eyebrow>Policy Renewal</Eyebrow>
          <h2 className="mt-4 max-w-lg font-display text-3xl font-extrabold md:text-4xl">
            Is your vehicle policy <span className="text-gold">due for renewal?</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#c6cfdd]">
            Check your policy expiry date and enquire about renewal options before your policy lapses. Terms, inspection requirements and availability may vary.
          </p>
          <Button as="a" href="/get-a-quote" variant="gold" size="lg" className="mt-8">
            Start a renewal enquiry →
          </Button>
        </Reveal>

        <Reveal delay={0.2} className="relative flex h-[250px] items-center justify-center">
          <div className="absolute h-[250px] w-[250px] rounded-full border border-gold/30" />
          <div className="flex h-[160px] w-[140px] rotate-6 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-gold bg-gradient-to-br from-navy-soft to-navy-deep shadow-2xl">
            <span className="text-[10px] tracking-widest text-[#c9d3e1]">POLICY</span>
            <RefreshCw className="h-16 w-16 text-gold" />
            <span className="text-[10px] tracking-widest text-[#c9d3e1]">RENEWAL</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}