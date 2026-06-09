"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * The jc wordmark, inlined from public/logo/jc-wordmark-animated.svg.
 * Strokes use currentColor so it adapts to the surrounding text color.
 * The type-on animation plays once per session (sessionStorage flag);
 * afterwards only the cursor blinks. The blink pauses while the tab is
 * hidden, and prefers-reduced-motion disables all of it (see globals.css).
 */
export function Logo({ className }: { className?: string }) {
  const [animate, setAnimate] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("jc:logo-animated")) {
      sessionStorage.setItem("jc:logo-animated", "1");
      setAnimate(true);
    }
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <svg
      viewBox="0 0 140 110"
      className={cn("logo", animate && "logo-animate", paused && "logo-paused", className)}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round">
        <path className="logo-j" d="M34,42 V68 Q34,88 16,88" />
        <path className="logo-c" d="M92,47 A22,22 0 1 0 92,81" />
      </g>
      <circle className="logo-dot" cx="34" cy="20" r="7" fill="currentColor" />
      <rect className="logo-cursor" x="106" y="76" width="22" height="12" rx="2.5" fill="#F08C00" />
    </svg>
  );
}
