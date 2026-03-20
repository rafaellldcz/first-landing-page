import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function SectionShell({
  id,
  children,
  className,
  containerClassName,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-14 md:scroll-mt-28 md:py-20", className)}>
      <div className={cn("mx-auto w-full max-w-6xl px-6 md:px-10", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

