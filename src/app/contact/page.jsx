import InnerHero from "@/components/sections/InnerHero";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Contact SecureNest",
  description: "Have a question about vehicle insurance? Send an enquiry and the SecureNest team can get back to you.",
};

export default function ContactPage() {
  return (
    <>
      <InnerHero
        breadcrumb="Contact SecureNest"
        eyebrow="WE'RE HERE TO HELP"
        title="Contact SecureNest"
        description="Have a question about vehicle insurance? Send an enquiry and the SecureNest team can get back to you."
      />

      <section className="py-16 md:py-24">
        <Container className="grid gap-8 md:grid-cols-[1fr_1.5fr]">
          <Reveal className="rounded-card bg-[#f5f6f8] p-8">
            <h3 className="font-display text-xl font-extrabold text-ink">Get in touch</h3>
            <p className="mt-4 text-sm text-muted">
              Replace these placeholders with the agent's verified business contact information before publishing.
            </p>
            <div className="mt-6 space-y-4 text-sm">
              <p><strong>WhatsApp:</strong> +91 98765 43210</p>
              <p><strong>Email:</strong> support@securenest.in</p>
              <p><strong>Service area:</strong> All India</p>
              <p><strong>Business hours:</strong> Mon-Sat, 9:00 AM - 6:00 PM</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-card border border-line bg-white p-8 shadow-sm">
            <h3 className="font-display text-xl font-extrabold text-ink">Send an enquiry</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Use the Get a Quote page to share your vehicle category and contact details. Do not send sensitive documents through an unsecured channel.
            </p>
            <Button as="a" href="/get-a-quote" variant="navy" size="lg" className="mt-6">
              Open enquiry form →
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}