import { Send, Sparkles, QrCode } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionBadge } from "@/components/ui/section-badge";
import { GradientText } from "@/components/ui/gradient-text";
import { Reveal } from "@/components/ui/reveal";

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
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="bg-[#0E0E1A] px-4 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center mb-4 flex justify-center">
          <SectionBadge>Simple process</SectionBadge>
        </Reveal>
        <Reveal delay={0.1} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#F0F0F8]">
            How it <GradientText>works</GradientText>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#9898B0]">
            Three simple steps to your digital menu
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={0.1 + i * 0.12}>
              <GlassCard className="relative p-8 h-full transition-colors hover:bg-white/[0.09]">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B5CF6]/[0.18]">
                    <step.icon className="h-6 w-6 text-[#8B5CF6]" />
                  </div>
                  <span className="text-4xl font-bold text-[#8B5CF6]/20">
                    {step.number}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#F0F0F8]">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-[#9898B0]">
                  {step.description}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
