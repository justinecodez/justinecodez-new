import { caseStudies } from "@/lib/case-studies";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

/** The /api/me payload — also powers the console banner and the ~ terminal. */
export const me = {
  name: site.name,
  title: "Solution Architect & Software Consultant",
  location: site.location,
  languages: ["Swahili", "English"],
  services: services.map((s) => s.title),
  featured_projects: caseStudies
    .filter((c) => c.featured)
    .map((c) => ({
      name: c.title,
      summary: c.summary,
      stack: c.stack,
      url: c.url ?? `${site.url}/work/${c.slug}`,
    })),
  links: {
    github: site.github,
    linkedin: site.linkedin,
    email: site.email,
    website: site.url,
  },
  _hint: `Humans talk faster than JSON — ${site.url}/contact`,
} as const;
