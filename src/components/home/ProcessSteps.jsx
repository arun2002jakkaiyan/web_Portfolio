import { Search, Palette, Code, Rocket, CheckCircle2, User, Sparkles } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";

const steps = [
  {
    number: "01",
    name: "Discover",
    title: "Understanding Your Trade & Goals",
    icon: Search,
    desc: "A quick 15-minute WhatsApp chat or phone call to understand your business, target customers, and key competitors in your area.",
    clientProvides: "Your logo, service/product list, business hours, and phone number.",
    weDeliver: "Project roadmap, structure blueprint, and timeline commitment (5-7 days).",
  },
  {
    number: "02",
    name: "Design",
    title: "Mobile-First Layout & Visuals",
    icon: Palette,
    desc: "We craft an attractive visual layout matching your industry—appetising for food, reassuring for medical, elegant for beauty.",
    clientProvides: "Photos of your shop, clinic, dishes, or past work (or we source authorized assets).",
    weDeliver: "Complete interactive visual prototype for your review and feedback.",
  },
  {
    number: "03",
    name: "Develop",
    title: "High-Speed Next.js Code",
    icon: Code,
    desc: "We build your website on Next.js with clean Tailwind styling, instant WhatsApp routing, and local Google SEO tags.",
    clientProvides: "Approval on the design mockup and any minor text revisions.",
    weDeliver: "A private preview link where you can test the site on your phone.",
  },
  {
    number: "04",
    name: "Deliver",
    title: "Domain Launch & Handover",
    icon: Rocket,
    desc: "We connect your custom domain (e.g. yourbusiness.in), verify Google Search Console, and test all WhatsApp links.",
    clientProvides: "Domain registrar login or assistance connecting your DNS records.",
    weDeliver: "Live website, Google Maps links verified, 100% code ownership, and support.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 sm:py-28 bg-studio-dark relative border-t border-b border-studio-border/50">
      <Container size="wide">
        <SectionHeading
          eyebrow="No Confusion, No Surprises"
          title="How We Build Your Website in 4 Clear Steps"
          subtitle="You don't need technical expertise. We guide you through each stage and handle all the coding, hosting, and domain configuration."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <div
                key={idx}
                className="relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-studio-card/70 border border-studio-border/80 hover:border-studio-accent/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black font-mono text-studio-accent">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-studio-charcoal border border-neutral-800 flex items-center justify-center text-studio-warm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="text-xs font-mono uppercase tracking-wider text-studio-accent font-semibold mb-1">
                    {step.name}
                  </div>

                  <h3 className="text-lg font-bold text-studio-warm mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-studio-muted leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="space-y-3 pt-5 border-t border-studio-border/60 text-xs">
                  <div className="bg-neutral-900/90 p-3 rounded-xl border border-neutral-800/80">
                    <div className="font-semibold text-studio-warm flex items-center gap-1.5 mb-1 text-[11px]">
                      <User className="w-3 h-3 text-studio-muted" />
                      <span>What You Provide:</span>
                    </div>
                    <p className="text-studio-muted leading-relaxed text-[11px]">
                      {step.clientProvides}
                    </p>
                  </div>

                  <div className="bg-neutral-900/90 p-3 rounded-xl border border-neutral-800/80">
                    <div className="font-semibold text-emerald-400 flex items-center gap-1.5 mb-1 text-[11px]">
                      <Sparkles className="w-3 h-3" />
                      <span>What We Deliver:</span>
                    </div>
                    <p className="text-studio-muted leading-relaxed text-[11px]">
                      {step.weDeliver}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
