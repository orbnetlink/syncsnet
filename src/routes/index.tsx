import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Zap,
  Tv,
  Gamepad2,
  Home,
  ShieldCheck,
  Download,
  Wifi,
  Headphones,
  Wrench,
  DollarSign,
  Activity,
  MapPin,
  Check,
  Star,
  ChevronDown,
  Phone,
  ArrowRight,
  Sparkles,
  Video,
  Briefcase,
  Cable,
} from "lucide-react";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import heroImg from "@/assets/hero-smarthome.jpg";
import routerImg from "@/assets/router.jpg";
import gamingImg from "@/assets/gaming.jpg";
import remoteImg from "@/assets/remote-work.jpg";
import networkBg from "@/assets/network-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Syncsnet — Next-Generation Internet for Modern Living" },
      {
        name: "description",
        content:
          "Experience lightning-fast speeds, seamless streaming and reliable connectivity. Internet, cable and smart-home plans starting today.",
      },
      { property: "og:title", content: "Syncsnet — Next-Generation Internet" },
      {
        property: "og:description",
        content: "Lightning-fast internet built for streaming, gaming and smart homes.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Providers />
      <SmartHome />
      <WhyUs />
      <Testimonials />
      <FinalCTA />
      <div className="text-center text-[10px] text-muted-foreground p-4 bg-secondary/5">
        Syncsnet is an independent third-party service assistance provider. We are not affiliated
        with, authorized by, or endorsed by any internet, cable, or telecom service provider.
      </div>
    </Layout>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] -mt-24 pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div
        className="absolute inset-0 opacity-30 animate-drift"
        style={{
          backgroundImage: `url(${networkBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
        }}
      />
      <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />
      <div className="absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-accent/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-24">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Fiber rollout now in 40+ states
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              Next-Generation
              <br />
              Internet for
              <br />
              <span className="text-gradient">Modern Living.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 max-w-xl text-lg text-muted-foreground"
            >
              Experience lightning-fast speeds, seamless streaming and reliable connectivity built
              for today's digital lifestyle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="tel:+18882108563"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-neon px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow-accent transition-all hover:scale-[1.03]"
              >
                Get Connected{" "}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+18882108563"
                className="inline-flex items-center gap-2 rounded-2xl glass-strong px-6 py-3.5 text-sm font-semibold hover:bg-secondary/80 transition-all"
              >
                <Phone className="h-4 w-4 text-primary" /> (888) 210-8563
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { v: 99.9, s: "%", l: "Uptime" },
                { v: 2, s: "Gbps", l: "Top speed" },
                { v: 24, s: "/7", l: "Support" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-bold text-gradient">
                    <Counter to={s.v} suffix={s.s} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden gradient-border shadow-elevated">
              <img
                src={heroImg}
                alt="Family streaming on smart home TV"
                width={1600}
                height={1100}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
            </div>

            <SpeedMeter />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 glass-strong rounded-2xl p-4 shadow-glow"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-neon flex items-center justify-center">
                  <Download className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Downloading 4K</div>
                  <div className="font-display font-bold">12.4s left</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SpeedMeter() {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -bottom-8 -left-4 sm:-left-10 glass-strong rounded-2xl p-5 w-64 shadow-glow"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-muted-foreground">Live speed</span>
        <span className="flex items-center gap-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Active
        </span>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="font-display text-4xl font-bold text-gradient">940</span>
        <span className="text-sm text-muted-foreground">Mbps</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "92%" }}
          transition={{ duration: 1.8, delay: 0.6, ease: "easeOut" }}
          className="h-full bg-gradient-neon"
        />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-[10px] text-muted-foreground">
        <div>↓ 940 Mbps</div>
        <div>↑ 880 Mbps</div>
      </div>
    </motion.div>
  );
}

function Experience() {
  const features = [
    {
      icon: Tv,
      title: "Buffer-Free Streaming",
      desc: "4K, 8K and HDR with zero stuttering, across every screen.",
    },
    {
      icon: Download,
      title: "Ultra Fast Downloads",
      desc: "Multi-gigabit speeds that finish big files in seconds.",
    },
    {
      icon: Gamepad2,
      title: "Gaming Optimized",
      desc: "Ultra-low ping routing for the most competitive sessions.",
    },
    {
      icon: Home,
      title: "Smart Home Ready",
      desc: "Mesh-ready WiFi 6E that handles 100+ devices at once.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Connectivity",
      desc: "Built-in security shield protects every device on your network.",
    },
  ];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
          <Reveal className="relative">
            <div className="relative rounded-3xl overflow-hidden gradient-border">
              <img
                src={routerImg}
                alt="Fiber router"
                width={1200}
                height={1200}
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -right-4 top-8 glass-strong rounded-2xl px-4 py-3"
            >
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-primary" />
                <div>
                  <div className="text-[10px] text-muted-foreground">Latency</div>
                  <div className="font-display font-bold">4 ms</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -left-4 bottom-8 glass-strong rounded-2xl px-4 py-3"
            >
              <div className="flex items-center gap-2">
                <Wifi className="h-4 w-4 text-primary" />
                <div>
                  <div className="text-[10px] text-muted-foreground">Devices</div>
                  <div className="font-display font-bold">128 connected</div>
                </div>
              </div>
            </motion.div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                The experience
              </span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
                Internet that finally <span className="text-gradient">keeps up</span> with how you
                live.
              </h2>
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.08}>
                  <div className="group glass rounded-2xl p-5 h-full hover:bg-secondary/40 transition-all hover:-translate-y-1">
                    <div className="h-10 w-10 rounded-xl bg-gradient-neon/20 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-gradient-neon group-hover:text-primary-foreground transition-all">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display font-semibold">{f.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Providers() {
  const providers = ["Spectrum", "Verizon", "Xfinity", "AT&T", "Frontier"];
  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${networkBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Coverage
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
              One call. <span className="text-gradient">Every major network.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              We work with America's top providers to find the right plan, speed and options in your
              zip code.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4">
          {providers.map((p, i) => (
            <Reveal key={p} delay={i * 0.06}>
              <div className="group relative glass rounded-2xl p-8 text-center hover:bg-secondary/40 transition-all hover:-translate-y-1 cursor-default">
                <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-neon blur-xl -z-10" />
                <div className="font-display text-xl font-bold tracking-tight group-hover:text-gradient transition-all">
                  {p}
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                  Available
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SmartHome() {
  const items = [
    { icon: Tv, t: "Streaming", d: "4K & 8K across every TV." },
    { icon: Gamepad2, t: "Gaming", d: "Sub-10ms latency routing." },
    { icon: Briefcase, t: "Remote work", d: "Lag-free video calls all day." },
    { icon: Video, t: "Video chat", d: "Crystal clear, no freezes." },
    { icon: Home, t: "Smart home", d: "Hundreds of devices, one mesh." },
  ];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                Smart Home
              </span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
                One network. <span className="text-gradient">Every device.</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-lg">
                From the gaming rig to the smart fridge, Syncsnet keeps everything in your home
                running fast and stable, all the time.
              </p>
            </Reveal>
            <div className="mt-10 space-y-3">
              {items.map((it, i) => (
                <Reveal key={it.t} delay={i * 0.06}>
                  <div className="glass rounded-2xl p-4 flex items-center gap-4 hover:bg-secondary/40 transition-all">
                    <div className="h-11 w-11 rounded-xl bg-gradient-neon/15 border border-primary/30 flex items-center justify-center text-primary">
                      <it.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-display font-semibold">{it.t}</div>
                      <div className="text-sm text-muted-foreground">{it.d}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden gradient-border">
                  <img
                    src={gamingImg}
                    alt="Gaming setup"
                    width={1400}
                    height={1000}
                    loading="lazy"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="glass rounded-2xl p-5">
                  <Gamepad2 className="h-6 w-6 text-primary" />
                  <div className="mt-2 font-display font-bold text-2xl text-gradient">4 ms</div>
                  <div className="text-xs text-muted-foreground">Average gaming latency</div>
                </div>
              </div>
              <div className="space-y-4 sm:mt-12">
                <div className="glass rounded-2xl p-5">
                  <Video className="h-6 w-6 text-primary" />
                  <div className="mt-2 font-display font-bold text-2xl text-gradient">100%</div>
                  <div className="text-xs text-muted-foreground">HD video call quality</div>
                </div>
                <div className="rounded-2xl overflow-hidden gradient-border">
                  <img
                    src={remoteImg}
                    alt="Remote work"
                    width={1400}
                    height={1000}
                    loading="lazy"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: Headphones, t: "24/7 Support", d: "Real humans answer in under 2 minutes." },
    { icon: Wrench, t: "Professional Installation", d: "Certified techs handle setup, free." },
    { icon: Zap, t: "Multi-Gig Speeds", d: "Up to 2 Gbps for your most demanding needs." },
    { icon: ShieldCheck, t: "Reliable Service", d: "99.9% uptime backed by SLA." },
    { icon: MapPin, t: "Nationwide Coverage", d: "Service in 40+ states and growing." },
    { icon: Star, t: "Premium Features", d: "WiFi 6E, security shields and more." },
  ];
  const stats = [
    { n: 1500000, s: "+", l: "Happy customers" },
    { n: 99, s: "%", l: "Satisfaction" },
    { n: 40, s: "+", l: "States covered" },
    { n: 2, s: "min", l: "Avg wait time" },
  ];
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Why Syncsnet
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
              The unfair <span className="text-gradient">advantage.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              We don't just provide internet. We provide the infrastructure for your entire digital
              life.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.05}>
              <div className="group glass rounded-3xl p-8 hover:bg-secondary/40 transition-all hover:-translate-y-1">
                <div className="h-12 w-12 rounded-2xl bg-gradient-neon flex items-center justify-center text-primary-foreground shadow-glow group-hover:scale-110 transition-transform">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold">{it.t}</h3>
                <p className="mt-2 text-muted-foreground">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 glass-strong gradient-border rounded-3xl p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={i * 0.1}>
                <div>
                  <div className="font-display text-4xl sm:text-5xl font-bold text-gradient">
                    <Counter to={s.n} suffix={s.s} />
                  </div>
                  <div className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-widest">
                    {s.l}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      name: "Sarah M.",
      city: "Austin, TX",
      rating: 5,
      text: "Switched from cable and never looked back. Install was clean and the speeds are unreal — entire family is streaming in 4K without a hiccup.",
    },
    {
      name: "Jamal R.",
      city: "Chicago, IL",
      rating: 5,
      text: "I work from home and my partner streams all day. Syncsnet finally gave us a connection that doesn't choke. Support actually picks up too.",
    },
    {
      name: "Priya K.",
      city: "Seattle, WA",
      rating: 5,
      text: "Pro install, no upsells, no surprise fees. The router they sent covers our entire 3-story home. Easily the best ISP experience I've had.",
    },
    {
      name: "Diego L.",
      city: "Miami, FL",
      rating: 5,
      text: "Online gaming is finally lag-free. My ping dropped from 60 to under 10ms. Worth every dollar of the Fiber Ultra plan.",
    },
  ];
  const [i, setI] = useState(0);
  const r = reviews[i];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <Reveal>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Customer stories
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
              Loved by <span className="text-gradient">1.5M+ households.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 glass-strong gradient-border rounded-3xl p-8 sm:p-12 shadow-elevated">
            <div className="flex gap-1 mb-5">
              {Array.from({ length: r.rating }).map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <motion.p
              key={r.text}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-xl sm:text-2xl leading-snug"
            >
              "{r.text}"
            </motion.p>
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-neon flex items-center justify-center font-display font-bold text-primary-foreground">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-display font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.city}</div>
                </div>
              </div>
              <div className="flex gap-1.5">
                {reviews.map((_, k) => (
                  <button
                    key={k}
                    onClick={() => setI(k)}
                    aria-label={`Story ${k + 1}`}
                    className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-gradient-neon" : "w-2 bg-secondary"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-[40px] glass-strong gradient-border p-12 sm:p-20 text-center shadow-elevated">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/20 blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-accent/20 blur-[100px] -z-10" />

            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-5xl sm:text-7xl font-bold leading-[1.1]">
                Ready for <span className="text-gradient">faster internet?</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Talk to a real human in under 2 minutes. We'll check the best plans in your zip code
                and lock in your install date today.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+18882108563"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-neon px-8 py-4 text-base font-bold text-primary-foreground shadow-glow hover:scale-105 transition-all"
                >
                  <Phone className="h-5 w-5" /> (888) 210-8563
                </a>
                <a
                  href="tel:+18882108563"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl glass px-8 py-4 text-base font-bold hover:bg-secondary transition-all"
                >
                  Get Started Now <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-12 pt-10 border-t border-border/30">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                  Or have us call you
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-col md:flex-row gap-3"
                >
                  <input
                    className="flex-1 rounded-xl bg-input/60 px-5 py-3.5 text-sm outline-none focus:ring-2 focus:ring-primary border border-border/50"
                    placeholder="Your Name"
                  />
                  <input
                    className="flex-1 rounded-xl bg-input/60 px-5 py-3.5 text-sm outline-none focus:ring-2 focus:ring-primary border border-border/50"
                    placeholder="Phone Number"
                  />
                  <button className="md:w-auto rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-all">
                    Request Call
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
