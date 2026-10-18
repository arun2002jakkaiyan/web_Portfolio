"use client";

import Link from "next/link";
import { X, MessageCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/utils";

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  const whatsappUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hi! I would like to build a website for my business. Can we discuss?"
  );

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-studio-charcoal border-l border-studio-border p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-studio-border">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center gap-2.5 font-bold text-lg text-studio-warm"
            >
              <span className="w-8 h-8 rounded-lg bg-studio-accent flex items-center justify-center text-white font-black text-sm">
                GT
              </span>
              <span>Genvo technologiees</span>
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-studio-muted hover:text-studio-warm hover:bg-neutral-800 focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <nav className="mt-6 flex flex-col gap-1">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-studio-neutral hover:text-white hover:bg-studio-card transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-studio-muted" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="pt-6 border-t border-studio-border space-y-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-studio-whatsapp hover:bg-studio-whatsappHover text-white font-medium text-sm transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-studio-card hover:bg-neutral-800 text-studio-warm border border-studio-border text-sm font-medium transition-colors"
          >
            <span>Request a Custom Quote</span>
          </Link>
          <p className="text-center text-xs text-studio-muted pt-2">
            Based in Tirupur, Tamil Nadu
          </p>
        </div>
      </div>
    </div>
  );
}
