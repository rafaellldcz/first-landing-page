import type { SiteConfig } from "@/data/site-config";
import { themeTokens } from "@/data/theme";
import { AnchorLink } from "@/components/landing/anchor-link";
import { Reveal } from "@/components/landing/reveal";
import { SectionShell } from "@/components/landing/section-shell";

type FinalCtaSectionProps = {
  config: SiteConfig;
};

export function FinalCtaSection({ config }: FinalCtaSectionProps) {
  return (
    <SectionShell id="cta-final" className="pt-10 md:pt-12">
      <Reveal>
        <div
          className="relative overflow-hidden rounded-3xl border border-white/15 px-6 py-10 shadow-[0_24px_70px_rgba(2,8,24,0.55)] md:px-10 md:py-12"
          style={{ background: themeTokens.gradients.cta }}
        >
          <div
            className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-12 h-64 w-64 rounded-full bg-cyan-300/15 blur-3xl"
            aria-hidden
          />
          <div className="mx-auto flex max-w-4xl flex-col gap-6 text-center">
            <p className="mx-auto inline-flex rounded-full border border-white/20 bg-white/6 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase text-white/90">
              Próximo passo
            </p>
            <h2 className="font-heading text-3xl leading-tight font-semibold tracking-tight text-white md:text-4xl">
              {config.finalCta.title}
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-100/85 md:text-lg">
              {config.finalCta.subtitle}
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <AnchorLink
                href={config.finalCta.primaryCta.href}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {config.finalCta.primaryCta.label}
              </AnchorLink>
              <AnchorLink
                href={config.finalCta.secondaryCta.href}
                className="inline-flex h-11 items-center justify-center rounded-xl border border-white/30 bg-white/8 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                {config.finalCta.secondaryCta.label}
              </AnchorLink>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
