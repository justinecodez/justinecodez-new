import type { MDXComponents } from "mdx/types";
import Link from "next/link";

/* Maps MDX elements onto the site's design system. */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-brand-text leading-[1.15] mt-2 mb-6"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="font-heading text-xl md:text-2xl font-bold tracking-tight text-brand-text mt-12 mb-4"
        {...props}
      />
    ),
    h3: (props) => (
      <h3 className="text-base font-bold text-brand-text mt-8 mb-3" {...props} />
    ),
    p: (props) => <p className="text-brand-text-muted leading-relaxed mb-4" {...props} />,
    ul: (props) => (
      <ul className="list-disc pl-5 space-y-2 text-brand-text-muted mb-6" {...props} />
    ),
    ol: (props) => (
      <ol className="list-decimal pl-5 space-y-2 text-brand-text-muted mb-6" {...props} />
    ),
    li: (props) => <li className="leading-relaxed" {...props} />,
    a: ({ href = "", ...props }) =>
      href.startsWith("/") ? (
        <Link
          href={href}
          className="text-brand-gold hover:text-brand-gold-light underline underline-offset-2"
          {...props}
        />
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-gold hover:text-brand-gold-light underline underline-offset-2"
          {...props}
        />
      ),
    blockquote: (props) => (
      <blockquote
        className="border-l-2 border-brand-gold pl-4 italic text-brand-text-muted my-6"
        {...props}
      />
    ),
    hr: () => <hr className="border-brand-border my-10" />,
    code: (props) => (
      <code
        className="font-mono text-[0.85em] bg-brand-surface-alt border border-brand-border rounded-sm px-1.5 py-0.5 text-brand-teal"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="font-mono text-xs md:text-sm bg-brand-surface-alt border border-brand-border rounded-md p-4 overflow-x-auto mb-6 [&_code]:bg-transparent [&_code]:border-0 [&_code]:p-0"
        {...props}
      />
    ),
    strong: (props) => <strong className="text-brand-text font-semibold" {...props} />,
    ...components,
  };
}
