import Link from "next/link"
import { Wrench } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-6 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-20 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-center">
            Built by{" "}
            <Link
              href="https://github.com/vverma022"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-foreground"
            >
              vverma022
            </Link>
            .{" "}
            <span className="hidden sm:inline">
              The source code is available on{" "}
              <Link
                href="https://github.com/vverma022/pdf_rag"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4 hover:text-foreground"
              >
                GitHub
              </Link>
              .
            </span>
          </p>
        </div>
    </footer>
  )
}

