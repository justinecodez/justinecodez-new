import { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

interface SectionProps {
  id: string;
  label?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, label, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-32 relative", className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {(label || title) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 md:mb-24 max-w-3xl"
          >
            {label && (
              <span className="text-brand-teal text-[11px] font-mono mb-4 block tracking-widest uppercase">
                {label}
              </span>
            )}
            {title && (
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-brand-text leading-[1.1]">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </section>
  );
}
