import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: {
    default: `${siteConfig.name} | Websites That Help Small Businesses Grow`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "small business website developer",
    "website designer coimbatore",
    "restaurant website developer",
    "clinic website design",
    "salon website design",
    "contractor website builder",
    "local business web development india",
    "fast mobile website",
  ],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.name,
  metadataBase: new URL("https://smallbusinessstudio.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://smallbusinessstudio.in",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col bg-studio-charcoal text-studio-warm font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
