"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-brand-surface/80 backdrop-blur-md border-b border-brand-border py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-brand-text flex items-center gap-3 group"
        >
          <span className="w-8 h-8 rounded-sm bg-gradient-to-br from-brand-gold-light to-brand-gold flex items-center justify-center text-xs font-bold text-white italic transition-transform group-hover:scale-105">
            JC
          </span>
          <span className="hidden sm:inline-block">justinecodez</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "font-sans text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-brand-gold",
                    pathname === item.href || pathname.startsWith(item.href + "/")
                      ? "text-brand-gold"
                      : "text-brand-text-muted"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("cmdk:open"))}
            className="flex items-center gap-1.5 text-[10px] font-mono text-brand-text-muted border border-brand-border rounded-sm px-2 py-1.5 hover:border-brand-gold hover:text-brand-gold transition-colors"
            aria-label="Open command palette"
          >
            <kbd>⌘</kbd>
            <kbd>K</kbd>
          </button>
          <Link
            href="/contact"
            className="bg-brand-gold text-white hover:bg-brand-gold-light rounded-sm px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] transition-colors"
          >
            Start a conversation
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-brand-text-muted hover:text-brand-text transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 bg-brand-surface/95 backdrop-blur-xl z-50 transition-transform duration-300 flex flex-col items-center justify-center",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          className="absolute top-6 right-6 p-2 text-brand-text-muted hover:text-brand-text"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        <nav className="w-full px-12">
          <ul className="flex flex-col items-center gap-6">
            <li>
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading text-2xl font-medium text-brand-text-muted hover:text-brand-text transition-colors block text-center"
              >
                Home
              </Link>
            </li>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-heading text-2xl font-medium text-brand-text-muted hover:text-brand-text transition-colors block text-center"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-brand-gold text-white rounded-sm px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] block"
              >
                Start a conversation
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
