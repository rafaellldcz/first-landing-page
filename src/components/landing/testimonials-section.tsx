import { Quote } from "lucide-react";

import type { SiteConfig } from "@/data/site-config";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { SectionShell } from "@/components/landing/section-shell";

type TestimonialsSectionProps = {
  config: SiteConfig;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TestimonialsSection({ config }: TestimonialsSectionProps) {
  return (
    <SectionShell id="depoimentos">
      <div className="space-y-10 md:space-y-12">
        <Reveal>
          <SectionHeading
            badge="Depoimentos"
            title={config.testimonials.title}
            subtitle={config.testimonials.subtitle}
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {config.testimonials.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05}>
              <Card
                className={`h-full border border-white/10 ${
                  index === 0
                    ? "bg-[linear-gradient(145deg,rgba(60,125,255,0.15),rgba(17,28,49,0.8))] md:col-span-2"
                    : "bg-white/4"
                }`}
              >
                <CardHeader className="pb-0">
                  <Quote className="size-5 text-primary" />
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-sm leading-relaxed text-foreground/90">{item.quote}</p>
                  <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/6 text-sm font-semibold text-foreground">
                      {getInitials(item.name)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.role} | {item.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

