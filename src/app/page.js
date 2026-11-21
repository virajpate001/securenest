"use client";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { RevealStagger, RevealItem } from "@/components/ui/RevealStagger";
import { Eyebrow } from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-deep via-navy to-navy-soft py-24 text-white">
        <Container>
          {/* <Reveal>
            <Eyebrow>Private &amp; Commercial Vehicles</Eyebrow>
          </Reveal> */}
          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              Insurance assistance for <span className="text-gold">every journey.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-white/70">
              Explore vehicle insurance options with clear guidance for your
              car, bike, passenger vehicle or goods carrier.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-3">
            <Button as="a" href="/get-a-quote" variant="gold">
              Get an Enquiry →
            </Button>
            <Button as="a" href="#demo" variant="outline">
              Explore Demo
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* Scroll test block */}
      <section id="demo" className="py-24">
        <Container>
          <Reveal>
            {/* <Eyebrow dark>Day 1 — Animation Test</Eyebrow> */}
            <h2 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-4xl">
              Scroll down to see staggered reveals →
            </h2>
          </Reveal>

          <RevealStagger className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <RevealItem
                key={n}
                className="rounded-card border border-line bg-white p-6 shadow-sm"
              >
                <div className="text-3xl font-extrabold text-gold-dark">0{n}</div>
                <p className="mt-2 text-sm text-muted">
                  Card {n} — this faded up because of RevealItem.
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section> 

      {/* Scroll spacer */}
      <div className="h-screen bg-cream" />
    </>
  );
}