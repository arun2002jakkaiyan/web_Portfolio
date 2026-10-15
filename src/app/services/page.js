import Link from "next/link";
import { Check, MessageCircle, ArrowRight, Globe, Briefcase, Rocket, RefreshCw, Smartphone, Search } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { services, pricingPackages } from "@/data/services";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/utils";

export const metadata = {
  title: "Website Services & Packages",
  description:
    "Explore our complete range of small-business website development services, landing pages, and redesigns with transparent pricing.",
};

const iconMap = {
  Globe,
  Briefcase,
  Rocket,
  RefreshCw,
  Smartphone,
  Search,
};

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24 bg-studio-charcoal">
      <Container size="wide">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-studio-accent font-semibold">
            Services & Pricing
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">
            Professional Web Development Services
          </h1>
          <p className="text-base sm:text-lg text-studio-muted leading-relaxed">
            Every website is custom engineered to address the distinct business objectives of your trade.
            Fast loading, clean typography, mobile responsiveness, and zero ongoing maintenance headaches.
          </p>
        </div>

        {/* Detailed Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Globe;
            const whatsappUrl = getWhatsAppUrl(
              siteConfig.whatsappNumber,
              `Hi! I'm interested in ${service.title} for my business in Coimbatore.`
            );

            return (
              <div
                key={service.id}
                className="flex flex-col justify-between rounded-3xl p-8 bg-studio-card/80 border border-studio-border/80 hover:border-studio-accent/40 transition-all hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-studio-accent/10 border border-studio-accent/25 flex items-center justify-center text-studio-accent">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-studio-muted">
                      Full Delivery
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-studio-warm mb-3">
                    {service.title}
                  </h2>

                  <p className="text-sm text-studio-muted leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-studio-warm">
                      What&apos;s Included:
                    </div>
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-studio-neutral">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-studio-muted mb-6">
                    <span className="font-semibold text-studio-warm">Ideal For: </span>
                    {service.idealFor}
                  </div>
                </div>

                <div className="pt-6 border-t border-studio-border/60 flex items-center justify-between">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire About This Service</span>
                  </a>

                  <Link
                    href="/contact"
                    className="text-xs text-studio-muted hover:text-studio-warm flex items-center gap-1"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Packages Breakdown */}
        <div className="mb-20">
          <SectionHeading
            eyebrow="Upfront Packages"
            title="Transparent Project Pricing"
            subtitle="Choose a package that matches your immediate business phase. Upgrade or add custom features anytime."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPackages.map((pkg) => {
              const whatsappUrl = getWhatsAppUrl(
                siteConfig.whatsappNumber,
                pkg.prefilledMsg
              );

              return (
                <div
                  key={pkg.id}
                  className={`flex flex-col justify-between rounded-3xl p-8 bg-studio-card/90 border transition-all ${
                    pkg.isPopular
                      ? "border-studio-accent ring-1 ring-studio-accent shadow-xl"
                      : "border-studio-border/80"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-studio-warm">{pkg.name}</h3>
                      <span className="text-xs font-mono text-studio-muted">{pkg.timeline}</span>
                    </div>

                    <div className="mb-4">
                      <span className="text-4xl font-extrabold text-white">{pkg.price}</span>
                      <span className="text-xs text-studio-muted ml-2">one-time</span>
                    </div>

                    <p className="text-xs text-studio-muted mb-6 leading-relaxed">
                      {pkg.tagline}
                    </p>

                    <div className="space-y-3 pt-6 border-t border-studio-border/60 mb-8">
                      {pkg.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-studio-neutral">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold transition-all ${
                      pkg.isPopular
                        ? "bg-studio-accent hover:bg-studio-accentHover text-white shadow-md"
                        : "bg-neutral-850 hover:bg-neutral-800 text-studio-warm border border-studio-border"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{pkg.ctaText}</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Custom Quote Help */}
        <div className="p-8 sm:p-12 rounded-3xl bg-studio-dark border border-studio-border text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-2">Need a Custom Scope or Multi-Location Site?</h3>
          <p className="text-sm text-studio-muted mb-6">
            We can tailor a specific combination of landing pages, multi-branch listings, or digital catalogs.
          </p>
          <Button href="/contact" variant="primary" size="md" icon={ArrowRight} iconPosition="right">
            Discuss Your Custom Requirements
          </Button>
        </div>
      </Container>
    </div>
  );
}
