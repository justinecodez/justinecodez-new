import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { 
  Network, 
  CreditCard, 
  Bot, 
  Workflow, 
  ShieldCheck, 
  FileBox 
} from "lucide-react";

const services = [
  {
    title: "Software Architecture and Backend Systems",
    description: "System design, API architecture, database planning, microservices, backend development strategy, integration design, and technical roadmaps.",
    icon: Network
  },
  {
    title: "Fintech and Mobile Money Integration Advisory",
    description: "Support for payment integrations, transaction flows, mobile money systems, API testing, service monitoring, and fintech product quality assurance.",
    icon: CreditCard
  },
  {
    title: "AI Product Strategy and Prototyping",
    description: "AI use case discovery, AI product requirement documents, workflow automation, AI assistant design, prototype planning, and go to market support.",
    icon: Bot
  },
  {
    title: "Business Systems and ERP Consulting",
    description: "Digitization of business operations through systems for sales, inventory, expenses, CRM, reporting, purchases, debt tracking, and operational control.",
    icon: Workflow
  },
  {
    title: "Cybersecurity and Application Security Advisory",
    description: "Practical security thinking for digital products, secure software development guidance, application security awareness, risk identification, and OWASP based security improvement.",
    icon: ShieldCheck
  },
  {
    title: "Product Requirements and Technical Documentation",
    description: "Product requirement documents, software requirement specifications, business cases, technical guides, API documentation, implementation plans, user stories, and acceptance criteria.",
    icon: FileBox
  }
];

export function Services() {
  return (
    <Section 
      id="services" 
      label="// HOW I CAN HELP" 
      title="Consulting services for serious builders and growing organizations."
      className="bg-brand-surface/50 border-y border-brand-border"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="bg-brand-surface-alt">
            <div className="w-10 h-10 rounded-sm bg-brand-bg border border-brand-border flex items-center justify-center mb-6">
              <service.icon className="text-brand-gold" size={18} />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-text mb-3">
              {service.title}
            </h3>
            <p className="text-brand-text-muted text-xs leading-relaxed">
              {service.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
