"use client";

import { useState } from "react";
import { Utensils, Clock, MapPin, Phone, MessageCircle, Star, Calendar, Users, ChevronRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import { siteConfig } from "@/data/site";

export default function RestaurantPreview({ project }) {
  const [activeCategory, setActiveCategory] = useState("Starters & Small Bites");
  const [partySize, setPartySize] = useState("2 Guests");
  const [bookingTime, setBookingTime] = useState("Dinner (7:30 PM)");

  const reservationMsg = `Hi The Rustic Spoon! I'd like to reserve a table for ${partySize} for ${bookingTime}. Please confirm availability.`;
  const whatsappUrl = getWhatsAppUrl(siteConfig.whatsappNumber, reservationMsg);

  return (
    <div className="rounded-3xl bg-neutral-950 border border-amber-900/40 text-stone-100 overflow-hidden shadow-2xl font-sans">
      {/* Mini Demo Top Bar */}
      <div className="bg-amber-950/80 px-4 py-2 border-b border-amber-900/50 flex items-center justify-between text-xs text-amber-200">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Live Demo: Restaurant Concept</span>
        </div>
        <span className="text-[11px] font-mono text-amber-400/80">Race Course, Coimbatore</span>
      </div>

      {/* Hero Banner */}
      <div className="relative p-6 sm:p-12 bg-gradient-to-b from-stone-900 to-neutral-950 border-b border-stone-800 text-center">
        <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
          Artisanal Kitchen & Espresso Bar
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-100 mt-2 mb-3">
          The Rustic Spoon
        </h2>
        <p className="text-sm text-stone-400 max-w-xl mx-auto mb-6">
          Hand-rolled pasta, wood-fired sourdough pizzas, and slow-steeped specialty coffee in the heart of Coimbatore.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-stone-300">
          <span className="flex items-center gap-1.5 bg-stone-900/90 px-3 py-1.5 rounded-full border border-stone-800">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>11:00 AM - 11:00 PM (Daily)</span>
          </span>
          <span className="flex items-center gap-1.5 bg-stone-900/90 px-3 py-1.5 rounded-full border border-stone-800">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Race Course Road, Coimbatore</span>
          </span>
        </div>
      </div>

      {/* Interactive Reservation Widget */}
      <div className="p-6 bg-stone-900/80 border-b border-stone-800">
        <div className="max-w-2xl mx-auto bg-stone-950 p-4 sm:p-5 rounded-2xl border border-amber-500/20">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-3">
            <Calendar className="w-4 h-4" />
            <span>Quick Table Reservation via WhatsApp</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] text-stone-400 mb-1">Guests</label>
              <select
                value={partySize}
                onChange={(e) => setPartySize(e.target.value)}
                className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
              >
                <option>2 Guests</option>
                <option>4 Guests</option>
                <option>6 Guests</option>
                <option>Family (8+ Guests)</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] text-stone-400 mb-1">Time Slot</label>
              <select
                value={bookingTime}
                onChange={(e) => setBookingTime(e.target.value)}
                className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
              >
                <option>Lunch (1:00 PM)</option>
                <option>Lunch (2:00 PM)</option>
                <option>Dinner (7:30 PM)</option>
                <option>Dinner (8:45 PM)</option>
              </select>
            </div>
            <div className="flex items-end">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Reserve on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Menu Preview */}
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-serif font-bold text-amber-200">
            Artisan Food & Drinks Menu
          </h3>
          <span className="text-xs text-stone-400">Freshly Made To Order</span>
        </div>

        {/* Menu category selector */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {project.sampleData.menuCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? "bg-amber-600 text-white"
                  : "bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dishes list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.sampleData.featuredDishes.map((dish, idx) => {
            const dishOrderMsg = `Hi The Rustic Spoon! I'd like to order takeaway for: ${dish.name} (${dish.price}).`;
            const dishUrl = getWhatsAppUrl(siteConfig.whatsappNumber, dishOrderMsg);

            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-semibold text-sm text-stone-100">{dish.name}</span>
                    <span className="font-bold text-amber-400 text-sm">{dish.price}</span>
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed mb-3">
                    {dish.desc}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-stone-800 text-[11px]">
                  <span className="text-amber-500/80 font-mono text-[10px] uppercase">{dish.tag}</span>
                  <a
                    href={dishUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1"
                  >
                    <span>Order Takeaway</span>
                    <ChevronRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
