import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Syncsnet" },
      {
        name: "description",
        content: "How Syncsnet collects, uses and protects your personal information.",
      },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    t: "Information We Collect",
    b: "We collect information you provide directly (name, address, phone, email) when you request service, contact support or sign up for our newsletter. We also collect technical data such as device type and IP address when you use our website.",
  },
  {
    t: "How We Use Your Information",
    b: "We use your information to provide and improve our services, process orders, communicate with you about your account, respond to support requests and send you marketing communications when you opt in.",
  },
  {
    t: "Information Sharing",
    b: "We share your information only with the providers required to deliver service to you (e.g. Spectrum, Verizon, Xfinity, AT&T, Frontier), with payment processors, and where required by law. We never sell your personal data.",
  },
  {
    t: "Data Security",
    b: "We use industry-standard encryption, access controls and ongoing security reviews to protect your information against unauthorized access, disclosure or alteration.",
  },
  {
    t: "Your Rights",
    b: "You may request access to, correction of, or deletion of your personal information at any time by contacting hello@syncsnet.com. You may also opt out of marketing communications at any time.",
  },
  {
    t: "Cookies",
    b: "Our website uses cookies and similar technologies to remember preferences, measure traffic and improve performance. You may disable cookies in your browser settings.",
  },
  {
    t: "Contact",
    b: "Questions about this policy? Email hello@syncsnet.com or call (888) 210-8563.",
  },
];

function PrivacyPage() {
  return (
    <Layout>
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Legal
            </span>
            <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: May 2026</p>
          </Reveal>
          <div className="mt-12 space-y-8">
            {sections.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.04}>
                <div className="glass rounded-2xl p-6">
                  <h2 className="font-display text-xl font-bold">{s.t}</h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}



