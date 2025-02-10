import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="border-t border-border/50">
      <div className="container space-y-6 py-12 md:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Ready to Get Started?</h2>
          <p className="max-w-[85%] text-sm text-muted-foreground sm:text-base">
            Join thousands of developers who are already using MyDevTools
          </p>
          <Button size="lg" className="h-10 px-6 sm:h-11 sm:px-8">
            Try MyDevTools Now
          </Button>
        </div>
      </div>
    </section>
  )
}

