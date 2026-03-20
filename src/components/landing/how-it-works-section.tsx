import type { SiteConfig } from "@/data/site-config";
import { getIcon } from "@/components/landing/icon-map";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { SectionShell } from "@/components/landing/section-shell";

type HowItWorksSectionProps = {
  config: SiteConfig;
};

export function HowItWorksSection({ config }: HowItWorksSectionProps) {
  return (
    <SectionShell id="como-funciona" className="relative overflow-hidden">
      <div className="space-y-10 md:space-y-12">
        <Reveal>
          <SectionHeading
            badge="Processo"
            title={config.process.title}
            subtitle={config.process.subtitle}
          />
        </Reveal>

        <div className="relative grid gap-5 md:grid-cols-2">
          <span
            className="pointer-events-none absolute bottom-5 left-5 top-5 hidden w-px bg-white/12 md:block"
            aria-hidden
          />
          {config.process.steps.map((step, index) => {
            const Icon = getIcon(step.icon);
            const isEven = index % 2 === 0;

            return (
              <Reveal key={step.title} delay={index * 0.07}>
                <article
                  className={`relative h-full rounded-2xl border p-6 ${
                    isEven
                      ? "border-white/10 bg-white/4"
                      : "border-primary/20 bg-[linear-gradient(145deg,rgba(60,125,255,0.14),rgba(14,22,38,0.78))]"
                  }`}
                >
                  <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/12 bg-white/5 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold tracking-[0.14em] uppercase text-muted-foreground">
                      Etapa {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-heading text-xl font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}

