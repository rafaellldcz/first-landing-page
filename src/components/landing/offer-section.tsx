import { CheckCircle2, XCircle } from "lucide-react";

import type { SiteConfig } from "@/data/site-config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { SectionShell } from "@/components/landing/section-shell";

type OfferSectionProps = {
  config: SiteConfig;
};

export function OfferSection({ config }: OfferSectionProps) {
  return (
    <SectionShell id="oferta" className="relative overflow-hidden">
      <div className="space-y-10 md:space-y-12">
        <Reveal>
          <SectionHeading
            badge="Oferta"
            title={config.offer.title}
            subtitle={config.offer.subtitle}
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Card className="h-full border border-white/10 bg-[linear-gradient(150deg,rgba(60,125,255,0.15),rgba(15,24,42,0.85))]">
              <CardHeader>
                <CardTitle className="text-xl">O que está incluído</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {config.offer.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-xl border border-white/10 bg-white/4 p-4"
                  >
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="h-full border border-white/10 bg-[#0F182A]/80">
              <CardHeader>
                <CardTitle className="text-xl">Comparativo rápido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {config.offer.comparison.map((row) => (
                  <div key={row.oldWay} className="space-y-2 rounded-xl border border-white/10 p-4">
                    <p className="inline-flex items-start gap-2 text-sm text-muted-foreground">
                      <XCircle className="mt-0.5 size-4 text-rose-300" />
                      <span>{row.oldWay}</span>
                    </p>
                    <p className="inline-flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 text-emerald-300" />
                      <span>{row.withYou}</span>
                    </p>
                  </div>
                ))}
                <div className="rounded-xl border border-primary/25 bg-primary/10 p-4">
                  <p className="text-sm font-semibold text-foreground">
                    Direcionamento claro para decisão:
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    toda seção reforça valor, reduz objeção e aproxima o visitante do envio do
                    formulário.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}

