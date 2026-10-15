import Link from "next/link";
import { MessageCircle, Mail, Phone, ShieldCheck, Sparkles, Clock, ArrowRight } from "lucide-react";
import Container from "../layout/Container";
import Button from "../ui/Button";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/utils";

export default function FinalCTA() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hi! I'm ready to build my business website. Can we talk about timeline and pricing?"
  );

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-studio-charcoal to-studio-dark border-t border-studio-border/60">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-studio-accent/15 rounded-full blur-[160px] pointer-events-none" />

      <Container size="wide" className="relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-studio-card/95 to-neutral-900/90 border border-studio-border/80 shadow-2xl backdrop-blur-md text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-studio-accent/10 border border-studio-accent/30 text-xs font-semibold text-studio-accent mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Launch In 5 To 7 Days</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Ready to Build Your <br className="hidden sm:inline" />
            Business Website?
          </h2>

          <p className="text-base sm:text-lg text-studio-neutral leading-relaxed max-w-2xl mx-auto mb-10">
            Send a quick WhatsApp message with your business type. We will share a tailored demo and
            an exact quote within a few hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
            <Button
              href={whatsappUrl}
              variant="whatsapp"
              size="lg"
              icon={MessageCircle}
              iconPosition="left"
              external
              className="w-full sm:w-auto"
            >
              Chat on WhatsApp ({siteConfig.whatsappNumber})
            </Button>

            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              Custom Project Inquiry
            </Button>
          </div>

          {/* Trust Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-studio-border/60 text-xs text-studio-muted">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Code & Domain Ownership</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-studio-accent" />
              <span>Direct WhatsApp Developer Access</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Free Revisions Before Launch</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
