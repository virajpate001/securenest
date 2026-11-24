import InnerHero from "@/components/sections/InnerHero";
import Container from "@/components/ui/Container";
import Prose from "@/components/ui/Prose";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Privacy Policy",
  description: "This sample privacy policy is a starting point only.",
};

export default function PrivacyPage() {
  return (
    <>
      <InnerHero
        breadcrumb="Privacy Policy"
        eyebrow="HOW ENQUIRY INFORMATION IS HANDLED"
        title="Privacy Policy"
        description="This sample privacy policy is a starting point only. Customize it to match the actual data collected, systems, vendors, retention practices and applicable legal requirements."
      />

      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <Prose>
              <p><strong>Last updated:</strong> [Add date before publication]</p>
              
              <h2>Information collected</h2>
              <p>SecureNest may collect information voluntarily submitted through enquiry forms, such as name, phone number, vehicle category and enquiry details. Do not collect sensitive information unless necessary and handled through an appropriate secure process.</p>
              
              <h2>How information is used</h2>
              <p>Information may be used to respond to enquiries, provide requested assistance, communicate about the enquiry and maintain records as required.</p>
              
              <h2>Sharing and service providers</h2>
              <p>Information may be shared with the relevant insurer or authorized intermediary only where needed to respond to the customer's request and subject to applicable permissions and requirements.</p>
              
              <h2>Security and retention</h2>
              <p>Use reasonable safeguards, restrict access and retain information only as long as needed for the stated purpose or legal obligations.</p>
              
              <h2>Customer choices</h2>
              <p>Provide a way for customers to ask questions, correct information or request deletion where applicable. Add the actual privacy contact before publishing.</p>
            </Prose>
          </Reveal>
        </Container>
      </section>
    </>
  );
}