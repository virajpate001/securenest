import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function PageCTA() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-6 rounded-[1.5rem] bg-navy p-8 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl">
              Need help exploring your options?
            </h2>
            <p className="mt-2 text-sm text-[#cbd4e2]">
              Share your vehicle details and the SecureNest team can respond to your enquiry.
            </p>
          </div>
          <Button as="a" href="/get-a-quote" variant="gold" size="lg" className="shrink-0">
            Get an enquiry started →
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}