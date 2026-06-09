import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Brain,
  Building2,
  CalendarHeart,
  Church,
  GraduationCap,
  Landmark,
  MapPin,
  MessageCircle,
  Network,
  Radio,
  Rocket,
  Store,
} from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CtaBand } from "@/components/CtaBand";
import { featuredCaseStudies } from "@/lib/case-studies";
import { services } from "@/lib/services";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} | Solution Architect & Software Consultant in Tanzania`,
  description:
    "Solution architect and fintech consultant in Dar es Salaam, Tanzania. I design payment, messaging, and campaign infrastructure for banks, telecoms, and fintechs — plus WhatsApp Business automation, custom products, AI, and corporate training.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: `${site.name} | Solution Architect & Software Consultant in Tanzania`,
    description:
      "Fintech infrastructure, WhatsApp Business automation, custom products, AI, and corporate training — from Dar es Salaam, for serious builders.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const serviceIcons = [Network, Bot, Rocket, Brain, GraduationCap, Church] as const;

const segments = [
  { name: "Banks & fintechs", icon: Landmark },
  { name: "Telecoms", icon: Radio },
  { name: "SMEs & retailers", icon: Store },
  { name: "Event companies", icon: CalendarHeart },
  { name: "Churches & nonprofits", icon: Church },
  { name: "Training departments", icon: Building2 },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[128px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <span className="text-brand-teal text-[11px] font-mono mb-4 block tracking-widest uppercase">
              {"// SOLUTION ARCHITECT · DAR ES SALAAM, TANZANIA"}
            </span>

            <h1 className="font-heading text-3xl md:text-6xl font-bold leading-[1.1] tracking-tight text-brand-text mb-4">
              I turn serious business problems into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light to-brand-gold italic">
                working systems
              </span>
              .
            </h1>

            <p className="text-brand-teal font-mono text-sm md:text-base italic mb-6">
              {site.taglineSw}
            </p>

            <p className="text-sm md:text-base text-brand-text-muted max-w-[540px] leading-relaxed mb-8">
              I am <span className="text-brand-text font-medium">Justine Mahinyila</span>, a
              solution architect and software consultant in Dar es Salaam. I design the payment,
              messaging, and campaign infrastructure behind one of Tanzania&apos;s major telecom
              fintechs — and I bring the same engineering to WhatsApp automation, custom products,
              AI, and corporate training for organizations across East Africa.
            </p>

            <div className="flex items-center gap-2 text-sm font-mono text-brand-teal/80 mb-10">
              <MapPin size={16} />
              <span>Dar es Salaam, Tanzania · Working across East Africa</span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <ButtonLink href="/contact" variant="primary">
                Start a conversation <ArrowRight size={14} />
              </ButtonLink>
              <ButtonLink
                href={whatsappLink()}
                variant="whatsapp"
              >
                <MessageCircle size={16} /> WhatsApp me
              </ButtonLink>
              <ButtonLink href="/work" variant="secondary">
                See my work
              </ButtonLink>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="w-16 h-[1px] bg-brand-border-light"></div>
              <div className="text-[10px] text-brand-text-muted font-mono italic uppercase tracking-tighter">
                Fintech. WhatsApp. Products. AI. Training.
              </div>
            </div>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-4 relative mt-12 lg:mt-0">
            <div className="aspect-[3/4] border border-brand-border/50 bg-brand-surface relative overflow-hidden group shadow-xl">
              <picture>
                <source srcSet="/justine.webp" type="image/webp" />
                <img
                  src="/justine.jpg"
                  alt="Justine Peterson Mahinyila, solution architect in Dar es Salaam, Tanzania"
                  className="w-full h-full object-cover grayscale-[20%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  loading="eager"
                  width={800}
                  height={1067}
                />
              </picture>
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none mix-blend-overlay" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-brand-gold opacity-50 hidden xl:block" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-brand-teal opacity-50 hidden xl:block" />
          </div>
        </div>
      </section>

      {/* Services overview */}
      <Section
        id="services"
        label="// WHAT I DO"
        title="Six ways I help organizations build."
        intro="Every engagement starts with your problem, not my stack. These are the problems I solve most often."
        className="bg-brand-surface/50 border-y border-brand-border"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group bg-brand-surface-alt border-l-2 border-brand-border rounded-r-md p-6 md:p-8 transition-all duration-300 hover:border-brand-gold hover:shadow-lg flex flex-col"
              >
                <div className="w-10 h-10 rounded-sm bg-brand-bg border border-brand-border flex items-center justify-center mb-6">
                  <Icon className="text-brand-gold" size={18} />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-text mb-1 group-hover:text-brand-gold transition-colors">
                  {service.shortTitle}
                </h3>
                {service.via && (
                  <p className="text-[10px] font-mono text-brand-teal uppercase tracking-wider mb-2">
                    via {service.via}
                  </p>
                )}
                <p className="text-brand-text-muted text-xs leading-relaxed flex-grow mt-2">
                  {service.hook}
                </p>
                <span className="mt-4 text-[10px] font-mono uppercase tracking-wider text-brand-gold inline-flex items-center gap-1">
                  Learn more <ArrowRight size={12} />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Featured work */}
      <Section
        id="featured-work"
        label="// SHIPPED AND BATTLE TESTED"
        title="Selected work."
        intro="Infrastructure for a major telecom fintech, a marketplace for Tanzanian artists, and a digital identity platform — built end to end."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCaseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/work" variant="secondary">
            All case studies <ArrowRight size={14} />
          </ButtonLink>
        </div>
      </Section>

      {/* Who I work with */}
      <Section
        id="who-i-work-with"
        label="// WHO I WORK WITH"
        title="Built for organizations that mean it."
        className="bg-brand-surface/50 border-y border-brand-border"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {segments.map((segment) => (
            <div
              key={segment.name}
              className="p-5 rounded-md border border-brand-border bg-brand-surface-alt flex flex-col items-start gap-3"
            >
              <segment.icon className="text-brand-teal" size={20} />
              <span className="text-xs font-bold text-brand-text leading-snug">
                {segment.name}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
