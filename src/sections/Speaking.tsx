import { Section } from "../components/Section";
import { Mic2, CheckCircle2 } from "lucide-react";

const topics = [
  "Building digital products in Africa",
  "AI opportunities for African businesses",
  "Software architecture for growing teams",
  "Fintech and mobile money innovation",
  "Cybersecurity awareness for developers and businesses",
  "Career growth in technology",
  "Faith, technology, and digital discipleship",
  "Freelancing, consulting, and online work",
  "Community building and digital leadership"
];

export function Speaking() {
  return (
    <Section 
      id="speaking" 
      label="// SPEAKING AND COMMUNITY" 
      title="Teaching, mentoring, and building communities."
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <div className="space-y-8">
          <div className="w-12 h-12 rounded-sm bg-brand-bg border border-brand-border flex items-center justify-center">
            <Mic2 className="text-brand-gold" size={24} />
          </div>
          <p className="text-brand-text-muted text-lg leading-relaxed">
            I believe knowledge becomes more valuable when it is shared. I participate in technology communities, mentorship spaces, workshops, faith based digital initiatives, and professional conversations around software, cybersecurity, AI, business, and digital transformation.
          </p>
        </div>

        <div>
          <h3 className="font-mono text-sm tracking-widest text-brand-text-muted uppercase mb-8 border-b border-brand-border pb-4">
            Common Topics
          </h3>
          <ul className="space-y-4">
            {topics.map((topic, index) => (
              <li key={index} className="flex items-start gap-4">
                <CheckCircle2 size={16} className="text-brand-gold shrink-0 mt-0.5" />
                <span className="text-brand-text/90 hover:text-brand-text text-sm transition-colors">{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
