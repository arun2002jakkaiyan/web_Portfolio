import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../portfolio/ProjectCard";
import Button from "../ui/Button";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  // Show 4 flagship projects on homepage
  const featured = projects.slice(0, 4);

  return (
    <section className="py-20 sm:py-28 bg-studio-dark relative border-t border-b border-studio-border/50">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="Crafted For Results"
            title="Industry Website Demonstrations"
            subtitle="Explore functional concepts engineered to solve real business challenges—from WhatsApp menus for cafes to patient appointment funnels for clinics."
            align="left"
            className="mb-0 max-w-2xl"
          />

          <Button
            href="/portfolio"
            variant="secondary"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
            className="shrink-0"
          >
            Explore All 6 Concepts
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* Demo transparency disclosure */}
        <div className="mt-12 text-center text-xs text-studio-muted">
          <span>* Clearly labelled self-initiated concepts to showcase technical architecture and layout possibilities for Coimbatore small businesses.</span>
        </div>
      </Container>
    </section>
  );
}
