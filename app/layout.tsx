import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://menyuz.vercel.app";
const siteTitle = "Menyuz — Digital QR Menus & Catalogs for Businesses";
const siteDescription =
  "Create beautiful, scannable QR menus and digital catalogs for restaurants, cafes, retail stores, and any business worldwide. Starter plan free — upgrade as you grow.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "QR menu",
    "digital menu",
    "QR code menu",
    "digital catalog",
    "online menu for restaurant",
    "online menu for cafe",
    "contactless menu",
    "digital menu for retail",
    "QR menu builder",
    "scannable menu",
    "multi-location menu",
    "menu management software",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Menyuz",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Menyuz — Digital QR Menus & Catalogs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png",  media: "(prefers-color-scheme: dark)"  },
      { url: "/icon.svg",             type: "image/svg+xml"                   },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
