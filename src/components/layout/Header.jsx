"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import Button from "../ui/Button";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const whatsappUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hi! I saw your portfolio and would like to build a website for my business."
  );

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-studio-charcoal/85 backdrop-blur-md border-b border-studio-border/70 transition-all">
        <Container size="wide">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-studio-accent to-amber-600 flex items-center justify-center text-white font-black text-base shadow-md group-hover:scale-105 transition-transform">
                SB
              </span>
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg text-studio-warm tracking-tight group-hover:text-white transition-colors">
                  Small Business Studio
                </span>
                <span className="text-[11px] font-medium text-studio-muted flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Coimbatore & Pan-India
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-studio-card/70 border border-studio-border/60 px-3 py-1.5 rounded-full">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                      isActive
                        ? "bg-studio-accent text-white shadow-sm"
                        : "text-studio-neutral hover:text-white hover:bg-neutral-800"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Quick WhatsApp</span>
              </a>

              <Button
                href="/contact"
                variant="primary"
                size="sm"
                icon={ArrowRight}
                iconPosition="right"
              >
                Start Project
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-studio-whatsapp text-white"
                aria-label="WhatsApp quick chat"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-xl bg-studio-card border border-studio-border text-studio-warm hover:bg-neutral-800 focus:outline-none"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
