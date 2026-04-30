export function Footer() {
  return (
    <footer className="bg-brand-surface-alt py-6 border-t border-brand-border h-16 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-mono text-brand-text-muted uppercase tracking-wider">Systems Online: Enterprise Architect Mode</span>
          </div>
        </div>
        <div className="text-[10px] font-mono text-brand-text-muted">
          Built with intention. © {new Date().getFullYear()} Justine Peterson Mahinyila
        </div>
      </div>
    </footer>
  );
}
