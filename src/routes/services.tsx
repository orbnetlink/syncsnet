import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Cable, Tv, Wifi, Film, Briefcase, Home, Check, ArrowRight } from "lucide-react";
import routerImg from "@/assets/router.jpg";
import gamingImg from "@/assets/gaming.jpg";
import remoteImg from "@/assets/remote-work.jpg";
import heroImg from "@/assets/hero-smarthome.jpg";
import supportImg from "@/assets/support.jpg";
import networkBg from "@/assets/network-bg.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Fiber, Cable, WiFi & More | Syncsnet" },
      {
        name: "description",
        content:
          "Fiber Internet, Cable TV, Home WiFi, Streaming Packages, Business Internet and Smart Home Solutions.",
      },
      { property: "og:title", content: "Syncsnet Services" },
      { property: "og:description", content: "Premium home & business connectivity services." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Cable,
    t: "Fiber Internet",
    img: routerImg,
    d: "Pure symmetrical fiber up to 2 Gbps with sub-10ms latency. Built on next-generation optical infrastructure.",
    f: ["Symmetric up/down", "Sub-10ms latency", "Unlimited data", "Multi-gig router"],
  },
  {
    icon: Tv,
    t: "Cable TV",
    img: heroImg,
    d: "200+ channels including premium sports, movies and family content in stunning 4K.",
    f: ["4K live TV", "Cloud DVR included", "Premium add-ons", "Multi-room viewing"],
  },
  {
    icon: Wifi,
    t: "Home WiFi",
    img: networkBg,
    d: "WiFi 6E mesh systems that blanket your entire home in seamless coverage.",
    f: ["Whole-home mesh", "Smart device priority", "Parental controls", "Built-in security"],
  },
  {
    icon: Film,
    t: "Streaming Packages",
    img: gamingImg,
    d: "Bundle top streaming services with your internet for one simple bill.",
    f: ["Netflix, Disney+, Max", "Live sports add-ons", "Single bill", "No contracts"],
  },
  {
    icon: Briefcase,
    t: "Business Internet",
    img: remoteImg,
    d: "Enterprise-grade fiber with SLA-backed uptime and dedicated support.",
    f: ["99.99% SLA uptime", "Static IPs available", "Priority support", "Scalable bandwidth"],
  },
  {
    icon: Home,
    t: "Smart Home Solutions",
    img: supportImg,
    d: "Pro-installed mesh networks, smart thermostats, cameras and voice integration.",
    f: ["Pro installation", "Hub integration", "24/7 monitoring", "Single-app control"],
  },
];

function ServicesPage() {
  return (
    <Layout>
      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Services
            </span>
            <h1 className="mt-3 font-display text-5xl sm:text-7xl font-bold leading-[1.05]">
              Built for every <span className="text-gradient">connected moment</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Six tightly-engineered services that work brilliantly on their own — and even better
              together.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-12">
        <div className="mx-auto max-w-6xl px-4 space-y-24">
          {services.map((s, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={s.t}>
                <div
                  className={`grid lg:grid-cols-2 gap-10 items-center ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className="relative rounded-3xl overflow-hidden gradient-border">
                    <img
                      src={s.img}
                      alt={s.t}
                      width={1400}
                      height={1000}
                      loading="lazy"
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  <div>
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-neon text-primary-foreground shadow-glow">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">{s.t}</h2>
                    <p className="mt-3 text-muted-foreground">{s.d}</p>
                    <ul className="mt-6 grid sm:grid-cols-2 gap-2.5">
                      {s.f.map((it) => (
                        <li key={it} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary" /> {it}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="tel:+18882108563"
                      className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-neon px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.03] transition-all"
                    >
                      Get {s.t} <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
