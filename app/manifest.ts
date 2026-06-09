import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "justinecodez",
    description: site.description,
    start_url: "/",
    display: "browser",
    background_color: "#FAFAF8",
    theme_color: "#17181C",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/logo/jc-tile-animated.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
