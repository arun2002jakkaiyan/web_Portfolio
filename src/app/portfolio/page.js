import Container from "@/components/layout/Container";
import ProjectFilters from "@/components/portfolio/ProjectFilters";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Portfolio & Industry Website Concepts",
  description:
    "Browse live website demonstrations engineered for restaurants, salons, clinics, civil contractors, retail boutiques, and consultants.",
};

export default function PortfolioPage() {
  return (
    <div className="py-16 sm:py-24 bg-studio-charcoal">
      <Container size="wide">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-studio-accent font-semibold">
            Demonstration Portfolio
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">
            Websites Built for Small Businesses
          </h1>
          <p className="text-base sm:text-lg text-studio-muted leading-relaxed">
            Each demonstration below represents a custom design system and conversion flow tailored to that
            specific trade. Filter by industry to preview how your website would look, feel, and function.
          </p>
          <div className="mt-4 p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs text-studio-neutral flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-studio-accent shrink-0"></span>
            <span>
              All projects are self-initiated concepts showcasing practical features (menus, bookings, catalogs)
              ready to be customized for your brand.
            </span>
          </div>
        </div>

        {/* Live Filterable Projects */}
        <ProjectFilters projects={projects} />
      </Container>
    </div>
  );
}
