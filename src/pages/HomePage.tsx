import { HeroSection } from "@/components/HeroSection"
import { FeaturedProducts } from "@/components/FeaturedProducts"
import { CategoryShowcase } from "@/components/CategoryShowcase"
import { RepairServices } from "@/components/RepairServices"
import { MinimalSection } from "@/components/MinimalSection"
import { BeforeAfter } from "@/components/BeforeAfter"
import { TestimonialSection } from "@/components/TestimonialSection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <RepairServices />
      <BeforeAfter />
      <TestimonialSection />
      <MinimalSection />
      <CategoryShowcase />
    </>
  );
} 