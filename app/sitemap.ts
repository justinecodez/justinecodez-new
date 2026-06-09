import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: site.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/work`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/about`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${site.url}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${site.url}/uses`, lastModified, changeFrequency: "monthly", priority: 0.4 },
    { url: `${site.url}/now`, lastModified, changeFrequency: "weekly", priority: 0.5 },
  ];

  const studies: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${site.url}/work/${study.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...studies];
}
