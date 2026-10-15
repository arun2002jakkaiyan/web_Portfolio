"use client";

import { useState } from "react";
import { Stethoscope, Clock, MapPin, Phone, MessageCircle, ShieldCheck, UserCheck, CheckCircle2 } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import { siteConfig } from "@/data/site";

export default function ClinicPreview({ project }) {
  const [selectedDoctor, setSelectedDoctor] = useState("Dr. K. Senthil Nathan, MDS");
  const [slotTime, setSlotTime] = useState("Morning (10:30 AM)");

  const appointmentMsg = `Hi Apex Smiles Dental! I would like to book a consultation with ${selectedDoctor} for ${slotTime}.`;
  const whatsappUrl = getWhatsAppUrl(siteConfig.whatsappNumber, appointmentMsg);

  return (
    <div className="rounded-3xl bg-neutral-950 border border-cyan-900/40 text-stone-100 overflow-hidden shadow-2xl font-sans">
      {/* Top Demo Bar */}
      <div className="bg-cyan-950/80 px-4 py-2 border-b border-cyan-900/50 flex items-center justify-between text-xs text-cyan-200">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>Live Demo: Healthcare Clinic Concept</span>
        </div>
        <span className="text-[11px] font-mono text-cyan-400/80">Avinashi Road, Coimbatore</span>
      </div>

      {/* Hero Banner */}
      <div className="relative p-6 sm:p-12 bg-gradient-to-b from-neutral-900 via-cyan-950/20 to-neutral-950 border-b border-cyan-900/30 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300 font-medium mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span>Advanced Pain-Free Laser & Implant Care</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1 mb-3">
          Apex Smiles Dental & Wellness
        </h2>
        <p className="text-sm text-stone-300 max-w-xl mx-auto mb-6">
          Gentle, precise dental treatments backed by 14+ years of specialized experience and modern European technology.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-stone-300">
          <span className="flex items-center gap-1.5 bg-neutral-900 px-3 py-1.5 rounded-full border border-neutral-800">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>10:00 AM - 1:30 PM | 4:30 PM - 8:30 PM</span>
          </span>
          <span className="flex items-center gap-1.5 bg-neutral-900 px-3 py-1.5 rounded-full border border-neutral-800">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Avinashi Road, Coimbatore</span>
          </span>
        </div>
      </div>

      {/* Doctors Profiles Section */}
      <div className="p-6 sm:p-8 border-b border-neutral-800">
        <h3 className="text-lg font-bold text-white mb-4">
          Consulting Dental Specialists
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.sampleData.doctors.map((doc, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedDoctor(doc.name)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedDoctor === doc.name
                  ? "bg-cyan-950/30 border-cyan-500/60 shadow-md"
                  : "bg-neutral-900/60 border-neutral-800 hover:border-neutral-700"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-stone-100">{doc.name}</h4>
                  <p className="text-xs text-cyan-400/90">{doc.role}</p>
                  <p className="text-[11px] text-stone-500 mt-0.5">{doc.exp}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Treatments Grid */}
      <div className="p-6 sm:p-8">
        <h3 className="text-lg font-bold text-white mb-4">
          Specialised Dental Procedures
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {project.sampleData.treatments.map((tr, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="flex items-center gap-2 font-semibold text-sm text-stone-100 mb-1">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>{tr.name}</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed pl-6">
                {tr.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Appointment Action */}
        <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-cyan-300">Book Patient Slot with:</div>
            <div className="text-sm font-bold text-white">{selectedDoctor}</div>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-studio-whatsapp hover:bg-studio-whatsappHover text-white text-xs font-semibold transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Confirm Slot on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
