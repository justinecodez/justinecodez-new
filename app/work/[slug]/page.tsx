import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Lock } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { WhatsAppDemo } from "@/components/WhatsAppDemo";
import { PipelineDiagram } from "@/components/PipelineDiagram";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { site } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.title} — Case Study`,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      url: `/work/${study.slug}`,
      title: `${study.title} | Case Study — Justine Mahinyila`,
      description: study.summary,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}

function Block({ label, paragraphs }: { label: string; paragraphs: string[] }) {
  return (
    <div className="mb-12">
      <h2 className="text-brand-teal text-[11px] font-mono tracking-widest uppercase mb-4">
        {`// ${label}`}
      </h2>
      {paragraphs.map((para, i) => (
        <p
          key={i}
          className={`leading-relaxed mb-4 ${
            para.startsWith("[TODO")
              ? "text-brand-gold text-sm font-mono bg-brand-gold-muted px-3 py-2 rounded-sm"
              : "text-brand-text-muted"
          }`}
        >
          {para}
        </p>
      ))}
    </div>
  );
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    description: study.summary,
    url: `${site.url}/work/${study.slug}`,
    author: { "@id": `${site.url}/#person` },
    keywords: study.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pt-36 pb-8 md:pt-44">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-brand-text-muted hover:text-brand-gold transition-colors mb-10"
          >
            <ArrowLeft size={14} /> All case studies
          </Link>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main content */}
            <div className="lg:col-span-8">
              <div className="flex flex-wrap gap-2 mb-5">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono uppercase tracking-wider text-brand-teal bg-brand-teal-muted px-2 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-brand-text leading-[1.1] mb-4">
                {study.title}
              </h1>
              <p className="text-brand-text-muted text-lg leading-relaxed mb-10 max-w-2xl">
                {study.summary}
              </p>

              <Block label="THE CHALLENGE" paragraphs={study.challenge} />
              <Block label="THE SOLUTION" paragraphs={study.solution} />

              {study.slug === "telecom-cvm-engine" && (
                <div className="mb-12">
                  <h2 className="text-brand-teal text-[11px] font-mono tracking-widest uppercase mb-4">
                    {"// HOW IT FLOWS"}
                  </h2>
                  <PipelineDiagram />
                </div>
              )}

              {study.slug === "mpenyo-whatsapp-sales-bot" && (
                <div className="mb-12">
                  <h2 className="text-brand-teal text-[11px] font-mono tracking-widest uppercase mb-4">
                    {"// TRY THE FLOW"}
                  </h2>
                  <p className="text-brand-text-muted leading-relaxed mb-6">
                    This is a scripted mock of the sales flow — tap through it the way a customer
                    would.
                  </p>
                  <WhatsAppDemo />
                </div>
              )}

              <Block label="THE OUTCOME" paragraphs={study.outcome} />
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="bg-brand-surface-alt border border-brand-border rounded-md p-6 md:p-8 lg:sticky lg:top-28">
                <dl className="space-y-5">
                  <div>
                    <dt className="text-[10px] font-mono uppercase tracking-wider text-brand-text-muted mb-1">
                      Client
                    </dt>
                    <dd className="text-sm font-medium text-brand-text">{study.client}</dd>
                  </div>
                  {study.role && (
                    <div>
                      <dt className="text-[10px] font-mono uppercase tracking-wider text-brand-text-muted mb-1">
                        Role
                      </dt>
                      <dd className="text-sm font-medium text-brand-text">{study.role}</dd>
                    </div>
                  )}
                  {study.status && (
                    <div>
                      <dt className="text-[10px] font-mono uppercase tracking-wider text-brand-text-muted mb-1">
                        Status
                      </dt>
                      <dd className="text-sm font-medium text-brand-text">{study.status}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-[10px] font-mono uppercase tracking-wider text-brand-text-muted mb-2">
                      Stack
                    </dt>
                    <dd className="flex flex-wrap gap-2">
                      {study.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono text-brand-teal bg-brand-teal-muted px-2 py-1 rounded-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </dd>
                  </div>
                  {study.url && (
                    <div>
                      <dt className="text-[10px] font-mono uppercase tracking-wider text-brand-text-muted mb-1">
                        Live
                      </dt>
                      <dd>
                        <a
                          href={study.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-brand-gold hover:text-brand-gold-light inline-flex items-center gap-1"
                        >
                          {study.url.replace("https://", "")} <ArrowUpRight size={14} />
                        </a>
                      </dd>
                    </div>
                  )}
                </dl>

                {study.confidential && (
                  <p className="mt-6 pt-5 border-t border-brand-border text-[11px] text-brand-text-muted leading-relaxed flex items-start gap-2">
                    <Lock size={12} className="shrink-0 mt-0.5" />
                    Internal / NDA work: details here are intentionally generalized and contain no
                    confidential figures.
                  </p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </article>

      <CtaBand
        title="Facing a similar problem?"
        whatsappMessage={`Hi Justine — I read the ${study.title} case study and I'm working on something similar.`}
      />
    </>
  );
}
