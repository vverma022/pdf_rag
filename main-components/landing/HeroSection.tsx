import LetterGlitch from "@/components/LetterGlitch/LetterGlitch"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center border-b border-border/50">
    <div className="absolute z-10 flex flex-col gap-y-4">
      <h1 className="text-4xl font-bold   text-white">VectorVerse_</h1>
       <Link href={'/dashboard'}>
        <Button variant="outline">Go to Dashboard</Button>
       </Link>
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

