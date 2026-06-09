import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import NowContent from "@/content/now.mdx";

export const metadata: Metadata = {
  title: "Now — What I'm Building",
  description:
    "What Justine Mahinyila is building right now: AI transaction failure detection, NexCard NFC pilot, TangazaMax marketplace testing, and personalized wedding pages for Envaita.",
  alternates: { canonical: "/now" },
  openGraph: {
    url: "/now",
    title: "Now | Justine Mahinyila",
    description: "What I'm building right now, with dates.",
  },
};

export default function NowPage() {
  return (
    <>
      <section className="pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-brand-teal text-[11px] font-mono mb-4 block tracking-widest uppercase">
            {"// NOW"}
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-brand-text leading-[1.1] max-w-3xl mb-6">
            What I&apos;m building right now.
          </h1>
          <p className="text-brand-text-muted text-base md:text-lg leading-relaxed max-w-2xl mb-4">
            A living page, in the spirit of{" "}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:text-brand-gold-light underline underline-offset-2"
            >
              /now
            </a>
            . Last updated June 2026.
          </p>
          <div className="max-w-2xl mt-10">
            <NowContent />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
