import type { SiteConfig } from "@/data/site-config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getIcon } from "@/components/landing/icon-map";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { SectionShell } from "@/components/landing/section-shell";

type BenefitsSectionProps = {
  config: SiteConfig;
};

export function BenefitsSection({ config }: BenefitsSectionProps) {
  return (
    <SectionShell id="beneficios" className="relative">
      <div className="space-y-10 md:space-y-12">
        <Reveal>
          <SectionHeading
            badge="Benefícios"
            title={config.benefits.title}
            subtitle={config.benefits.subtitle}
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {config.benefits.items.map((benefit, index) => {
            const Icon = getIcon(benefit.icon);
            const isFeatured = index === 0;

            return (
              <Reveal key={benefit.title} delay={index * 0.05}>
                <Card
                  className={`h-full border border-white/10 ${
                    isFeatured
                      ? "bg-[linear-gradient(140deg,rgba(60,125,255,0.16),rgba(16,25,43,0.8))] lg:col-span-2"
                      : "bg-[#10192B]/70"
                  }`}
                >
                  <CardHeader className="space-y-3 pb-0">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-white/5 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="text-lg leading-snug">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}

