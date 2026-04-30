import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { Terminal } from "lucide-react";

export function About() {
  return (
    <Section 
      id="about" 
      label="// WHO I AM" 
      title="Builder, architect, and business-minded engineer from Tanzania."
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <div className="space-y-6 text-brand-text-muted text-lg leading-relaxed">
          <p>
            I am <strong className="text-brand-text font-medium">Justine Peterson Mahinyila</strong>, a Tanzanian technology professional working across software engineering, fintech, product quality assurance, business development, AI, cybersecurity, and digital transformation.
          </p>
          <p>
            My work sits at the intersection of business and technology. I help teams understand what they need to build, how to structure it properly, and how to turn ideas into systems that create real value.
          </p>
          <p>
            I currently work in the fintech and mobile money ecosystem, where I am involved in product quality assurance, software engineering, API testing, service monitoring, test matrix development, solution design, and product improvement. This gives me practical exposure to high-volume transaction environments, mobile money systems, integrations, customer impact, and enterprise technology operations.
          </p>
          <p>
            Outside my full-time role, I am building <strong className="text-brand-text font-medium">Ufumbuzi Labs Limited</strong>, a consulting company focused on AI, cybersecurity, software architecture, and digital transformation for African businesses and institutions.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="bg-brand-surface-alt border-brand-teal/20 p-8 border-l-2 border-l-brand-teal">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-brand-teal/10 rounded-sm">
                <Terminal className="text-brand-teal" size={20} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-text">Mission Statement</h3>
            </div>
            <p className="text-brand-text-muted text-sm leading-relaxed">
              My mission is to help African businesses build practical, scalable, secure, and globally relevant technology solutions.
            </p>
          </Card>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-md border border-brand-border bg-brand-surface-alt">
              <div className="text-3xl font-heading mb-2 text-brand-text">10+</div>
              <div className="text-[10px] font-mono text-brand-text-muted uppercase tracking-wider">Years Exp</div>
            </div>
            <div className="p-6 rounded-md border border-brand-border bg-brand-surface-alt">
              <div className="text-3xl font-heading mb-2 text-brand-text">Enterprise</div>
              <div className="text-[10px] font-mono text-brand-text-muted uppercase tracking-wider">Scale Systems</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
