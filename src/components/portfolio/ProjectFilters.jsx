"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";

const filterOptions = [
  { id: "all", label: "All Industries" },
  { id: "restaurant", label: "Restaurants & Cafes" },
  { id: "salon", label: "Salons & Beauty" },
  { id: "clinic", label: "Clinics & Healthcare" },
  { id: "contractor", label: "Contractors & Civil" },
  { id: "retail", label: "Retail & Apparel" },
  { id: "consultant", label: "Consultants & Advisory" },
];

export default function ProjectFilters({ projects }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.industryId === activeFilter);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {filterOptions.map((opt) => {
          const isActive = activeFilter === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => setActiveFilter(opt.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                isActive
                  ? "bg-studio-accent text-white shadow-md shadow-studio-accent/20"
                  : "bg-studio-card/80 text-studio-neutral border border-studio-border hover:border-neutral-700 hover:text-white"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16 p-8 rounded-2xl bg-studio-card border border-studio-border text-studio-muted">
          <p className="text-base font-semibold text-studio-warm">No projects found in this category.</p>
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className="mt-4 text-xs text-studio-accent font-semibold hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
