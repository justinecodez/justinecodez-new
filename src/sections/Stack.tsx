import { Section } from "../components/Section";

const categories = [
  {
    name: "Core Engineering",
    skills: ["TypeScript", "Node.js", "NestJS", "React", "Angular", "Python", "FastAPI", "Flutter"]
  },
  {
    name: "Data and Messaging",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Apache Kafka"]
  },
  {
    name: "Infrastructure",
    skills: ["Docker", "Kubernetes", "Linux", "Ansible", "Nginx"]
  },
  {
    name: "Enterprise and Integrations",
    skills: ["CA API Gateway", "WhatsApp Business API", "MNO integrations", "Payment APIs", "Mobile Money Systems"]
  },
  {
    name: "AI and Productivity",
    skills: ["Prompt Engineering", "AI Assistants", "RAG Concepts", "Workflow Automation", "Technical Documentation"]
  }
];

export function Stack() {
  return (
    <Section 
      id="stack" 
      label="// TOOLS OF THE TRADE" 
      title="The tools I trust when it matters."
    >
      <div className="grid lg:grid-cols-2 gap-16">
        {categories.map((category, index) => (
          <div key={index} className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-text flex items-center gap-4">
              <span className="text-brand-gold font-mono text-xs">0{index + 1}</span>
              {category.name}
              <div className="h-px bg-brand-border-light flex-1" />
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className="px-2 py-1 border border-brand-border/80 font-mono text-[10px] font-bold text-brand-text bg-brand-surface/50 hover:bg-brand-surface transition-colors cursor-default uppercase"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
