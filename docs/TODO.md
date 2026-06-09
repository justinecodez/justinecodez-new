# TODO — items that need Justine's input

Visitor-facing TODO markers were removed from the site; everything pending lives here instead.

## Content & copy

- [ ] **Confirm canonical email.** The site now uses `hi@justinecodez.com` ([lib/site.ts](../lib/site.ts)).
      The old repo mixed `hi@justinecode.com` and `justinecodes.com` — verify which mailbox is real.
- [ ] **Case study metrics (add to `outcome` arrays in [lib/case-studies.ts](../lib/case-studies.ts) when cleared/available):**
  - CVM Campaign Engine — approved figures only (reach, volume, uplift), nothing client-identifying.
  - FIFA 2026 Rewards API — launch results once the campaign goes live.
  - TangazaMax — artist and sales numbers once out of testing.
  - NexCard — user / lead-capture metrics.
  - Personalized Wedding Pages — results from first live weddings.
  - MPENYO — sales/efficiency figures from the client.
  - Smart Kanisa — pilot congregation results.
  - Chakula POS — pilot restaurant results.
- [ ] **Review all case study and services copy** — especially internal/NDA-adjacent studies
      (CVM, FIFA rewards, AI failure detection). Rule: never name the employer.
- [ ] **/uses Hardware & Workspace section** — machine, monitor, keyboard, desk; re-add the group
      in [app/uses/page.tsx](../app/uses/page.tsx).
- [ ] **Blog post** — fill the real investigation details in
      [app/blog/utc-vs-eat-epoch-boundary-bug/page.mdx](../app/blog/utc-vs-eat-epoch-boundary-bug/page.mdx)
      (markers are in MDX comments, invisible to visitors).
- [ ] **/now page** — keep it current; edit [content/now.mdx](../content/now.mdx).

## Integrations & credentials

- [ ] **Form backend** — set `NEXT_PUBLIC_FORM_ENDPOINT` (e.g. Formspree) at build time for email
      delivery; until then the form hands leads over via WhatsApp.
- [ ] **Analytics** — none installed (the footer honestly says "no trackers"). If wanted, choose a
      privacy-light option (Plausible/umami) and accept updating the footer badge wording.

## Assets

- [ ] **Portrait** — confirm `public/justine.jpg` / `justine.webp` are the photos to keep.
- [ ] **Home/About OG image** — `public/og-image.jpg` is the old static card; case studies now have
      generated OG images. Consider regenerating the static one to match.

## Deployment

- [ ] **Push to GitHub** — local commits are ahead of `origin/main`; history was rewritten to
      remove the employer name, so push before adding new remote work.
- [ ] **Deploy** — `docker compose up -d --build` (nginx config already updated for the static
      export, `/api/me`, and OG image content types).
- [ ] **Lighthouse** — run against the deployed site and confirm 95+ performance.
