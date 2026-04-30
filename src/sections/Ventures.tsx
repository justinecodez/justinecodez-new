import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { ExternalLink, Rocket, Scale, Stethoscope, Briefcase, Church } from "lucide-react";

const ventures = [
  {
    title: "Ufumbuzi Labs Limited",
    subtitle: "AI and Cybersecurity Consulting for African Businesses",
    description: "Ufumbuzi Labs Limited is my consulting vehicle focused on AI adoption, cybersecurity awareness, software architecture, and digital transformation. The goal is to help organizations adopt technology with clarity, structure, and long-term thinking.",
    icon: Rocket
  },
  {
    title: "Laibon.Africa",
    subtitle: "Operating System for Lawyers",
    description: "Laibon.Africa is a legal technology platform exploring how AI can support legal workflows, legal research, document assistance, client interaction, and access to legal guidance across Africa.",
    icon: Scale
  },
  {
    title: "AfyaTrack",
    subtitle: "AI-Assisted Clinical Documentation",
    description: "AfyaTrack is a health technology concept designed to help doctors and health facilities improve clinical documentation, organize patient information, and explore intelligent workflow support.",
    icon: Stethoscope
  },
  {
    title: "BMT ERP Solution",
    subtitle: "Business Management Software for Tanzanian SMEs",
    description: "BMT ERP Solution is a business management platform designed for sales, inventory, expenses, CRM, debt tracking, purchases, reporting, and operational visibility for growing businesses.",
    icon: Briefcase
  },
  {
    title: "Faith Fusion Digital",
    subtitle: "Technology in Service of the Church",
    description: "Faith Fusion Digital is a community initiative focused on using technology, digital media, training, and smart tools to support Christian organizations, discipleship, and digital ministry.",
    icon: Church
  }
];

export function Ventures() {
  return (
    <Section 
      id="ventures" 
      label="// WHAT I AM BUILDING" 
      title="Ventures, products, and initiatives."
      className="bg-brand-bg/50 border-y border-brand-border"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ventures.map((venture, index) => (
          <Card key={index} className="flex flex-col">
            <div className="mb-4 flex justify-between items-start">
              <div className="p-2 bg-brand-surface-alt rounded-sm border border-brand-border">
                <venture.icon className="text-brand-gold" size={16} />
              </div>
              <button aria-label="Visit venture" className="p-1 opacity-50 hover:opacity-100 hover:text-brand-gold transition-all">
                <ExternalLink size={14} />
              </button>
            </div>
            <h3 className="text-xs font-bold text-brand-text mb-1 tracking-wider">{venture.title.toUpperCase()}</h3>
            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-wider mb-2">
              {venture.subtitle}
            </p>
            <p className="text-brand-text-muted text-[11px] leading-relaxed flex-grow">
              {venture.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
