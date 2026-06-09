import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Rss } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing — Engineering Notes from Production",
  description:
    "Technical write-ups from real systems: fintech infrastructure, Kafka pipelines, WhatsApp automation, and the bugs in between.",
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "/blog",
    title: "Writing | Justine Mahinyila",
    description: "Engineering notes from production systems in Tanzania.",
  },
};

export default function BlogPage() {
  return (
    <>
      <section className="pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-brand-teal text-[11px] font-mono mb-4 block tracking-widest uppercase">
            {"// WRITING"}
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-brand-text leading-[1.1] max-w-3xl mb-6">
            Engineering notes from production.
          </h1>
          <p className="text-brand-text-muted text-base md:text-lg leading-relaxed max-w-2xl mb-4">
            War stories and write-ups from real systems — no listicles, no thought leadership.
          </p>
          <a
            href="/feed.xml"
            className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-brand-text-muted hover:text-brand-gold transition-colors mb-12"
          >
            <Rss size={14} /> RSS feed
          </a>

          <div className="space-y-6 max-w-3xl">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-brand-surface border-l-2 border-brand-border rounded-r-md p-6 md:p-8 hover:border-brand-gold hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <time dateTime={post.date} className="text-[11px] font-mono text-brand-text-muted">
                    {post.date}
                  </time>
                  {post.draft && (
                    <span className="text-[10px] font-mono uppercase tracking-wider text-brand-gold bg-brand-gold-muted px-2 py-0.5 rounded-sm">
                      Working draft
                    </span>
                  )}
                </div>
                <h2 className="text-lg font-bold text-brand-text group-hover:text-brand-gold transition-colors mb-2 flex items-start gap-2">
                  {post.title}
                  <ArrowUpRight size={16} className="shrink-0 mt-1 opacity-40" />
                </h2>
                <p className="text-sm text-brand-text-muted leading-relaxed">{post.description}</p>
                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono text-brand-teal">
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
