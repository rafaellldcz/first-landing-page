import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "space-y-4 md:space-y-5",
        isCentered && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      {badge ? (
        <Badge className="w-fit border-white/15 bg-white/8 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase text-primary">
          {badge}
        </Badge>
      ) : null}
      <h2 className="font-heading text-3xl leading-tight font-semibold tracking-tight text-balance text-foreground md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

