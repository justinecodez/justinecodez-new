import { Section } from "../components/Section";
import { FolderGit2 } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    title: "Customer Value Management Systems",
    description: "Kafka-powered campaign and customer engagement workflows designed for high volume fintech and mobile money environments.",
  },
  {
    title: "WhatsApp Business API Gateway",
    description: "Enterprise messaging integration with delivery tracking, operational visibility, error handling, and business communication workflows.",
  },
  {
    title: "Transaction Monitoring and Log Visibility Tools",
    description: "Internal visibility tools for tracing transaction flows, improving support, and reducing investigation time across distributed systems.",
  },
  {
    title: "BMT ERP Solution",
    description: "A business management platform for SMEs covering inventory, sales, expenses, customer management, reporting, debt tracking, and business performance visibility.",
  },
  {
    title: "Laibon.Africa",
    description: "An AI-assisted legal technology platform designed to support lawyers, citizens, and organizations with legal workflows and digital access to guidance.",
  },
  {
    title: "AfyaTrack",
    description: "An AI-assisted clinical documentation concept for doctors and health facilities in Tanzania.",
  }
];

export function Projects() {
  return (
    <Section 
      id="projects" 
      label="// SHIPPED AND BATTLE TESTED" 
      title="Systems and projects I have worked on."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-default"
          >
            <div className="flex items-start gap-4 mb-4">
              <FolderGit2 className="text-brand-border-light group-hover:text-brand-gold transition-colors shrink-0 mt-1" size={20} />
              <h3 className="text-sm font-bold text-brand-text group-hover:text-brand-gold transition-colors tracking-wider uppercase">
                {project.title}
              </h3>
            </div>
            <p className="text-brand-text-muted text-xs leading-relaxed pl-9 border-l-2 border-brand-border group-hover:border-brand-gold transition-colors py-1">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
