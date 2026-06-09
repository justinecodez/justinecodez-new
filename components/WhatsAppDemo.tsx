"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, CheckCheck, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  from: "bot" | "user";
  text: string;
}

interface Step {
  /** Bot messages appended when this step is reached */
  bot: string[];
  /** Quick replies offered to the visitor; key = next step id */
  replies?: { label: string; next: string }[];
  /** Terminal step: show the CTA */
  done?: boolean;
}

// Scripted sales flow — a mock of the MPENYO-style book sales bot.
// Pure front-end; no API calls. Titles/prices are demo placeholders.
const FLOW: Record<string, Step> = {
  start: {
    bot: [
      "Karibu MPENYO Books! 📚 I'm the sales assistant. I can show you our books, take your order, and send payment details — right here in the chat.",
      "What would you like to do?",
    ],
    replies: [
      { label: "📖 Browse books", next: "browse" },
      { label: "🚚 Ask about delivery", next: "delivery" },
    ],
  },
  delivery: {
    bot: [
      "We deliver everywhere in Tanzania 🇹🇿 — Dar es Salaam same-day, other regions in 2–3 days via bus courier. Delivery fee is shown at checkout.",
      "Ready to see the books?",
    ],
    replies: [{ label: "📖 Browse books", next: "browse" }],
  },
  browse: {
    bot: [
      "Here's what's popular this week:\n\n1️⃣ Safari ya Mafanikio — TZS 25,000\n2️⃣ Biashara Bila Mkopo — TZS 20,000\n3️⃣ Maisha na Malengo — TZS 18,000",
      "Which one would you like?",
    ],
    replies: [
      { label: "1️⃣ Safari ya Mafanikio", next: "pick" },
      { label: "2️⃣ Biashara Bila Mkopo", next: "pick" },
    ],
  },
  pick: {
    bot: ["Excellent choice! 👌 How many copies?"],
    replies: [
      { label: "1 copy", next: "confirm" },
      { label: "2 copies", next: "confirm" },
    ],
  },
  confirm: {
    bot: [
      "Here's your order:\n\n📦 Order #0042 (demo)\n📚 Selected book\n📍 Delivery: Dar es Salaam\n💰 Total: TZS 25,000 + delivery",
      "Confirm and I'll send payment instructions.",
    ],
    replies: [{ label: "✅ Confirm order", next: "pay" }],
  },
  pay: {
    bot: [
      "Lipa kwa simu 📲\n\nLipa Namba: 5XX XXX (demo)\nJina: MPENYO BOOKS\nAmount: TZS 25,000\n\nTap below once you've paid.",
    ],
    replies: [{ label: "💸 I've paid", next: "receipt" }],
  },
  receipt: {
    bot: [
      "✅ Payment received — asante sana!\n\n🧾 Receipt #0042 (demo)\nYour order is confirmed and will be dispatched today. You'll get tracking updates right here in this chat.",
      "And that's the whole flow: browse → order → pay → receipt, without the customer ever leaving WhatsApp.",
    ],
    done: true,
  },
};

function now() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export function WhatsAppDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [stepId, setStepId] = useState<string | null>(null);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  const step = stepId ? FLOW[stepId] : null;

  function clearTimers() {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  }

  function enterStep(id: string, base: Message[]) {
    clearTimers();
    const target = FLOW[id];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setMessages([...base, ...target.bot.map((text) => ({ from: "bot" as const, text }))]);
      setStepId(id);
      return;
    }
    setTyping(true);
    setStepId(null);
    target.bot.forEach((text, i) => {
      timeouts.current.push(
        setTimeout(() => {
          setMessages((prev) => [...prev, { from: "bot", text }]);
          if (i === target.bot.length - 1) {
            setTyping(false);
            setStepId(id);
          }
        }, 600 * (i + 1))
      );
    });
  }

  useEffect(() => {
    enterStep("start", []);
    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, typing, stepId]);

  function reply(label: string, next: string) {
    const base: Message[] = [...messages, { from: "user", text: label }];
    setMessages(base);
    enterStep(next, base);
  }

  function restart() {
    setMessages([]);
    enterStep("start", []);
  }

  return (
    <div className="max-w-[380px] w-full">
      <div className="rounded-md overflow-hidden border border-brand-border shadow-xl">
        {/* WhatsApp header */}
        <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-sm font-bold shrink-0">
            M
          </div>
          <div className="flex-grow min-w-0">
            <div className="text-sm font-semibold truncate">MPENYO Books · Demo Bot</div>
            <div className="text-[11px] text-white/80">online · scripted demo, no real API</div>
          </div>
          <button
            onClick={restart}
            aria-label="Restart demo"
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <RotateCcw size={16} />
          </button>
        </div>

        {/* Chat area */}
        <div
          ref={scrollRef}
          className="bg-[#ECE5DD] h-[380px] overflow-y-auto p-3 space-y-2"
          aria-live="polite"
        >
          {messages.map((message, i) => (
            <div
              key={i}
              className={cn("flex", message.from === "user" ? "justify-end" : "justify-start")}
            >
              <div
                className={cn(
                  "max-w-[80%] rounded-lg px-3 py-2 text-[13px] leading-snug text-[#111B21] shadow-sm whitespace-pre-line",
                  message.from === "user"
                    ? "bg-[#DCF8C6] rounded-tr-none"
                    : "bg-white rounded-tl-none"
                )}
              >
                {message.text}
                <span className="flex items-center justify-end gap-1 mt-1 text-[10px] text-[#667781]">
                  {now()}
                  {message.from === "user" ? (
                    <CheckCheck size={13} className="text-[#53BDEB]" />
                  ) : (
                    <Check size={13} className="opacity-0" />
                  )}
                </span>
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex justify-start">
              <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 shadow-sm">
                <span className="inline-flex gap-1">
                  <span className="w-1.5 h-1.5 bg-[#667781] rounded-full animate-bounce [animation-delay:0ms]" />
                  <span className="w-1.5 h-1.5 bg-[#667781] rounded-full animate-bounce [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 bg-[#667781] rounded-full animate-bounce [animation-delay:300ms]" />
                </span>
              </div>
            </div>
          )}

          <noscript>
            <p className="text-xs text-[#667781] bg-white rounded-lg p-3">
              This interactive demo needs JavaScript. The flow it shows: browse books → pick →
              confirm → mobile money payment → receipt — all inside WhatsApp.
            </p>
          </noscript>
        </div>

        {/* Quick replies / CTA */}
        <div className="bg-[#F0F2F5] px-3 py-3 min-h-[58px]">
          {step?.replies && (
            <div className="flex flex-wrap gap-2">
              {step.replies.map((r) => (
                <button
                  key={r.label}
                  onClick={() => reply(r.label, r.next)}
                  className="text-[13px] text-[#00A884] font-medium bg-white border border-[#00A884]/40 rounded-full px-4 py-2 hover:bg-[#00A884] hover:text-white transition-colors"
                >
                  {r.label}
                </button>
              ))}
            </div>
          )}
          {step?.done && (
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-brand-gold text-white rounded-sm px-4 py-3 text-[11px] font-bold uppercase tracking-wider hover:bg-brand-gold-light transition-colors"
            >
              Want this for your business? Start a conversation <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </div>
      <p className="mt-3 text-[11px] text-brand-text-muted font-mono">
        Interactive demo — scripted front-end only. Real builds use the official Meta Cloud API.
      </p>
    </div>
  );
}
