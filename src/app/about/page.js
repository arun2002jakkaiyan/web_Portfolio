import Link from "next/link";
import { ShieldCheck, Heart, Zap, Clock, Smartphone, MessageCircle, ArrowRight, Code } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/utils";

export const metadata = {
  title: "About Our Studio & Approach",
  description:
    "Learn about our craft-first approach to building high-converting, mobile-friendly websites for small businesses in Coimbatore and India.",
};

export default function AboutPage() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hi! I was reading your story on your website and would like to connect."
  );

  return (
    <div className="py-16 sm:py-24 bg-studio-charcoal">
      <Container size="wide">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-studio-accent font-semibold">
            Behind The Code
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">
            A Better Way for Small Businesses to Get Online
          </h1>
          <p className="text-base sm:text-lg text-studio-muted leading-relaxed">
            Most web agencies charge exorbitant fees for slow, bloated WordPress templates that look outdated
            and take three months to finish. We do the exact opposite.
          </p>
        </div>

        {/* Narrative & Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Main Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-studio-neutral leading-relaxed">
            <h2 className="text-2xl font-bold text-white">
              Why We Focus Exclusively on Small Businesses
            </h2>
            <p>
              Local businesses—the dentist around the corner on Avinashi Road, the cafe in Race Course,
              the civil contractor renovating homes in Peelamedu, or the boutique shop on DB Road—are the
              economic backbone of Coimbatore and India.
            </p>
            <p>
              Yet, when they try to build a website, they face two extremes:
            </p>
            <ul className="space-y-3 pl-4 border-l-2 border-studio-border text-sm text-studio-muted">
              <li>
                <strong className="text-studio-warm">The overpriced agency:</strong> Asking ₹50,000+ for endless
                meetings, slow turnarounds, and layers of account managers.
              </li>
              <li>
                <strong className="text-studio-warm">The DIY website builders:</strong> Clunky, slow on mobile,
                and charging ₹1,500 every single month just to keep the lights on.
              </li>
            </ul>
            <p>
              Our studio bridges this gap: you get a custom-coded, ultra-fast Next.js website delivered in
              5 to 7 days, with ₹0 monthly hosting, and direct WhatsApp contact with the developer who wrote every line.
            </p>

            <div className="pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-studio-whatsapp hover:bg-studio-whatsappHover text-white text-xs font-semibold transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message Me on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Core Principles (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-studio-card border border-studio-border">
              <div className="flex items-center gap-3 mb-2 text-studio-accent">
                <Clock className="w-5 h-5" />
                <h3 className="font-bold text-white text-base">5 to 7 Day Delivery</h3>
              </div>
              <p className="text-xs text-studio-muted leading-relaxed">
                We work with tight deadlines and focused execution. Your website goes live within days, not quarters.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-studio-card border border-studio-border">
              <div className="flex items-center gap-3 mb-2 text-emerald-400">
                <Zap className="w-5 h-5" />
                <h3 className="font-bold text-white text-base">₹0 Monthly Hosting Setup</h3>
              </div>
              <p className="text-xs text-studio-muted leading-relaxed">
                By leveraging modern static edge deployment (Vercel), we eliminate unnecessary hosting retainers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-studio-card border border-studio-border">
              <div className="flex items-center gap-3 mb-2 text-amber-400">
                <Smartphone className="w-5 h-5" />
                <h3 className="font-bold text-white text-base">100% Mobile Focused</h3>
              </div>
              <p className="text-xs text-studio-muted leading-relaxed">
                Your customers are on smartphones. We prioritize readable typography, instant WhatsApp routing, and fast load times.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-studio-card border border-studio-border">
              <div className="flex items-center gap-3 mb-2 text-indigo-400">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="font-bold text-white text-base">Honest & Transparent</h3>
              </div>
              <p className="text-xs text-studio-muted leading-relaxed">
                No fabricated client logos or exaggerated statistics. We let our live code and realistic demonstrations speak for themselves.
              </p>
            </div>
          </div>
        </div>

        {/* Location & Local Roots */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 border border-studio-border text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-wider text-studio-accent font-semibold">
            Local Presence
          </span>
          <h3 className="text-2xl font-bold text-white mt-1 mb-3">
            Based in Coimbatore, Tamil Nadu
          </h3>
          <p className="text-sm text-studio-muted leading-relaxed mb-6">
            We are proud to work with independent business owners in Coimbatore, Tirupur, Erode, Pollachi,
            and across India. Available for in-person meetings in Coimbatore or rapid virtual collaboration.
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-studio-neutral bg-neutral-950 px-4 py-2 rounded-full border border-neutral-800">
            <span>📍 Race Course / RS Puram / Peelamedu / Gandhipuram</span>
          </div>
        </div>
      </Container>
    </div>
  );
}
