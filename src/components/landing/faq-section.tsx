import type { SiteConfig } from "@/data/site-config";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { SectionShell } from "@/components/landing/section-shell";

type FaqSectionProps = {
  config: SiteConfig;
};

export function FaqSection({ config }: FaqSectionProps) {
  return (
    <SectionShell id="faq">
      <div className="space-y-10 md:space-y-12">
        <Reveal>
          <SectionHeading
            badge="FAQ"
            title={config.faq.title}
            subtitle={config.faq.subtitle}
          />
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(16,25,43,0.78),rgba(10,16,29,0.9))] px-5 py-3 md:px-7">
            <Accordion
              defaultValue={config.faq.items[0] ? [config.faq.items[0].question] : []}
            >
              {config.faq.items.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger className="py-4 text-base text-foreground hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

