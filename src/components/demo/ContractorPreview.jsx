"use client";

import { useState } from "react";
import { Hammer, MapPin, Phone, MessageCircle, Shield, CheckCircle, Wrench } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import { siteConfig } from "@/data/site";

export default function ContractorPreview({ project }) {
  const [projectType, setProjectType] = useState("Home Renovation");
  const [locality, setLocality] = useState("RS Puram, Coimbatore");

  const quoteMsg = `Hi Craftbuild Contractors! I would like to schedule a free site inspection for ${projectType} in ${locality}.`;
  const whatsappUrl = getWhatsAppUrl(siteConfig.whatsappNumber, quoteMsg);

  return (
    <div className="rounded-3xl bg-neutral-950 border border-orange-900/40 text-stone-100 overflow-hidden shadow-2xl font-sans">
      {/* Top Demo Bar */}
      <div className="bg-orange-950/80 px-4 py-2 border-b border-orange-900/50 flex items-center justify-between text-xs text-orange-200">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
          <span>Live Demo: Civil Contractor Concept</span>
        </div>
        <span className="text-[11px] font-mono text-orange-400/80">Coimbatore, Pollachi & Tirupur</span>
      </div>

      {/* Hero Banner */}
      <div className="relative p-6 sm:p-12 bg-gradient-to-b from-neutral-900 via-orange-950/20 to-neutral-950 border-b border-orange-900/30 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs text-orange-300 font-medium mb-3">
          <Shield className="w-3.5 h-3.5 text-orange-400" />
          <span>Licensed Civil Contractors • 7-Year Waterproofing Warranty</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 mb-3">
          Craftbuild Renovations & Civil Works
        </h2>
        <p className="text-sm text-stone-300 max-w-xl mx-auto mb-6">
          Premium residential remodelling, commercial office fit-outs, and terrace waterproofing executed on strict timelines.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-stone-300">
          <span className="flex items-center gap-1.5 bg-neutral-900 px-3 py-1.5 rounded-full border border-neutral-800">
            <MapPin className="w-3.5 h-3.5 text-orange-400" />
            <span>Serving: {project.sampleData.areasServed}</span>
          </span>
        </div>
      </div>

      {/* Services List */}
      <div className="p-6 sm:p-8 border-b border-neutral-800">
        <h3 className="text-lg font-bold text-white mb-4">
          Core Renovation & Waterproofing Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.sampleData.servicesList.map((srv, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-neutral-900/70 border border-neutral-800">
              <div className="flex items-center gap-2 font-bold text-sm text-stone-100 mb-1">
                <Hammer className="w-4 h-4 text-orange-400" />
                <span>{srv.name}</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed pl-6">
                {srv.scope}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Free Site Inspection Funnel */}
      <div className="p-6 sm:p-8 bg-neutral-900/40">
        <div className="max-w-2xl mx-auto bg-neutral-950 p-5 rounded-2xl border border-orange-500/30">
          <div className="flex items-center gap-2 text-xs font-bold text-orange-400 mb-4">
            <Wrench className="w-4 h-4" />
            <span>Book Free On-Site Inspection & Estimate</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[11px] text-stone-400 mb-1">Work Required</label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-orange-500"
              >
                <option>Complete Home Renovation</option>
                <option>Terrace Waterproofing</option>
                <option>Commercial Fit-Out</option>
                <option>Painting & Wall Texture</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] text-stone-400 mb-1">Your Area in Coimbatore</label>
              <input
                type="text"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                placeholder="e.g. RS Puram, Peelamedu"
                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-studio-whatsapp hover:bg-studio-whatsappHover text-white text-xs font-semibold transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Request Site Survey on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
