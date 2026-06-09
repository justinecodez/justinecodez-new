import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { site, whatsappLink } from "@/lib/site";

interface CtaBandProps {
  title?: string;
  text?: string;
  whatsappMessage?: string;
}

export function CtaBand({
  title = site.tagline,
  text = "Tell me what you're building — fintech infrastructure, a WhatsApp channel, a new product, an AI use case, or a training program — and I'll tell you honestly whether and how I can help.",
  whatsappMessage,
}: CtaBandProps) {
  return (
    <section className="border-t border-brand-border bg-brand-surface/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="text-brand-teal text-[11px] font-mono mb-4 block tracking-widest uppercase">
            {"// NEXT STEP"}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-brand-text leading-[1.1] mb-4">
            {title}
          </h2>
          <p className="text-brand-text-muted leading-relaxed mb-8">{text}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/contact" variant="primary">
              Start a conversation
            </ButtonLink>
            <ButtonLink href={whatsappLink(whatsappMessage)} variant="whatsapp">
              <MessageCircle size={16} /> Chat on WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
