import { MessageCircle } from "lucide-react";
import Button from "./Button";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/utils";

export default function WhatsAppButton({
  message,
  phone = siteConfig.whatsappNumber,
  children = "Chat on WhatsApp",
  size = "md",
  className = "",
  pulse = false,
}) {
  const url = getWhatsAppUrl(phone, message || "Hi! I would like to discuss building a website for my business.");

  return (
    <Button
      href={url}
      variant="whatsapp"
      size={size}
      icon={MessageCircle}
      iconPosition="left"
      external
      className={`relative ${className}`}
    >
      {children}
      {pulse && (
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
      )}
    </Button>
  );
}
