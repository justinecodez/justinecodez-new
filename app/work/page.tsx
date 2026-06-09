import type { Metadata } from "next";
import { WorkGrid } from "@/components/WorkGrid";
import { CtaBand } from "@/components/CtaBand";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Work — Case Studies in Fintech, WhatsApp, Marketplaces & AI",
  description:
    "Case studies from a solution architect in Tanzania: a Kafka campaign engine powering 42+ campaign types for a telecom fintech, WhatsApp sales automation, a print-on-demand marketplace, digital business cards, and more.",
  alternates: { canonical: "/work" },
  openGraph: {
    url: "/work",
    title: "Work | Justine Mahinyila — Case Studies",
    description:
      "Fintech infrastructure, WhatsApp automation, marketplaces, event tech, faith tech, and applied AI — challenge, solution, stack, outcome.",
  },
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-36 pb-12 md:pt-44 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-brand-teal text-[11px] font-mono mb-4 block tracking-widest uppercase">
            {"// WORK"}
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-brand-text leading-[1.1] max-w-3xl mb-6">
            Systems I&apos;ve designed, built, and shipped.
          </h1>
          <p className="text-brand-text-muted text-base md:text-lg leading-relaxed max-w-2xl">
            Each case study follows the same honest structure: the challenge, the solution, the
            stack, and the outcome. Work under NDA is described in general terms — no confidential
            figures, no invented ones.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <WorkGrid studies={caseStudies} />
        </div>
      </section>

      <CtaBand
        title="Want something like one of these?"
        text="Tell me which case study looks closest to your problem and where yours differs — that's the fastest way to a useful first conversation."
      />
    </>
  );
}
