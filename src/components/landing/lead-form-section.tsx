"use client";

import { AlertCircle, CircleCheckBig, LoaderCircle, ShieldCheck } from "lucide-react";

import type { SiteConfig } from "@/data/site-config";
import { useLeadForm } from "@/hooks/use-lead-form";
import { Reveal } from "@/components/landing/reveal";
import { SectionHeading } from "@/components/landing/section-heading";
import { SectionShell } from "@/components/landing/section-shell";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type LeadFormSectionProps = {
  config: SiteConfig;
};

export function LeadFormSection({ config }: LeadFormSectionProps) {
  const { form, status, handleSubmit, isSubmitting } = useLeadForm();

  return (
    <SectionShell id="contato" className="relative">
      <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
        <Reveal className="space-y-6">
          <SectionHeading
            badge="Captura de leads"
            title={config.form.title}
            subtitle={config.form.subtitle}
          />
          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
              <ShieldCheck className="size-4 text-primary" />
              O que você recebe após o envio
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Diagnóstico rápido do seu posicionamento atual.</li>
              <li>Direção de estrutura e CTA para o seu objetivo comercial.</li>
              <li>Estimativa de prazo e escopo inicial recomendados.</li>
            </ul>
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">{config.form.privacy}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-white/12 bg-[linear-gradient(160deg,rgba(16,25,43,0.84),rgba(12,20,34,0.95))] p-6 shadow-[0_20px_50px_rgba(2,8,24,0.35)] md:p-8"
            noValidate
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nome*</Label>
                <Input
                  id="name"
                  className="h-11 border-white/15 bg-white/[0.02] hover:border-white/25"
                  placeholder="Seu nome completo"
                  autoComplete="name"
                  aria-invalid={Boolean(form.formState.errors.name)}
                  {...form.register("name")}
                />
                {form.formState.errors.name ? (
                  <p className="text-xs text-rose-300">{form.formState.errors.name.message}</p>
                ) : null}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail*</Label>
                <Input
                  id="email"
                  type="email"
                  className="h-11 border-white/15 bg-white/[0.02] hover:border-white/25"
                  placeholder="voce@empresa.com.br"
                  autoComplete="email"
                  aria-invalid={Boolean(form.formState.errors.email)}
                  {...form.register("email")}
                />
                {form.formState.errors.email ? (
                  <p className="text-xs text-rose-300">{form.formState.errors.email.message}</p>
                ) : null}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone (opcional)</Label>
              <Input
                id="phone"
                className="h-11 border-white/15 bg-white/[0.02] hover:border-white/25"
                placeholder="(11) 99999-9999"
                autoComplete="tel"
                aria-invalid={Boolean(form.formState.errors.phone)}
                {...form.register("phone")}
              />
              {form.formState.errors.phone ? (
                <p className="text-xs text-rose-300">{form.formState.errors.phone.message}</p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem (opcional)</Label>
              <Textarea
                id="message"
                className="min-h-28 border-white/15 bg-white/[0.02] hover:border-white/25"
                placeholder="Ex.: preciso aumentar os leads qualificados em 30% nos próximos 90 dias."
                aria-invalid={Boolean(form.formState.errors.message)}
                {...form.register("message")}
              />
              {form.formState.errors.message ? (
                <p className="text-xs text-rose-300">{form.formState.errors.message.message}</p>
              ) : null}
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="h-11 w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {isSubmitting ? (
                <span className="inline-flex items-center gap-2">
                  <LoaderCircle className="size-4 animate-spin" />
                  Enviando...
                </span>
              ) : (
                config.form.submitLabel
              )}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Sem spam. Contato objetivo com próximos passos.
            </p>

            {status === "success" ? (
              <Alert className="border-emerald-300/30 bg-emerald-500/10 text-emerald-100">
                <CircleCheckBig className="size-4" />
                <AlertTitle>Lead enviado com sucesso</AlertTitle>
                <AlertDescription>
                  Recebemos seus dados e retornaremos em até 1 dia útil.
                </AlertDescription>
              </Alert>
            ) : null}

            {status === "error" ? (
              <Alert
                variant="destructive"
                className="border-rose-300/30 bg-rose-500/10 text-rose-100"
              >
                <AlertCircle className="size-4" />
                <AlertTitle>Falha ao enviar</AlertTitle>
                <AlertDescription>
                  Houve um problema temporário. Tente novamente em instantes.
                </AlertDescription>
              </Alert>
            ) : null}
          </form>
        </Reveal>
      </div>
    </SectionShell>
  );
}
