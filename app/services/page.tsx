import type { Metadata } from "next";
import { Check, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { WhatsAppDemo } from "@/components/WhatsAppDemo";
import { services } from "@/lib/services";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — Fintech Architecture, WhatsApp Automation, AI & Training",
  description:
    "Consulting services in Dar es Salaam, Tanzania: solution architecture and fintech engineering, WhatsApp Business API automation, custom product development, AI strategy, corporate IT training, and technology for churches and nonprofits.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    title: "Services | Justine Mahinyila — Software Consultant Tanzania",
    description:
      "Solution architecture, WhatsApp Business automation, custom products, AI implementation, and corporate training — framed around your problem, not the technology.",
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": services.map((service) => ({
    "@type": "Service",
    "@id": `${site.url}/services#${service.slug}`,
    name: service.title,
    serviceType: service.title,
    description: service.description[0],
    url: `${site.url}/services#${service.slug}`,
    provider: { "@id": `${site.url}/#business` },
    areaServed: { "@type": "Country", name: "Tanzania" },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      {/* Page header */}
      <section className="pt-36 pb-12 md:pt-44 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-brand-teal text-[11px] font-mono mb-4 block tracking-widest uppercase">
            {"// SERVICES"}
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-brand-text leading-[1.1] max-w-3xl mb-6">
            I don&apos;t sell technology. I solve the problem it&apos;s for.
          </h1>
          <p className="text-brand-text-muted text-base md:text-lg leading-relaxed max-w-2xl">
            From fintech infrastructure for banks and telecoms to WhatsApp automation for SMEs and
            mission-friendly systems for churches — every engagement below starts with what your
            organization is trying to achieve.
          </p>
        </div>
      </section>

      {/* Service sections */}
      <div className="divide-y divide-brand-border border-t border-brand-border">
        {services.map((service, i) => (
          <section
            key={service.slug}
            id={service.slug}
            className={`py-16 md:py-24 scroll-mt-24 ${i % 2 === 1 ? "bg-brand-surface/50" : ""}`}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7">
                <span className="text-brand-teal text-[11px] font-mono mb-3 block tracking-widest uppercase">
                  {`// 0${i + 1}`}
                  {service.via ? ` · VIA ${service.via.toUpperCase()}` : ""}
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-brand-text mb-3">
                  {service.title}
                </h2>
                <p className="text-brand-gold font-medium text-base md:text-lg mb-6">
                  {service.hook}
                </p>
                {service.description.map((para, j) => (
                  <p key={j} className="text-brand-text-muted leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <ButtonLink href="/contact" variant="primary">
                    Start a conversation
                  </ButtonLink>
                  <ButtonLink
                    href={whatsappLink(
                      `Hi Justine — I'd like to talk about ${service.shortTitle.toLowerCase()}.`
                    )}
                    variant="whatsapp"
                  >
                    <MessageCircle size={16} /> WhatsApp
                  </ButtonLink>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-brand-surface-alt border border-brand-border rounded-md p-6 md:p-8">
                  <h3 className="text-[10px] font-mono uppercase tracking-wider text-brand-text-muted mb-5">
                    Typical engagements
                  </h3>
                  <ul className="space-y-3">
                    {service.engagements.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-brand-text">
                        <Check size={16} className="text-brand-teal shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {service.stack && (
                    <>
                      <h3 className="text-[10px] font-mono uppercase tracking-wider text-brand-text-muted mt-8 mb-4">
                        Core stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono text-brand-teal bg-brand-teal-muted px-2 py-1 rounded-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {service.slug === "whatsapp-automation" && (
                <div className="lg:col-span-12 mt-4">
                  <h3 className="text-[10px] font-mono uppercase tracking-wider text-brand-text-muted mb-4">
                    Try it — a scripted sales flow, right here
                  </h3>
                  <WhatsAppDemo />
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      <CtaBand
        title="Not sure which of these you need?"
        text="That's normal — most projects touch more than one. Describe the problem and I'll tell you what it actually takes."
      />
    </>
  );
}
