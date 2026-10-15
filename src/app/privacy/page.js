import Container from "@/components/layout/Container";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Privacy Policy & Terms",
  description: "Privacy information and client data terms for Small Business Website Studio.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-24 bg-studio-charcoal">
      <Container size="narrow">
        <div className="space-y-6 text-studio-neutral leading-relaxed">
          <span className="text-xs font-mono uppercase tracking-wider text-studio-accent font-semibold">
            Legal & Privacy
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy & Terms
          </h1>
          <p className="text-sm text-studio-muted">
            Last updated: October 2026
          </p>

          <div className="pt-6 space-y-8 text-sm">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">1. Direct Communication & Data Collection</h2>
              <p>
                {siteConfig.name} does not collect your personal information into hidden marketing databases,
                nor do we sell or share your contact numbers. When you click our WhatsApp or email contact buttons,
                communication occurs directly through those encrypted channels.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">2. Demonstration Concepts Disclosure</h2>
              <p>
                The industry projects displayed on this portfolio (including The Rustic Spoon, Aura Luxe, Apex Smiles,
                Craftbuild Contractors, Urban Threads, and Stratos Advisory) are self-initiated demonstration concepts
                engineered to showcase technical structure, layout, and UX flows for specific trades. They are not
                represented as commissioned client work.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">3. Client Asset & Code Ownership</h2>
              <p>
                Upon final project settlement, you receive 100% full ownership of your bespoke website source code,
                custom assets, and domain deployment. You are never locked into proprietary monthly licensing software.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">4. Inquiries & Contact</h2>
              <p>
                For questions regarding these terms or your project information, reach us directly at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-studio-accent hover:underline">
                  {siteConfig.email}
                </a>.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
