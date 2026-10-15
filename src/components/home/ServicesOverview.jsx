import Link from "next/link";
import {
  Globe,
  Briefcase,
  Rocket,
  RefreshCw,
  Smartphone,
  Search,
  Check,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/utils";

const iconMap = {
  Globe: Globe,
  Briefcase: Briefcase,
  Rocket: Rocket,
  RefreshCw: RefreshCw,
  Smartphone: Smartphone,
  Search: Search,
};

export default function ServicesOverview() {
  return (
    <section className="py-20 sm:py-28 bg-studio-charcoal relative">
      <Container size="wide">
        <SectionHeading
          eyebrow="Everything Your Business Needs"
          title="Website Services Built for Local Conversion"
          subtitle="No unnecessary complexity or bloated subscriptions. We build fast, mobile-friendly websites designed to drive phone calls, store visits, and WhatsApp inquiries."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Globe;
            const whatsappUrl = getWhatsAppUrl(
              siteConfig.whatsappNumber,
              `Hi! I would like to inquire about ${service.title} for my business.`
            );

            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between rounded-2xl p-7 bg-studio-card/80 border border-studio-border/70 hover:border-studio-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-studio-accent/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-studio-accent/10 border border-studio-accent/25 flex items-center justify-center text-studio-accent group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-studio-muted uppercase tracking-wider">
                      Turnaround 5–7d
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-studio-warm mb-3 group-hover:text-studio-accent transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-studio-muted leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-studio-neutral">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-studio-border/60 flex items-center justify-between">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire on WhatsApp</span>
                  </a>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-xs text-studio-muted hover:text-studio-warm transition-colors"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-neutral-900 to-studio-card border border-studio-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-studio-warm">
              Have an existing slow WordPress or Wix website?
            </h4>
            <p className="text-sm text-studio-muted mt-1">
              We can modernize your site into an ultra-fast Next.js setup while keeping your existing domain.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-studio-card hover:bg-neutral-800 text-studio-warm border border-studio-border text-sm font-semibold transition-colors"
          >
            Request Free Website Review →
          </Link>
        </div>
      </Container>
    </section>
  );
}
