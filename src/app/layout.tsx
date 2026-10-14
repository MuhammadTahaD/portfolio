import type { Metadata, Viewport } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(profile.domain),
  title: { default: "Muhammad Taha Malik — Software & Automation", template: "%s — Taha Malik" },
  description: "Muhammad Taha Malik is a backend engineer and Computer Science student building practical software, workflow automations, and AI-powered experiences.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", url: profile.domain, siteName: "Taha Malik", title: "Muhammad Taha Malik — Software & Automation",
    description: "Practical software, workflow automations, and AI-powered experiences.", images: [{ url: "/social-card.png", width: 1200, height: 630, alt: "Taha Malik — Software & Automation" }],
  },
  twitter: { card: "summary_large_image", title: "Muhammad Taha Malik — Software & Automation", description: "Practical software, workflow automations, and AI-powered experiences.", images: ["/social-card.png"] },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg" },
};

export const viewport: Viewport = { themeColor: "#111210", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body><a className="skip-link" href="#main-content">Skip to content</a><SiteNav /><main id="main-content">{children}</main><SiteFooter /></body></html>;
}
