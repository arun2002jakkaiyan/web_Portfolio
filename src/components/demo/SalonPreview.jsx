"use client";

import { useState } from "react";
import { Sparkles, Clock, MapPin, MessageCircle, Heart, Check, Calendar } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import { siteConfig } from "@/data/site";

export default function SalonPreview({ project }) {
  const [selectedService, setSelectedService] = useState("Keratin Smooth Treatment");
  const [preferredDate, setPreferredDate] = useState("This Weekend");

  const appointmentMsg = `Hi Aura Luxe Salon! I'd like to book an appointment for: ${selectedService} (${preferredDate}). Please let me know available slots.`;
  const whatsappUrl = getWhatsAppUrl(siteConfig.whatsappNumber, appointmentMsg);

  return (
    <div className="rounded-3xl bg-neutral-950 border border-rose-900/40 text-stone-100 overflow-hidden shadow-2xl font-sans">
      {/* Top Demo Bar */}
      <div className="bg-rose-950/80 px-4 py-2 border-b border-rose-900/50 flex items-center justify-between text-xs text-rose-200">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span>
          <span>Live Demo: Salon & Aesthetics Concept</span>
        </div>
        <span className="text-[11px] font-mono text-rose-400/80">RS Puram, Coimbatore</span>
      </div>

      {/* Hero Banner */}
      <div className="relative p-6 sm:p-12 bg-gradient-to-b from-neutral-900 via-rose-950/20 to-neutral-950 border-b border-rose-900/30 text-center">
        <span className="text-xs uppercase tracking-widest text-rose-400 font-semibold">
          Luxury Hair, Skin & Bridal Atelier
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-rose-100 mt-2 mb-3">
          Aura Luxe Salon & Spa
        </h2>
        <p className="text-sm text-stone-400 max-w-xl mx-auto mb-6">
          Premium styling, therapeutic facials, and couture bridal makeovers tailored for discerning clients in Coimbatore.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-stone-300">
          <span className="flex items-center gap-1.5 bg-neutral-900/90 px-3 py-1.5 rounded-full border border-neutral-800">
            <Clock className="w-3.5 h-3.5 text-rose-400" />
            <span>9:30 AM - 8:30 PM (Tue - Sun)</span>
          </span>
          <span className="flex items-center gap-1.5 bg-neutral-900/90 px-3 py-1.5 rounded-full border border-neutral-800">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            <span>DB Road, RS Puram, Coimbatore</span>
          </span>
        </div>
      </div>

      {/* Services & Rate Card */}
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-serif font-bold text-rose-200">
              Treatment Menu & Rate Card
            </h3>
            <p className="text-xs text-stone-400 mt-1">Transparent pricing with zero hidden salon charges</p>
          </div>
          <span className="text-xs text-rose-400 font-mono">100% Certified Stylists</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {project.sampleData.servicesList.map((service, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedService(service.name)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedService === service.name
                  ? "bg-rose-950/40 border-rose-500/60 shadow-lg"
                  : "bg-neutral-900/60 border-neutral-800 hover:border-neutral-700"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-semibold text-sm text-stone-100">{service.name}</span>
                <span className="font-bold text-rose-400 text-sm">{service.price}</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed mb-3">
                {service.desc}
              </p>
              <div className="flex items-center justify-between text-[11px] text-stone-500 pt-2 border-t border-neutral-800/80">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-rose-400" />
                  <span>Duration: {service.duration}</span>
                </span>
                <span className={`text-[10px] font-semibold ${selectedService === service.name ? "text-rose-400" : "text-stone-400"}`}>
                  {selectedService === service.name ? "Selected ✓" : "Click to select"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Appointment Action Box */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-neutral-900 to-rose-950/40 border border-rose-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-rose-300">Selected Treatment:</div>
            <div className="text-base font-bold text-white">{selectedService}</div>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-studio-whatsapp hover:bg-studio-whatsappHover text-white text-xs font-semibold transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Book on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
