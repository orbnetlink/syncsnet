import { Link } from "@tanstack/react-router";
import { Wifi, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3 group">
              <span className="font-display text-2xl font-bold tracking-tight">
                Syncs<span className="text-cyan-400">net</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Next-generation internet & cable built for the way modern households actually live,
              stream, work and play.
            </p>
            <form className="flex gap-2 max-w-sm">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-xl glass px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="rounded-xl bg-gradient-neon px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                Join
              </button>
            </form>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/privacy" className="hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-foreground">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-foreground">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-foreground">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Reach Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <a href="tel:+18882108563" className="hover:text-foreground">
                  (888) 210-8563
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary" /> hello@syncsnet.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" /> Available nationwide
              </li>
            </ul>
            <div className="flex gap-2 mt-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 rounded-lg glass flex items-center justify-center hover:bg-gradient-neon hover:text-primary-foreground transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Syncsnet Communications. All rights reserved.</p>
          <p>Syncsnet is an independent third-party service assistance provider. All trademarks belong to their respective owners.</p>
        </div>
      </div>
    </footer>
  );
}
