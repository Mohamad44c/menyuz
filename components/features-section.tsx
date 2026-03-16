import { Palette, QrCode, Link2, PencilLine, CreditCard } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Beautiful branded menu page",
    description: "Custom designed to match your restaurant's identity",
  },
  {
    icon: QrCode,
    title: "Custom QR code",
    description: "PNG + PDF, print-ready for tables and displays",
  },
  {
    icon: Link2,
    title: "Your own link",
    description: "Clean URL or custom domain support available",
  },
  {
    icon: PencilLine,
    title: "Easy self-editing",
    description: "No tech skills needed — update anytime",
  },
  {
    icon: CreditCard,
    title: "One-time payment",
    description: "No subscriptions, no hidden fees",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-background px-4 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            What you get
          </h2>
          <p className="text-muted-foreground">
            Everything included in your Menyuz package
          </p>
        </div>

        <div className="space-y-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 rounded-xl border-l-4 border-primary bg-secondary/50 p-5 transition-colors hover:bg-secondary"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
