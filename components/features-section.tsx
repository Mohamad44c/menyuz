import { Palette, QrCode, Link2, PencilLine, CreditCard, Images, Layers, Languages, DollarSign, Sun } from "lucide-react"

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
    icon: Layers,
    title: "Plexi glass table stands",
    description: "Optional add-on: QR code printed on sleek plexi glass stands for your tables - contact us for more details",
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
    icon: Images,
    title: "Unlimited images",
    description: "Add as many photos as you need — showcase every dish",
  },
  {
    icon: Languages,
    title: "Translate your menu into any language",
    description: "Reach every guest — display your menu in English, Arabic, French, or any language you need",
  },
  {
    icon: DollarSign,
    title: "Show prices in any currency",
    description: "Display your prices in USD, EUR, LBP, or any other currency — perfect for tourists and international visitors",
  },
  {
    icon: Sun,
    title: "Light & dark mode that matches your brand",
    description: "Your menu looks great day or night — choose a light or dark color theme that fits your restaurant's style",
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
