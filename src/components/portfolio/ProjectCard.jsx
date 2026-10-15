import Link from "next/link";
import { ArrowUpRight, CheckCircle2, MessageCircle, Sparkles, Utensils, Scissors, Stethoscope, Hammer, ShoppingBag, UserCheck } from "lucide-react";
import Badge from "../ui/Badge";
import { getWhatsAppUrl } from "@/lib/utils";
import { siteConfig } from "@/data/site";

const iconMap = {
  restaurant: Utensils,
  salon: Scissors,
  clinic: Stethoscope,
  contractor: Hammer,
  retail: ShoppingBag,
  consultant: UserCheck,
};

export default function ProjectCard({ project, priority = false }) {
  const Icon = iconMap[project.industryId] || Sparkles;

  const whatsappUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    `Hi! I saw the ${project.title} (${project.industry}) demonstration on your website. I want to build a similar website for my business.`
  );

  return (
    <div className="group flex flex-col justify-between rounded-2xl bg-studio-card/90 border border-studio-border/70 hover:border-studio-accent/40 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 overflow-hidden">
      <div>
        {/* Visual Preview Header */}
        <div className="relative p-6 sm:p-7 bg-gradient-to-br from-neutral-900 to-studio-card border-b border-studio-border/50">
          <div className="flex items-center justify-between mb-4">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${project.badgeClass}`}>
              <Icon className="w-3.5 h-3.5" />
              <span>{project.industry}</span>
            </span>

            {project.isConcept && (
              <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-neutral-800 text-studio-muted border border-neutral-700">
                Demo Concept
              </span>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-studio-warm group-hover:text-white transition-colors">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-studio-muted mt-2 line-clamp-2 leading-relaxed">
            {project.tagline}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 gap-2 mt-5 pt-4 border-t border-neutral-800/80 text-xs">
            {project.metrics.slice(0, 2).map((m, idx) => (
              <div key={idx} className="bg-neutral-950/60 p-2 rounded-lg border border-neutral-800/60">
                <div className="text-[10px] text-studio-muted">{m.label}</div>
                <div className="font-semibold text-studio-warm mt-0.5">{m.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7 space-y-4">
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-studio-muted mb-2.5">
              Key Features
            </h4>
            <div className="space-y-2">
              {project.highlights.slice(0, 3).map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-studio-neutral leading-relaxed">
                  <CheckCircle2 className="w-3.5 h-3.5 text-studio-accent shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer CTAs */}
      <div className="p-6 sm:p-7 pt-0 flex flex-col sm:flex-row items-center gap-3 border-t border-studio-border/40 mt-4">
        <Link
          href={`/portfolio/${project.slug}`}
          className="w-full sm:flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-studio-accent hover:bg-studio-accentHover text-white text-xs font-semibold transition-colors shadow-sm"
        >
          <span>View Case & Demo</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-studio-card hover:bg-neutral-800 border border-studio-border text-emerald-400 text-xs font-medium transition-colors"
          title="Direct enquiry for this business type"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span className="sm:hidden">Enquire on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
