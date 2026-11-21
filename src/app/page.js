import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import VehicleGrid from "@/components/sections/VehicleGrid";
import CommercialGrid from "@/components/sections/CommercialGrid";
import SplitFeature from "@/components/sections/SplitFeature";
import RenewalSection from "@/components/sections/RenewalSection";
import Steps from "@/components/sections/Steps";
import WhySection from "@/components/sections/WhySection";
import FAQSection from "@/components/sections/FAQSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <VehicleGrid />
      <CommercialGrid />
      <SplitFeature />
      <RenewalSection />
      <Steps />
      <WhySection />
      <FAQSection />
    </>
  );
}