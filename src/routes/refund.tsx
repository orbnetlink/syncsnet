import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/refund")({
  component: Refund,
});

export function Refund() {
  return (
    <Layout>
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-4">
          <Reveal>
            <h1 className="font-display text-4xl font-bold">Refund Policy</h1>
            <p className="mt-8 text-muted-foreground leading-relaxed">
              At Syncsnet, we strive to ensure our customers are satisfied with the guidance and assistance provided.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Refund Window</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Eligibility</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Eligibility for a refund depends on the service type and whether the assistance has already been delivered. Please contact our support team to discuss your specific situation and eligibility. We assess each request on an individual basis to determine if it meets our criteria.
            </p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
