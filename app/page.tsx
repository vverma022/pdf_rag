import { HeroSection } from "@/main-components/landing/HeroSection"
import { FeaturesSection } from "@/main-components/landing/FeaturesSection"
import { CTASection } from "@/main-components/landing/CTASection"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </div>
  )
}

