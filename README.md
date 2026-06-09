# justinecodez.com

Personal consulting site for **Justine Peterson Mahinyila** — solution architect and software
consultant in Dar es Salaam, Tanzania.

Built with **Next.js (App Router, full static export)** + **Tailwind CSS v4**. Every page is
pre-rendered HTML: readable without JavaScript, crawlable, and served by plain nginx.

## Structure

| Route | Purpose |
| --- | --- |
| `/` | Positioning, services overview, featured case studies, segments, CTA |
| `/services` | Six service offers, problem-framed, with Service JSON-LD |
| `/work` | Case study portfolio with tag filters (Fintech, WhatsApp, Marketplaces, Events, Faith Tech, AI) |
| `/work/[slug]` | Case study detail: Challenge → Solution → Stack → Outcome |
| `/about` | Bio and track record |
| `/contact` | Lead form + WhatsApp click-to-chat + email/LinkedIn/GitHub |

Content lives in [lib/services.ts](lib/services.ts) and [lib/case-studies.ts](lib/case-studies.ts);
site-wide constants (email, WhatsApp number, socials) in [lib/site.ts](lib/site.ts).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
npm run lint     # typecheck
```

## Contact form backend (optional)

Without configuration, the contact form composes a WhatsApp message. To use a hosted form
backend (e.g. Formspree), set at build time:

```bash
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/XXXXXXXX
```

## Deploy

Docker multi-stage build → nginx serving the static `out/` directory:

```bash
docker compose up -d --build
```

SEO artifacts generated at build: `sitemap.xml`, `robots.txt`, per-page canonical URLs and
OG tags, JSON-LD (Person, ProfessionalService, Service, CreativeWork).
