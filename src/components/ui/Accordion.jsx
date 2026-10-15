"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({ items = [], allowMultiple = false }) {
  const [openIndices, setOpenIndices] = useState([0]); // Default first item open

  const toggle = (idx) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(idx) ? [] : [idx]));
    }
  };

  return (
    <div className="w-full space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div
            key={idx}
            className={cn(
              "rounded-xl border transition-all duration-200 overflow-hidden",
              isOpen
                ? "bg-studio-card/90 border-studio-accent/40 shadow-sm"
                : "bg-studio-card/40 border-studio-border/70 hover:border-neutral-700"
            )}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-studio-accent"
            >
              <span className="text-base sm:text-lg font-semibold text-studio-warm pr-4 leading-snug">
                {item.question}
              </span>
              <span
                className={cn(
                  "p-1.5 rounded-lg bg-neutral-850 border border-neutral-700/50 text-studio-muted transition-transform duration-200 shrink-0",
                  isOpen ? "rotate-180 text-studio-accent border-studio-accent/30 bg-studio-accent/10" : ""
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-6 sm:px-6 pt-0 text-sm sm:text-base text-studio-muted leading-relaxed border-t border-neutral-800/40">
                <div className="pt-3">{item.answer}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
