import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const included = [
  "Beautiful branded menu page",
  "Custom QR code (PNG + PDF)",
  "Your own menu link",
  "Admin access to edit anytime",
  "48-hour delivery",
  "Free minor revisions",
  "Training session included",
  "Lifetime support",
]

export function PricingSection() {
  return (
    <section className="bg-secondary px-4 py-20 md:py-28">
      <div className="mx-auto max-w-xl">
        <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-lg">
          {/* Header */}
          <div className="bg-primary px-8 py-10 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary-foreground/80">
              One-time setup
            </p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl font-bold text-primary-foreground">$200</span>
            </div>
          </div>

          {/* Features */}
          <div className="p-8">
            <ul className="mb-8 space-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="w-full h-12 text-base font-medium">
              <Link href="https://wa.me/96170123456">
                Order now via WhatsApp
              </Link>
            </Button>

            <p className="mt-4 text-center text-sm text-muted-foreground">
              Additional customization available on request
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
