"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Ported from app/brand/brand.html — looping typewriter wordmark.
// justinecodez.com -> erase -> JustineCodez.com ("Codez" amber) -> erase -> repeat
const PHASES = [
  { text: "justinecodez.com", amber: null as readonly [number, number] | null },
  { text: "JustineCodez.com", amber: [7, 12] as const }, // "Codez"
];
const AMBER = "#F08C00";

// Server render = final settled frame, so no-JS visitors, crawlers, and
// reduced-motion users all get the complete brand.
const SETTLED = { pi: 1, n: PHASES[1].text.length, idle: true };

interface WordmarkProps {
  /** "ink" (#17181C) on light surfaces, "paper" (#FAFAF8) on dark ones */
  variant?: "ink" | "paper";
  /** Stop after this many full cycles (a cycle ends when "JustineCodez.com"
   *  finishes typing) and settle on the amber wordmark. Omit to loop forever. */
  maxLoops?: number;
  /** Play only once per browser session (sessionStorage flag), then settle.
   *  Implies maxLoops 1 unless maxLoops is given. */
  sessionKey?: string;
  className?: string;
}

export function Wordmark({ variant = "ink", maxLoops, sessionKey, className }: WordmarkProps) {
  const [frame, setFrame] = useState(SETTLED);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (sessionKey && sessionStorage.getItem(sessionKey)) return;
    if (sessionKey) sessionStorage.setItem(sessionKey, "1");

    const limit = maxLoops ?? (sessionKey ? 1 : undefined);
    let pi = 0;
    let n = 0;
    let deleting = false;
    let loops = 0;
    let finished = false;
    let timer: ReturnType<typeof setTimeout>;

    setFrame({ pi: 0, n: 0, idle: false });

    function tick() {
      const len = PHASES[pi].text.length;
      let delay: number;
      if (!deleting) {
        n++;
        if (n >= len) {
          if (pi === 1) loops++;
          if (pi === 1 && limit !== undefined && loops >= limit) {
            finished = true;
            setFrame({ pi, n, idle: true });
            return;
          }
          deleting = true;
          setFrame({ pi, n, idle: true });
          delay = 1700; // admire the finished word
        } else {
          setFrame({ pi, n, idle: false });
          delay = 70 + Math.random() * 60; // human-ish keystroke timing
        }
      } else {
        n--;
        if (n <= 0) {
          deleting = false;
          pi = (pi + 1) % PHASES.length;
          setFrame({ pi, n: 0, idle: true });
          delay = 500;
        } else {
          setFrame({ pi, n, idle: false });
          delay = 38; // deleting is faster than typing
        }
      }
      timer = setTimeout(tick, delay);
    }

    // Battery courtesy: pause the loop while the tab is hidden
    function onVisibility() {
      if (finished) return;
      clearTimeout(timer);
      if (!document.hidden) timer = setTimeout(tick, 400);
    }
    document.addEventListener("visibilitychange", onVisibility);

    timer = setTimeout(tick, 500);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [maxLoops, sessionKey]);

  const phase = PHASES[frame.pi];
  const { text, amber } = phase;
  const n = frame.n;

  return (
    <Link
      href="/"
      aria-label="JustineCodez.com — home"
      className={cn(
        "jc-wordmark font-mono font-semibold whitespace-nowrap",
        variant === "paper" ? "text-[#FAFAF8]" : "text-[#17181C]",
        className
      )}
    >
      <span aria-hidden="true">
        {amber ? (
          <>
            <span>{text.slice(0, Math.min(n, amber[0]))}</span>
            {n > amber[0] && (
              <span style={{ color: AMBER }}>{text.slice(amber[0], Math.min(n, amber[1]))}</span>
            )}
            {n > amber[1] && <span>{text.slice(amber[1], n)}</span>}
          </>
        ) : (
          <span>{text.slice(0, n)}</span>
        )}
        <span className={cn("jc-cursor", frame.idle && "jc-idle")} />
      </span>
    </Link>
  );
}
