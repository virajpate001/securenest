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
    <section className="relative overflow-hidden bg-primary pb-32 pt-20 text-white md:pb-40 md:pt-28">
      {/* Optional: Subtle grid or radial glow for premium feel */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
      
      <Container className="relative z-10">
        <Reveal>
          <div className="mb-6 text-sm font-medium text-white/60">
            <Link href="/" className="text-brand-yellow transition-colors hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span>{breadcrumb}</span>
          </div>
        </Reveal>
        
        <Reveal delay={0.1}>
          <Eyebrow className="bg-white/10 text-brand-yellow">{eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl tw">
            {title}
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
            {description}
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-4">
          <Button as="a" href="/get-a-quote" variant="primary" size="lg">
            Make an enquiry →
          </Button>
          <Button as="a" href="/contact" variant="outline" size="lg" className="border-white/20 text-white hover:border-white hover:bg-white/5">
            Contact us
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}