"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { QrCode, Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features",     href: "#features"     },
  { label: "Pricing",      href: "#pricing"       },
];

export function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300",
          scrolled
            ? "backdrop-blur-xl bg-[#080810]/80 border-b border-white/[0.08]"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 focus:outline-none">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8B5CF6]">
              <QrCode className="h-4 w-4 text-[#080810]" />
            </div>
            <span className="text-base font-semibold text-[#F0F0F8]">Menyuz</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#9898B0] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="https://wa.me/96178830254"
              className="hidden md:inline-flex items-center gap-1.5 rounded-lg bg-[#8B5CF6] hover:bg-[#7C3AED] px-4 py-2 text-sm font-semibold text-[#080810] transition-colors focus:outline-none"
            >
              Get started
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <button
              aria-label="Toggle menu"
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg text-[#9898B0] hover:text-white focus:outline-none"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-[#080810]/95 backdrop-blur-xl pt-16">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/[0.06] px-6 py-5 text-xl font-medium text-[#9898B0] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pt-6">
            <Link
              href="https://wa.me/96178830254"
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#8B5CF6] hover:bg-[#7C3AED] px-4 py-3 text-base font-semibold text-[#080810] transition-colors focus:outline-none"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
