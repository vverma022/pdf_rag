import Link from "next/link"
import { Wrench } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Wrench className="h-6 w-6" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <Link
              href="https://github.com/mydevtools"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-foreground"
            >
              MyDevTools
            </Link>
            .{" "}
            <span className="hidden sm:inline">
              The source code is available on{" "}
              <Link
                href="https://github.com/mydevtools/repo"
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
      </div>
    </footer>
  )
}

