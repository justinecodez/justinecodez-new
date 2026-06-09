import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="pt-44 pb-28 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <span className="text-brand-teal text-[11px] font-mono mb-4 block tracking-widest uppercase">
          {"// 404"}
        </span>
        <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-brand-text mb-4">
          Page not found.
        </h1>
        <p className="text-brand-text-muted mb-10">
          Ukurasa huu haupo — but the work does. Try the case studies or start a conversation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ButtonLink href="/" variant="secondary">
            Back home
          </ButtonLink>
          <ButtonLink href="/work" variant="primary">
            See the work
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
