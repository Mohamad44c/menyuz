import { Send, Sparkles, QrCode } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Send,
    title: "Send us your details",
    description: "You send us your menu, logo, and brand colors",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "We build it",
    description: "We build, customize, and deploy your menu in 48 hours",
  },
  {
    number: "03",
    icon: QrCode,
    title: "You're live",
    description: "You get a QR code and login to edit anytime",
  },
]

export function HowItWorksSection() {
  return (
    <section className="bg-secondary px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            How it works
          </h2>
          <p className="text-muted-foreground">
            Three simple steps to your digital menu
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl bg-background p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-4xl font-bold text-primary/20">
                  {step.number}
                </span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
