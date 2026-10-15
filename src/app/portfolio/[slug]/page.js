import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, MessageCircle, Sparkles, Smartphone, ShieldCheck, Zap } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import RestaurantPreview from "@/components/demo/RestaurantPreview";
import SalonPreview from "@/components/demo/SalonPreview";
import ClinicPreview from "@/components/demo/ClinicPreview";
import ContractorPreview from "@/components/demo/ContractorPreview";
import RetailPreview from "@/components/demo/RetailPreview";
import ConsultantPreview from "@/components/demo/ConsultantPreview";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/utils";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} - ${project.industry} Website Case Study`,
    description: project.description,
  };
}

const previewMap = {
  restaurant: RestaurantPreview,
  salon: SalonPreview,
  clinic: ClinicPreview,
  contractor: ContractorPreview,
  retail: RetailPreview,
  consultant: ConsultantPreview,
};

export default function ProjectDetailsPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const PreviewComponent = previewMap[project.industryId] || RestaurantPreview;

  const whatsappInquiryUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    `Hi! I'm reviewing the ${project.title} (${project.industry}) demonstration on your website. I want to build a similar website for my business.`
  );

  return (
    <div className="py-12 sm:py-20 bg-studio-charcoal">
      <Container size="wide">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-semibold text-studio-muted hover:text-studio-warm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 pb-12 border-b border-studio-border/60">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${project.badgeClass}`}>
                {project.industry}
              </span>
              {project.isConcept && (
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-neutral-900 text-studio-muted border border-neutral-800">
                  Self-Initiated Concept
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-studio-neutral leading-relaxed max-w-2xl">
              {project.description}
            </p>

            <div className="pt-2 text-xs text-studio-muted italic">
              {project.conceptNote}
            </div>
          </div>

          {/* Right Action Box */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-studio-card border border-studio-border space-y-4">
            <h3 className="text-sm font-bold text-studio-warm">
              Want a similar website for your business?
            </h3>
            <p className="text-xs text-studio-muted leading-relaxed">
              We can adapt this exact layout, WhatsApp booking flow, and mobile optimization for your brand in 5–7 days.
            </p>
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-studio-whatsapp hover:bg-studio-whatsappHover text-white text-xs font-semibold transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss This Design on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-studio-card/70 border border-studio-border text-center">
              <div className="text-xs text-studio-muted mb-1">{m.label}</div>
              <div className="text-xl sm:text-2xl font-bold text-white">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Interactive Live Demo Preview Box */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-studio-accent font-semibold">
                Live Prototype Simulator
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Interactive Website Preview
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-studio-muted bg-neutral-900 px-3 py-1.5 rounded-full border border-neutral-800">
              <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Simulating mobile-first responsiveness</span>
            </div>
          </div>

          {/* The Live Interactive Preview Component */}
          <PreviewComponent project={project} />
        </div>

        {/* Case Study Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Problem */}
          <div className="p-8 rounded-3xl bg-studio-card/60 border border-studio-border space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold">
              The Challenge Solved
            </span>
            <h3 className="text-xl font-bold text-studio-warm">
              The Real-World Business Problem
            </h3>
            <p className="text-sm text-studio-muted leading-relaxed">
              {project.businessProblem}
            </p>
          </div>

          {/* Solution */}
          <div className="p-8 rounded-3xl bg-studio-card/60 border border-studio-border space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              The Design Architecture
            </span>
            <h3 className="text-xl font-bold text-studio-warm">
              Tailored Technical Solution
            </h3>
            <p className="text-sm text-studio-muted leading-relaxed">
              {project.solutionDelivered}
            </p>
          </div>
        </div>

        {/* Key Features & Services List */}
        <div className="p-8 sm:p-10 rounded-3xl bg-studio-dark border border-studio-border mb-16">
          <h3 className="text-xl font-bold text-white mb-6">
            Engineered Features & Deliverables
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.highlights.map((hl, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-studio-neutral">
                <CheckCircle2 className="w-4 h-4 text-studio-accent shrink-0 mt-0.5" />
                <span>{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-neutral-900 to-studio-card border border-studio-border text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-2">
            Ready to build a website like {project.clientName}?
          </h3>
          <p className="text-sm text-studio-muted mb-6">
            We can customise this structure with your photos, brand colors, menu/rates, and phone number in 5–7 days.
          </p>
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-studio-accent hover:bg-studio-accentHover text-white text-sm font-semibold transition-colors shadow-lg shadow-studio-accent/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Launch This For Your Business</span>
          </a>
        </div>
      </Container>
    </div>
  );
}
