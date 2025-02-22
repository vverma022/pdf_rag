"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Wrench, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Wrench className="h-6 w-6" />
          <span className="font-bold">VectorVerse</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex flex-1 items-center justify-end space-x-6">
          <nav className="flex items-center space-x-6 text-sm">
            <Link href="#features" className="transition hover:text-foreground/80">
              Features
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Link href="https://github.com/vverma022/pdf_rag" target="_blank" rel="noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="border-border/50 hover:border-foreground/20"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Button asChild>
              <Link href="/login" className="px-4">
                Get Started
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <nav className="flex flex-col space-y-4 p-4 bg-background border-t border-border/50">
            <Link href="#features" className="transition hover:text-foreground/80">
              Features
            </Link>
            <Link href="/login" className="transition hover:text-foreground/80">
              Get Started
            </Link>
            <Link
              href="https://github.com/vverma022/pdf_rag"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-foreground/80"
            >
              GitHub
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}