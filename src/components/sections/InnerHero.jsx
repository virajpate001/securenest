import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function InnerHero({ 
  title, 
  description, 
  eyebrow = "SECURENEST VEHICLE INSURANCE",
  breadcrumb = "Page"
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-navy-deep to-navy-soft py-16 text-white md:py-24">
      <Container className="relative z-10">
        <Reveal>
          <div className="mb-4 text-xs text-[#b9c4d4]">
            <Link href="/" className="text-gold hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>{breadcrumb}</span>
          </div>
        </Reveal>
        
        <Reveal delay={0.1}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-extrabold tracking-tight md:text-5xl">
            {title}
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[#d1d9e5] md:text-base">
            {description}
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-3">
          <Button as="a" href="/get-a-quote" variant="gold" size="lg">
            Make an enquiry →
          </Button>
          <Button as="a" href="/contact" variant="outline" size="lg">
            Contact us
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}