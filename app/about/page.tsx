import type { Metadata } from "next";
import { Github, Globe, Linkedin, Shield } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — Solution Architect in Dar es Salaam",
  description:
    "Justine Mahinyila: 7+ years in fintech engineering, Solution Architect & Products QA Officer at a major Tanzanian telecom fintech, founder of Ufumbuzi Labs and Faith Fusion Digital, OWASP Dar es Salaam member. Fluent in Swahili and English.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About Justine Mahinyila — Solution Architect, Tanzania",
    description:
      "7+ years building fintech systems in Tanzania. Architect by day, founder by conviction. Let's build something serious together.",
  },
};

const milestones = [
  {
    period: "Now",
    title: "Solution Architect & Products QA Officer",
    org: "Major Tanzanian telecom fintech",
    text: "Designing campaign, messaging, and payment infrastructure — and owning the quality of the products that run on it. High-volume mobile money is where my architecture habits were forged: everything fails eventually, so design for it.",
  },
  {
    period: "Before",
    title: "Business Development & Frontend Engineering",
    org: "ClickPesa · GetPaid.Africa",
    text: "At ClickPesa I worked both sides of the table — selling payment solutions to real businesses and building the frontend they used (GetPaid.Africa). That double exposure is why I architect from the revenue model first, technology second.",
  },
  {
    period: "Ongoing",
    title: "Founder",
    org: "Ufumbuzi Labs",
    text: "AI and cybersecurity training for banks, hospitals, and institutions, delivered in partnership with TARQ Technologies (Dubai). 'Ufumbuzi' means 'solutions' — the point is skills your team still uses a year later.",
  },
  {
    period: "Ongoing",
    title: "Founder",
    org: "Faith Fusion Digital",
    text: "Pro bono and low-cost technology for churches and nonprofits, including Smart Kanisa, a church management system built around how Tanzanian congregations actually communicate: WhatsApp.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <span className="text-brand-teal text-[11px] font-mono mb-4 block tracking-widest uppercase">
              {"// ABOUT"}
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-brand-text leading-[1.1] mb-8">
              Architect by day. Founder by conviction. Tanzanian throughout.
            </h1>

            <div className="space-y-5 text-brand-text-muted leading-relaxed">
              <p>
                I&apos;m <strong className="text-brand-text font-medium">Justine Peterson
                Mahinyila</strong> — a solution architect in Dar es Salaam with 7+ years in fintech
                engineering. Today I&apos;m the Solution Architect &amp; Products QA Officer at one
                of Tanzania&apos;s major telecom fintechs, which means I both design the systems
                that move money for millions of people and answer for whether they actually work.
              </p>
              <p>
                I got here through both doors. At ClickPesa I did business development and frontend
                engineering — including GetPaid.Africa — so I&apos;ve pitched payment products to
                skeptical business owners and then gone back to the office to build them. That&apos;s
                the lens I bring to every engagement: technology only matters if the business case
                underneath it is real.
              </p>
              <p>
                Outside the day job, I build. <strong className="text-brand-text font-medium">
                Ufumbuzi Labs</strong> delivers AI and cybersecurity training to banks, hospitals,
                and institutions, in partnership with TARQ Technologies in Dubai.{" "}
                <strong className="text-brand-text font-medium">Faith Fusion Digital</strong> puts
                serious technology in the hands of churches and nonprofits at rates a mission budget
                can carry. And a steady stream of products — marketplaces, event platforms, POS
                systems — keeps my hands on real code.
              </p>
              <p>
                I&apos;m a member of the OWASP Dar es Salaam chapter, because systems that move
                money should be built by people who think about how they break. I work in Swahili
                and English — whichever gets your team to clarity faster.
              </p>
              <p className="text-brand-text font-medium">
                No corporate theatre, no jargon for its own sake. If you&apos;re building something
                serious, let&apos;s talk about it like adults — and then build it.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <ButtonLink href="/contact" variant="primary">
                Start a conversation
              </ButtonLink>
              <ButtonLink href="/work" variant="secondary">
                See the work
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[3/4] border border-brand-border/50 bg-brand-surface relative overflow-hidden shadow-xl mb-6 max-w-sm">
              <picture>
                <source srcSet="/justine.webp" type="image/webp" />
                <img
                  src="/justine.jpg"
                  alt="Justine Peterson Mahinyila"
                  className="w-full h-full object-cover"
                  loading="eager"
                  width={800}
                  height={1067}
                />
              </picture>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-sm">
              <div className="p-5 rounded-md border border-brand-border bg-brand-surface-alt">
                <div className="text-2xl font-heading font-bold text-brand-text mb-1">7+</div>
                <div className="text-[10px] font-mono text-brand-text-muted uppercase tracking-wider">
                  Years in fintech
                </div>
              </div>
              <div className="p-5 rounded-md border border-brand-border bg-brand-surface-alt">
                <div className="text-2xl font-heading font-bold text-brand-text mb-1">SW / EN</div>
                <div className="text-[10px] font-mono text-brand-text-muted uppercase tracking-wider">
                  Swahili &amp; English
                </div>
              </div>
              <div className="p-5 rounded-md border border-brand-border bg-brand-surface-alt col-span-2">
                <div className="flex items-center gap-2 mb-1">
                  <Shield size={16} className="text-brand-teal" />
                  <span className="text-sm font-bold text-brand-text">OWASP Dar es Salaam</span>
                </div>
                <div className="text-[10px] font-mono text-brand-text-muted uppercase tracking-wider">
                  Chapter member
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 bg-brand-surface-alt border border-brand-border rounded-sm hover:border-brand-gold hover:text-brand-gold transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 bg-brand-surface-alt border border-brand-border rounded-sm hover:border-brand-gold hover:text-brand-gold transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href={site.url}
                aria-label="Website"
                className="p-3 bg-brand-surface-alt border border-brand-border rounded-sm hover:border-brand-gold hover:text-brand-gold transition-all"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 md:py-24 bg-brand-surface/50 border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-brand-teal text-[11px] font-mono mb-4 block tracking-widest uppercase">
            {"// THE PATH HERE"}
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold tracking-tight text-brand-text leading-[1.1] mb-12 max-w-2xl">
            Where the experience comes from.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {milestones.map((m) => (
              <div
                key={m.org}
                className="bg-brand-surface border-l-2 border-brand-border rounded-r-md p-6 md:p-8 hover:border-brand-gold transition-colors"
              >
                <span className="text-[10px] font-mono text-brand-teal uppercase tracking-wider">
                  {m.period}
                </span>
                <h3 className="text-base font-bold text-brand-text mt-2 mb-1">{m.title}</h3>
                <p className="text-[11px] font-mono text-brand-text-muted uppercase tracking-wider mb-3">
                  {m.org}
                </p>
                <p className="text-sm text-brand-text-muted leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
