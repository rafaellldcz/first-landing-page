import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

import type { SiteConfig } from "@/data/site-config";
import { themeTokens } from "@/data/theme";
import { AnchorLink } from "@/components/landing/anchor-link";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/landing/reveal";
import { SectionShell } from "@/components/landing/section-shell";

type HeroSectionProps = {
  config: SiteConfig;
};

export function HeroSection({ config }: HeroSectionProps) {
  return (
    <SectionShell
      id="inicio"
      className="relative overflow-hidden pt-10 md:pt-16"
      containerClassName="relative"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px]"
        style={{ background: themeTokens.gradients.heroGlow }}
        aria-hidden
      />

      <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <Reveal className="space-y-7 md:space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase text-primary">
            <ShieldCheck className="size-3.5" />
            {config.hero.badge}
          </p>

          <div className="space-y-5">
            <h1 className="font-heading text-4xl leading-[1.1] font-semibold tracking-tight text-balance text-foreground md:text-5xl xl:text-6xl">
              {config.hero.title} <span className="text-primary">{config.hero.highlight}</span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {config.hero.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <AnchorLink
              href={config.hero.primaryCta.href}
              className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {config.hero.primaryCta.label}
            </AnchorLink>
            <AnchorLink
              href={config.hero.secondaryCta.href}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-transparent px-5 text-sm font-medium text-foreground transition-colors hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {config.hero.secondaryCta.label}
              <ArrowRight className="size-4" />
            </AnchorLink>
          </div>

          <div className="space-y-4 border-t border-white/10 pt-5">
            <p className="text-sm font-medium text-foreground/95">{config.hero.trustLine}</p>
            <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-3">
              {config.hero.trustedBy.map((item) => (
                <li key={item} className="inline-flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative pb-18 md:pb-10">
          <Card className="overflow-hidden border border-white/12 bg-[#0F1728]/90 p-0 shadow-[0_20px_60px_rgba(2,8,24,0.45)]">
            <CardContent className="relative p-0">
              <Image
                src={config.hero.visual.imageSrc}
                alt={config.hero.visual.imageAlt}
                width={960}
                height={760}
                priority
                className="h-auto w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent" />
            </CardContent>
          </Card>

          <div className="absolute -bottom-2 left-4 right-4 grid gap-3 sm:left-6 sm:right-6 sm:grid-cols-2">
            <div className="rounded-xl border border-white/12 bg-[#0A1222]/95 p-4 shadow-xl backdrop-blur">
              <p className="font-heading text-3xl font-semibold text-primary">
                {config.hero.visual.metric}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{config.hero.visual.metricLabel}</p>
            </div>
            <div className="rounded-xl border border-white/12 bg-[#0A1222]/95 p-4 shadow-xl backdrop-blur">
              <p className="text-sm font-medium leading-relaxed text-foreground">
                {config.hero.visual.upliftLabel}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
