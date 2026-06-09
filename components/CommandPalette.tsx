"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowUpRight,
  Briefcase,
  Copy,
  FileText,
  Github,
  Home,
  Linkedin,
  Mail,
  MessageCircle,
  Search,
  User,
  Wrench,
} from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { services } from "@/lib/services";
import { site, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

type Item = {
  id: string;
  label: string;
  hint?: string;
  group: string;
  icon: React.ComponentType<{ size?: number | string; className?: string }>;
  keywords?: string;
  perform: (ctx: { push: (href: string) => void; close: () => void; copied: () => void }) => void;
};

function buildItems(): Item[] {
  const pages: Item[] = [
    { id: "page-home", label: "Home", group: "Pages", icon: Home, perform: ({ push }) => push("/") },
    { id: "page-services", label: "Services", group: "Pages", icon: Wrench, perform: ({ push }) => push("/services") },
    { id: "page-work", label: "Work / Case Studies", group: "Pages", icon: Briefcase, perform: ({ push }) => push("/work") },
    { id: "page-about", label: "About", group: "Pages", icon: User, perform: ({ push }) => push("/about") },
    { id: "page-contact", label: "Contact", group: "Pages", icon: Mail, perform: ({ push }) => push("/contact") },
    { id: "page-uses", label: "Uses — stack & tools", group: "Pages", icon: Wrench, perform: ({ push }) => push("/uses") },
    { id: "page-now", label: "Now — what I'm building", group: "Pages", icon: FileText, perform: ({ push }) => push("/now") },
    { id: "page-changelog", label: "Changelog", group: "Pages", icon: FileText, perform: ({ push }) => push("/changelog") },
    { id: "page-blog", label: "Writing — engineering notes", group: "Pages", icon: FileText, perform: ({ push }) => push("/blog") },
  ];

  const actions: Item[] = [
    {
      id: "action-copy-email",
      label: "Copy email",
      hint: site.email,
      group: "Actions",
      icon: Copy,
      keywords: "mail address",
      perform: ({ copied }) => {
        navigator.clipboard?.writeText(site.email).then(copied);
      },
    },
    {
      id: "action-whatsapp",
      label: "Open WhatsApp chat",
      group: "Actions",
      icon: MessageCircle,
      keywords: "chat message talk",
      perform: ({ close }) => {
        window.open(whatsappLink(), "_blank", "noopener,noreferrer");
        close();
      },
    },
    {
      id: "action-github",
      label: "View GitHub",
      hint: "@justinecodez",
      group: "Actions",
      icon: Github,
      keywords: "code repos",
      perform: ({ close }) => {
        window.open(site.github, "_blank", "noopener,noreferrer");
        close();
      },
    },
    {
      id: "action-linkedin",
      label: "View LinkedIn",
      hint: "@justinecodez",
      group: "Actions",
      icon: Linkedin,
      keywords: "profile network",
      perform: ({ close }) => {
        window.open(site.linkedin, "_blank", "noopener,noreferrer");
        close();
      },
    },
  ];

  const work: Item[] = caseStudies.map((study) => ({
    id: `work-${study.slug}`,
    label: study.title,
    hint: study.tags.join(" · "),
    group: "Case studies",
    icon: FileText,
    keywords: `${study.tags.join(" ")} ${study.client} ${study.stack.join(" ")}`,
    perform: ({ push }) => push(`/work/${study.slug}`),
  }));

  const serviceItems: Item[] = services.map((service) => ({
    id: `service-${service.slug}`,
    label: service.title,
    hint: service.via ? `via ${service.via}` : undefined,
    group: "Services",
    icon: Wrench,
    keywords: service.keywords.join(" "),
    perform: ({ push }) => push(`/services#${service.slug}`),
  }));

  return [...pages, ...actions, ...work, ...serviceItems];
}

/** Subsequence fuzzy match; lower score = better, null = no match. */
function fuzzyScore(query: string, target: string): number | null {
  const q = query.toLowerCase();
  const t = target.toLowerCase();
  if (!q) return 0;
  if (t.startsWith(q)) return 1;
  if (t.includes(q)) return 2;
  let qi = 0;
  let gaps = 0;
  for (let ti = 0; ti < t.length && qi < q.length; ti++) {
    if (t[ti] === q[qi]) qi++;
    else if (qi > 0) gaps++;
  }
  return qi === q.length ? 3 + gaps / 100 : null;
}

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [copiedFlash, setCopiedFlash] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const items = useMemo(buildItems, []);

  const results = useMemo(() => {
    const scored = items
      .map((item) => {
        const haystack = `${item.label} ${item.hint ?? ""} ${item.keywords ?? ""} ${item.group}`;
        const score = fuzzyScore(query.trim(), haystack);
        return score === null ? null : { item, score };
      })
      .filter((x): x is { item: Item; score: number } => x !== null)
      .sort((a, b) => a.score - b.score);
    return scored.map((s) => s.item);
  }, [items, query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
    setCopiedFlash(false);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape" && open) {
        e.preventDefault();
        close();
      }
    }
    function onOpenEvent() {
      setOpen(true);
    }
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("cmdk:open", onOpenEvent);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("cmdk:open", onOpenEvent);
    };
  }, [open, close]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active]);

  function run(item: Item) {
    item.perform({
      push: (href) => {
        close();
        router.push(href);
      },
      close,
      copied: () => {
        setCopiedFlash(true);
        setTimeout(close, 700);
      },
    });
  }

  function onInputKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter" && results[active]) {
      e.preventDefault();
      run(results[active]);
    }
  }

  if (!open) return null;

  let lastGroup = "";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <button
        className="absolute inset-0 bg-brand-text/30 backdrop-blur-sm cursor-default"
        onClick={close}
        aria-label="Close command palette"
        tabIndex={-1}
      />
      <div className="relative w-full max-w-xl bg-brand-surface border border-brand-border rounded-md shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-4 border-b border-brand-border">
          <Search size={16} className="text-brand-text-muted shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onInputKeyDown}
            placeholder="Search pages, case studies, services, actions…"
            className="w-full bg-transparent py-4 text-sm text-brand-text placeholder:text-brand-text-muted/60 focus:outline-none"
            aria-label="Search"
          />
          <kbd className="hidden sm:block text-[10px] font-mono text-brand-text-muted border border-brand-border rounded-sm px-1.5 py-0.5 shrink-0">
            esc
          </kbd>
        </div>

        <div ref={listRef} className="max-h-[50vh] overflow-y-auto py-2">
          {copiedFlash && (
            <p className="px-4 py-2 text-xs text-brand-teal font-mono" role="status">
              ✓ Email copied to clipboard
            </p>
          )}
          {results.length === 0 && (
            <p className="px-4 py-6 text-sm text-brand-text-muted text-center">
              Nothing found for “{query}”.
            </p>
          )}
          {results.map((item, index) => {
            const groupHeader =
              item.group !== lastGroup ? (
                <div
                  key={`g-${item.group}`}
                  className="px-4 pt-3 pb-1 text-[10px] font-mono uppercase tracking-wider text-brand-text-muted"
                >
                  {item.group}
                </div>
              ) : null;
            lastGroup = item.group;
            return (
              <div key={item.id}>
                {groupHeader}
                <button
                  data-index={index}
                  onClick={() => run(item)}
                  onMouseMove={() => setActive(index)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors",
                    index === active
                      ? "bg-brand-surface-alt text-brand-text"
                      : "text-brand-text-muted"
                  )}
                >
                  <item.icon size={15} className="shrink-0 text-brand-gold" />
                  <span className="flex-grow truncate">{item.label}</span>
                  {item.hint && (
                    <span className="text-[10px] font-mono text-brand-text-muted truncate max-w-[40%]">
                      {item.hint}
                    </span>
                  )}
                  <ArrowUpRight size={13} className="shrink-0 opacity-40" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="border-t border-brand-border px-4 py-2 flex items-center gap-4 text-[10px] font-mono text-brand-text-muted">
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
