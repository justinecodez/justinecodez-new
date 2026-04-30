import { ButtonHTMLAttributes, ReactNode, AnchorHTMLAttributes } from "react";
import { cn } from "../lib/utils";

type BaseProps = {
  variant?: "primary" | "secondary" | "outline";
  children: ReactNode;
  className?: string;
};

type ButtonAsButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { asAnchor?: false };
type ButtonAsAnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { asAnchor: true };

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export function Button({ 
  variant = "primary", 
  children, 
  className, 
  asAnchor, 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-sm font-bold transition-all duration-300 px-6 py-3 text-[11px] uppercase tracking-wider";
  
  const variants = {
    primary: "bg-brand-gold text-white hover:bg-brand-gold-light hover:text-white",
    secondary: "bg-transparent border border-brand-border-light text-brand-text hover:bg-brand-surface hover:border-brand-border-light",
    outline: "bg-transparent border border-brand-border-light text-brand-text hover:bg-brand-surface hover:text-brand-text",
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (asAnchor) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
