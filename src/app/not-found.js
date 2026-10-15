import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-36 bg-studio-charcoal text-center">
      <Container size="narrow">
        <div className="max-w-md mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-studio-accent/10 border border-studio-accent/30 text-xs font-mono text-studio-accent">
            <span>Error 404</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Page Not Found
          </h1>

          <p className="text-sm sm:text-base text-studio-muted leading-relaxed">
            The page you are looking for might have moved, or the link may be outdated.
            Return to the homepage or explore our industry demonstrations below.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Button href="/" variant="primary" size="md" icon={Home} iconPosition="left">
              Return Home
            </Button>
            <Button href="/portfolio" variant="secondary" size="md">
              View Portfolio Demos
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
