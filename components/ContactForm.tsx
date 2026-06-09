"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { whatsappLink } from "@/lib/site";

// Optional hosted form backend (e.g. Formspree endpoint). When unset, the
// form composes a WhatsApp message instead — works with zero credentials.
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

type Status = "idle" | "sending" | "sent" | "error";

const inputStyles =
  "w-full bg-brand-surface border border-brand-border rounded-sm px-4 py-3 text-sm text-brand-text placeholder:text-brand-text-muted/60 focus:outline-none focus:border-brand-gold transition-colors";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const contact = String(data.get("contact") || "");
    const message = String(data.get("message") || "");

    if (FORM_ENDPOINT) {
      setStatus("sending");
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        });
        if (!res.ok) throw new Error(`Form endpoint responded ${res.status}`);
        setStatus("sent");
        form.reset();
      } catch {
        setStatus("error");
      }
      return;
    }

    // No form backend configured: hand the lead over via WhatsApp.
    const text = `Hi Justine, I'm ${name} (${contact}).\n\nWhat I'm building: ${message}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-[10px] font-mono uppercase tracking-wider text-brand-text-muted mb-2"
        >
          Your name
        </label>
        <input id="name" name="name" type="text" required placeholder="Asha Mushi" className={inputStyles} />
      </div>
      <div>
        <label
          htmlFor="contact"
          className="block text-[10px] font-mono uppercase tracking-wider text-brand-text-muted mb-2"
        >
          Email or WhatsApp number
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          required
          placeholder="you@company.co.tz or +255 7XX XXX XXX"
          className={inputStyles}
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-[10px] font-mono uppercase tracking-wider text-brand-text-muted mb-2"
        >
          What are you building?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="A sentence or two about the problem, the timeline, and where you are now."
          className={inputStyles}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-sm font-bold transition-all duration-300 px-6 py-3 text-[11px] uppercase tracking-wider bg-brand-gold text-white hover:bg-brand-gold-light disabled:opacity-60 w-full sm:w-auto"
      >
        {FORM_ENDPOINT ? <Send size={16} /> : <MessageCircle size={16} />}
        {status === "sending"
          ? "Sending…"
          : FORM_ENDPOINT
            ? "Send message"
            : "Send via WhatsApp"}
      </button>

      {status === "sent" && (
        <p className="text-sm text-brand-teal" role="status">
          Thanks — your message is on its way. I usually reply within a business day.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          Something went wrong sending the form. Please reach me directly on WhatsApp or email below.
        </p>
      )}
    </form>
  );
}
