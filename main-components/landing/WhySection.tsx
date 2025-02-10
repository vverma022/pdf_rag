import { Card } from "@/components/ui/card"

export function WhySection() {
  return (
    <section className="border-t border-border/50">
      <div className="container space-y-6 py-12 md:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Why MyDevTools?</h2>
          <p className="max-w-[85%] text-sm text-muted-foreground sm:text-base">Built by developers, for developers</p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem]">
          {[
            {
              title: "All-in-One Solution",
              description:
                "Access all your essential development tools in one place, saving time and reducing context switching.",
            },
            {
              title: "Open Source",
              description:
                "Fully open source and community-driven development ensures transparency and continuous improvement.",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border border-border/50 bg-background p-6 transition-all hover:border-foreground/20"
            >
              <div className="space-y-2">
                <h3 className="font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

