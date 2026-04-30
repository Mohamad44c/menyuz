"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { QrCode, Smartphone } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const typewriterWords = [
    "a better menu",
    "better customer experience",
    "stronger branding",
  ]
  const [wordIndex, setWordIndex] = useState(0)
  const [displayedWord, setDisplayedWord] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = typewriterWords[wordIndex]
    const typingSpeed = isDeleting ? 50 : 90

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedWord === currentWord) {
        setTimeout(() => setIsDeleting(true), 900)
        return
      }

      if (isDeleting && displayedWord === "") {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % typewriterWords.length)
        return
      }

      const nextValue = isDeleting
        ? currentWord.slice(0, displayedWord.length - 1)
        : currentWord.slice(0, displayedWord.length + 1)
      setDisplayedWord(nextValue)
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedWord, isDeleting, typewriterWords, wordIndex])

  return (
    <section className="relative bg-background px-4 py-20 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <QrCode className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-semibold text-foreground">Menyuz</span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          <span className="block">Your restaurant deserves</span>
          <span
            aria-live="polite"
            className="mt-2 flex min-h-[1.25em] justify-center text-primary md:min-h-[1.15em]"
          >
            <span className="inline-block min-w-[20ch] text-center">
              {displayedWord}
              <span className="animate-pulse text-foreground">|</span>
            </span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          We build beautiful, scannable QR menus for cafes and restaurants. You focus on the food — we handle the rest.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="h-12 px-8 text-base font-medium">
            <Link href="https://wa.me/96170123456">
              Get your menu — Request a quote
            </Link>
          </Button>
          <Link
            href="https://menyuz-demo.vercel.app/"
            target="_blank"
            className="inline-flex items-center gap-1 text-base font-medium text-primary transition-colors hover:text-primary/80"
          >
            See a live demo
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Decorative illustration */}
        <div className="mt-16 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-secondary/50" />
            <div className="relative flex items-center gap-6 rounded-2xl border border-border bg-background p-6 shadow-lg">
              <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-primary/10">
                <QrCode className="h-10 w-10 text-primary" />
              </div>
              <div className="hidden h-8 w-px bg-border sm:block" />
              <div className="hidden items-center gap-3 sm:flex">
                <Smartphone className="h-8 w-8 text-muted-foreground" />
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">Scan & Browse</p>
                  <p className="text-sm text-muted-foreground">Instant access to your menu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
