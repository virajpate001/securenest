import Container from "@/components/ui/Container";
import IconBox from "@/components/ui/IconBox";
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
    <section className="border-b border-line bg-white py-6">
      <Container>
        <RevealStagger className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {items.map((item, i) => (
            <RevealItem key={i} className="flex items-center gap-3">
              <IconBox className="h-12 w-12 shrink-0">
                <item.icon className="h-6 w-6" />
              </IconBox>
              <div>
                <strong className="block text-sm text-ink">{item.title}</strong>
                <small className="mt-0.5 block text-[11px] text-muted">{item.desc}</small>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}