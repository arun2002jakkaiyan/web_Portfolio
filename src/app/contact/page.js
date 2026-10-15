"use client";

import { useState } from "react";
import { MessageCircle, Mail, Phone, MapPin, Clock, Send, Sparkles, ShieldCheck } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/utils";

export default function ContactPage() {
  const [businessType, setBusinessType] = useState("Restaurant / Cafe");
  const [scope, setScope] = useState("Complete 5-Page Website");
  const [budget, setBudget] = useState("Business Growth (₹14,999)");
  const [location, setLocation] = useState("Coimbatore");
  const [customNotes, setCustomNotes] = useState("");

  // Construct dynamic WhatsApp message
  const inquiryMessage = `Hi! I would like to enquire about building a website for my business.

• Business Type: ${businessType}
• Scope Needed: ${scope}
• Budget Target: ${budget}
• Business Location: ${location}${customNotes ? `\n• Extra Notes: ${customNotes}` : ""}

Please let me know your availability and next steps!`;

  const whatsappUrl = getWhatsAppUrl(siteConfig.whatsappNumber, inquiryMessage);

  return (
    <div className="py-16 sm:py-24 bg-studio-charcoal">
      <Container size="wide">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-studio-accent font-semibold">
            Let&apos;s Talk
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">
            Start Your Project Enquiry
          </h1>
          <p className="text-base sm:text-lg text-studio-muted leading-relaxed">
            Select your business details below to generate an instant enquiry message.
            You will connect directly with the developer on WhatsApp with zero waiting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Interactive WhatsApp Generator (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-10 bg-studio-card/90 border border-studio-border/90 shadow-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Direct WhatsApp Project Builder</span>
            </div>

            <div className="space-y-6">
              {/* Field 1: Business Type */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-studio-warm mb-2">
                  1. What kind of business do you run?
                </label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full bg-neutral-900 border border-studio-border rounded-xl px-4 py-3 text-sm text-studio-warm focus:outline-none focus:border-studio-accent"
                >
                  <option>Restaurant / Cafe / Cloud Kitchen</option>
                  <option>Salon / Spa / Beauty Parlour</option>
                  <option>Dental / Medical Clinic</option>
                  <option>Civil Contractor / Home Renovations</option>
                  <option>Retail Store / Apparel / Boutique</option>
                  <option>Consultant / Professional Advisory</option>
                  <option>Other Small Business</option>
                </select>
              </div>

              {/* Field 2: Scope */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-studio-warm mb-2">
                  2. What size of website do you need?
                </label>
                <select
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                  className="w-full bg-neutral-900 border border-studio-border rounded-xl px-4 py-3 text-sm text-studio-warm focus:outline-none focus:border-studio-accent"
                >
                  <option>Single-Page High-Converting Landing Site</option>
                  <option>Complete 5-Page Website (Most Popular)</option>
                  <option>Extensive Multi-Page or Catalog Showcase</option>
                  <option>Redesign of an Outdated Website</option>
                </select>
              </div>

              {/* Field 3: Budget Range */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-studio-warm mb-2">
                  3. Indicative Budget Tier
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-neutral-900 border border-studio-border rounded-xl px-4 py-3 text-sm text-studio-warm focus:outline-none focus:border-studio-accent"
                >
                  <option>Starter Launch (₹7,999)</option>
                  <option>Business Growth (₹14,999)</option>
                  <option>Custom Studio (₹24,999+)</option>
                  <option>Looking for an exact quote</option>
                </select>
              </div>

              {/* Field 4: Location */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-studio-warm mb-2">
                  4. Your Business City / Area
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. RS Puram, Coimbatore / Tirupur"
                  className="w-full bg-neutral-900 border border-studio-border rounded-xl px-4 py-3 text-sm text-studio-warm focus:outline-none focus:border-studio-accent"
                />
              </div>

              {/* Field 5: Optional notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-studio-warm mb-2">
                  5. Any specific features or questions? (Optional)
                </label>
                <textarea
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  rows={3}
                  placeholder="e.g. Need online food menu, or urgent launch within 4 days..."
                  className="w-full bg-neutral-900 border border-studio-border rounded-xl px-4 py-3 text-sm text-studio-warm focus:outline-none focus:border-studio-accent resize-none"
                />
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-studio-whatsapp hover:bg-studio-whatsappHover text-white text-sm font-bold transition-all shadow-lg shadow-studio-whatsapp/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Pre-Filled Enquiry to WhatsApp</span>
                </a>
                <p className="text-[11px] text-center text-studio-muted mt-3">
                  This opens WhatsApp on your phone or computer with your details filled in. No fake forms or delayed email queues.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Cards & Reassurance (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Methods */}
            <div className="p-8 rounded-3xl bg-studio-card/80 border border-studio-border space-y-6">
              <h3 className="text-lg font-bold text-white">Direct Contact Info</h3>

              <div className="space-y-4">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-studio-muted">WhatsApp Business</div>
                    <div className="text-sm font-semibold text-studio-warm group-hover:text-emerald-400 transition-colors">
                      {siteConfig.whatsappNumber}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-studio-accent/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-studio-accent/10 border border-studio-accent/30 flex items-center justify-center text-studio-accent">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-studio-muted">Email Inbox</div>
                    <div className="text-sm font-semibold text-studio-warm group-hover:text-studio-accent transition-colors">
                      {siteConfig.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-studio-neutral">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-studio-muted">Physical Location</div>
                    <div className="text-sm font-semibold text-studio-warm">
                      {siteConfig.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-studio-neutral">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-studio-muted">Operating Hours</div>
                    <div className="text-sm font-semibold text-studio-warm">
                      Mon - Sat: 9:30 AM - 7:30 PM IST
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reassurance Notice */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 space-y-2 text-xs text-studio-muted">
              <div className="flex items-center gap-2 font-semibold text-studio-warm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Sales Pressure</span>
              </div>
              <p className="leading-relaxed">
                We believe in straightforward technical advice. We&apos;ll tell you honestly whether your business
                needs a simple landing page or a full multi-page presence.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
