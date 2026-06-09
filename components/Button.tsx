import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "secondary" | "whatsapp";
  children: ReactNode;
  className?: string;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-sm font-bold transition-all duration-300 px-6 py-3 text-[11px] uppercase tracking-wider";

const variants = {
  primary: "bg-brand-gold text-white hover:bg-brand-gold-light",
  secondary:
    "bg-transparent border border-brand-border-light text-brand-text hover:bg-brand-surface hover:border-brand-gold",
  whatsapp: "bg-[#1faa5c] text-white hover:bg-[#25c468]",
};

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className,
  ...props
}: ButtonLinkProps) {
  const classes = cn(baseStyles, variants[variant], className);
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
