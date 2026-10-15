import Link from "next/link";
import {
  UtensilsCrossed,
  Sparkles,
  Stethoscope,
  Hammer,
  ShoppingBag,
  UserCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { industries } from "@/data/industries";

const iconMap = {
  UtensilsCrossed: UtensilsCrossed,
  Sparkles: Sparkles,
  Stethoscope: Stethoscope,
  Hammer: Hammer,
  ShoppingBag: ShoppingBag,
  UserCheck: UserCheck,
};

export default function IndustriesGrid() {
  return (
    <section className="py-20 sm:py-28 bg-studio-charcoal relative">
      <Container size="wide">
        <SectionHeading
          eyebrow="Specialized Verticals"
          title="Tailored for Your Specific Trade"
          subtitle="Every trade has different customers and conversion triggers. We don't force a generic template onto a restaurant or a clinic."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((ind) => {
            const Icon = iconMap[ind.icon] || Sparkles;

            return (
              <div
                key={ind.id}
                className="group relative flex flex-col justify-between rounded-2xl p-7 bg-studio-card/60 border border-studio-border/70 hover:border-studio-accent/40 transition-all duration-300 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-studio-accent group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${ind.badgeColor}`}>
                      {ind.title.split(",")[0]}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-studio-warm mb-2 group-hover:text-white transition-colors">
                    {ind.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-studio-muted leading-relaxed mb-5">
                    {ind.tagline}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-studio-muted">
                      Essential Features:
                    </div>
                    {ind.mustHaves.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-studio-neutral">
                        <CheckCircle2 className="w-3.5 h-3.5 text-studio-accent shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-studio-border/60">
                  <Link
                    href={`/portfolio/${ind.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-studio-accent hover:text-studio-accentHover transition-colors"
                  >
                    <span>View {ind.sampleProjectTitle} Demo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
