import { HeroSection } from "@/main-components/landing/HeroSection"
import { FeaturesSection } from "@/main-components/landing/FeaturesSection"
import { CTASection } from "@/main-components/landing/CTASection"
import { Header } from "@/main-components/shared/header"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </div>
  )
}

