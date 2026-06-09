import { Database, Layers, Timer } from "lucide-react";

const stages = [
  {
    name: "Ingestion",
    text: "Subscriber and transaction events stream in over the Kafka backbone.",
  },
  {
    name: "Segmentation",
    text: "Audiences are resolved against campaign definitions — data, not code.",
  },
  {
    name: "Eligibility",
    text: "Per-subscriber rules and velocity checks against fast Redis state.",
    support: { icon: Database, label: "Redis" },
  },
  {
    name: "Campaign matching",
    text: "The right campaign type — one of 42+ — is selected for the event.",
  },
  {
    name: "Throttling & scheduling",
    text: "BullMQ paces sends, schedules windows, and retries failures.",
    support: { icon: Timer, label: "BullMQ" },
  },
  {
    name: "Reward & delivery",
    text: "Rewards are fulfilled and messages dispatched, idempotently.",
  },
  {
    name: "Tracking",
    text: "Outcomes land in PostgreSQL via Prisma and feed the next cycle.",
    support: { icon: Layers, label: "PostgreSQL · Prisma" },
  },
];

/**
 * Animated flow of the 7-stage Kafka pipeline. Pure HTML/CSS — renders
 * fully without JS; the traveling dot is hidden for reduced-motion users
 * (see .pipeline-dot in globals.css).
 */
export function PipelineDiagram() {
  return (
    <figure className="bg-brand-surface-alt border border-brand-border rounded-md p-6 md:p-8">
      <figcaption className="flex flex-wrap items-center justify-between gap-2 mb-6">
        <span className="text-[10px] font-mono uppercase tracking-wider text-brand-text-muted">
          The 7-stage pipeline
        </span>
        <span className="text-[10px] font-mono text-brand-teal bg-brand-teal-muted px-2 py-1 rounded-sm">
          Apache Kafka backbone · Kubernetes runtime
        </span>
      </figcaption>

      <div className="relative">
        {/* Connector line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-brand-border" aria-hidden="true">
          <span className="pipeline-dot" />
        </div>

        <ol className="space-y-5">
          {stages.map((stage, i) => (
            <li key={stage.name} className="relative pl-8 group">
              <span
                className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-brand-gold bg-brand-surface group-hover:bg-brand-gold transition-colors"
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-[10px] font-mono text-brand-text-muted">0{i + 1}</span>
                <h3 className="text-sm font-bold text-brand-text group-hover:text-brand-gold transition-colors">
                  {stage.name}
                </h3>
                {stage.support && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-brand-teal bg-brand-teal-muted px-2 py-0.5 rounded-sm">
                    <stage.support.icon size={11} /> {stage.support.label}
                  </span>
                )}
              </div>
              <p className="text-xs text-brand-text-muted leading-relaxed mt-1 lg:opacity-70 lg:group-hover:opacity-100 transition-opacity">
                {stage.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
