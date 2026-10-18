import Link from "next/link";
import { MessageCircle, Mail, MapPin, Clock, ArrowUpRight, ShieldCheck, Heart } from "lucide-react";
import Container from "./Container";
import { siteConfig } from "@/data/site";
import { industries } from "@/data/industries";
import { getWhatsAppUrl } from "@/lib/utils";

export default function Footer() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hi! I would like to enquire about building a website for my business in Tirupur."
  );

  return (
    <footer className="w-full bg-studio-dark border-t border-studio-border pt-16 pb-12 text-studio-muted">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-studio-border/60">
          {/* Col 1: Brand & Bio (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-studio-accent flex items-center justify-center text-white font-black text-sm">
                GT
              </span>
              <span className="font-bold text-lg text-studio-warm">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              Helping restaurants, clinics, salons, civil contractors, and shops build
              modern websites that turn Google Maps & WhatsApp traffic into paying customers.
            </p>
            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-studio-neutral">
                <MapPin className="w-4 h-4 text-studio-accent shrink-0" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-2 text-studio-neutral">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Typical project turnaround: 5 to 7 days</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-studio-warm">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-studio-warm transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="hover:text-studio-warm transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Industry Demos */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-studio-warm">
              Industries Served
            </h3>
            <ul className="space-y-2 text-sm">
              {industries.map((ind) => (
                <li key={ind.id}>
                  <Link
                    href={`/portfolio/${ind.slug}`}
                    className="hover:text-studio-warm transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-studio-accent/70"></span>
                    <span>{ind.title.split(",")[0]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Contact & Action */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-studio-warm">
              Direct Contact
            </h3>
            <p className="text-xs leading-relaxed">
              No middle-men or complicated ticketing. Speak directly with the developer building your site.
            </p>
            <div className="space-y-2 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-studio-whatsapp/15 border border-studio-whatsapp/30 text-studio-whatsapp hover:bg-studio-whatsapp/25 transition-colors text-xs font-semibold"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>{siteConfig.whatsappNumber}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-studio-card border border-studio-border text-studio-neutral hover:text-white hover:border-neutral-700 transition-colors text-xs"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-studio-muted">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Code Ownership</span>
            </span>
            <span>•</span>
            <span>Zero Lock-in</span>
            <span>•</span>
            <span>Built in Tirupur, Tamil Nadu</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
