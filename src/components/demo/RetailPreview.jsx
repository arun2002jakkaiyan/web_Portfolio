"use client";

import { ShoppingBag, Clock, MapPin, MessageCircle, Tag, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import { siteConfig } from "@/data/site";

export default function RetailPreview({ project }) {
  return (
    <div className="rounded-3xl bg-neutral-950 border border-emerald-900/40 text-stone-100 overflow-hidden shadow-2xl font-sans">
      {/* Top Demo Bar */}
      <div className="bg-emerald-950/80 px-4 py-2 border-b border-emerald-900/50 flex items-center justify-between text-xs text-emerald-200">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Live Demo: Boutique Retail Concept</span>
        </div>
        <span className="text-[11px] font-mono text-emerald-400/80">DB Road, Coimbatore</span>
      </div>

      {/* Hero Banner */}
      <div className="relative p-6 sm:p-12 bg-gradient-to-b from-neutral-900 via-emerald-950/20 to-neutral-950 border-b border-emerald-900/30 text-center">
        <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
          Curated Contemporary Apparel & Lifestyle
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-emerald-100 mt-2 mb-3">
          Urban Threads Lifestyle
        </h2>
        <p className="text-sm text-stone-300 max-w-xl mx-auto mb-6">
          Breathable handloom linens, festive kurtas, and casual streetwear crafted for everyday elegance.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-stone-300">
          <span className="flex items-center gap-1.5 bg-neutral-900 px-3 py-1.5 rounded-full border border-neutral-800">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>{project.sampleData.hours}</span>
          </span>
          <span className="flex items-center gap-1.5 bg-neutral-900 px-3 py-1.5 rounded-full border border-neutral-800">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>{project.sampleData.location}</span>
          </span>
        </div>
      </div>

      {/* Product Catalog Grid */}
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-white">
            Current In-Store Collection
          </h3>
          <span className="text-xs text-emerald-400 font-mono">Stock Updated Today</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.sampleData.collections.map((item, idx) => {
            const productMsg = `Hi Urban Threads! I saw '${item.name}' (${item.price}) on your website. Is it available in size M/L?`;
            const whatsappUrl = getWhatsAppUrl(siteConfig.whatsappNumber, productMsg);

            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between hover:border-emerald-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {item.tag}
                    </span>
                    <span className="font-bold text-white text-base">{item.price}</span>
                  </div>

                  <h4 className="font-semibold text-stone-100 text-sm mb-1">{item.name}</h4>
                  <div className="text-xs text-stone-400 mb-4">
                    Category: {item.category} • Color: {item.color}
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-neutral-800 hover:bg-emerald-600 text-stone-200 hover:text-white text-xs font-semibold transition-all border border-neutral-700 hover:border-emerald-500"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 hover:text-white" />
                  <span>Enquire Stock on WhatsApp</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
