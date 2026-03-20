"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import type { SiteConfig } from "@/data/site-config";
import { AnchorLink } from "@/components/landing/anchor-link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type HeaderProps = {
  config: SiteConfig;
};

export function Header({ config }: HeaderProps) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent transition-all duration-300",
        hasScrolled &&
          "border-white/10 bg-background/82 shadow-[0_10px_30px_rgba(2,8,24,0.45)] backdrop-blur-xl"
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3.5 md:px-10">
        <AnchorLink
          href="#inicio"
          aria-label={`Voltar para o início - ${config.brand.shortName}`}
          className="inline-flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-sm font-bold text-primary">
            AS
          </span>
          <span className="font-heading text-base font-semibold tracking-tight text-foreground md:text-lg">
            {config.brand.shortName}
          </span>
        </AnchorLink>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {config.navigation.map((item) => (
            <AnchorLink
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {item.label}
            </AnchorLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <AnchorLink
            href="#contato"
            className="inline-flex h-10 items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Agendar diagnóstico
          </AnchorLink>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="Abrir menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-foreground transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="border-white/10 bg-[#0A1120] p-0 text-foreground">
            <SheetHeader className="border-b border-white/10 px-5 py-4">
              <SheetTitle>{config.brand.name}</SheetTitle>
              <SheetDescription>{config.brand.tagline}</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4 py-5" aria-label="Navegação mobile">
              {config.navigation.map((item) => (
                <AnchorLink
                  key={`mobile-${item.href}`}
                  href={item.href}
                  onNavigate={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {item.label}
                </AnchorLink>
              ))}
              <AnchorLink
                href="#contato"
                onNavigate={() => setOpen(false)}
                className="mt-3 inline-flex h-10 items-center justify-center rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Solicitar proposta
              </AnchorLink>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
