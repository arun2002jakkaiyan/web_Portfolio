"use client";

import { UserCheck, Award, MessageCircle, ArrowRight, ShieldCheck, Calendar } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import { siteConfig } from "@/data/site";

export default function ConsultantPreview({ project }) {
  const strategyMsg = "Hi Stratos Advisory! I would like to schedule a 30-minute initial strategy consultation for my business.";
  const whatsappUrl = getWhatsAppUrl(siteConfig.whatsappNumber, strategyMsg);

  return (
    <div className="rounded-3xl bg-neutral-950 border border-indigo-900/40 text-stone-100 overflow-hidden shadow-2xl font-sans">
      {/* Top Demo Bar */}
      <div className="bg-indigo-950/80 px-4 py-2 border-b border-indigo-900/50 flex items-center justify-between text-xs text-indigo-200">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
          <span>Live Demo: Executive Consultant Concept</span>
        </div>
        <span className="text-[11px] font-mono text-indigo-400/80">Coimbatore & Pan-India</span>
      </div>

      {/* Hero Banner */}
      <div className="relative p-6 sm:p-12 bg-gradient-to-b from-neutral-900 via-indigo-950/20 to-neutral-950 border-b border-indigo-900/30 text-center">
        <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
          Strategic Advisory For Growth-Stage SMEs
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2 mb-3">
          Stratos Advisory & Growth Partners
        </h2>
        <p className="text-sm text-stone-300 max-w-xl mx-auto mb-6">
          Institutional-grade financial modeling, operations scalability, and market expansion advisory for manufacturers and family businesses.
        </p>
        <div className="inline-flex items-center gap-2 bg-neutral-900 px-4 py-2 rounded-full border border-neutral-800 text-xs text-indigo-300">
          <Award className="w-4 h-4 text-indigo-400" />
          <span>Led by {project.sampleData.founder}</span>
        </div>
      </div>

      {/* Advisory Pillars */}
      <div className="p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white mb-4">
          Core Advisory Practice Areas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {project.sampleData.pillars.map((pil, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-indigo-400">Pillar 0{idx + 1}</span>
                <h4 className="font-bold text-white text-sm mt-1 mb-2">{pil.title}</h4>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {pil.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule Strategy Session CTA */}
        <div className="p-6 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-indigo-300">Confidential Discovery:</div>
            <div className="text-base font-bold text-white">Schedule 30-Minute Advisory Consultation</div>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-studio-whatsapp hover:bg-studio-whatsappHover text-white text-xs font-semibold transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
