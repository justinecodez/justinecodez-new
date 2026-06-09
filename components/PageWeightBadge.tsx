"use client";

import { useEffect, useState } from "react";

/**
 * Honest page-weight badge: sums transferSize from the Resource Timing API
 * in the visitor's own browser. No JS = static "no trackers" text only.
 */
export function PageWeightBadge() {
  const [kb, setKb] = useState<number | null>(null);

  useEffect(() => {
    function measure() {
      const nav = performance.getEntriesByType("navigation")[0] as
        | PerformanceNavigationTiming
        | undefined;
      const resources = performance.getEntriesByType(
        "resource"
      ) as PerformanceResourceTiming[];
      const bytes =
        (nav?.transferSize ?? 0) +
        resources.reduce((sum, entry) => sum + (entry.transferSize ?? 0), 0);
      if (bytes > 0) setKb(Math.round(bytes / 1024));
    }
    if (document.readyState === "complete") {
      measure();
    } else {
      window.addEventListener("load", () => setTimeout(measure, 50), { once: true });
    }
  }, []);

  return (
    <span className="text-[10px] font-mono text-brand-text-muted uppercase tracking-wider">
      {kb !== null ? `~${kb} kB this page · ` : ""}no trackers · no third-party scripts
    </span>
  );
}
