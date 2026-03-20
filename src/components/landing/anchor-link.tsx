"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

type AnchorLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  onNavigate?: () => void;
};

export function AnchorLink({ href, onClick, onNavigate, ...props }: AnchorLinkProps) {
  const isHashLink = href.startsWith("#");

  const handleClick: ComponentProps<typeof Link>["onClick"] = (event) => {
    onClick?.(event);

    if (event.defaultPrevented || !isHashLink) {
      return;
    }

    event.preventDefault();

    const targetId = href.slice(1);
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    const nextUrl = `${window.location.pathname}${window.location.search}${href}`;
    window.history.pushState(null, "", nextUrl);

    onNavigate?.();
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
