import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_76%_44%,#263d60_0,#172b4b_27%,#101e37_58%,#0b172d_100%)] text-white">
      {/* Decorative Orbits */}
      <div className="pointer-events-none absolute right-[-130px] top-[-160px] h-[600px] w-[600px] rounded-full border border-gold/20" />
      <div className="pointer-events-none absolute right-[-55px] top-[-85px] h-[450px] w-[450px] rounded-full border border-gold/10" />

      <Container className="relative z-10 grid items-center gap-10 pb-20 pt-16 md:grid-cols-2 md:pb-24 md:pt-20">
        {/* Left Copy */}
        <div>
          <Reveal>
            <Eyebrow>Private &amp; Commercial Vehicles</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
              Insurance assistance for <br className="hidden md:block" />
              <span className="text-gold">every journey.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#cbd4e2] md:text-lg">
              Explore vehicle insurance options with clear guidance for your car, bike, passenger vehicle or goods carrier.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-3">
            <Button as="a" href="/get-a-quote" variant="gold" size="lg">
              Get an Enquiry →
            </Button>
            <Button as="a" href="#vehicle-types" variant="outline" size="lg">
              Explore Vehicles
            </Button>
          </Reveal>
          <Reveal delay={0.4} className="mt-8 flex flex-wrap gap-5 text-xs text-[#c7d0de]">
            <span className="flex items-center gap-2"><span className="text-gold">✓</span> New policy enquiries</span>
            <span className="flex items-center gap-2"><span className="text-gold">✓</span> Renewal assistance</span>
            <span className="flex items-center gap-2"><span className="text-gold">✓</span> Policy guidance</span>
          </Reveal>
        </div>

        {/* Right Visual */}
        <div className="relative h-[300px] w-full md:h-[400px]">
          <Reveal delay={0.2} className="relative h-full w-full">
            {/* Main Car Image */}
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800"
                alt="Luxury car driving on road"
                fill
                className="object-cover"
                priority
              />
              {/* Dark gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating Shield Badge */}
            <div className="absolute -right-4 top-8 flex animate-float items-center gap-2 rounded-pill border border-gold/30 bg-white/10 px-4 py-2 backdrop-blur-md">
              <ShieldCheck className="h-6 w-6 text-gold" />
              <span className="text-sm font-bold text-white">SecureNest</span>
            </div>
          </Reveal>
        </div>
      </Container>
      
      {/* Bottom Angled Shape */}
      <div className="absolute bottom-0 left-0 h-4 w-full bg-white [clip-path:polygon(0_100%,0_0,35%_100%,65%_100%,100%_0,100%_100%)]" />
    </section>
  );
}