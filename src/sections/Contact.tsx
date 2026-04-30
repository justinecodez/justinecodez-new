import { Section } from "../components/Section";
import { Button } from "../components/Button";
import { Mail, MapPin, Globe, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <Section 
      id="contact" 
      label="// LETS TALK" 
      title="Let's build something serious together."
      className="bg-brand-surface/40 border-t border-brand-border"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-brand-text-muted text-lg leading-relaxed mb-10 max-w-lg">
            Whether it is fintech infrastructure, an AI strategy, cybersecurity training, a business system, or a new venture, I am open to meaningful conversations with people building serious things.
          </p>
          
          <div className="space-y-6 mb-12">
            <a href="mailto:hi@justinecode.com" className="flex items-center gap-4 text-brand-text hover:text-brand-gold transition-colors group">
              <div className="w-10 h-10 rounded-sm border border-brand-border flex items-center justify-center group-hover:border-brand-gold transition-colors bg-brand-surface-alt">
                <Mail size={18} />
              </div>
              <span className="font-mono text-sm">hi@justinecode.com</span>
            </a>
            
            <div className="flex items-center gap-4 text-brand-text">
              <div className="w-10 h-10 rounded-sm border border-brand-border flex items-center justify-center bg-brand-surface-alt">
                <MapPin size={18} />
              </div>
              <span className="font-mono text-sm">Dar es Salaam, Tanzania</span>
            </div>
            
            <a href="https://justinecodes.com" className="flex items-center gap-4 text-brand-text hover:text-brand-gold transition-colors group">
              <div className="w-10 h-10 rounded-sm border border-brand-border flex items-center justify-center group-hover:border-brand-gold transition-colors bg-brand-surface-alt">
                <Globe size={18} />
              </div>
              <span className="font-mono text-sm">justinecodes.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/justinecodez" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 bg-brand-surface-alt border border-brand-border rounded-sm hover:border-brand-gold hover:text-brand-gold transition-all">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/justinecodez" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 bg-brand-surface-alt border border-brand-border rounded-sm hover:border-brand-gold hover:text-brand-gold transition-all">
              <Github size={20} />
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="p-8 md:p-12 rounded-md bg-brand-surface-alt border border-brand-border max-w-md w-full relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <svg width="100" height="100" viewBox="0 0 100 100"><path d="M0 0 L100 100 M100 0 L0 100" stroke="currentColor" strokeWidth="1" fill="none"/></svg>
            </div>
            <div className="relative z-10">
              <h3 className="font-bold uppercase tracking-wider text-sm mb-2 text-brand-text">Start a Conversation</h3>
              <p className="text-brand-text-muted text-xs mb-8">Reach out via WhatsApp to discuss your next project.</p>
              <Button asAnchor href="https://wa.me/255757714834" target="_blank" rel="noopener noreferrer" variant="primary" className="w-full">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
