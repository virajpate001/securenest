import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { RevealStagger, RevealItem } from "@/components/ui/RevealStagger";
import { CarTaxiFront, Bus, Truck, Info } from "lucide-react";

const classes = [
  { code: "LPV", title: "Light Passenger Vehicle", desc: "Passenger taxis and eligible light passenger vehicles.", icon: CarTaxiFront },
  { code: "LMV", title: "Light Motor Vehicle", desc: "Light motor vehicles; usage may be private or transport.", icon: Bus },
  { code: "LGV", title: "Light Goods Vehicle", desc: "Eligible pickup, delivery and light goods carriers.", icon: Truck },
  { code: "HGV", title: "Heavy Goods Vehicle", desc: "Heavy goods carriers and eligible multi-axle trucks.", icon: Truck },
];

export default function CommercialGrid() {
  return (
    <section className="bg-[#f6f7f9] py-20 md:py-28">
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow dark>For Business &amp; Transport</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-ink md:text-4xl">
              Commercial vehicle <span className="text-gold-dark">categories</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-md">
            <p className="text-sm leading-relaxed text-muted">
              Choose the vehicle class that matches the registration certificate (RC) and permitted use. Final eligibility depends on insurer rules.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {classes.map((c, i) => (
            <RevealItem key={c.code}>
              <button className="flex h-full w-full flex-col items-start rounded-card border border-line bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-brand">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#fbf8f1] text-gold-dark">
                  <c.icon className="h-6 w-6" />
                </div>
                <div className="font-display text-2xl font-extrabold tracking-wider text-gold-dark">{c.code}</div>
                <strong className="mt-2 font-display text-sm text-ink">{c.title}</strong>
                <small className="mt-2 min-h-[40px] text-[11px] leading-relaxed text-muted">{c.desc}</small>
                <div className="mt-4 text-xs font-bold text-gold-dark">View details →</div>
              </button>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.2} className="mt-8 flex items-start gap-3 rounded-xl border border-[#f0dfba] bg-[#fff8e9] p-4 text-[#68542e]">
          <Info className="mt-0.5 h-5 w-5 shrink-0" />
          <p className="text-xs leading-relaxed">
            <strong>Classification note:</strong> LPV, LMV, LGV and HGV are vehicle classifications. Private or commercial use is a separate consideration. Always confirm the RC class, vehicle use and insurer's product eligibility.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}