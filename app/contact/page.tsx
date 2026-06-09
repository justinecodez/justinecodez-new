import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { ButtonLink } from "@/components/Button";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Start a Conversation",
  description:
    "Talk to Justine Mahinyila, solution architect and software consultant in Dar es Salaam, Tanzania. Reach out on WhatsApp, email, or the contact form to discuss fintech, WhatsApp automation, products, AI, or training.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact Justine Mahinyila — Software Consultant Tanzania",
    description:
      "Let's build something serious together. WhatsApp, email, or the form — whichever is fastest for you.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <section className="pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <span className="text-brand-teal text-[11px] font-mono mb-4 block tracking-widest uppercase">
          {"// CONTACT"}
        </span>
        <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-brand-text leading-[1.1] max-w-3xl mb-4">
          {site.tagline}
        </h1>
        <p className="text-brand-teal font-mono text-sm md:text-base italic mb-12">
          {site.taglineSw}
        </p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Direct channels */}
          <div>
            <p className="text-brand-text-muted text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              Whether it&apos;s fintech infrastructure, a WhatsApp channel, a product idea, an AI
              use case, or a training program — tell me what you&apos;re building. The fastest
              answer is usually on WhatsApp.
            </p>

            <div className="bg-brand-surface-alt border border-brand-border rounded-md p-6 md:p-8 mb-8">
              <h2 className="text-sm font-bold uppercase tracking-wider text-brand-text mb-2">
                Fastest: WhatsApp
              </h2>
              <p className="text-brand-text-muted text-sm mb-6">
                One tap, no forms. I reply personally.
              </p>
              <ButtonLink href={whatsappLink()} variant="whatsapp" className="w-full sm:w-auto">
                <MessageCircle size={16} /> Chat on WhatsApp
              </ButtonLink>
            </div>

            <div className="space-y-5">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 text-brand-text hover:text-brand-gold transition-colors group"
              >
                <div className="w-10 h-10 rounded-sm border border-brand-border flex items-center justify-center group-hover:border-brand-gold transition-colors bg-brand-surface-alt">
                  <Mail size={18} />
                </div>
                <span className="font-mono text-sm">{site.email}</span>
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-brand-text hover:text-brand-gold transition-colors group"
              >
                <div className="w-10 h-10 rounded-sm border border-brand-border flex items-center justify-center group-hover:border-brand-gold transition-colors bg-brand-surface-alt">
                  <Linkedin size={18} />
                </div>
                <span className="font-mono text-sm">linkedin.com/in/justinecodez</span>
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-brand-text hover:text-brand-gold transition-colors group"
              >
                <div className="w-10 h-10 rounded-sm border border-brand-border flex items-center justify-center group-hover:border-brand-gold transition-colors bg-brand-surface-alt">
                  <Github size={18} />
                </div>
                <span className="font-mono text-sm">github.com/justinecodez</span>
              </a>
              <div className="flex items-center gap-4 text-brand-text">
                <div className="w-10 h-10 rounded-sm border border-brand-border flex items-center justify-center bg-brand-surface-alt">
                  <MapPin size={18} />
                </div>
                <span className="font-mono text-sm">{site.location}</span>
              </div>
            </div>
          </div>

          {/* Lead form */}
          <div className="bg-brand-surface border border-brand-border rounded-md p-6 md:p-10">
            <h2 className="text-sm font-bold uppercase tracking-wider text-brand-text mb-2">
              Or leave the details here
            </h2>
            <p className="text-brand-text-muted text-sm mb-8">
              Three fields. I usually reply within a business day.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
