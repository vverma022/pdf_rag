import LetterGlitch from "@/components/LetterGlitch/LetterGlitch"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center border-b border-border/50">
    <div className="absolute z-10">
      <h1 className="text-4xl font-bold  opacity-90 filter blur-[1px] text-white">VectorVerse</h1>
    </div>
      <LetterGlitch 
      glitchColors ={ ["#2b4539", "#61dca3", "#61b3dc"]}
      glitchSpeed={50}
      centerVignette={true}
      outerVignette={false}
      smooth={true}
      />
    </section>
  )
}

