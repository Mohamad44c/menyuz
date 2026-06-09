import {
  Palette, QrCode, Link2, PencilLine, CreditCard,
  Images, Layers, Languages, DollarSign, Sun, MapPin,
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionBadge } from "@/components/ui/section-badge";
import { GradientText } from "@/components/ui/gradient-text";
import { Reveal } from "@/components/ui/reveal";

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
    description:
      "Optional add-on: QR code printed on sleek plexi glass stands for your tables — contact us for more details",
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
    description:
      "Reach every guest — display your menu in English, Arabic, French, or any language you need",
  },
  {
    icon: DollarSign,
    title: "Show prices in any currency",
    description:
      "Display your prices in USD, EUR, LBP, or any other currency — perfect for tourists and international visitors",
  },
  {
    icon: Sun,
    title: "Light & dark mode that matches your brand",
    description:
      "Your menu looks great day or night — choose a light or dark color theme that fits your restaurant's style",
  },
  {
    icon: MapPin,
    title: "Multi-location support",
    description:
      "Manage separate menus for each branch while keeping the same consistent brand experience",
  },
  {
    icon: CreditCard,
    title: "One-time payment",
    description: "No subscriptions, no hidden fees",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="bg-[#0E0E1A] px-4 py-20 md:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center mb-4 flex justify-center">
          <SectionBadge>Everything included</SectionBadge>
        </Reveal>
        <Reveal delay={0.1} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#F0F0F8]">
            What you <GradientText>get</GradientText>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#9898B0]">
            Everything included in your Menyuz package
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={0.05 * (i % 4)}>
              <GlassCard className="flex h-full items-start gap-4 p-5 transition-colors hover:bg-white/[0.09]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#8B5CF6]/[0.18]">
                  <feature.icon className="h-5 w-5 text-[#8B5CF6]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#F0F0F8]">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#9898B0]">
                    {feature.description}
                  </p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
