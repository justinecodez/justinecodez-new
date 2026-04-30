import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "../lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "bg-brand-surface border-l-2 border-brand-border rounded-r-md rounded-l-none p-6 md:p-8 transition-all duration-300 hover:border-brand-gold group",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
