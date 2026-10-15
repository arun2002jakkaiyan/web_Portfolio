# Small Business Website Studio 🚀

A modern, high-converting website development portfolio engineered for freelance developers and boutique studios targeting small businesses across Coimbatore, Tamil Nadu, and India.

Built with **Next.js 14 (App Router)**, **JavaScript**, **Tailwind CSS**, and **Lucide React**.

---

## 🌟 Key Features

- **Multi-Industry Focus**: Highlights restaurants, salons, healthcare clinics, civil contractors, retail boutiques, and consultants.
- **Client-Conversion Architecture**: Direct WhatsApp click-to-chat links with pre-filled context, click-to-call, and interactive project inquiry builder.
- **6 Flagship Demo Concepts**:
  1. **Restaurant & Cafe**: Digital menu & one-tap WhatsApp table booking.
  2. **Salon & Beauty**: Transparent rate cards & bridal consultation workflow.
  3. **Healthcare Clinic**: Doctor credentials, timings & instant patient appointment request.
  4. **Civil Contractor**: Completed projects gallery & free site survey request.
  5. **Retail Boutique**: Lookbook catalog with "Enquire Stock on WhatsApp".
  6. **Executive Consultant**: Authority framework & 30-min strategy session scheduler.
- **₹0 Monthly Hosting**: Designed for high-speed edge deployment on Vercel's free tier.
- **Zero Backend Required**: 100% static, edge-cached, fast loading (< 1s on 4G).
- **SEO & Accessibility**: Dynamic XML sitemap, OpenGraph metadata, and WCAG-compliant contrast.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Design Tokens**:
  - Charcoal Canvas: `#151515`
  - Accent Tangerine: `#FF6B35`
  - Warm White: `#F8F7F4`
  - WhatsApp Green: `#25D366`
- **Icons**: Lucide React
- **Deployment**: Vercel Edge Network

---

## 📁 Project Structure

```
small-business-studio/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout shell with Header & Footer
│   │   ├── page.js            # 7-section high-converting homepage
│   │   ├── globals.css        # Tailwind styling & tokens
│   │   ├── services/page.js   # Service packages & deliverables
│   │   ├── portfolio/
│   │   │   ├── page.js        # Filterable project portfolio
│   │   │   └── [slug]/page.js # Dynamic case study & live prototype simulator
│   │   ├── industries/page.js # 6 industry vertical breakdowns
│   │   ├── process/page.js    # 4-stage workflow (Discover, Design, Develop, Deliver)
│   │   ├── about/page.js      # Solo developer craftsperson positioning
│   │   ├── contact/page.js    # Interactive WhatsApp query builder
│   │   ├── privacy/page.js    # Legal policy & demo disclosures
│   │   ├── not-found.js       # 404 handler
│   │   ├── sitemap.js         # XML sitemap generator
│   │   └── robots.js          # Search engine crawler directives
│   ├── components/
│   │   ├── layout/            # Header, Footer, MobileMenu, Container
│   │   ├── home/              # Hero, Services, Featured, Industries, Process, Pricing, CTA
│   │   ├── portfolio/         # ProjectCard, ProjectFilters
│   │   ├── demo/              # 6 interactive industry preview simulators
│   │   └── ui/                # Button, Badge, SectionHeading, Accordion, WhatsAppButton
│   ├── data/
│   │   ├── site.js            # Centralized studio brand, phone, email, location
│   │   ├── projects.js        # 6 flagship industry demo records
│   │   ├── services.js        # Service items & pricing packages
│   │   ├── industries.js      # Industry pain points & solutions
│   │   └── faqs.js            # Small business FAQ list
│   └── lib/
│       └── utils.js           # WhatsApp URL encoder & class merger
├── tailwind.config.js
└── package.json
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## ⚙️ How to Customize for Your Business

### Update Contact Info & Phone Number
Edit `src/data/site.js`:
```javascript
export const siteConfig = {
  name: "Small Business Website Studio",
  phone: "+91 98765 43210",          // Your phone
  whatsappNumber: "+91 98765 43210",  // Your WhatsApp number (with country code)
  email: "hello@yourdomain.in",       // Your email
  location: "Coimbatore, Tamil Nadu",
  // ...
};
```
All WhatsApp buttons across the entire website will automatically route to your number with pre-encoded enquiry text!

### Update or Add Portfolio Projects
Edit `src/data/projects.js` to adjust descriptions, sample menu items, pricing, or add new projects.

---

## 🌐 Deploying to Vercel (Free)

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: complete small business studio portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/small-business-studio.git
   git push -u origin main
   ```
2. Go to [Vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Keep standard Next.js build settings and click **Deploy**.
5. Once live, connect your custom domain (e.g., `yourstudio.in`) in Vercel **Settings > Domains**.
