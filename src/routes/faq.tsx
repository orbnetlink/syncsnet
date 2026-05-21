import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
});

export function FAQPage() {
  const faqs = [
    {
      q: "Are you an official cable or internet service provider?",
      a: "No. We are an independent third-party assistance platform. Syncsnet is not affiliated with, authorized by, or endorsed by any service provider.",
    },
    {
      q: "Do you sell internet, cable, or streaming plans?",
      a: "No. We provide guidance, informational support, and assistance only.",
    },
    {
      q: "Do you charge for your services?",
      a: "Yes. Our service fees are separate from any provider charges you may incur.",
    },
    {
      q: "Will I still be billed by my service provider?",
      a: "Yes. Any billing from your chosen service provider remains unchanged.",
    },
    {
      q: "Do you need my account passwords or sensitive information?",
      a: "No. We never request your provider account passwords or sensitive financial credentials.",
    },
    {
      q: "Which providers do you support?",
      a: "We may reference multiple providers to offer general guidance; however, we have no affiliation with them.",
    },
    {
      q: "Are your services refundable?",
      a: "Yes. Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. Eligibility is subject to our Refund Policy terms.",
    },
  ];

  return (
    <Layout>
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-4">
          <Reveal>
            <h1 className="font-display text-4xl font-bold">Frequently Asked Questions</h1>
            <div className="mt-12 space-y-6">
              {faqs.map((f, i) => (
                <div key={i} className="glass p-6 rounded-2xl">
                  <h3 className="font-semibold text-foreground">{f.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
