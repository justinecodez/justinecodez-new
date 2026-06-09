"use client";

import { useState } from "react";
import { CaseStudy, Tag, tags } from "@/lib/case-studies";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { cn } from "@/lib/utils";

/**
 * Filterable case study grid. All cards are pre-rendered at build time;
 * filtering is progressive enhancement — without JS the full list shows.
 */
export function WorkGrid({ studies }: { studies: CaseStudy[] }) {
  const [activeTag, setActiveTag] = useState<Tag | null>(null);

  const visible = activeTag ? studies.filter((s) => s.tags.includes(activeTag)) : studies;

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter case studies">
        <button
          onClick={() => setActiveTag(null)}
          className={cn(
            "text-[10px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-sm border transition-colors",
            activeTag === null
              ? "bg-brand-gold text-white border-brand-gold"
              : "border-brand-border text-brand-text-muted hover:border-brand-gold hover:text-brand-gold"
          )}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
            className={cn(
              "text-[10px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-sm border transition-colors",
              activeTag === tag
                ? "bg-brand-gold text-white border-brand-gold"
                : "border-brand-border text-brand-text-muted hover:border-brand-gold hover:text-brand-gold"
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </div>
  );
}
