import {
  UtensilsCrossed,
  Coffee,
  ShoppingBag,
  Hotel,
  Scissors,
  Truck,
  Wine,
  Cake,
  Dumbbell,
  BookOpen,
} from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import { GradientText } from "@/components/ui/gradient-text";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";

const industries = [
  {
    icon: UtensilsCrossed,
    name: "Restaurants",
    description: "Full-service dining menus with categories, photos, and multi-language support.",
  },
  {
    icon: Coffee,
    name: "Cafés & Coffee Shops",
    description: "Seasonal drink menus that update in minutes — no reprint needed.",
  },
  {
    icon: ShoppingBag,
    name: "Retail Stores",
    description: "Product catalogs with prices in any currency for in-store or window displays.",
  },
  {
    icon: Hotel,
    name: "Hotels & Resorts",
    description: "Room service, spa, and amenities menus — one QR per department.",
  },
  {
    icon: Scissors,
    name: "Salons & Spas",
    description: "Service menus with pricing tiers, add-ons, and booking links.",
  },
  {
    icon: Truck,
    name: "Food Trucks",
    description: "Compact, mobile-first menus that rotate with your daily specials.",
  },
  {
    icon: Wine,
    name: "Bars & Lounges",
    description: "Cocktail and drinks menus with deals and happy-hour highlights.",
  },
  {
    icon: Cake,
    name: "Bakeries & Patisseries",
    description: "Showcase every item with rich photos and seasonal collections.",
  },
  {
    icon: Dumbbell,
    name: "Gyms & Fitness",
    description: "Class schedules, membership plans, and supplement catalogs.",
  },
  {
    icon: BookOpen,
    name: "Any Business with a Catalog",
    description: "If you have products or services to show, Menyuz makes them beautiful and scannable.",
  },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-[#080810] px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center mb-4 flex justify-center">
          <SectionBadge>Who it&apos;s for</SectionBadge>
        </Reveal>
        <Reveal delay={0.1} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#F0F0F8]">
            Built for <GradientText>every industry</GradientText>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#9898B0]">
            Any business that wants a beautiful, scannable digital presence
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.slice(0, 9).map((industry, i) => (
            <Reveal key={industry.name} delay={0.05 * (i % 3)}>
              <GlassCard className="flex items-start gap-4 p-5 h-full transition-colors hover:bg-white/[0.09]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#8B5CF6]/[0.18]">
                  <industry.icon className="h-5 w-5 text-[#8B5CF6]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#F0F0F8]">{industry.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#9898B0]">
                    {industry.description}
                  </p>
                </div>
              </GlassCard>
            </Reveal>
          ))}

          {/* Last card spans full width */}
          {(() => {
            const last = industries[9];
            const Icon = last.icon;
            return (
              <Reveal delay={0} className="sm:col-span-2 lg:col-span-3">
                <GlassCard className="flex items-start gap-4 p-5 transition-colors hover:bg-white/[0.09] border-[#8B5CF6]/20">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#8B5CF6]/[0.18]">
                    <Icon className="h-5 w-5 text-[#8B5CF6]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#F0F0F8]">{last.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#9898B0]">
                      {last.description}
                    </p>
                  </div>
                </GlassCard>
              </Reveal>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
