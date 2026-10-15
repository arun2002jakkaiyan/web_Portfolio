/**
 * Flagship Portfolio Projects Data
 * Self-initiated concepts designed to demonstrate practical small-business website architecture.
 */

export const projects = [
  {
    slug: "the-rustic-spoon",
    title: "The Rustic Spoon Cafe & Bistro",
    clientName: "The Rustic Spoon",
    industry: "Restaurant & Cafe",
    industryId: "restaurant",
    tagline: "Warm, visual-first culinary website with digital menu & instant WhatsApp table reservation.",
    description:
      "A rich, appetising digital presence designed for an artisanal bistro. Solves the PDF menu problem with a mobile-optimised digital menu, mouth-watering visual layout, and direct WhatsApp table bookings.",
    isConcept: true,
    conceptNote: "Demonstration Project: Engineered as a best-practice template for restaurants, cafes, and cloud kitchens in Coimbatore.",
    accentColor: "#D97706",
    badgeClass: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    services: ["UI/UX Design", "Digital Menu Architecture", "WhatsApp Reservation Funnel", "Mobile First Build"],
    highlights: [
      "Zero-friction WhatsApp table reservation with date & party size pre-fill",
      "Interactive categorised digital food & beverage menu",
      "One-touch Google Maps navigation directions for diners",
      "Prominent daily chef specials and seasonal promotions",
    ],
    designDirection: "Warm earthy tones, rich wood hues, appetizing food imagery, and refined serif headers paired with clean sans-serif body text.",
    businessProblem:
      "The cafe relied on Instagram stories and a blurry PDF menu hosted on Google Drive. Guests struggled to find parking details and table reservation inquiries were frequently missed in direct messages.",
    solutionDelivered:
      "Built a lightweight, responsive web menu that loads in 0.9 seconds on 4G networks. Added a prominent sticky WhatsApp reservation button that structures the diner's request with their preferred date and guest count.",
    metrics: [
      { label: "Target Load Time", value: "< 1.0s" },
      { label: "Menu Format", value: "Mobile Native" },
      { label: "Booking Trigger", value: "Direct WhatsApp" },
      { label: "Hosting Cost", value: "₹0 / month" },
    ],
    sampleData: {
      location: "Race Course Road, Coimbatore, Tamil Nadu",
      hours: "11:00 AM - 11:00 PM (All 7 Days)",
      phone: "+91 98765 43210",
      menuCategories: ["Starters & Small Bites", "Wood-Fired Pizza", "Artisan Pasta", "Beverages & Cold Brews"],
      featuredDishes: [
        { name: "Smoked Peri-Peri Paneer Bites", price: "₹280", tag: "Bestseller", desc: "Tender cottage cheese charred with house peri-peri glaze and herb mayo." },
        { name: "Truffle Mushroom Artisan Pizza", price: "₹460", tag: "Chef Special", desc: "Hand-stretched sourdough base, wild porcini, mozzarella, truffle oil drizzle." },
        { name: "Pesto Genovese Penne", price: "₹380", tag: "Popular", desc: "Slow-roasted pine nuts, fresh basil, aged parmesan, and extra virgin olive oil." },
        { name: "Cold Brew Tonic with Citrus", price: "₹220", tag: "Beverage", desc: "Single-origin Araku brew steeped for 18 hours with sparkling citrus tonic." },
      ],
    },
  },
  {
    slug: "aura-luxe-salon",
    title: "Aura Luxe Hair & Aesthetics",
    clientName: "Aura Luxe",
    industry: "Salon & Beauty",
    industryId: "salon",
    tagline: "High-end luxury salon & bridal studio website with transparent rates & appointment triggers.",
    description:
      "An editorial-grade salon showcase that exudes elegance and hygiene. Positions the salon as premium, displays transparent service rates, highlights bridal makeover packages, and drives WhatsApp consultations.",
    isConcept: true,
    conceptNote: "Demonstration Project: Engineered as a luxury aesthetic template for unisex salons, spas, and bridal makeovers.",
    accentColor: "#FB7185",
    badgeClass: "text-rose-400 bg-rose-500/10 border-rose-500/30",
    services: ["Editorial Aesthetics", "Service Menu & Rate Card", "Bridal Consultation Funnel", "Before/After Showcase"],
    highlights: [
      "Transparent service pricing with duration estimates",
      "Dedicated Bridal Makeover consultation inquiry form sending directly to WhatsApp",
      "Sanitisation & hygiene protocols prominently displayed to reassure first-time visitors",
      "Curated beauty treatment categories (Hair, Skin, Nails, Spa, Bridal)",
    ],
    designDirection: "Soft champagne gold accents, deep charcoal background, generous whitespace, luxury typography, and high-fashion aesthetics.",
    businessProblem:
      "Clients in Coimbatore were unsure of service prices and hesitant to walk in without knowing if treatments fit their budget. Bridal booking enquiries were scattered across Instagram DMs.",
    solutionDelivered:
      "Created an organized digital treatment directory detailing prices and session durations. Introduced an interactive bridal consultation section that prepares quotes over WhatsApp instantly.",
    metrics: [
      { label: "Price Transparency", value: "100%" },
      { label: "Appointment Flow", value: "WhatsApp Direct" },
      { label: "Bridal Conversion", value: "High Intent" },
      { label: "Device Support", value: "Mobile Native" },
    ],
    sampleData: {
      location: "RS Puram, Coimbatore, Tamil Nadu",
      hours: "9:30 AM - 8:30 PM (Tuesday to Sunday)",
      servicesList: [
        { name: "Keratin Smooth Treatment", duration: "120 mins", price: "From ₹4,500", desc: "Formaldehyde-free intensive smoothing infusion for frizz-free hair." },
        { name: "Hydra-Glow Facial Therapy", duration: "60 mins", price: "₹2,800", desc: "Deep pore infusion with hyaluronic acid and antioxidant botanical extracts." },
        { name: "Royal Bridal Makeover Package", duration: "Half Day", price: "From ₹18,000", desc: "Complete bridal hair styling, HD makeup, draping, and pre-bridal skin prep." },
        { name: "Gel Nail Sculpting & Art", duration: "75 mins", price: "₹1,800", desc: "Long-lasting gel extensions with custom hand-painted nail designs." },
      ],
    },
  },
  {
    slug: "apex-dental-care",
    title: "Apex Smiles Dental & Wellness",
    clientName: "Apex Smiles",
    industry: "Clinic & Healthcare",
    industryId: "clinic",
    tagline: "Reassuring, accessible clinic website featuring doctor credentials, treatments, and instant booking.",
    description:
      "A patient-first healthcare website that alleviates anxiety. Prominently displays doctor qualifications, transparent treatment explanations, clinic visiting hours, and one-tap emergency calling.",
    isConcept: true,
    conceptNote: "Demonstration Project: Engineered as an accessible, trust-focused template for dental practices and healthcare clinics.",
    accentColor: "#06B6D4",
    badgeClass: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    services: ["Healthcare UX", "Doctor Profile & Qualifications", "Treatment Explanations", "Emergency Hotline CTA"],
    highlights: [
      "Prominent doctor bios with degrees (BDS, MDS), certifications, and years in practice",
      "Categorized treatments (Orthodontics, Implants, Root Canal, Smile Designing)",
      "Clear clinic timings, Google Maps location, and parking accessibility details",
      "Sticky 'Emergency Call' button for urgent patient care",
    ],
    designDirection: "Calming medical cyan and slate tones, high contrast readable typography, sterile clean layouts, and welcoming imagery.",
    businessProblem:
      "Patients frequently called the clinic desk asking repetitive questions about doctor timings, consultation fees, and whether implants were performed, consuming hours of receptionist time.",
    solutionDelivered:
      "Detailed all treatment procedures with realistic FAQs, doctor schedules, and a streamlined WhatsApp appointment button that lets patients request specific morning or evening slots.",
    metrics: [
      { label: "Patient Reassurance", value: "High Trust" },
      { label: "Emergency CTA", value: "Instant Call" },
      { label: "Slot Booking", value: "Automated Msg" },
      { label: "Accessibility", value: "WCAG Compliant" },
    ],
    sampleData: {
      location: "Avinashi Road, Near Lakshmi Mills, Coimbatore",
      hours: "Morning: 10:00 AM - 1:30 PM | Evening: 4:30 PM - 8:30 PM",
      doctors: [
        { name: "Dr. K. Senthil Nathan, MDS", role: "Chief Implantologist & Orthodontist", exp: "14+ Years Experience" },
        { name: "Dr. Deepa Senthil, BDS", role: "Cosmetic Dentist & Smile Specialist", exp: "10+ Years Experience" },
      ],
      treatments: [
        { name: "Dental Implants", desc: "Permanent tooth replacement with Swiss titanium fixtures for natural biting power." },
        { name: "Clear Aligners", desc: "Invisible tooth straightening without metal braces or dietary restrictions." },
        { name: "Single-Sitting Root Canal", desc: "Pain-free microscopic endodontic treatment completed in under 45 minutes." },
        { name: "Laser Teeth Whitening", desc: "Advanced dental bleaching lifting deep enamel stains in a single session." },
      ],
    },
  },
  {
    slug: "craftbuild-contractors",
    title: "Craftbuild Renovations & Waterproofing",
    clientName: "Craftbuild Contractors",
    industry: "Contractor & Home Services",
    industryId: "contractor",
    tagline: "Bold, trustworthy construction & civil works website showcasing completed projects & free quotes.",
    description:
      "A rugged, high-credibility website built for civil contractors and renovation specialists. Displays real work photos, service regions in Coimbatore, and generates high-ticket site inspection requests.",
    isConcept: true,
    conceptNote: "Demonstration Project: Engineered for civil engineers, renovation specialists, and waterproofing contractors.",
    accentColor: "#F97316",
    badgeClass: "text-orange-400 bg-orange-500/10 border-orange-500/30",
    services: ["Industrial Aesthetics", "Project Portfolio Gallery", "Service Area Coverage", "Site Inspection CTA"],
    highlights: [
      "Comprehensive list of areas served across Coimbatore, Pollachi, Tirupur, and Erode",
      "Completed projects breakdown (Residential interiors, Commercial retrofitting, Waterproofing)",
      "High-converting 'Request Free Site Inspection' WhatsApp button with location field",
      "Material quality guarantees and warranty terms clearly communicated",
    ],
    designDirection: "Bold construction safety accents, industrial navy charcoal, heavy structured typography, and clear before/after project grids.",
    businessProblem:
      "Homeowners were skeptical of contractor commitments and often asked to see past work. Sending photos via WhatsApp chats was unorganized and looked amateur.",
    solutionDelivered:
      "Built a professional project showcase where prospects can filter completed works by category (flooring, painting, waterproofing) and immediately request an on-site survey.",
    metrics: [
      { label: "Service Areas", value: "Coimbatore & Beyond" },
      { label: "Quote Request", value: "Direct WhatsApp" },
      { label: "Project Types", value: "Residential & Comm" },
      { label: "Trust Factor", value: "Verified Specs" },
    ],
    sampleData: {
      location: "Peelamedu, Coimbatore, Tamil Nadu",
      areasServed: "RS Puram, Race Course, Peelamedu, Gandhipuram, Saravanampatti, Pollachi, Tirupur",
      servicesList: [
        { name: "Complete Home Renovations", scope: "Civil remodeling, flooring replacement, modular kitchens & structural updates." },
        { name: "Advanced Terrace Waterproofing", scope: "Multi-layer elastomeric polymer membrane with 7-year leak warranty." },
        { name: "Commercial Office Fit-Outs", scope: "Turnkey electrical, acoustic drywall partitions, and ergonomic workstations." },
        { name: "Structural Painting & Texture", scope: "Weatherproof exterior silicone coatings and luxury interior stencils." },
      ],
    },
  },
  {
    slug: "urban-threads-clothing",
    title: "Urban Threads Lifestyle & Apparel",
    clientName: "Urban Threads",
    industry: "Retail & Boutique",
    industryId: "retail",
    tagline: "Product-led modern apparel showcase connecting in-store catalog to instant WhatsApp ordering.",
    description:
      "A sleek retail showcase designed for fashion boutiques. Rather than dealing with complex e-commerce payment gateways, shoppers browse collections and click to check stock or buy directly on WhatsApp.",
    isConcept: true,
    conceptNote: "Demonstration Project: Designed for boutique apparel, jewelry, and retail stores wanting a modern digital catalog.",
    accentColor: "#10B981",
    badgeClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    services: ["Digital Lookbook", "WhatsApp Order Enquiries", "Store Timings & Landmark", "Seasonal Catalog"],
    highlights: [
      "Modern editorial lookbook presenting new seasonal arrivals with high-res photos",
      "One-click 'Enquire on WhatsApp' on every single garment with product title pre-filled",
      "Clear physical store location guide with landmark directions and parking tips",
      "Zero monthly e-commerce platform fees (Shopify/WooCommerce maintenance eliminated)",
    ],
    designDirection: "Minimal editorial beige, clean grid photography, stark high-contrast typography, and seamless product cards.",
    businessProblem:
      "The boutique owner didn't have the budget or inventory sync bandwidth for a full Shopify store, but wanted local shoppers to browse new arrivals before visiting the shop.",
    solutionDelivered:
      "Implemented a lightweight digital catalog where every product has a direct WhatsApp checkout link, allowing the boutique owner to confirm sizes and receive UPI payments directly.",
    metrics: [
      { label: "Platform Cost", value: "₹0 / month" },
      { label: "Checkout Flow", value: "WhatsApp + UPI" },
      { label: "Update Speed", value: "Instant" },
      { label: "Mobile Browsing", value: "Fast Lookbook" },
    ],
    sampleData: {
      location: "DB Road, RS Puram, Coimbatore, Tamil Nadu",
      hours: "10:30 AM - 9:00 PM (Monday to Sunday)",
      collections: [
        { name: "Pure Handloom Linen Shirt", category: "Men's Casual", price: "₹1,699", tag: "New Arrival", color: "Sage Green & Ivory" },
        { name: "Mulmul Block-Print Anarkali", category: "Women's Ethnic", price: "₹2,499", tag: "Bestseller", color: "Indigo & Marigold" },
        { name: "Oversized Heavyweight Tee", category: "Streetwear", price: "₹999", tag: "Trending", color: "Washed Charcoal" },
        { name: "Raw Silk Festive Kurta Set", category: "Occasion Wear", price: "₹3,899", tag: "Festive Edit", color: "Antique Gold & Rust" },
      ],
    },
  },
  {
    slug: "stratos-growth-partners",
    title: "Stratos Advisory & Growth Consulting",
    clientName: "Stratos Advisory",
    industry: "Consultant & Advisory",
    industryId: "consultant",
    tagline: "Minimal, credibility-focused executive portfolio for corporate advisors and business consultants.",
    description:
      "An authoritative personal advisory site engineered to command premium consulting rates. Highlights proven frameworks, client advisory pillars, and a direct strategy session scheduler.",
    isConcept: true,
    conceptNote: "Demonstration Project: Engineered for financial advisors, chartered accountants, and management consultants.",
    accentColor: "#6366F1",
    badgeClass: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
    services: ["Executive Positioning", "Advisory Frameworks", "Case Study Summaries", "Discovery Call Booking"],
    highlights: [
      "Clean executive bio establishing domain expertise, past corporate experience, and credentials",
      "Strategic service pillars (Financial Modeling, Go-to-Market, Process Optimization)",
      "High-intent 'Book 30-min Strategy Session' trigger connecting directly to WhatsApp or Calendar",
      "Zero clutter: laser-focused on converting corporate decision-makers",
    ],
    designDirection: "Deep corporate indigo, sharp typography, minimalist layout, generous white-space, and boardroom-level polish.",
    businessProblem:
      "The consultant was relying solely on LinkedIn posts and lacked a dedicated professional domain to send proposals, which made it harder to negotiate enterprise advisory retainers.",
    solutionDelivered:
      "Crafted a high-credibility personal advisory landing site with clear engagement models, allowing prospects to book discovery sessions with one click.",
    metrics: [
      { label: "Positioning", value: "Executive Tier" },
      { label: "Call To Action", value: "Strategy Session" },
      { label: "Page Load", value: "< 0.8s" },
      { label: "Clarity Score", value: "High Intent" },
    ],
    sampleData: {
      location: "Coimbatore & Bengaluru (Pan-India Virtual Consultations)",
      founder: "R. Siddharth, MBA (IIM-B), Ex-Strategy Consultant",
      pillars: [
        { title: "SME Financial Modeling & Cash-Flow Planning", desc: "Transform unpredictable cash cycles into resilient, bankable operating models." },
        { title: "Go-to-Market for Tier-2 Manufacturers", desc: "Expand distribution channels across South India and establish direct B2B buyer pipelines." },
        { title: "Standard Operating Procedures (SOP) & Scalability", desc: "Build automated management systems so the promoter doesn't have to micromanage daily operations." },
      ],
    },
  },
];
