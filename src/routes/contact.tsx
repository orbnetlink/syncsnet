import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Phone, Mail, MapPin, Clock, Search } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Syncsnet — Call (888) 210-8563" },
      {
        name: "description",
        content:
          "Get in touch with Syncsnet. Check availability in your zip code or request a callback.",
      },
      { property: "og:title", content: "Contact Syncsnet" },
      { property: "og:description", content: "Talk to a real human in under 2 minutes." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [zip, setZip] = useState("");
  const [checked, setChecked] = useState<null | "ok" | "no">(null);

  return (
    <Layout>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-primary/15 blur-[160px]" />
        <div className="relative mx-auto max-w-6xl px-4">
          <Reveal>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Contact
            </span>
            <h1 className="mt-3 font-display text-5xl sm:text-7xl font-bold leading-[1.05]">
              Let's get you <span className="text-gradient">connected</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Call us, drop a message or check availability in your area. Real humans, real answers,
              no scripts.
            </p>
          </Reveal>

          <div className="mt-12 grid lg:grid-cols-[1.1fr_1fr] gap-8">
            <Reveal>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="glass-strong gradient-border rounded-3xl p-8 space-y-4"
              >
                <h2 className="font-display text-2xl font-bold">Send us a message</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  <input
                    className="rounded-xl bg-input/60 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Full name"
                  />
                  <input
                    className="rounded-xl bg-input/60 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Phone number"
                  />
                </div>
                <input
                  className="w-full rounded-xl bg-input/60 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Email"
                />
                <input
                  className="w-full rounded-xl bg-input/60 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Zip code"
                />
                <textarea
                  rows={5}
                  className="w-full rounded-xl bg-input/60 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="How can we help?"
                />
                <button className="w-full rounded-xl bg-gradient-neon px-4 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition-all">
                  Send message
                </button>
              </form>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={0.1}>
                <div className="glass rounded-2xl p-6">
                  <h3 className="font-display text-lg font-bold flex items-center gap-2">
                    <Search className="h-5 w-5 text-primary" /> Check availability
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Enter your zip code to see plans in your area.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <input
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      placeholder="e.g. 78701"
                      className="flex-1 rounded-xl bg-input/60 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button
                      onClick={() => setChecked(zip.length >= 5 ? "ok" : "no")}
                      className="rounded-xl bg-gradient-neon px-5 py-3 text-sm font-semibold text-primary-foreground"
                    >
                      Check
                    </button>
                  </div>
                  {checked === "ok" && (
                    <div className="mt-4 rounded-xl bg-primary/10 border border-primary/30 p-4 text-sm">
                      <span className="text-primary font-semibold">Available!</span> Fiber and cable
                      plans found in {zip}. Call us to get started.
                    </div>
                  )}
                  {checked === "no" && (
                    <div className="mt-4 rounded-xl bg-destructive/10 border border-destructive/30 p-4 text-sm">
                      Please enter a valid 5-digit zip code.
                    </div>
                  )}
                </div>
              </Reveal>

              {[
                { i: Phone, t: "Call us", v: "(888) 210-8563", href: "tel:+18882108563" },
                { i: Mail, t: "Email", v: "hello@syncsnet.com", href: "mailto:hello@syncsnet.com" },
                { i: Clock, t: "Hours", v: "24/7 — always on" },
                { i: MapPin, t: "Coverage", v: "Nationwide — 40+ states" },
              ].map((c, i) => (
                <Reveal key={c.t} delay={0.15 + i * 0.05}>
                  <a
                    href={c.href ?? "#"}
                    className="glass rounded-2xl p-5 flex items-center gap-4 hover:bg-secondary/40 transition-all"
                  >
                    <div className="h-11 w-11 rounded-xl bg-gradient-neon/15 border border-primary/30 flex items-center justify-center text-primary">
                      <c.i className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{c.t}</div>
                      <div className="font-display font-semibold">{c.v}</div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <div className="relative h-80 rounded-3xl overflow-hidden gradient-border">
              <div className="absolute inset-0 grid-pattern" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-10 w-10 mx-auto text-primary" />
                  <p className="mt-3 font-display text-2xl font-bold">
                    Available in 40+ states across the U.S.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Call to confirm coverage in your area.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
