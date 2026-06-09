import { CheckCircle2, ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { SectionBadge } from "@/components/ui/section-badge";
import { GradientText } from "@/components/ui/gradient-text";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    description: "Perfect for getting started",
    highlight: false,
    features: [
      { label: "1 branch",          included: true  },
      { label: "30 products",       included: true  },
      { label: "10 categories",     included: true  },
      { label: "Deals",             included: false },
      { label: "Branch overrides",  included: false },
      { label: "Branch selector",   included: false },
    ],
    cta: "Get started free",
    href: "https://wa.me/96178830254",
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    description: "Great for growing businesses",
    highlight: true,
    features: [
      { label: "3 branches",        included: true  },
      { label: "Unlimited products",included: true  },
      { label: "Unlimited categories", included: true },
      { label: "Deals",             included: true  },
      { label: "Branch overrides",  included: true  },
      { label: "Branch selector",   included: false },
    ],
    cta: "Get Pro",
    href: "https://wa.me/96178830254",
  },
  {
    name: "Business",
    price: "$49",
    period: "/mo",
    description: "For multi-location operations",
    highlight: false,
    features: [
      { label: "Unlimited branches",   included: true },
      { label: "Unlimited products",   included: true },
      { label: "Unlimited categories", included: true },
      { label: "Deals",                included: true },
      { label: "Branch overrides",     included: true },
      { label: "Branch selector",      included: true },
    ],
    cta: "Get Business",
    href: "https://wa.me/96178830254",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-[#080810] px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center mb-4 flex justify-center">
          <SectionBadge>Pricing</SectionBadge>
        </Reveal>
        <Reveal delay={0.1} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#F0F0F8]">
            Simple, <GradientText>transparent</GradientText> pricing
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#9898B0]">
            One-time setup, no hidden fees — pick the plan that fits your business
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={0.1 + i * 0.12}>
              <div className="relative h-full">
                {plan.highlight && (
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#8B5CF6]/60 to-[#8B5CF6]/20 z-0" />
                )}
                <GlassCard
                  className={[
                    "relative z-10 flex h-full flex-col p-6",
                    plan.highlight
                      ? "bg-[#8B5CF6]/[0.10] border-[#8B5CF6]/40"
                      : "",
                  ].join(" ")}
                >
                  {plan.highlight && (
                    <div className="mb-4 flex justify-center">
                      <span className="rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 px-3 py-0.5 text-xs font-semibold text-violet-300">
                        Most popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <p className="text-sm font-medium text-[#52527A] uppercase tracking-wide mb-1">
                      {plan.name}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-[#F0F0F8]">
                        {plan.price}
                      </span>
                      <span className="text-[#9898B0] text-sm">{plan.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-[#9898B0]">{plan.description}</p>
                  </div>

                  <ul className="mb-8 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f.label} className="flex items-center gap-2.5">
                        {f.included ? (
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8B5CF6]" />
                        ) : (
                          <X className="h-4 w-4 shrink-0 text-[#52527A]" />
                        )}
                        <span
                          className={
                            f.included ? "text-sm text-[#F0F0F8]" : "text-sm text-[#52527A]"
                          }
                        >
                          {f.label}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.href}
                    className={[
                      "flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors focus:outline-none",
                      plan.highlight
                        ? "bg-[#8B5CF6] hover:bg-[#7C3AED] text-[#080810]"
                        : "border border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/40",
                    ].join(" ")}
                  >
                    {plan.cta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </GlassCard>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5} className="mt-8 text-center">
          <p className="text-sm text-[#52527A]">
            Additional customization available on request
          </p>
        </Reveal>
      </div>
    </section>
  );
}
