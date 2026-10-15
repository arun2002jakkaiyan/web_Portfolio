import { cn } from "@/lib/utils";

export default function Container({ children, className = "", size = "default", ...props }) {
  const sizeClasses = {
    default: "max-w-6xl",
    wide: "max-w-7xl",
    narrow: "max-w-4xl",
    full: "max-w-full",
  };

  return (
    <div
      className={cn("mx-auto px-4 sm:px-6 lg:px-8 w-full", sizeClasses[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
