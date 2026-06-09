"use client";

import { useEffect } from "react";
import { site } from "@/lib/site";

const BANNER = String.raw`
   _           _   _                            _
  (_)_   _ ___| |_(_)_ __   ___  ___ ___   __| | ___ ____
  | | | | / __| __| | '_ \ / _ \/ __/ _ \ / _' |/ _ \_  /
  | | |_| \__ \ |_| | | | |  __/ (_| (_) | (_| |  __// /
 _/ |\__,_|___/\__|_|_| |_|\___|\___\___/ \__,_|\___/___|
|__/
`;

export function ConsoleBanner() {
  useEffect(() => {
    if (sessionStorage.getItem("jc:banner")) return;
    sessionStorage.setItem("jc:banner", "1");

    /* eslint-disable no-console */
    console.log(
      `%c${BANNER}`,
      "color:#d97706;font-family:monospace;font-size:10px;line-height:1.2;"
    );
    console.log(
      "%cYou read consoles. I build the systems behind them.",
      "color:#0f766e;font-size:13px;font-weight:bold;"
    );
    console.log(
      `%c${site.name} — Solution Architect, Dar es Salaam\n` +
        `  email   ${site.email}\n` +
        `  github  ${site.github}\n` +
        `  talk    ${site.url}/contact\n` +
        `  api     curl ${site.url}/api/me`,
      "color:#475569;font-family:monospace;font-size:11px;"
    );
    console.log(
      "%cpsst — press ~ anywhere on the site.",
      "color:#cbd5e1;font-style:italic;font-size:10px;"
    );
    /* eslint-enable no-console */
  }, []);

  return null;
}
