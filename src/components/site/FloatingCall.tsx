import { Phone } from "lucide-react";

export function FloatingCall() {
  return (
    <a
      href="tel:+18887659560"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 rounded-full bg-gradient-neon pl-4 pr-5 py-3.5 shadow-glow animate-pulse-glow hover:scale-105 transition-all"
      aria-label="Call now"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-background/20">
        <Phone className="h-4 w-4 text-primary-foreground" />
        <span className="absolute inset-0 rounded-full animate-ping bg-primary-foreground/30" />
      </span>
      <span className="hidden sm:block text-sm font-semibold text-primary-foreground">
        Call Now
      </span>
    </a>
  );
}
