import InnerHero from "@/components/sections/InnerHero";
import Container from "@/components/ui/Container";
import Prose from "@/components/ui/Prose";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using the SecureNest website.",
};

export default function TermsPage() {
  return (
    <>
      <InnerHero
        breadcrumb="Terms of Service"
        eyebrow="IMPORTANT INFORMATION"
        title="Terms of Service"
        description="Please read these terms carefully before using the SecureNest website."
      />

      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <Prose>
              <p><strong>Last updated:</strong> [Add date before publication]</p>
              
              <h2>1. Acceptance of Terms</h2>
              <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
              
              <h2>2. Nature of Service</h2>
              <p>SecureNest is an insurance assistance brand. We help users connect with authorized insurers and intermediaries to explore vehicle insurance options. We do not issue insurance policies, underwrite risks, or process claims.</p>
              
              <h2>3. User Responsibilities</h2>
              <p>You agree to provide accurate, current, and complete information during the enquiry process. You are responsible for verifying all policy details, coverage terms, and exclusions directly with the insurer before purchasing a policy.</p>
              
              <h2>4. Limitation of Liability</h2>
              <p>SecureNest shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website or the services offered by third-party insurers.</p>
            </Prose>
          </Reveal>
        </Container>
      </section>
    </>
  );
}