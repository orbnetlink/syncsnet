import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Syncsnet" },
      {
        name: "description",
        content: "The terms governing your use of Syncsnet services and website.",
      },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const sections = [
  {
    t: "Acceptance of Terms",
    b: "By accessing or using Syncsnet services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.",
  },
  {
    t: "Services",
    b: "Syncsnet acts as an authorized retailer of multiple internet, cable and home services providers. Specific service terms, speeds and availability are subject to the underlying provider and your address.",
  },
  {
    t: "Eligibility",
    b: "You must be at least 18 years of age and a legal resident of the United States to purchase services through Syncsnet.",
  },
  {
    t: "Billing",
    b: "Service charges are billed by the underlying provider. Syncsnet does not bill customers directly for monthly service. Any installation, equipment or one-time fees are disclosed before order confirmation.",
  },
  {
    t: "Cancellation",
    b: "Cancellation terms vary by provider. Most Syncsnet-recommended plans are no-contract, but please confirm with your representative before signing up.",
  },
  {
    t: "Limitation of Liability",
    b: "To the maximum extent permitted by law, Syncsnet is not liable for indirect, incidental or consequential damages arising from your use of any service.",
  },
  {
    t: "Changes to These Terms",
    b: "We may update these terms from time to time. Continued use of our services after changes are posted constitutes acceptance of the updated terms.",
  },
  {
    t: "Contact",
    b: "Questions about these terms? Email hello@syncsnet.com or call (888) 765-9560.",
  },
];

function TermsPage() {
  return (
    <Layout>
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Legal
            </span>
            <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold">
              Terms & <span className="text-gradient">Conditions</span>
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
