export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  via?: string;
  /** Problem-first hook shown on cards and section headers */
  hook: string;
  description: string[];
  engagements: string[];
  stack?: string[];
  keywords: string[];
}

export const services: Service[] = [
  {
    slug: "solution-architecture",
    title: "Solution Architecture & Fintech Engineering",
    shortTitle: "Solution Architecture",
    hook: "When real money moves through your system, 'mostly works' is not an option.",
    description: [
      "Banks, mobile network operators, and fintechs lose revenue and customer trust every time a payment fails silently, a campaign misfires, or an integration falls over under load. The hard part is rarely writing code — it is designing systems that stay correct and observable at transaction volumes where every edge case eventually happens.",
      "I design and build that kind of infrastructure: payment flows, messaging platforms, and campaign engines that are event-driven from the ground up, so each part can scale, fail, and recover independently. I have done this inside a major Tanzanian telecom fintech, which means I design for the realities of this market — mobile money rails, aggregator quirks, regulatory requirements, and customers on unstable connections.",
    ],
    engagements: [
      "Architecture design and review for payment, wallet, and campaign systems",
      "Event-driven pipelines on Apache Kafka — design, build, or rescue",
      "API gateway strategy and integration design (Layer7)",
      "High-volume messaging and notification infrastructure",
      "Technical due diligence and system audits for fintech products",
    ],
    stack: [
      "Apache Kafka",
      "Node.js / TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker / Kubernetes",
      "Layer7 API Gateway",
    ],
    keywords: [
      "solution architect Tanzania",
      "fintech consultant Dar es Salaam",
    ],
  },
  {
    slug: "whatsapp-automation",
    title: "WhatsApp Business Automation",
    shortTitle: "WhatsApp Automation",
    hook: "Your customers are already on WhatsApp. Your sales process should be too.",
    description: [
      "In Tanzania, business happens on WhatsApp — orders, inquiries, follow-ups, complaints. But when all of that lives in someone's personal chats, orders get lost, response times slip, and nothing is measurable. You cannot grow a sales channel you cannot see.",
      "I build automation on the official WhatsApp Cloud API: bots that answer and qualify customers around the clock, commerce flows that take a customer from product question to confirmed order inside the chat, and CRM integration so every conversation becomes a tracked lead. Campaigns go out as approved templates to segmented audiences — not blast messages from a phone.",
    ],
    engagements: [
      "WhatsApp Cloud API bots for sales, support, and FAQs",
      "In-chat commerce flows: catalogs, carts, and order confirmation",
      "CRM integration so conversations become tracked, owned leads",
      "Campaign automation: segmented broadcasts with approved templates",
      "Meta Business verification and API onboarding support",
    ],
    stack: ["WhatsApp Cloud API", "Node.js / TypeScript", "PostgreSQL", "Redis"],
    keywords: ["WhatsApp Business API Tanzania"],
  },
  {
    slug: "product-development",
    title: "Custom Product Development",
    shortTitle: "Product Development",
    hook: "You have the business idea. I turn it into a working product — not a 12-month IT project.",
    description: [
      "Most software projects in this market fail the same way: months of meetings, an over-scoped spec, and a system nobody uses. The fix is to build the smallest product that proves the business works, ship it to real users, and grow it from evidence.",
      "I take ideas from concept to working product — web apps, PWAs, dashboards, and marketplaces — with the architecture decisions made properly from day one, so version two does not require a rewrite. Because I work across both business development and engineering, the conversation starts with your revenue model, not your tech stack.",
    ],
    engagements: [
      "MVP scoping and build: from idea to first paying users",
      "Web apps and PWAs that work on low-end phones and patchy networks",
      "Marketplaces and multi-vendor platforms",
      "Operational dashboards and internal tools",
      "Product requirement documents and technical specifications",
    ],
    stack: ["Next.js", "NestJS", "React", "PostgreSQL"],
    keywords: ["software consultant Tanzania"],
  },
  {
    slug: "ai-strategy",
    title: "AI Strategy & Implementation",
    shortTitle: "AI Strategy",
    hook: "Everyone tells you to 'use AI'. The real question is where it pays for itself in your operation.",
    description: [
      "Most organizations do not need an AI moonshot. They need specific, boring wins: catching transaction failures before customers complain, answering routine queries without a human, spotting anomalies in operational data before they become incidents.",
      "I help you find those wins and then build them. That means starting from your operational pain — not from a model — and implementing AI where it measurably reduces cost, downtime, or response time. I am currently architecting AI-powered failure detection for high-volume mobile money systems, so this is practice, not theory.",
    ],
    engagements: [
      "AI opportunity assessment: where AI pays for itself in your operation",
      "Anomaly and failure detection for transactions and operations",
      "AI assistants for customer engagement and internal knowledge",
      "Intelligent customer engagement: segmentation, timing, personalization",
      "Proof-of-concept builds with clear success criteria before you commit",
    ],
    keywords: ["AI consultant Tanzania"],
  },
  {
    slug: "corporate-training",
    title: "Corporate Training",
    shortTitle: "Corporate Training",
    via: "Ufumbuzi Labs",
    hook: "Your biggest technology risk is not the systems. It is how your people use them.",
    description: [
      "Banks, hospitals, and institutions invest heavily in systems, then watch the value leak away through phishing clicks, misused tools, and teams that never learned what the technology can actually do. Training is the cheapest security control and the fastest productivity upgrade most organizations never properly buy.",
      "Through Ufumbuzi Labs, I deliver hands-on AI, cybersecurity, and digital skills training built for the way institutions in Tanzania actually work — practical sessions with your tools and your scenarios, not generic slideware. We deliver in partnership with TARQ Technologies (Dubai), combining international curriculum standards with local context.",
    ],
    engagements: [
      "AI literacy and applied AI workshops for business teams",
      "Cybersecurity awareness and secure-behavior training",
      "Digital skills programs for banks, hospitals, and institutions",
      "Executive briefings: what AI and security mean for your strategy",
      "Custom curricula built around your tools and risk profile",
    ],
    keywords: ["corporate IT training Tanzania"],
  },
  {
    slug: "church-nonprofit-tech",
    title: "Technology for Churches & Nonprofits",
    shortTitle: "Faith & Nonprofit Tech",
    via: "Faith Fusion Digital",
    hook: "Ministry deserves serious systems too — at rates a church can actually afford.",
    description: [
      "Churches and nonprofits run on member records in exercise books, contributions tracked on paper, and announcements that reach whoever happened to attend on Sunday. The organizations doing the most important work often have the least access to good technology.",
      "Through Faith Fusion Digital, I build church management systems, member databases, and ministry apps priced for mission budgets — including Smart Kanisa, a complete church management platform with WhatsApp integration, built for how Tanzanian congregations actually communicate.",
    ],
    engagements: [
      "Church management systems: members, groups, contributions, events",
      "Member databases and follow-up workflows",
      "Ministry apps and congregation communication via WhatsApp",
      "Websites and digital presence for churches and nonprofits",
      "Mission-friendly rates and phased rollouts",
    ],
    keywords: ["church management system Tanzania"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
