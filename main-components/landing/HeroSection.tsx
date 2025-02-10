import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center space-y-4 py-12 px-4 text-center md:py-24 lg:py-32 border-b border-border/50">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04)_0%,rgba(51, 51, 51)_80%)] dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0)_100%)]"></div>
      <div className="space-y-4">
        <div className="inline-block rounded-full px-3 py-1 text-xs sm:text-sm border border-border/50 bg-background">
          Open Source Developer Tools
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          Your Ultimate Developer Toolkit
        </h1>
        <p className="mx-auto max-w-[700px] text-sm text-muted-foreground sm:text-base md:text-lg">
          Simplify your workflow with essential developer tools. From to-do lists to JSON formatting, everything you
          need in one place.
        </p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button size="lg" className="h-10 px-6 sm:h-11 sm:px-8">
          Get Started
        </Button>
        <Button size="lg" variant="outline" className="h-10 px-6 sm:h-11 sm:px-8">
          View on GitHub
        </Button>
      </div>
    </section>
  )
}

