import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles, CheckCircle2, ShieldCheck, Zap, Smartphone, Utensils, Stethoscope, Scissors, Hammer } from "lucide-react";
import Container from "../layout/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/utils";

export default function Hero() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hi! I'm reaching out from your website. I want to build a website for my business."
  );

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden bg-gradient-to-b from-studio-charcoal via-studio-charcoal to-studio-dark border-b border-studio-border/50">
      {/* Background ambient decorative blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-studio-accent/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-studio-card border border-studio-border text-xs text-studio-warm shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-emerald-400">Available For Projects</span>
              <span className="text-studio-border">•</span>
              <span className="text-studio-muted">Coimbatore & Across India</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Websites That Help <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-studio-accent via-orange-400 to-amber-300">
                Small Businesses
              </span>{" "}
              Grow.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-studio-neutral/90 leading-relaxed max-w-2xl font-normal">
              High-speed, mobile-friendly websites tailored for restaurants, salons, clinics,
              contractors, and retail shops. Designed to convert visitors from Google Maps and WhatsApp
              into paying customers.
            </p>

            {/* Key benefits bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-1">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-studio-neutral">
                <CheckCircle2 className="w-4 h-4 text-studio-accent shrink-0" />
                <span>Launched in 5–7 Days</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-studio-neutral">
                <CheckCircle2 className="w-4 h-4 text-studio-accent shrink-0" />
                <span>Direct WhatsApp Inquiries</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-studio-neutral">
                <CheckCircle2 className="w-4 h-4 text-studio-accent shrink-0" />
                <span>₹0 Monthly Hosting Setup</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
              <Button
                href={whatsappUrl}
                variant="whatsapp"
                size="lg"
                icon={MessageCircle}
                iconPosition="left"
                external
              >
                Chat on WhatsApp Now
              </Button>

              <Button
                href="/portfolio"
                variant="secondary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
              >
                Explore Live Demos
              </Button>
            </div>

            {/* Outreach context note */}
            <p className="text-xs text-studio-muted flex items-center gap-1.5 pt-1">
              <span>Looking at examples for your shop or clinic?</span>
              <Link href="/industries" className="text-studio-accent hover:underline font-medium">
                Browse by industry →
              </Link>
            </p>
          </div>

          {/* Right Column: Multi-Industry Mockup Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card */}
              <div className="rounded-3xl p-5 sm:p-6 bg-gradient-to-b from-studio-card/90 to-studio-charcoal/95 border border-studio-border/80 shadow-2xl backdrop-blur-sm relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-studio-border/60">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  </div>
                  <span className="text-[11px] font-mono text-studio-muted tracking-wide">
                    Live Industry Showcase
                  </span>
                  <Badge variant="accent" size="sm">6 Demos</Badge>
                </div>

                {/* Stack of realistic mini-cards */}
                <div className="space-y-3.5 mt-5">
                  {/* Restaurant sample pill */}
                  <Link
                    href="/portfolio/the-rustic-spoon"
                    className="group block p-3.5 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-amber-500/50 transition-all hover:bg-neutral-850"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                          <Utensils className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-studio-warm group-hover:text-amber-400 transition-colors">
                            The Rustic Spoon Cafe
                          </div>
                          <div className="text-[11px] text-studio-muted">
                            Digital Menu • Table Booking on WhatsApp
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        View Demo
                      </span>
                    </div>
                  </Link>

                  {/* Clinic sample pill */}
                  <Link
                    href="/portfolio/apex-dental-care"
                    className="group block p-3.5 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-cyan-500/50 transition-all hover:bg-neutral-850"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                          <Stethoscope className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-studio-warm group-hover:text-cyan-400 transition-colors">
                            Apex Smiles Dental Care
                          </div>
                          <div className="text-[11px] text-studio-muted">
                            Doctor Timings • Instant Appointment
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        View Demo
                      </span>
                    </div>
                  </Link>

                  {/* Salon sample pill */}
                  <Link
                    href="/portfolio/aura-luxe-salon"
                    className="group block p-3.5 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-rose-500/50 transition-all hover:bg-neutral-850"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                          <Scissors className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-studio-warm group-hover:text-rose-400 transition-colors">
                            Aura Luxe Salon & Spa
                          </div>
                          <div className="text-[11px] text-studio-muted">
                            Rate Card • Bridal Packages
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                        View Demo
                      </span>
                    </div>
                  </Link>

                  {/* Contractor sample pill */}
                  <Link
                    href="/portfolio/craftbuild-contractors"
                    className="group block p-3.5 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-orange-500/50 transition-all hover:bg-neutral-850"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                          <Hammer className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-studio-warm group-hover:text-orange-400 transition-colors">
                            Craftbuild Renovations
                          </div>
                          <div className="text-[11px] text-studio-muted">
                            Completed Works • Site Survey CTA
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                        View Demo
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Bottom trust banner */}
                <div className="mt-5 pt-4 border-t border-studio-border/60 flex items-center justify-between text-xs text-studio-muted">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>0.9s Load Time</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-studio-accent" />
                    <span>100% Mobile Ready</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
