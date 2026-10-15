import { Check, MessageCircle, HelpCircle } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Accordion from "../ui/Accordion";
import { pricingPackages } from "@/data/services";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/utils";

export default function PricingPreview() {
  return (
    <section className="py-20 sm:py-28 bg-studio-charcoal relative">
      <Container size="wide">
        {/* Pricing Heading */}
        <SectionHeading
          eyebrow="Transparent & Affordable"
          title="Simple, Transparent Website Packages"
          subtitle="No hidden retainers, no surprise maintenance bills. Choose a package tailored to your business scale, or message us for a customized quote."
          align="center"
        />

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {pricingPackages.map((pkg) => {
            const whatsappUrl = getWhatsAppUrl(
              siteConfig.whatsappNumber,
              pkg.prefilledMsg
            );

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 bg-studio-card/80 border transition-all duration-300 hover:shadow-2xl ${
                  pkg.isPopular
                    ? "border-studio-accent ring-1 ring-studio-accent shadow-studio-accent/10 shadow-xl"
                    : "border-studio-border/80 hover:border-neutral-700"
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-studio-accent text-white text-xs font-bold uppercase tracking-wider shadow-md">
                    Recommended Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-studio-warm">
                      {pkg.name}
                    </h3>
                    <span className="text-xs font-mono text-studio-muted">
                      {pkg.timeline}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-studio-muted ml-2">one-time</span>
                  </div>

                  <p className="text-xs sm:text-sm text-studio-muted mb-6 leading-relaxed">
                    {pkg.tagline}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-studio-border/60 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-studio-neutral leading-relaxed">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all shadow-md ${
                      pkg.isPopular
                        ? "bg-studio-accent hover:bg-studio-accentHover text-white shadow-studio-accent/20"
                        : "bg-neutral-850 hover:bg-neutral-800 text-studio-warm border border-studio-border"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{pkg.ctaText}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto pt-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-card border border-studio-border text-xs text-studio-neutral mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-studio-accent" />
              <span>Got Questions?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-studio-warm">
              Frequently Asked Questions
            </h3>
            <p className="text-sm text-studio-muted mt-2">
              Everything you need to know about timeline, hosting, domain ownership, and WhatsApp integration.
            </p>
          </div>

          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
