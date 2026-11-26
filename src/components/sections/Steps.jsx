import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { RevealStagger, RevealItem } from "@/components/ui/RevealStagger";
import { Car, FileText, Search, Handshake } from "lucide-react";

const steps = [
  { icon: Car, title: "Select vehicle", desc: "Choose your vehicle type and usage." },
  { icon: FileText, title: "Share enquiry", desc: "Provide basic contact and vehicle details." },
  { icon: Search, title: "Explore options", desc: "Understand available coverage and terms." },
  { icon: Handshake, title: "Next steps", desc: "Proceed through the authorized insurer channel." },
];

export default function Steps() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="mb-12 flex flex-col items-center text-center">
          <Reveal>
            <Eyebrow dark>Simple Enquiry Process</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-ink md:text-4xl">
              How <span className="text-brand-yellow">SecureNest works</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
              From selecting a vehicle category to understanding available policy options.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <RevealItem key={s.title} className="relative rounded-card border border-line p-6">
              <span className="absolute right-5 top-4 font-display text-sm font-extrabold text-line">
                0{i + 1}
              </span>
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#fbf8f1] text-brand-yellow">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-base font-extrabold text-ink">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{s.desc}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}