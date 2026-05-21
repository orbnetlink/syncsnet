import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { Target, Heart, Sparkles, Award, Users, Globe } from "lucide-react";
import supportImg from "@/assets/support.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Syncsnet — Built on Reliability" },
      {
        name: "description",
        content: "Our story, mission and the team behind America's premium internet experience.",
      },
      { property: "og:title", content: "About Syncsnet" },
      {
        property: "og:description",
        content: "The story behind Syncsnet's premium internet service.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2014", title: "Founded", desc: "Started as a small regional ISP reseller." },
  { year: "2017", title: "100K customers", desc: "Hit our first major milestone." },
  { year: "2020", title: "Nationwide", desc: "Expanded to all 50 states with premium partners." },
  { year: "2023", title: "Fiber rollout", desc: "Launched our own multi-gig fiber footprint." },
  { year: "2026", title: "1.5M+ homes", desc: "Now serving over a million households nationwide." },
];

const values = [
  {
    icon: Target,
    t: "Reliability first",
    d: "Every plan, every install, every call — built to last.",
  },
  { icon: Heart, t: "Human support", d: "Real people, real answers, no robots in loops." },
  {
    icon: Sparkles,
    t: "Premium standard",
    d: "Top-tier equipment, certified pros, reliable connections.",
  },
];

function AboutPage() {
  return (
    <Layout>
      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              About us
            </span>
            <h1 className="mt-3 font-display text-5xl sm:text-7xl font-bold leading-[1.05]">
              Connecting <span className="text-gradient">homes</span>
              <br /> to what matters.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Syncsnet is a nationwide internet and cable specialist focused on one thing: making
              the experience of getting and using home internet actually feel premium.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal className="relative rounded-3xl overflow-hidden gradient-border">
            <img
              src={supportImg}
              alt="Syncsnet support team"
              width={1400}
              height={1000}
              loading="lazy"
              className="w-full h-auto"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl font-bold">
              Our <span className="text-gradient">mission</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Home internet should never be the bottleneck of your life. We exist to make sure every
              household — from one-bedroom apartments to multi-story smart homes — gets a connection
              that simply works, every single day.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { i: Users, n: 1500000, s: "+", l: "Customers served" },
                { i: Globe, n: 40, s: "+", l: "States covered" },
                { i: Award, n: 99, s: "%", l: "Satisfaction" },
                { i: Heart, n: 24, s: "/7", l: "Live support" },
              ].map((s) => (
                <div key={s.l} className="glass rounded-2xl p-5">
                  <s.i className="h-5 w-5 text-primary" />
                  <div className="mt-2 font-display text-2xl font-bold text-gradient">
                    <Counter to={s.n} suffix={s.s} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-4">
          <Reveal>
            <div className="text-center">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                Our journey
              </span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
                A decade of <span className="text-gradient">connection</span>.
              </h2>
            </div>
          </Reveal>
          <div className="relative mt-16">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.08}>
                  <div
                    className={`relative grid sm:grid-cols-2 gap-6 ${i % 2 ? "" : "sm:[&>*:first-child]:order-2"}`}
                  >
                    <div
                      className={`pl-12 sm:pl-0 ${i % 2 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}
                    >
                      <div className="glass rounded-2xl p-6">
                        <div className="font-display text-3xl font-bold text-gradient">
                          {t.year}
                        </div>
                        <div className="mt-2 font-display font-semibold">{t.title}</div>
                        <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                      </div>
                    </div>
                    <div className="hidden sm:block" />
                    <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-neon shadow-glow" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <Reveal>
              <h2 className="font-display text-4xl sm:text-5xl font-bold">
                What we <span className="text-gradient">stand for</span>.
              </h2>
            </Reveal>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.08}>
                <div className="glass rounded-3xl p-8 h-full hover:-translate-y-1 transition-all">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-neon flex items-center justify-center text-primary-foreground shadow-glow">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}



