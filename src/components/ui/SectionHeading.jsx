import { cn } from "@/lib/utils";
import Badge from "./Badge";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  badgeVariant = "accent",
  className = "",
  titleClassName = "",
}) {
  const alignClasses = {
    center: "text-center items-center mx-auto",
    left: "text-left items-start",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col max-w-3xl mb-12 sm:mb-16", alignClasses[align], className)}>
      {eyebrow && (
        <Badge variant={badgeVariant} className="mb-4">
          {eyebrow}
        </Badge>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-studio-warm leading-tight",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-studio-muted leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
