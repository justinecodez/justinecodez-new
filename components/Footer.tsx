import Link from "next/link";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { PageWeightBadge } from "@/components/PageWeightBadge";
import { Wordmark } from "@/components/Wordmark";
import { site, whatsappLink } from "@/lib/site";

const footerLinks = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Writing", href: "/blog" },
  { name: "Uses", href: "/uses" },
  { name: "Now", href: "/now" },
  { name: "Changelog", href: "/changelog" },
];

export function Footer() {
  return (
    <footer className="bg-brand-surface-alt border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="inline-block bg-[#17181C] rounded-md px-3 py-2 mb-3">
              <Wordmark variant="paper" className="text-sm" />
            </div>
            <div className="text-sm font-semibold text-brand-text mb-2">{site.name}</div>
            <p className="text-xs text-brand-text-muted leading-relaxed max-w-xs">
              Solution architect and software consultant in Dar es Salaam, Tanzania. Fintech
              infrastructure, WhatsApp automation, custom products, AI, and corporate training.
            </p>
          </div>
          <div>
            <div className="text-[10px] font-mono text-brand-text-muted uppercase tracking-wider mb-4">
              Pages
            </div>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-brand-text-muted hover:text-brand-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] font-mono text-brand-text-muted uppercase tracking-wider mb-4">
              Reach me
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-text-muted hover:text-brand-gold transition-colors inline-flex items-center gap-2"
                >
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-xs text-brand-text-muted hover:text-brand-gold transition-colors inline-flex items-center gap-2"
                >
                  <Mail size={14} /> {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-text-muted hover:text-brand-gold transition-colors inline-flex items-center gap-2"
                >
                  <Linkedin size={14} /> @justinecodez
                </a>
              </li>
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-text-muted hover:text-brand-gold transition-colors inline-flex items-center gap-2"
                >
                  <Github size={14} /> @justinecodez
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-brand-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-mono text-brand-text-muted uppercase tracking-wider">
                Dar es Salaam, Tanzania
              </span>
            </span>
            <PageWeightBadge />
          </div>
          <div className="text-[10px] font-mono text-brand-text-muted">
            <span className="hidden sm:inline">curl justinecodez.com/api/me · </span>
            Built with intention. © {new Date().getFullYear()} {site.name}
          </div>
        </div>
      </div>
    </footer>
  );
}
