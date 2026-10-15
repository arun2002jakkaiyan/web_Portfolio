import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  icon: Icon,
  iconPosition = "right",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-studio-accent focus-visible:ring-offset-studio-charcoal";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 shadow-lg",
  };

  const variants = {
    primary:
      "bg-studio-accent hover:bg-studio-accentHover text-white shadow-studio-accent/20 hover:shadow-studio-accent/30 shadow-md",
    secondary:
      "bg-studio-card hover:bg-neutral-800 text-studio-warm border border-studio-border hover:border-neutral-700",
    whatsapp:
      "bg-studio-whatsapp hover:bg-studio-whatsappHover text-white shadow-studio-whatsapp/20 shadow-md font-semibold",
    outline:
      "border border-studio-border hover:border-studio-accent text-studio-warm hover:text-white bg-transparent",
    ghost:
      "text-studio-muted hover:text-studio-warm hover:bg-neutral-800/50",
  };

  const combinedStyles = cn(baseStyles, sizeStyles[size], variants[variant], className);

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("https://wa.me") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          target={external || href.startsWith("http") ? "_blank" : undefined}
          rel={external || href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={combinedStyles}
          {...props}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {content}
    </button>
  );
}
