/**
 * Utility functions for Small Business Website Studio
 */

/**
 * Builds a valid WhatsApp click-to-chat URL with country code and pre-encoded text.
 * @param {string} phone International phone number with or without symbols (e.g. "+91 98765 43210")
 * @param {string} message Pre-filled message string
 * @returns {string} Fully qualified WhatsApp URL
 */
export function getWhatsAppUrl(phone, message) {
  if (!phone) return '#';
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message || 'Hi, I would like to enquire about building a website for my business.');
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * Helper to combine class names cleanly
 * @param  {...any} classes 
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
