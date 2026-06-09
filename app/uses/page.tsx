import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Uses — Stack & Tools",
  description:
    "The stack Justine Mahinyila builds with: Node.js/TypeScript, NestJS, Next.js, Apache Kafka, PostgreSQL, Redis, BullMQ, Prisma, Docker, Kubernetes, Meta WhatsApp Cloud API, Layer7.",
  alternates: { canonical: "/uses" },
  openGraph: {
    url: "/uses",
    title: "Uses | Justine Mahinyila",
    description: "The tools and stack behind the work.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const groups: { name: string; items: { name: string; note: string }[] }[] = [
  {
    name: "Languages & Runtime",
    items: [
      { name: "TypeScript", note: "Everything is typed. Everything." },
      { name: "Node.js", note: "The runtime for every service I ship." },
      { name: "NestJS", note: "Backend framework of choice — structure that scales with teams." },
      { name: "Next.js + React", note: "Frontends, PWAs, and this site." },
    ],
  },
  {
    name: "Data & Messaging",
    items: [
      { name: "Apache Kafka", note: "The backbone of every event-driven system I design." },
      { name: "PostgreSQL", note: "The system of record. Boring, correct, fast." },
      { name: "Redis", note: "Hot state: eligibility checks, velocity rules, caching." },
      { name: "BullMQ", note: "Scheduled jobs, retries, and throttled queues." },
      { name: "Prisma", note: "Typed access to PostgreSQL without ORM regret." },
    ],
  },
  {
    name: "Infrastructure",
    items: [
      { name: "Docker", note: "Every project containerized from day one." },
      { name: "Kubernetes", note: "Where the production pipelines run." },
      { name: "nginx", note: "Still the fastest way to serve static HTML — like this page." },
    ],
  },
  {
    name: "APIs & Integrations",
    items: [
      { name: "Meta WhatsApp Cloud API", note: "Official rails for every WhatsApp build." },
      { name: "Layer7 API Gateway", note: "Enterprise API management in fintech environments." },
      { name: "Mobile money rails", note: "ClickPesa and MNO integrations for TZS payments." },
    ],
  },
  // Hardware & Workspace section pending — see docs/TODO.md
];

export default function UsesPage() {
  return (
    <>
      <section className="pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-brand-teal text-[11px] font-mono mb-4 block tracking-widest uppercase">
            {"// USES"}
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-brand-text leading-[1.1] max-w-3xl mb-6">
            The stack behind the work.
          </h1>
          <p className="text-brand-text-muted text-base md:text-lg leading-relaxed max-w-2xl mb-14">
            Chosen by one rule: tools that stay correct under load and stay maintainable under
            growth. No résumé-driven development.
          </p>

          <div className="space-y-12">
            {groups.map((group) => (
              <div key={group.name}>
                <h2 className="text-[10px] font-mono uppercase tracking-wider text-brand-text-muted mb-5">
                  {group.name}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="bg-brand-surface border-l-2 border-brand-border rounded-r-md p-5 hover:border-brand-gold transition-colors"
                    >
                      <h3 className="text-sm font-bold text-brand-text mb-1">{item.name}</h3>
                      <p className="text-xs text-brand-text-muted leading-relaxed">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
