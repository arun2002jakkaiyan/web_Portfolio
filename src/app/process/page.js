import Link from "next/link";
import { Search, Palette, Code, Rocket, CheckCircle2, User, Sparkles, Clock, ShieldCheck, ArrowRight, MessageCircle } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/utils";

export const metadata = {
  title: "Our 4-Step Development Process",
  description:
    "Learn how we take your small-business website from concept to live deployment in 5 to 7 days with zero stress.",
};

const phases = [
  {
    step: "01",
    phase: "Discover & Strategy",
    duration: "Day 1",
    tagline: "Clarifying your trade, customers, and core conversion objective.",
    details: [
      "Quick 15-minute WhatsApp discovery consultation",
      "Analyzing competitor websites in Coimbatore or your locality",
      "Finalizing page structure (Home, Services, Gallery, Contact)",
      "Determining direct WhatsApp pre-filled messaging strategy",
    ],
    clientChecklist: [
      "Business name, logo & high-resolution photos (if available)",
      "Services/menu list with current rates",
      "Address, opening hours & WhatsApp phone number",
    ],
    studioOutput: "Tailored site architecture brief and approved delivery schedule.",
  },
  {
    step: "02",
    phase: "Mobile-First Design",
    duration: "Day 2 - 3",
    tagline: "Crafting a bespoke visual identity matching your industry's standards.",
    details: [
      "Custom layout tailored for smartphone readability (80%+ of your visitors)",
      "Selection of typography and colors (e.g. warm amber for dining, clean cyan for medical)",
      "High-contrast call-to-action buttons for WhatsApp and direct phone calls",
      "Interactive component mockups (menu accordion, before/after gallery, doctor slots)",
    ],
    clientChecklist: [
      "Review design preview on your mobile phone",
      "Provide feedback or request minor visual tweaks",
    ],
    studioOutput: "Full design prototype ready for Next.js coding.",
  },
  {
    step: "03",
    phase: "Next.js Production Coding",
    duration: "Day 4 - 5",
    tagline: "Building clean, high-performance code with zero WordPress bloat.",
    details: [
      "Next.js App Router & Tailwind CSS implementation",
      "Image optimization for sub-second page loads on 4G networks",
      "Direct WhatsApp click-to-chat integration with encoded parameters",
      "Basic local SEO tags, OpenGraph sharing cards, and semantic HTML",
    ],
    clientChecklist: [
      "Test private staging URL on your personal smartphone",
      "Verify all phone numbers, addresses, and menu prices",
    ],
    studioOutput: "Complete, production-ready website running on private staging.",
  },
  {
    step: "04",
    phase: "Deployment & Handover",
    duration: "Day 6 - 7",
    tagline: "Launching to your live domain with complete code and asset ownership.",
    details: [
      "Connecting your custom domain name (e.g. yourbusiness.in)",
      "Configuring free edge hosting on Vercel (₹0/month lifetime tier)",
      "Submitting sitemap to Google Search Console for local indexing",
      "Handing over full repository, code files, and DNS configuration",
    ],
    clientChecklist: [
      "Provide domain registrar DNS access or update simple A/CNAME records",
      "Final approval sign-off",
    ],
    studioOutput: "Live website, Google verified, 100% asset ownership, 30 days free support.",
  },
];

export default function ProcessPage() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hi! I reviewed your 4-step process and would like to start Phase 1 for my website."
  );

  return (
    <div className="py-16 sm:py-24 bg-studio-charcoal">
      <Container size="wide">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-studio-accent font-semibold">
            Predictable Workflow
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">
            How We Build Your Website
          </h1>
          <p className="text-base sm:text-lg text-studio-muted leading-relaxed">
            Building a website shouldn&apos;t take months or require learning complex technical jargon.
            Our 4-step framework gets your business online in 5 to 7 working days.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-12 mb-20">
          {phases.map((p, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-8 sm:p-10 bg-studio-card/80 border border-studio-border/80 hover:border-studio-accent/40 transition-all shadow-xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                {/* Left */}
                <div className="lg:max-w-md space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black font-mono text-studio-accent">
                      {p.step}
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-studio-accent/10 border border-studio-accent/30 text-studio-accent font-semibold">
                      {p.duration}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {p.phase}
                  </h2>

                  <p className="text-sm text-studio-muted leading-relaxed">
                    {p.tagline}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-studio-warm">
                      Key Activities:
                    </div>
                    {p.details.map((d, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-studio-neutral">
                        <CheckCircle2 className="w-3.5 h-3.5 text-studio-accent shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Client Input vs Output */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-neutral-900/60 p-6 rounded-2xl border border-neutral-800">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-3">
                      <User className="w-4 h-4" />
                      <span>What You Provide:</span>
                    </div>
                    <ul className="space-y-2 text-xs text-studio-muted">
                      {p.clientChecklist.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-400 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-3">
                      <Sparkles className="w-4 h-4" />
                      <span>What We Deliver:</span>
                    </div>
                    <p className="text-xs text-studio-neutral leading-relaxed">
                      {p.studioOutput}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-studio-dark border border-studio-border text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-2">Ready to Start Step 01?</h3>
          <p className="text-sm text-studio-muted mb-6">
            A 10-minute message on WhatsApp is all it takes to kick off your project.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-studio-accent hover:bg-studio-accentHover text-white text-sm font-semibold transition-colors shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Start Your 15-Min Discovery</span>
          </a>
        </div>
      </Container>
    </div>
  );
}
