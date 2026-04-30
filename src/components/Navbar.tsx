import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Ventures", href: "#ventures" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Stack", href: "#stack" },
  { name: "Thinking", href: "#writing" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-brand-surface/80 backdrop-blur-md border-b border-brand-border py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="text-sm font-semibold tracking-tight text-brand-text flex items-center gap-3 group">
          <span className="w-8 h-8 rounded-sm bg-gradient-to-br from-brand-gold-light to-brand-gold flex items-center justify-center text-xs font-bold text-white italic transition-transform group-hover:scale-105">
            JC
          </span>
          <span className="hidden sm:inline-block">justinecodez</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-brand-text-muted hover:text-brand-gold transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-brand-text-muted hover:text-brand-text transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <div 
        className={cn(
          "fixed inset-0 bg-brand-surface/95 backdrop-blur-xl z-50 transition-transform duration-300 flex flex-col items-center justify-center",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button 
          className="absolute top-6 right-6 p-2 text-brand-text-muted hover:text-brand-text"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        
        <nav className="w-full px-12">
          <ul className="flex flex-col items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-heading text-2xl font-medium text-brand-text-muted hover:text-brand-text transition-colors block text-center"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
