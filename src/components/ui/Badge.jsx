import { cn } from "@/lib/utils";

export default function Badge({
  children,
  variant = "neutral",
  size = "md",
  className = "",
  icon: Icon,
}) {
  const baseStyles = "inline-flex items-center font-medium rounded-full border transition-colors";

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 gap-1",
    md: "text-xs px-3 py-1 gap-1.5",
    lg: "text-sm px-3.5 py-1.5 gap-2",
  };

  const variants = {
    neutral: "bg-neutral-800/80 text-studio-neutral border-neutral-700/60",
    accent: "bg-studio-accent/10 text-studio-accent border-studio-accent/30",
    whatsapp: "bg-studio-whatsapp/10 text-studio-whatsapp border-studio-whatsapp/30",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    rose: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    orange: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
  };

  return (
    <span className={cn(baseStyles, sizeStyles[size], variants[variant], className)}>
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      {children}
    </span>
  );
}
