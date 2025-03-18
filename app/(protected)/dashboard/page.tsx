"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Copy, Download, ThumbsUp, ThumbsDown, FileText } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  role: "agent" | "user"
  content: string
  timestamp: string
}

interface UploadedPdf {
  id: string
  name: string
  color: string
}

export default function Dashboard() {
  const [input, setInput] = useState("")
  const getCurrentTime = () => {
    const now = new Date()
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true })
  }
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "agent",
      content:
        "Hello, I'm your PDF assistant. Upload a PDF document from the sidebar, and I'll help you extract information from it.",
      timestamp: getCurrentTime(),
    },
  ])
  const [uploadedPdfs, setUploadedPdfs] = useState<UploadedPdf[]>([])
  const [activePdf, setActivePdf] = useState<string | null>(null)

  useEffect(() => {
    const handlePdfUpload = (event: CustomEvent) => {
      const newPdf = event.detail.pdf
      setUploadedPdfs((prev) => [...prev, newPdf])
      setActivePdf(newPdf.id)

      // Reset messages to just show the upload confirmation
      setMessages([
        {
          role: "agent",
          content:
            "Hello, I'm your PDF assistant. Upload a PDF document, and I'll help you extract information from it.",
          timestamp: getCurrentTime(),
        },
        {
          role: "user",
          content: `Uploaded: ${newPdf.name}`,
          timestamp: getCurrentTime(),
        },
        {
          role: "agent",
          content: `I've processed "${newPdf.name}". Click the button below to start interacting with this document, or ask me a question directly.`,
          timestamp: getCurrentTime(),
        },
      ])
    }

    window.addEventListener("pdf-uploaded", handlePdfUpload as EventListener)
    return () => window.removeEventListener("pdf-uploaded", handlePdfUpload as EventListener)
  }, [])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: getCurrentTime(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate AI response
    setTimeout(() => {
      const responseMessage: Message = {
        role: "agent",
        content: activePdf
          ? `Based on the document you uploaded, here's what I found about "${input}":\n\nThe document contains relevant information on page 3, section 2.1. According to the text, ${input} is described as an important concept that relates to the main topic of the document.`
          : "Please upload a PDF first so I can answer questions about it.",
        timestamp: getCurrentTime(),
      }

      setMessages((prev) => [...prev, responseMessage])
    }, 1000)
  }

  // Add a new function to generate the personalized greeting
  const generatePersonalizedGreeting = () => {
    if (!activePdf || !uploadedPdfs.length) return

    const pdf = uploadedPdfs.find((pdf) => pdf.id === activePdf)
    if (!pdf) return

    const pdfName = pdf.name.replace(".pdf", "")

    const greetingMessage: Message = {
      role: "agent",
      content: `Hello! I'm your ${pdfName} Assistant. I've analyzed this document and I'm ready to answer any questions you have about it.`,
      timestamp: getCurrentTime(),
    }

    setMessages((prev) => [...prev, greetingMessage])
  }

  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Scrollable message area */}
      <div className="flex-1 overflow-hidden relative">
        <ScrollArea className="absolute inset-0 p-4">
          <div className="space-y-4 pb-4">
            {messages.map((message, index) => (
              <div key={index} className={cn("flex gap-2 max-w-[80%]", message.role === "user" && "ml-auto")}>
                {message.role === "agent" && <div className="h-8 w-8 rounded-full bg-primary flex-shrink-0" />}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{message.role === "agent" ? "PDF Assistant" : "You"}</span>
                    <span className="text-sm text-muted-foreground">{message.timestamp}</span>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                  {message.role === "agent" && (
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ThumbsUp className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ThumbsDown className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {activePdf && uploadedPdfs.length > 0 && messages.length <= 3 && (
              <div className="flex justify-center mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={generatePersonalizedGreeting}
                  className="bg-primary/10 hover:bg-primary/20"
                >
                  Get personalized assistance for this PDF
                </Button>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      {/* Fixed input area at bottom */}
      <div className="border-t  p-4">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Textarea
              placeholder={
                activePdf ? "Ask a question about your PDF..." : "Upload a PDF from the sidebar to get started..."
              }
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-h-[44px] max-h-32 resize-none"
              disabled={!activePdf && uploadedPdfs.length === 0}
            />
            <Button
              className="px-8"
              onClick={handleSendMessage}
              disabled={!input.trim() || (!activePdf && uploadedPdfs.length === 0)}
            >
              Send
            </Button>
          </div>
          <div className="flex items-center gap-2">
            {activePdf && uploadedPdfs.find((pdf) => pdf.id === activePdf) && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <FileText className="h-4 w-4" />
                <span>Active: {uploadedPdfs.find((pdf) => pdf.id === activePdf)?.name}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

