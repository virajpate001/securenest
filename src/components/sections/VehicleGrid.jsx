import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { RevealStagger, RevealItem } from "@/components/ui/RevealStagger";
import { ArrowRight } from "lucide-react";

const vehicles = [
  { slug: "two-wheeler-insurance", title: "Two Wheeler", kicker: "PRIVATE VEHICLE", desc: "Motorcycles, scooters and eligible electric two-wheelers.", img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=600" },
  { slug: "three-wheeler-insurance", title: "Three Wheeler", kicker: "THREE WHEELER", desc: "Explore insurance options for eligible three-wheelers.", img: "https://images.unsplash.com/photo-1566008885242-492c4d1c727c?auto=format&fit=crop&q=80&w=600" },
  { slug: "four-wheeler-insurance", title: "Four Wheeler", kicker: "PRIVATE VEHICLE", desc: "Private cars, SUVs and eligible electric cars.", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600" },
  { slug: "commercial-vehicle-insurance", title: "Commercial", kicker: "COMMERCIAL VEHICLE", desc: "Passenger vehicles, goods carriers and transport vehicles.", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600" },
];

export default function VehicleGrid() {
  return (
    <section id="vehicle-types" className="bg-bg-main py-20 md:py-28">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow dark>Explore Your Options</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
              Choose your <span className="text-brand-yellow">vehicle type</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-md">
            <p className="text-base leading-relaxed text-text-sec">
              Start with the type of vehicle you want to insure. Select a category to view relevant information and enquiry options.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vehicles.map((v, i) => (
            <RevealItem key={v.slug}>
              <Link href={`/${v.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-border-soft bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-brand hover:border-brand-yellow/50">
                <div className="relative h-48 overflow-hidden">
                  <Image src={v.img} alt={v.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-primary/10 transition-opacity duration-300 group-hover:opacity-0" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="text-[10px] font-bold tracking-widest text-brand-yellow">{v.kicker}</div>
                  <h3 className="mt-2 font-display text-xl font-bold text-primary">{v.title} Insurance</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text-sec">{v.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-primary transition-colors group-hover:text-brand-yellow">
                    Explore options <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}