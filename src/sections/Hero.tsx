import { motion } from "motion/react";
import { ArrowRight, ChevronRight, MapPin } from "lucide-react";
import { Button } from "../components/Button";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-24 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-teal text-[11px] font-mono mb-4 block tracking-widest uppercase">// WHO I AM</span>
            
            <h1 className="font-heading text-3xl md:text-6xl font-bold leading-[1.1] tracking-tight text-brand-text mb-6">
              I design the digital infrastructure powering Africa's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light to-brand-gold italic">next generation</span> of businesses.
            </h1>
            
            <p className="text-sm md:text-base text-brand-text-muted max-w-[500px] leading-relaxed mb-8">
              I am <span className="text-brand-text">Justine P. Mahinyila</span>, a Solution Architect, Founder, and fintech systems builder based in Dar es Salaam. I help organizations turn complex business and technical problems into reliable software systems, from Kafka-powered platforms and payment integrations to AI products, ERP systems, and secure digital workflows.
            </p>

            <div className="flex items-center gap-2 text-sm font-mono text-brand-teal/80 mb-10">
              <MapPin size={16} />
              <span>Dar es Salaam, Tanzania</span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button asAnchor href="#projects" variant="primary">
                See My Work
              </Button>
              <Button asAnchor href="#contact" variant="secondary">
                Let's Talk
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="w-16 h-[1px] bg-brand-border-light"></div>
              <div className="text-[10px] text-brand-text-muted font-mono italic uppercase tracking-tighter">
                Fintech. AI. Cybersecurity. Business Infrastructure.
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs text-brand-text-muted font-medium italic">
                "I build systems that work. Quietly, precisely, and at scale."
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Portrait */}
        <div className="lg:col-span-4 relative mt-12 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[3/4] border border-brand-border/50 bg-brand-surface relative overflow-hidden group shadow-xl"
          >
            <img 
              src="https://media.licdn.com/dms/image/v2/D4E03AQGI4naSd0KulA/profile-displayphoto-crop_800_800/B4EZnaBtyRHgAI-/0/1760299508590?e=1778716800&v=beta&t=oZZd77lbfgXZq1ZTARoOnB7d2REeMn84LruDoScS744AB" 
              alt="Justine Peterson Mahinyila" 
              className="w-full h-full object-cover grayscale-[20%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none mix-blend-overlay" />
          </motion.div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-brand-gold opacity-50 hidden xl:block" />
          <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-brand-teal opacity-50 hidden xl:block" />
        </div>
      </div>
    </section>
  );
}
