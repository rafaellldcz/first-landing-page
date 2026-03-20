import Link from "next/link";

import type { SiteConfig } from "@/data/site-config";
import { AnchorLink } from "@/components/landing/anchor-link";
import { getIcon } from "@/components/landing/icon-map";
import { Separator } from "@/components/ui/separator";

type FooterProps = {
  config: SiteConfig;
};

export function Footer({ config }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-white/10 bg-[#070D19]">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr]">
          <div className="space-y-4 lg:col-span-1">
            <p className="font-heading text-xl font-semibold text-foreground">
              {config.brand.name}
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {config.brand.tagline}
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={`mailto:${config.brand.supportEmail}`} className="hover:text-foreground">
                  {config.brand.supportEmail}
                </Link>
              </li>
              <li>
                <Link href="tel:+551140028922" className="hover:text-foreground">
                  {config.brand.supportPhone}
                </Link>
              </li>
              <li>{config.brand.location}</li>
            </ul>
          </div>

          {config.footer.linkGroups.map((group) => (
            <div key={group.title} className="space-y-3">
              <h3 className="text-sm font-semibold tracking-wide text-foreground">
                {group.title}
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("#") ? (
                      <AnchorLink
                        href={link.href}
                        className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        {link.label}
                      </AnchorLink>
                    ) : (
                      <Link
                        href={link.href}
                        className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {year} {config.brand.name}. {config.footer.legalText}
          </p>
          <div className="flex items-center gap-2">
            {config.footer.socialLinks.map((social) => {
              const Icon = getIcon(social.icon);

              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-muted-foreground transition-all hover:border-white/30 hover:text-foreground"
                >
                  <Icon className="size-4" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
