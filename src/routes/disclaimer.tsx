import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/disclaimer")({
  component: Disclaimer,
});

export function Disclaimer() {
  return (
    <Layout>
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-4">
          <Reveal>
            <h1 className="font-display text-4xl font-bold">Disclaimer</h1>
            <p className="mt-8 text-muted-foreground leading-relaxed">
              <strong>Syncsnet</strong> is an independent third-party service assistance provider.
              We are not affiliated with, authorized by, or endorsed by any internet, broadband, or
              cable TV service provider. Brand names, if mentioned, are used strictly for
              informational purposes only.
            </p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
