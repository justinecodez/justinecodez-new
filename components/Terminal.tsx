"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { caseStudies } from "@/lib/case-studies";
import { me } from "@/lib/me";
import { site } from "@/lib/site";

interface Line {
  kind: "input" | "output";
  text: string;
}

const HELP = `available commands:
  help            this list
  whoami          who runs this place
  ls projects     list the projects
  cat <project>   read a project (e.g. cat nexcard)
  contact         how to reach me
  mambo           try it
  clear           clear the screen
  exit            close (or press esc)`;

function runCommand(raw: string, push: (href: string) => void): string | "CLEAR" | "EXIT" {
  const input = raw.trim().toLowerCase();
  const [cmd, ...args] = input.split(/\s+/);

  switch (cmd) {
    case "":
      return "";
    case "help":
      return HELP;
    case "whoami":
      return `${me.name}\n${me.title} — ${me.location}\nlanguages: ${me.languages.join(", ").toLowerCase()}`;
    case "ls":
      if (args[0] === "projects" || args.length === 0) {
        return caseStudies.map((c) => c.slug).join("\n");
      }
      return `ls: cannot access '${args.join(" ")}': try 'ls projects'`;
    case "cat": {
      if (!args.length) return "cat: missing operand — try 'cat nexcard'";
      const query = args.join("-");
      const study =
        caseStudies.find((c) => c.slug === query) ??
        caseStudies.find((c) => c.slug.includes(query) || c.title.toLowerCase().includes(args.join(" ")));
      if (!study) return `cat: ${args.join(" ")}: no such project — try 'ls projects'`;
      return `# ${study.title}\nclient: ${study.client}\nstatus: ${study.status ?? "n/a"}\ntags:   ${study.tags.join(", ")}\nstack:  ${study.stack.join(", ")}\n\n${study.summary}\n\n→ ${site.url}/work/${study.slug}`;
    }
    case "contact":
      setTimeout(() => push("/contact"), 900);
      return `email:    ${me.links.email}\nwhatsapp: +${site.whatsappNumber}\ngithub:   ${me.links.github}\n\ntaking you to /contact…`;
    case "mambo":
      return "poa kichizi kama ndizi 🍌\n(workflow status: vibes nominal)";
    case "sudo":
      return "nice try. this shell runs least-privilege, like everything else I ship.";
    case "clear":
      return "CLEAR";
    case "exit":
    case "quit":
      return "EXIT";
    default:
      return `${cmd}: command not found — try 'help'`;
  }
}

export function Terminal() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<Line[]>([]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      const typing =
        target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable;
      if (e.key === "~" && !typing && !open) {
        e.preventDefault();
        setOpen(true);
        setLines((prev) =>
          prev.length
            ? prev
            : [{ kind: "output", text: `justinecodez v2 — type 'help' to look around.` }]
        );
      } else if (e.key === "Escape" && open) {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [lines]);

  if (!open) return null;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const result = runCommand(value, (href) => {
      setOpen(false);
      router.push(href);
    });
    if (result === "CLEAR") {
      setLines([]);
    } else if (result === "EXIT") {
      setOpen(false);
    } else {
      setLines((prev) => [
        ...prev,
        { kind: "input", text: value },
        ...(result ? [{ kind: "output" as const, text: result }] : []),
      ]);
    }
    setValue("");
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[110] p-3 sm:p-6 pointer-events-none"
      role="dialog"
      aria-label="Terminal"
    >
      <div className="pointer-events-auto max-w-2xl mx-auto bg-[#0f172a] border border-[#1e293b] rounded-md shadow-2xl overflow-hidden font-mono text-[13px]">
        <div className="flex items-center justify-between px-4 py-2 bg-[#1e293b]/60 border-b border-[#1e293b]">
          <span className="text-slate-400 text-[11px]">guest@justinecodez:~</span>
          <button
            onClick={() => setOpen(false)}
            className="text-slate-500 hover:text-slate-300 text-[11px]"
            aria-label="Close terminal"
          >
            esc ✕
          </button>
        </div>
        <div ref={bodyRef} className="px-4 py-3 h-64 overflow-y-auto space-y-1">
          {lines.map((line, i) =>
            line.kind === "input" ? (
              <div key={i} className="text-slate-300">
                <span className="text-emerald-400">❯</span> {line.text}
              </div>
            ) : (
              <pre key={i} className="text-slate-400 whitespace-pre-wrap leading-relaxed">
                {line.text}
              </pre>
            )
          )}
        </div>
        <form onSubmit={submit} className="flex items-center gap-2 px-4 py-3 border-t border-[#1e293b]">
          <span className="text-emerald-400">❯</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="flex-grow bg-transparent text-slate-200 focus:outline-none placeholder:text-slate-600"
            placeholder="help"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            aria-label="Terminal input"
          />
        </form>
      </div>
    </div>
  );
}
