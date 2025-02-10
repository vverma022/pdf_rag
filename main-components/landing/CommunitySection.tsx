import { Card } from "@/components/ui/card"
import { Github, Terminal, Boxes } from "lucide-react"

export function CommunitySection() {
  return (
    <section id="community" className="border-t border-border/50">
      <div className="container space-y-6 py-12 md:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Open Source</h2>
          <p className="max-w-[85%] text-sm text-muted-foreground sm:text-base">
            Join our community and contribute to the future of developer tools
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {[
            {
              icon: Github,
              title: "GitHub",
              description: "Contribute to our open source codebase",
            },
            {
              icon: Terminal,
              title: "CLI Tools",
              description: "Build and share command-line tools",
            },
            {
              icon: Boxes,
              title: "Extensions",
              description: "Create plugins and extensions",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border border-border/50 bg-background p-6 transition-all hover:border-foreground/20"
            >
              <div className="flex flex-col items-center space-y-4">
                <feature.icon className="h-12 w-12" />
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

