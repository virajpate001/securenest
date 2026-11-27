import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import ImageReveal from "@/components/ui/ImageReveal";
import { Check } from "lucide-react";

export default function SplitFeature() {
  return (
    <section className="bg-bg-main py-20 md:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
        
        <div className="relative h-[350px] md:h-[450px]">
          <ImageReveal className="h-full w-full overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="https://res.cloudinary.com/gwy8xgtr/image/upload/v1795763143/img_1_t4sff3.webp"
              alt="New vehicle purchase"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <div className="text-xs font-bold tracking-widest text-brand-yellow">NEW VEHICLE</div>
              <div className="mt-2 font-display text-2xl font-extrabold">NEW JOURNEY</div>
            </div>
          </ImageReveal>
        </div>

        <Reveal delay={0.15}>
          <Eyebrow dark>Just Bought A Vehicle?</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
            Start your journey with the <span className="text-brand-yellow">right cover.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text-sec">
            Explore insurance options for a newly purchased car, bike, three-wheeler or commercial vehicle. Get assistance understanding coverage, policy terms and next steps.
          </p>
          <ul className="mt-8 space-y-4 text-base font-medium text-primary">
            {["New car insurance enquiries", "New bike insurance enquiries", "New three-wheeler insurance enquiries", "New commercial vehicle enquiries"].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <div className="grid h-6 w-6 place-items-center rounded-full bg-brand-yellow-soft text-brand-yellow">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </div>
                {item}
              </li>
            ))}
          </ul>
          <Button as="a" href="/get-a-quote?requirement=Brand+New+Vehicle" variant="dark" size="lg" className="mt-10">
            Enquire about a new vehicle →
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}