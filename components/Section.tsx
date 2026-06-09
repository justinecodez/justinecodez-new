import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  label?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, label, title, intro, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-28 relative", className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {(label || title) && (
          <div className="mb-12 md:mb-20 max-w-3xl">
            {label && (
              <span className="text-brand-teal text-[11px] font-mono mb-4 block tracking-widest uppercase">
                {label}
              </span>
            )}
            {title && (
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-brand-text leading-[1.1]">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-6 text-brand-text-muted text-base md:text-lg leading-relaxed">
                {intro}
              </p>
            )}
          </div>
        )}
        <div className="relative z-10">{children}</div>
      </div>
    </section>
  );
}
