import { BadgeCheck, CheckCircle2 } from "lucide-react";

import type { SiteConfig } from "@/data/site-config";
import { Reveal } from "@/components/landing/reveal";
import { SectionShell } from "@/components/landing/section-shell";

type SocialProofSectionProps = {
  config: SiteConfig;
};

export function SocialProofSection({ config }: SocialProofSectionProps) {
  return (
    <SectionShell id="prova-social" className="pb-8 md:pb-12">
      <div className="rounded-3xl border border-white/10 bg-[linear-gradient(140deg,rgba(16,25,43,0.82),rgba(12,20,35,0.92))] p-6 shadow-[0_22px_55px_rgba(2,8,24,0.4)] md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal className="space-y-5">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-3 py-1 text-xs font-semibold tracking-[0.14em] uppercase text-primary">
              <BadgeCheck className="size-3.5" />
              Prova de confiança
            </p>
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-tight text-foreground md:text-4xl">
              Resultados que sustentam uma decisão de compra mais rápida
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              Em vez de promessas vagas, a seção de prova social reforça contexto, números e
              credibilidade para reduzir objeção logo no meio da jornada.
            </p>
            <div className="space-y-3">
              {config.socialProof.indicators.map((indicator) => (
                <p key={indicator} className="inline-flex items-start gap-2 text-sm text-foreground/90">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{indicator}</span>
                </p>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {config.socialProof.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.06}>
                <article
                  className={`h-full rounded-2xl border p-5 transition-transform hover:-translate-y-0.5 ${
                    index === 0
                      ? "border-primary/30 bg-[linear-gradient(145deg,rgba(60,125,255,0.16),rgba(18,29,49,0.85))] sm:col-span-2"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <p className="font-heading text-3xl font-semibold text-primary">{stat.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stat.label}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.08}>
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="mb-4 text-xs font-semibold tracking-[0.16em] uppercase text-muted-foreground">
              Marcas e operações atendidas (nomes ilustrativos)
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {config.socialProof.logos.map((logo) => (
                <div
                  key={logo}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-sm font-medium text-foreground/85"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
