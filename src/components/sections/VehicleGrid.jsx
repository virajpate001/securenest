import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { RevealStagger, RevealItem } from "@/components/ui/RevealStagger";

const vehicles = [
  { slug: "two-wheeler-insurance", title: "Two Wheeler", kicker: "PRIVATE VEHICLE", desc: "Motorcycles, scooters and eligible electric two-wheelers.", img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=600" },
  { slug: "three-wheeler-insurance", title: "Three Wheeler", kicker: "THREE WHEELER", desc: "Explore insurance options for eligible three-wheelers.", img: "https://images.unsplash.com/photo-1566008885242-492c4d1c727c?auto=format&fit=crop&q=80&w=600" },
  { slug: "four-wheeler-insurance", title: "Four Wheeler", kicker: "PRIVATE VEHICLE", desc: "Private cars, SUVs and eligible electric cars.", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600" },
  { slug: "commercial-vehicle-insurance", title: "Commercial", kicker: "COMMERCIAL VEHICLE", desc: "Passenger vehicles, goods carriers and transport vehicles.", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600" },
];

export default function VehicleGrid() {
  return (
    <section id="vehicle-types" className="py-20 md:py-28">
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow dark>Explore Your Options</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-ink md:text-4xl">
              Choose your <span className="text-gold-dark">vehicle type</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-md">
            <p className="text-sm leading-relaxed text-muted">
              Start with the type of vehicle you want to insure. Select a category to view relevant information and enquiry options.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {vehicles.map((v, i) => (
            <RevealItem key={v.slug}>
              <Link href={`/${v.slug}`} className="group block overflow-hidden rounded-card border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-brand">
                <div className="relative h-40 overflow-hidden">
                  <Image src={v.img} alt={v.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-navy/20" />
                  <span className="absolute right-3 top-3 font-display text-sm font-bold text-white/50">0{i + 1}</span>
                </div>
                <div className="p-5">
                  <div className="text-[10px] font-extrabold tracking-wider text-gold-dark">{v.kicker}</div>
                  <h3 className="mt-2 font-display text-lg font-extrabold text-ink">{v.title} Insurance</h3>
                  <p className="mt-2 min-h-[40px] text-xs leading-relaxed text-muted">{v.desc}</p>
                  <div className="mt-4 text-xs font-bold text-gold-dark">Explore options →</div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}