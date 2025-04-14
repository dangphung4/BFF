import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { FeaturedProducts } from "@/components/FeaturedProducts"
import { CategoryShowcase } from "@/components/CategoryShowcase"
import { MinimalSection } from "@/components/MinimalSection"
import { Footer } from "@/components/Footer"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProducts />
        <CategoryShowcase />
        <MinimalSection />
      </main>
      <Footer />
    </div>
  )
}
