import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import ChangelogContent from "@/content/changelog.mdx";

export const metadata: Metadata = {
  title: "Changelog — This Site, Versioned Like Software",
  description:
    "Versioned, dated changelog of justinecodez.com — because a consultant's website should be maintained like the systems he builds.",
  alternates: { canonical: "/changelog" },
  openGraph: {
    url: "/changelog",
    title: "Changelog | Justine Mahinyila",
    description: "This site, versioned like software.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ChangelogPage() {
  return (
    <>
      <section className="pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-brand-teal text-[11px] font-mono mb-4 block tracking-widest uppercase">
            {"// CHANGELOG"}
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-brand-text leading-[1.1] max-w-3xl mb-6">
            This site, versioned like software.
          </h1>
          <p className="text-brand-text-muted text-base md:text-lg leading-relaxed max-w-2xl mb-4">
            Semver, dated entries, conventional-commit tags. If I maintain your systems this
            carefully, imagine the actual systems.
          </p>
          <div className="max-w-2xl mt-10">
            <ChangelogContent />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
