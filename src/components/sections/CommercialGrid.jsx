import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { RevealStagger, RevealItem } from "@/components/ui/RevealStagger";
import { CarTaxiFront, Bus, Truck, Info, ArrowRight } from "lucide-react";

const classes = [
  { code: "LPV", title: "Light Passenger Vehicle", desc: "Passenger taxis and eligible light passenger vehicles.", icon: CarTaxiFront },
  { code: "LMV", title: "Light Motor Vehicle", desc: "Light motor vehicles; usage may be private or transport.", icon: Bus },
  { code: "LGV", title: "Light Goods Vehicle", desc: "Eligible pickup, delivery and light goods carriers.", icon: Truck },
  { code: "HGV", title: "Heavy Goods Vehicle", desc: "Heavy goods carriers and eligible multi-axle trucks.", icon: Truck },
];

export default function CommercialGrid() {
  return (
    <section className="bg-bg-sec py-20 md:py-28">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow dark>For Business &amp; Transport</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
              Commercial vehicle <span className="text-brand-yellow">categories</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-md">
            <p className="text-base leading-relaxed text-text-sec">
              Choose the vehicle class that matches the registration certificate (RC) and permitted use. Final eligibility depends on insurer rules.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {classes.map((c) => (
            <RevealItem key={c.code}>
              <button className="group flex h-full w-full flex-col items-start rounded-[1.25rem] border border-border-soft bg-white p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-brand hover:border-brand-yellow/50">
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-bg-soft text-primary transition-colors group-hover:bg-brand-yellow group-hover:text-white">
                  <c.icon className="h-7 w-7" />
                </div>
                <div className="font-display text-2xl font-extrabold tracking-wider text-primary">{c.code}</div>
                <strong className="mt-1 font-display text-base font-bold text-primary">{c.title}</strong>
                <small className="mt-3 flex-1 text-sm leading-relaxed text-text-sec">{c.desc}</small>
                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-primary">
                  View details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.2} className="mt-10 flex items-start gap-4 rounded-2xl border border-brand-yellow/30 bg-brand-yellow-soft p-5 text-primary">
          <Info className="mt-0.5 h-6 w-6 shrink-0 text-brand-yellow" />
          <p className="text-sm leading-relaxed">
            <strong>Classification note:</strong> LPV, LMV, LGV and HGV are vehicle classifications. Private or commercial use is a separate consideration. Always confirm the RC class, vehicle use and insurer's product eligibility.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}