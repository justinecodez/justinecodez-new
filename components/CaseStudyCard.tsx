import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CaseStudy } from "@/lib/case-studies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group flex flex-col bg-brand-surface border-l-2 border-brand-border rounded-r-md p-6 md:p-8 transition-all duration-300 hover:border-brand-gold hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono uppercase tracking-wider text-brand-teal bg-brand-teal-muted px-2 py-1 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <ArrowUpRight
          size={18}
          className="text-brand-border-light group-hover:text-brand-gold transition-colors shrink-0"
        />
      </div>
      <h3 className="text-base font-bold text-brand-text group-hover:text-brand-gold transition-colors mb-1">
        {study.title}
      </h3>
      <p className="text-[11px] font-mono text-brand-text-muted uppercase tracking-wider mb-3">
        {study.client}
        {study.status ? ` · ${study.status}` : ""}
      </p>
      <p className="text-brand-text-muted text-sm leading-relaxed flex-grow">{study.summary}</p>
      <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
        {study.stack.slice(0, 4).map((item) => (
          <span key={item} className="text-[10px] font-mono text-brand-text-muted">
            {item}
          </span>
        ))}
      </div>
    </Link>
  );
}
