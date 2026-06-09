"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { QrCode, ArrowRight, ExternalLink, ChevronDown } from "lucide-react";
import { HeroBackground } from "@/components/ui/hero-background";
import { SectionBadge } from "@/components/ui/section-badge";
import { GradientText } from "@/components/ui/gradient-text";

const typewriterWords = [
  "a better digital catalog",
  "a smoother customer journey",
  "stronger brand presence",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden:   { opacity: 0, y: 28 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function HeroSection() {
  const [wordIndex,     setWordIndex]     = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [isDeleting,    setIsDeleting]    = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const currentWord = typewriterWords[wordIndex];
    const typingSpeed = isDeleting ? 50 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedWord === currentWord) {
        setTimeout(() => setIsDeleting(true), 900);
        return;
      }
      if (isDeleting && displayedWord === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % typewriterWords.length);
        return;
      }
      const nextValue = isDeleting
        ? currentWord.slice(0, displayedWord.length - 1)
        : currentWord.slice(0, displayedWord.length + 1);
      setDisplayedWord(nextValue);
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedWord, isDeleting, wordIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080810] px-4 pt-24 pb-20"
    >
      <HeroBackground />

      <motion.div
        className="relative z-10 mx-auto max-w-6xl text-center"
        variants={shouldReduceMotion ? undefined : containerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="mb-8 flex justify-center"
        >
          <SectionBadge>Digital menus, made in Beirut</SectionBadge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="mb-6 text-[30px] md:text-[54px] font-extrabold leading-[1.1] tracking-tight text-[#F0F0F8]"
        >
          Your business deserves{" "}
          <span
            aria-live="polite"
            className="inline-flex min-h-[1.2em] items-center"
          >
            <GradientText>
              {displayedWord}
              <span className="animate-pulse text-[#F0F0F8]">|</span>
            </GradientText>
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[#9898B0] md:text-lg"
        >
          We create beautiful, scannable QR menus and catalogs for businesses
          worldwide. You focus on serving your customers — we handle the digital
          experience.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-lg bg-[#8B5CF6] hover:bg-[#7C3AED] px-6 py-3 text-sm font-semibold text-[#080810] transition-colors focus:outline-none"
          >
            Get your digital catalog — Check Pricing
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="https://menyuz-demo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/40 transition-colors focus:outline-none"
          >
            See a live demo
            <ExternalLink className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Hero card */}
        <motion.div
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="mt-16 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[#8B5CF6]/10 blur-xl" />
            <div className="relative flex items-center gap-6 rounded-2xl border border-white/[0.15] bg-white/[0.06] backdrop-blur-sm p-6 shadow-lg">
              <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-[#8B5CF6]/[0.18]">
                <QrCode className="h-10 w-10 text-[#8B5CF6]" />
              </div>
              <div className="hidden h-8 w-px bg-white/10 sm:block" />
              <div className="hidden items-center gap-3 sm:flex">
                <div className="text-left">
                  <p className="text-sm font-medium text-[#F0F0F8]">Scan &amp; Browse</p>
                  <p className="text-sm text-[#9898B0]">Instant access to your content</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <a
        href="#how-it-works"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[#52527A] hover:text-[#9898B0] transition-colors"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
