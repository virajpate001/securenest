import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { Sparkles, RefreshCw, Phone } from "lucide-react";

const points = [
  { icon: Sparkles, title: "Guided information", desc: "Understand policy types and key terms." },
  { icon: RefreshCw, title: "Renewal enquiries", desc: "Get help exploring renewal requirements." },
  { icon: Phone, title: "Convenient communication", desc: "Choose a suitable way to contact the team." },
];

export default function WhySection() {
  return (
    <section className="bg-[#f6f7f9] py-20 md:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
        <Reveal>
          <Eyebrow dark>About SecureNest</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-ink md:text-4xl">
            A clearer way to explore <span className="text-gold-dark">vehicle insurance.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            SecureNest is a vehicle insurance assistance brand designed to help customers make informed enquiries about private and commercial vehicle insurance options.
          </p>
        </Reveal>
        
        <div className="grid gap-4">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={0.1 * i} className="flex items-center gap-4 rounded-card bg-white p-5 shadow-sm">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#f8f0df] text-gold-dark">
                <p.icon className="h-6 w-6" />
              </div>
              <div>
                <strong className="block font-display text-sm font-extrabold text-ink">{p.title}</strong>
                <small className="mt-0.5 block text-xs text-muted">{p.desc}</small>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}