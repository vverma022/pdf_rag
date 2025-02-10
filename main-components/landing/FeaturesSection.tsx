import { Card } from "@/components/ui/card"
import { FileJson, ListTodo, StickyNote } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="container space-y-6 py-12 md:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Features</h2>
        <p className="max-w-[85%] text-sm text-muted-foreground sm:text-base">
          Essential tools designed to boost your productivity
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {[
          {
            icon: ListTodo,
            title: "To-Do App",
            description: "Track tasks and manage your workflow efficiently",
          },
          {
            icon: StickyNote,
            title: "Note Taking",
            description: "Capture and organize your development notes",
          },
          {
            icon: FileJson,
            title: "JSON/YAML Tools",
            description: "Convert and format data structures with ease",
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
    </section>
  )
}

