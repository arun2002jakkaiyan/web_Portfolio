import Link from "next/link";
import { ArrowRight, CheckCircle2, UtensilsCrossed, Sparkles, Stethoscope, Hammer, ShoppingBag, UserCheck, MessageCircle } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { industries } from "@/data/industries";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/utils";

export const metadata = {
  title: "Industries Served | Custom Websites for Local Businesses",
  description:
    "Discover how specialized websites drive revenue for restaurants, salons, clinics, civil contractors, retail boutiques, and consultants.",
};

const iconMap = {
  UtensilsCrossed,
  Sparkles,
  Stethoscope,
  Hammer,
  ShoppingBag,
  UserCheck,
};

export default function IndustriesPage() {
  return (
    <div className="py-16 sm:py-24 bg-studio-charcoal">
      <Container size="wide">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-studio-accent font-semibold">
            Industry Solutions
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">
            Websites Built for Your Specific Trade
          </h1>
          <p className="text-base sm:text-lg text-studio-muted leading-relaxed">
            A salon website has very different commercial goals from a civil contractor&apos;s site.
            We design every feature around how your specific customers search, evaluate, and contact you.
          </p>
        </div>

        {/* Industry Cards Full Breakdown */}
        <div className="space-y-12 mb-20">
          {industries.map((ind, idx) => {
            const Icon = iconMap[ind.icon] || Sparkles;
            const whatsappUrl = getWhatsAppUrl(
              siteConfig.whatsappNumber,
              `Hi! I run a ${ind.title.split(",")[0]} and would like to build a specialized website for my business.`
            );

            return (
              <div
                key={ind.id}
                className="rounded-3xl p-8 sm:p-10 bg-studio-card/80 border border-studio-border/80 hover:border-studio-accent/40 transition-all shadow-xl"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                  {/* Left Column */}
                  <div className="lg:max-w-md space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-studio-accent">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${ind.badgeColor}`}>
                        Vertical 0{idx + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      {ind.title}
                    </h2>

                    <p className="text-sm text-studio-muted leading-relaxed">
                      {ind.tagline}
                    </p>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <Link
                        href={`/portfolio/${ind.slug}`}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-studio-accent hover:bg-studio-accentHover text-white text-xs font-semibold transition-colors shadow-md"
                      >
                        <span>View {ind.sampleProjectTitle} Demo</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-studio-card hover:bg-neutral-800 text-emerald-400 border border-studio-border text-xs font-semibold transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Discuss This Industry</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Challenges vs Solutions */}
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-neutral-900/60 p-6 rounded-2xl border border-neutral-800">
                    {/* Common Challenges */}
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold mb-3">
                        Common Problems You Face
                      </h3>
                      <ul className="space-y-2.5 text-xs text-studio-muted">
                        {ind.challenges.map((c, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-rose-500 font-bold shrink-0">✕</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* How The Website Solves It */}
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-3">
                        How Our Website Fixes It
                      </h3>
                      <ul className="space-y-2.5 text-xs text-studio-neutral">
                        {ind.solutions.map((s, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
