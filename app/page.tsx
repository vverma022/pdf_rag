import { HeroSection } from "@/main-components/landing/HeroSection"
import { FeaturesSection } from "@/main-components/landing/FeaturesSection"
import { CommunitySection } from "@/main-components/landing/CommunitySection"
import { WhySection } from "@/main-components/landing/WhySection"
import { CTASection } from "@/main-components/landing/CTASection"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <CommunitySection />
      <WhySection />
      <CTASection />
    </div>
  )
}

