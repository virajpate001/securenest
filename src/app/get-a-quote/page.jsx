"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

import Container from "@/components/ui/Container";
import InnerHero from "@/components/sections/InnerHero";
import QuoteForm from "@/components/sections/QuoteForm";

function QuotePageContent() {
  const searchParams = useSearchParams();
  const requirement = searchParams.get("requirement") || "";

  return (
    <Container className="relative z-10 -mt-12 pb-24">
      <div className="mx-auto max-w-2xl">
        <QuoteForm defaultRequirement={requirement} />
      </div>
    </Container>
  );
}

export default function GetAQuotePage() {
  return (
    <>
      <InnerHero
        breadcrumb="Get a Vehicle Insurance Quote"
        eyebrow="START AN ENQUIRY"
        title="Get a Vehicle Insurance Quote"
        description="Share basic details about your vehicle and insurance requirement. This form will redirect you to WhatsApp to complete your enquiry securely."
      />

      <Suspense fallback={
        <Container className="py-24 text-center text-text-sec">
          Loading form...
        </Container>
      }>
        <QuotePageContent />
      </Suspense>
    </>
  );
}