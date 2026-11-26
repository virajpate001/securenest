import Container from "@/components/ui/Container";
import { RevealStagger, RevealItem } from "@/components/ui/RevealStagger";
import { Sparkles, RefreshCw, Phone, Home } from "lucide-react";

const items = [
  { icon: Sparkles, title: "Clear guidance", desc: "Understand your options" },
  { icon: RefreshCw, title: "Renewal support", desc: "Enquire about renewals" },
  { icon: Phone, title: "Easy enquiries", desc: "Connect with our team" },
  { icon: Home, title: "Vehicle categories", desc: "Private & commercial" },
];

export default function TrustStrip() {
  return (
    <section className="border-b border-border-soft bg-white py-10">
      <Container>
        <RevealStagger className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {items.map((item, i) => (
            <RevealItem key={i} className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-bg-soft text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <strong className="block font-display text-sm font-bold text-primary">{item.title}</strong>
                <small className="mt-1 block text-xs font-medium text-text-sec">{item.desc}</small>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}