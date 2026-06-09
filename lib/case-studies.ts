export const tags = [
  "Fintech",
  "WhatsApp",
  "Marketplaces",
  "Events",
  "Faith Tech",
  "AI",
] as const;

export type Tag = (typeof tags)[number];

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  role?: string;
  status?: string;
  tags: Tag[];
  /** One-sentence summary used on cards and meta descriptions */
  summary: string;
  challenge: string[];
  solution: string[];
  stack: string[];
  outcome: string[];
  url?: string;
  featured?: boolean;
  /** NDA / internal work — details are intentionally generalized */
  confidential?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "telecom-cvm-engine",
    title: "Telecom CVM Campaign Engine",
    client: "Major Tanzanian telecom fintech",
    role: "Solution Architect",
    status: "In production",
    tags: ["Fintech"],
    featured: true,
    confidential: true,
    summary:
      "A 7-stage Kafka pipeline powering 42+ campaign types for one of Tanzania's major telecom fintechs.",
    challenge: [
      "A telecom fintech serving millions of subscribers needs to run dozens of customer value management campaigns at once — bonuses, loyalty rewards, win-back offers, usage incentives — each with its own eligibility rules, reward logic, and messaging.",
      "At that scale, a campaign platform cannot be a collection of scripts. One slow stage must not stall every campaign, a failed reward must be traceable and retryable, and the business must be able to launch new campaign types without an engineering rewrite each time.",
    ],
    solution: [
      "I architected the campaign engine as a 7-stage event-driven pipeline on Apache Kafka, separating concerns so each stage — from audience targeting and eligibility through reward fulfilment and messaging — scales and fails independently.",
      "Campaign definitions are data, not code: new campaign types plug into the same pipeline, which is how the platform grew to support 42+ distinct campaign types. Redis handles fast eligibility state, BullMQ manages scheduled and retryable jobs, PostgreSQL with Prisma provides the system of record, and the whole platform runs on Kubernetes.",
    ],
    stack: [
      "Apache Kafka",
      "Node.js / TypeScript",
      "Redis",
      "PostgreSQL",
      "BullMQ",
      "Prisma",
      "Kubernetes",
    ],
    outcome: [
      "The engine powers 42+ campaign types in production for a major Tanzanian telecom fintech, with new campaigns onboarded as configuration rather than new systems.",
    ],
  },
  {
    slug: "ai-transaction-failure-detection",
    title: "AI Transaction Failure Detection",
    client: "Telecom fintech (internal)",
    role: "Solution Architect",
    status: "Architecture phase",
    tags: ["Fintech", "AI"],
    confidential: true,
    summary:
      "AI-powered detection and diagnosis of mobile money transaction failures — finding problems before customers report them.",
    challenge: [
      "In a high-volume mobile money system, transaction failures are inevitable — but most are discovered the worst way: a customer complains, support escalates, and engineers reconstruct what happened from logs hours later.",
      "The patterns are there in the data long before the complaints arrive. The challenge is detecting them in real time across millions of transactions, and diagnosing the likely cause — a degraded partner API, a misbehaving release, a network issue — instead of just raising an alarm.",
    ],
    solution: [
      "I am architecting an AI-powered detection and diagnosis system that learns the normal behavior of transaction flows and flags anomalies as they emerge: failure-rate shifts, latency drift, unusual error clusters by channel, partner, or transaction type.",
      "Beyond detection, the system is designed to diagnose — correlating anomalies with deployments, partner status, and infrastructure signals to point operators at the probable cause, turning hours of log forensics into minutes of confirmation.",
    ],
    stack: [
      "AI / ML anomaly detection",
      "Apache Kafka",
      "Node.js / TypeScript",
      "PostgreSQL",
      "Redis",
    ],
    outcome: [
      "Currently in the architecture phase at a major Tanzanian telecom fintech. This is the kind of applied, operations-first AI I build: not a chatbot bolted onto a brand, but a system that protects revenue and customer trust.",
    ],
  },
  {
    slug: "fifa-2026-rewards-api",
    title: "FIFA World Cup 2026 Rewards API",
    client: "Telecom fintech (internal)",
    role: "Solution Architect / Engineer",
    status: "Designed & built",
    tags: ["Fintech"],
    confidential: true,
    summary:
      "A sports-data-driven rewards engine that turns live World Cup moments into customer rewards inside a consumer fintech app.",
    challenge: [
      "The FIFA World Cup 2026 is a once-in-a-generation engagement moment, and a telecom fintech wanted to ride it: reward customers around real match events — predictions, results, milestones — while the tournament is happening.",
      "That means depending on live third-party sports data, and managing a complete reward lifecycle under campaign conditions: eligibility, allocation, redemption, and expiry must all be correct when thousands of customers qualify in the same moment a match ends.",
    ],
    solution: [
      "I designed a rewards engine that consumes live fixtures, results, and match events from the AllSports API and maps them onto configurable reward rules, decoupling the unreliable outside world (sports data) from the part that must never be wrong (reward issuance).",
      "The engine covers the full reward lifecycle — eligibility evaluation, allocation, redemption, and expiry — built in TypeScript with idempotent processing so that replays and data corrections never double-issue a reward.",
    ],
    stack: ["TypeScript", "AllSports API", "Node.js", "PostgreSQL", "Redis"],
    outcome: [
      "Full reward lifecycle designed and implemented for the World Cup 2026 campaign season.",
    ],
  },
  {
    slug: "tangazamax",
    title: "TangazaMax",
    client: "Own product",
    role: "Founder / Architect",
    status: "Live in testing",
    tags: ["Marketplaces"],
    featured: true,
    url: "https://tangazamax.com",
    summary:
      "A print-on-demand marketplace where Tanzanian artists upload designs and earn from shirts, mugs, bags, pillows, and wall art.",
    challenge: [
      "Tanzania is full of talented visual artists with no route to market: turning a design into sellable merchandise means upfront capital for printing, inventory risk, and a sales channel — three things most artists do not have.",
      "Buyers have the opposite problem: they want authentic local designs on quality products, priced in shillings and bought the way Tanzanians actually shop online.",
    ],
    solution: [
      "TangazaMax is a print-on-demand marketplace that removes the capital barrier entirely. Artists upload a design once and it becomes a storefront across shirts, mugs, bags, pillows, and wall art — printed per order, so there is no inventory and no upfront cost.",
      "Each artist gets a dashboard for products, sales, and earnings; the marketplace surfaces featured artists and featured products to drive discovery; and everything is priced in TZS for the local market.",
    ],
    stack: ["Next.js", "NestJS", "React", "PostgreSQL"],
    outcome: [
      "Live in testing at tangazamax.com with the full artist-to-product pipeline working: design upload, product generation, artist dashboards, and featured curation.",
      "[TODO: add artist and sales numbers once out of testing]",
    ],
  },
  {
    slug: "nexcard",
    title: "NexCard",
    client: "Product + client engagements",
    role: "Founder / Architect",
    status: "Live, NFC hardware pilot",
    tags: ["Events"],
    featured: true,
    summary:
      "A digital business card platform — QR and NFC tap sharing, wallet passes, lead capture, and analytics — with an NFC hardware pilot.",
    challenge: [
      "Paper business cards are where professional connections go to die: they run out at the event that matters, go stale the day your title changes, and tell you nothing about who actually followed up.",
      "Teams have it worse — keeping a consistent, professional identity across dozens of staff means reprinting cards every time anything changes, with zero visibility into what those cards produce.",
    ],
    solution: [
      "NexCard replaces the paper card with a digital profile shared by QR code or a single NFC tap. Profiles live at short, memorable URLs, save straight to contacts as vCards, and install into Apple and Google Wallet so they are always at hand.",
      "Every share is measurable: built-in lead capture turns an exchange into a contact you own, and analytics show views, saves, and taps. Technically, it is a Next.js PWA with server-rendered public profiles (so shared links unfurl and load instantly), a NestJS/PostgreSQL backend, and a React dashboard.",
      "A client engagement extended the platform into physical NFC hardware — a pilot spanning cards, wristbands, and key fobs that tap straight to a profile.",
    ],
    stack: ["Next.js (PWA, SSR)", "NestJS", "PostgreSQL", "React", "NFC", "Apple/Google Wallet"],
    outcome: [
      "Platform live with QR + NFC sharing, wallet passes, vCard save-to-contacts, lead capture, and analytics; NFC hardware pilot (cards, wristbands, key fobs) delivered for a client engagement.",
      "[TODO: add user/lead-capture metrics when available]",
    ],
  },
  {
    slug: "personalized-wedding-pages",
    title: "Personalized Wedding Pages",
    client: "Envaita",
    role: "Architect / Engineer",
    status: "Prototype complete",
    tags: ["Events"],
    summary:
      "One unique link per wedding guest — invitation, RSVP, and secure QR entry pass before the day; a keepsake album after it.",
    challenge: [
      "Tanzanian weddings run on printed cards and committee phone calls: invitations are expensive, RSVPs are chaos, and gate-crashing is common enough that entry control is a real job on the day.",
      "Then the wedding ends and the memories scatter — hundreds of guest photos and videos trapped on individual phones, never collected in one place.",
    ],
    solution: [
      "Each guest receives one unique, personal link. Before the wedding it is their invitation: the couple's story, video, and RSVP — plus a signed QR entry pass. Gate staff scan passes with offline-capable scanning, and an anti-screenshot first-scan marking means a forwarded screenshot cannot get a second person through the gate.",
      "After the wedding, the same link transforms into a keepsake: the official album plus moderated guest photo and video uploads, so the couple finally collects what every guest captured. The whole experience is mobile-first and Swahili-first, because that is who is using it.",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Signed QR / offline scanning"],
    outcome: [
      "Prototype complete for Envaita: per-guest links, RSVP flow, signed QR entry passes with offline scanning and first-scan marking, and the post-wedding keepsake mode.",
      "[TODO: add results from first live weddings]",
    ],
  },
  {
    slug: "mpenyo-whatsapp-sales-bot",
    title: "MPENYO WhatsApp Sales Bot + CRM",
    client: "MPENYO",
    role: "Architect / Engineer",
    status: "Delivered",
    tags: ["WhatsApp"],
    summary:
      "WhatsApp-based book sales automation with a CRM, order tracking, and reporting — built on the official Meta Cloud API.",
    challenge: [
      "MPENYO's book sales ran entirely through WhatsApp chats — which worked, right up until it didn't. Orders were buried in threads, follow-ups depended on memory, and there was no reliable picture of stock, sales, or repeat customers.",
      "The customers were not the problem; WhatsApp is exactly where they want to buy. The problem was that nothing behind the chat was a system.",
    ],
    solution: [
      "I built a sales bot on the official Meta Cloud API that handles the catalog, takes orders, and confirms them inside the chat — no app download, no behavior change for buyers.",
      "Behind it sits a CRM that turns every conversation into a tracked customer and every order into a record, with Excel and React-based tracking and reporting so the business can finally see sales, stock movement, and repeat buyers at a glance.",
    ],
    stack: ["Meta WhatsApp Cloud API", "Node.js / TypeScript", "React", "Excel reporting"],
    outcome: [
      "Order-taking, customer records, and reporting now run through one system, on the same channel customers already preferred.",
      "[TODO: add sales/efficiency figures from MPENYO]",
    ],
  },
  {
    slug: "smart-kanisa",
    title: "Smart Kanisa",
    client: "Faith Fusion Digital",
    role: "Founder / Architect",
    status: "In development",
    tags: ["Faith Tech", "WhatsApp"],
    summary:
      "A complete church management system with WhatsApp at its core, built for Tanzanian congregations and denomination networks.",
    challenge: [
      "Most Tanzanian churches manage members in exercise books, contributions on paper, and announcements from the pulpit — losing track of new members, follow-ups, and giving history as congregations grow.",
      "Existing church management systems are built (and priced) for Western churches, and they ignore the one channel where Tanzanian congregations actually communicate: WhatsApp.",
    ],
    solution: [
      "Smart Kanisa is a complete church management system — members, groups, contributions, events, and follow-up — designed Swahili-first for how local churches actually operate.",
      "Its differentiator is deep WhatsApp integration: announcements, member communication, and engagement flow through the channel every congregation already uses, instead of an app nobody installs. The platform is designed to scale from a single congregation to denomination networks with many churches under one structure.",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "WhatsApp Cloud API"],
    outcome: [
      "In active development under Faith Fusion Digital, targeting Tanzanian denomination networks — built to be offered at mission-friendly rates.",
      "[TODO: add pilot congregation results]",
    ],
  },
  {
    slug: "chakula-pos",
    title: "Chakula POS",
    client: "Own product",
    role: "Founder / Architect",
    status: "In development",
    tags: ["Fintech"],
    summary:
      "A Swahili-first restaurant point of sale with mobile money payments and TRA VFD tax compliance built in.",
    challenge: [
      "Restaurant POS systems sold in Tanzania are usually foreign products: English-only interfaces that waitstaff struggle with, card-centric payments in a mobile money country, and no answer for TRA's electronic fiscal receipt requirements.",
      "So restaurants run on notebooks and trust — losing money to order errors, untracked stock, and the compliance scramble at tax time.",
    ],
    solution: [
      "Chakula POS is built Swahili-first, so the people actually taking orders can use it without translation in their heads. Payments are mobile-money-native, integrating ClickPesa and MNO rails alongside cash.",
      "TRA compliance is not an add-on: VFD (Virtual Fiscal Device) receipting is built into the sales flow, so every sale is fiscally compliant by default rather than reconstructed later.",
    ],
    stack: ["React", "NestJS", "PostgreSQL", "ClickPesa / MNO integrations", "TRA VFD"],
    outcome: [
      "In development: a point of sale designed for how Tanzanian restaurants actually take orders, get paid, and stay compliant.",
      "[TODO: add pilot restaurant results]",
    ],
  },
  {
    slug: "duka-link",
    title: "Duka-Link",
    client: "Own product",
    role: "Founder / Architect",
    status: "In development",
    tags: ["Marketplaces"],
    summary:
      "A digital storefront that gives Tanzanian small sellers a real catalog, a shareable shop link, and orders they can track.",
    challenge: [
      "Tanzania's small sellers trade through Instagram posts and WhatsApp statuses: no catalog a customer can browse, no link to share, prices negotiated one DM at a time, and zero record of what actually sold.",
    ],
    solution: [
      "Duka-Link gives each seller a simple digital storefront: a browsable catalog with prices in TZS, one shareable link that works everywhere their customers already are, and orders that arrive as structured requests instead of scattered chats.",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL"],
    outcome: [
      "In development — bringing the smallest sellers the same basic dignity larger shops take for granted: a storefront, a price list, and a record of their sales.",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);
