import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { RefreshCw } from "lucide-react";

export default function RenewalSection() {
  return (
    <section className="overflow-hidden bg-primary py-20 text-white md:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-yellow">
            Policy Renewal
          </div>
          <h2 className="mt-6 max-w-lg font-display text-3xl font-bold leading-tight  md:text-4xl lg:text-5xl tw">
            Is your vehicle policy <span className="text-brand-yellow">due for renewal?</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
            Check your policy expiry date and enquire about renewal options before your policy lapses. Terms, inspection requirements and availability may vary.
          </p>
          <Button as="a" href="/get-a-quote?requirement=Policy+Renewal" variant="primary" size="lg" className="mt-8">
            Start a renewal enquiry →
          </Button>
        </Reveal>

        <Reveal delay={0.2} className="relative flex h-[300px] items-center justify-center">
          {/* Animated decorative rings */}
          <div className="absolute h-[300px] w-[300px] rounded-full border border-white/10" />
          <div className="absolute h-[220px] w-[220px] rounded-full border border-brand-yellow/30 border-dashed animate-[spin_10s_linear_infinite]" />
          
          <div className="flex h-[180px] w-[160px] rotate-3 flex-col items-center justify-center gap-3 rounded-[1.5rem] border-2 border-brand-yellow bg-primary shadow-2xl transition-transform duration-500 hover:rotate-0">
            <span className="text-xs font-bold tracking-widest text-white/60">POLICY</span>
            <RefreshCw className="h-20 w-20 text-brand-yellow" />
            <span className="text-xs font-bold tracking-widest text-white/60">RENEWAL</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}