import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import IndustriesGrid from "@/components/home/IndustriesGrid";
import ProcessSteps from "@/components/home/ProcessSteps";
import PricingPreview from "@/components/home/PricingPreview";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Services */}
      <ServicesOverview />

      {/* Section 3: Featured Work */}
      <FeaturedProjects />

      {/* Section 4: Industries */}
      <IndustriesGrid />

      {/* Section 5: Process */}
      <ProcessSteps />

      {/* Section 6: Pricing and FAQ */}
      <PricingPreview />

      {/* Section 7: Final CTA */}
      <FinalCTA />
    </>
  );
}
