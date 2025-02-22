import { Card } from "@/components/ui/card"
import { Brain, SearchCode , Search, UploadCloud } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="container mx-auto py-12 md:py-24">
    <div className="flex max-w-[58rem] flex-col items-center space-y-4 text-center mx-auto">
      <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Features</h2>
      <p className="max-w-[85%] text-sm text-muted-foreground sm:text-base pb-6">
        Essential tools designed to boost your productivity
      </p>
    </div>
    <div className="mx-auto grid gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 justify-items-center">
      {[
        {
          icon: UploadCloud, 
          title: "Upload Easily",
          description: "Seamlessly upload and organize PDFs, documents, and files for efficient processing.",
        },
        {
          icon: SearchCode , 
          title: "Interactive Insights",
          description: "Engage with your documents using conversational AI to retrieve key information.",
        },
        {
          icon: Brain, 
          title: "AI-Powered Summaries",
          description: "Generate concise summaries and key takeaways from lengthy documents in seconds.",
        },
      ].map((feature, index) => (
        <Card
          key={index}
          className="group relative overflow-hidden border border-border/50 bg-background p-6 transition-all hover:border-foreground/20"
        >
          <div className="flex flex-col  items-center space-y-4">
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

