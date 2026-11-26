import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import ImageReveal from "@/components/ui/ImageReveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-sec pb-20 pt-16 md:pb-28 md:pt-24">
      <Container className="relative z-10 grid items-center gap-12 md:grid-cols-2 lg:gap-20">
        
        {/* Left Copy */}
        <div>
          <Reveal>
            <Eyebrow>Private &amp; Commercial Vehicles</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-primary md:text-5xl lg:text-[64px]">
              Insurance assistance for <br className="hidden lg:block" />
              <span className="relative inline-block">
                <span className="absolute bottom-2 left-0 -z-10 h-4 w-full bg-brand-yellow/40"></span>
                every journey.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-text-sec md:text-lg">
              Explore vehicle insurance options with clear guidance for your car, bike, passenger vehicle or goods carrier.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-4">
            <Button as="a" href="/get-a-quote" variant="primary" size="lg">
              Get an Enquiry →
            </Button>
            <Button as="a" href="#vehicle-types" variant="outline" size="lg">
              Explore Vehicles
            </Button>
          </Reveal>
          <Reveal delay={0.4} className="mt-8 flex flex-wrap gap-6 text-sm font-medium text-text-sec">
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-brand-yellow" /> New policy enquiries</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-brand-yellow" /> Renewal assistance</span>
          </Reveal>
        </div>

        {/* Right Visual */}
        <div className="relative h-[350px] w-full md:h-[480px]">
          <ImageReveal className="h-full w-full rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1000"
              alt="Luxury car driving on road"
              fill
              className="object-cover"
              priority
            />
            {/* Subtle gradient overlay for badge visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            
            {/* Floating Shield Badge */}
            <div className="absolute bottom-6 left-6 flex animate-float items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-yellow text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display font-bold text-white">SecureNest</div>
                <div className="text-xs font-medium text-white/80">100% Guided</div>
              </div>
            </div>
          </ImageReveal>
        </div>
      </Container>
    </section>
  );
}