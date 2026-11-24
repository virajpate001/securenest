import InnerHero from "@/components/sections/InnerHero";
import Container from "@/components/ui/Container";
import Prose from "@/components/ui/Prose";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Insurance Disclaimer",
  description: "Important information regarding the nature of SecureNest's services.",
};

export default function DisclaimerPage() {
  return (
    <>
      <InnerHero
        breadcrumb="Insurance Disclaimer"
        eyebrow="IMPORTANT INFORMATION"
        title="Insurance Disclaimer"
        description="This disclaimer should be reviewed by the relevant insurer or compliance professional before the website goes live."
      />

      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <Prose>
              <p><strong>Last updated:</strong> [Add date before publication]</p>
              
              <h2>Not an insurer</h2>
              <p>SecureNest is presented as an insurance assistance brand and not as an insurance company. Identify the actual licensed insurer or authorized intermediary involved in each transaction.</p>
              
              <h2>General information</h2>
              <p>Website content is for general information and does not replace insurer policy wording, a personalized quotation or professional advice.</p>
              
              <h2>Policy terms</h2>
              <p>All insurance is subject to the insurer's underwriting, eligibility criteria, policy terms, conditions, exclusions, deductibles and applicable law.</p>
              
              <h2>Claims</h2>
              <p>SecureNest does not guarantee claim approval, settlement amount or processing time. Claims are assessed by the insurer according to the policy and applicable rules.</p>
              
              <h2>No guaranteed savings</h2>
              <p>Do not rely on this website as a promise of the lowest premium, guaranteed approval or guaranteed claim outcome.</p>
            </Prose>
          </Reveal>
        </Container>
      </section>
    </>
  );
}