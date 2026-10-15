/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          charcoal: "#151515",
          dark: "#0E0E0E",
          card: "#1E1E1E",
          border: "#2C2C2C",
          warm: "#F8F7F4",
          accent: "#FF6B35",
          accentHover: "#E85A26",
          neutral: "#D9D9D4",
          muted: "#A0A09C",
          whatsapp: "#25D366",
          whatsappHover: "#20bd5a",
        },
      },
    },
  },
  plugins: [],
};
