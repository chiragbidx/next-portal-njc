// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ─── Sponsors ───────────────────────────────────────────────────────────────
export type SponsorItem = { icon: string; name: string };
export type SponsorsContent = {
  heading: string;
  items: SponsorItem[];
};

// ─── Benefits ───────────────────────────────────────────────────────────────
export type BenefitItem = { icon: string; title: string; description: string };
export type BenefitsContent = {
  eyebrow: string;
  heading: string;
  description: string;
  items: BenefitItem[];
};

// ─── Feature Grid ───────────────────────────────────────────────────────────
export type FeatureItem = { icon: string; title: string; description: string };
export type FeaturesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: FeatureItem[];
};

// ─── Services ───────────────────────────────────────────────────────────────
export type ServiceItem = { title: string; description: string; pro: boolean };
export type ServicesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: ServiceItem[];
};

// ─── Testimonials ───────────────────────────────────────────────────────────
export type TestimonialItem = {
  image: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
};
export type TestimonialsContent = {
  eyebrow: string;
  heading: string;
  reviews: TestimonialItem[];
};

// ─── Team ───────────────────────────────────────────────────────────────────
export type SocialLink = { name: string; url: string };
export type TeamMember = {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialLink[];
};
export type TeamContent = {
  eyebrow: string;
  heading: string;
  members: TeamMember[];
};

// ─── Pricing ────────────────────────────────────────────────────────────────
export type PricingPlan = {
  title: string;
  popular: boolean;
  price: number;
  description: string;
  buttonText: string;
  benefits: string[];
};
export type PricingContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  priceSuffix: string;
  plans: PricingPlan[];
};

// ─── Contact ────────────────────────────────────────────────────────────────
export type ContactInfoBlock = { label: string; value: string | string[] };
export type ContactContent = {
  eyebrow: string;
  heading: string;
  description: string;
  mailtoAddress: string;
  info: {
    address: ContactInfoBlock;
    phone: ContactInfoBlock;
    email: ContactInfoBlock;
    hours: ContactInfoBlock;
  };
  formSubjects: string[];
  formSubmitLabel: string;
};

// ─── FAQ ────────────────────────────────────────────────────────────────────
export type FaqItem = { question: string; answer: string };
export type FaqContent = {
  eyebrow: string;
  heading: string;
  items: FaqItem[];
};

// ─── Footer ─────────────────────────────────────────────────────────────────
export type FooterLink = { label: string; href: string };
export type FooterColumn = { heading: string; links: FooterLink[] };
export type FooterContent = {
  brandName: string;
  columns: FooterColumn[];
  copyright: string;
  attribution: { label: string; href: string };
};

// ─── Navbar ─────────────────────────────────────────────────────────────────
export type NavRoute = { href: string; label: string };
export type NavFeature = { title: string; description: string };
export type NavbarContent = {
  brandName: string;
  routes: NavRoute[];
  featureDropdownLabel: string;
  featureImage: { src: string; alt: string };
  features: NavFeature[];
  signInLabel: string;
  signUpLabel: string;
  dashboardLabel: string;
  githubLink: { href: string; ariaLabel: string };
};

// ─── Root ───────────────────────────────────────────────────────────────────
export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

// ─── Defaults ───────────────────────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "CRM for Teams",
    badgeOuter: "DealNest powers your sales",
    titleBefore: "Grow Your Business with",
    titleHighlight: "DealNest",
    titleAfter: "",
    subtitle: "Simple CRM for fast-moving teams",
    primaryCta: { label: "Get Started Free", href: "/auth#signup" },
    secondaryCta: { label: "Book a Demo", href: "#contact" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "DealNest dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Trusted By Growing Teams",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why DealNest",
    heading: "A CRM your entire team will love",
    description: "DealNest gives you the tools to organize contacts, track deals, and boost your team's performance—so you never miss a growth opportunity.",
    items: [
      {
        icon: "Users",
        title: "Built for Teams",
        description: "Work collaboratively to keep your customer data up to date.",
      },
      {
        icon: "TrendingUp",
        title: "Grow Pipeline Fast",
        description: "Accelerate sales cycles and win more deals—no spreadsheets required.",
      },
      {
        icon: "Contact2",
        title: "Understand Your Customers",
        description: "Link every interaction and deal to see a full history in one place.",
      },
      {
        icon: "MessageCircle",
        title: "Stay Connected",
        description: "Log activities and never lose track of a conversation.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Powerful CRM, Simple Experience",
    subtitle: "DealNest combines productivity tools and clarity—spend less time managing software and more time selling.",
    items: [
      { icon: "Contact", title: "Manage Contacts Effortlessly", description: "Keep your customer information organized and always accessible." },
      { icon: "HandCoins", title: "Track Deals in One Place", description: "Monitor your sales pipeline and never miss an opportunity." },
      { icon: "Users2", title: "Collaborate with Your Team", description: "Work together to close more deals and provide better service." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "What We Deliver",
    heading: "DealNest Core",
    subtitle: "All you need in one place: organize, collaborate, and accelerate growth.",
    items: [
      { title: "Contact Management", description: "Capture, view, and update contacts easily.", pro: false },
      { title: "Deal Tracking", description: "Visual pipeline with deal stages and owners.", pro: false },
      { title: "Team Collaboration", description: "Assign owners and keep your team in sync.", pro: false },
      { title: "Growth Insights", description: "Simple metrics and sales activity at a glance.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Testimonials",
    heading: "DealNest Customers",
    reviews: [
      { image: "/demo-img.jpg", name: "Alex D.", role: "Sales Lead", comment: "DealNest keeps our team on the same page and our pipeline full.", rating: 5.0 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet the Team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder", "Product Lead"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" }
        ],
      },
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Simple pricing for teams",
    subtitle: "Get started free. Upgrade as your team grows.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Free",
        popular: true,
        price: 0,
        description: "For small teams starting out.",
        buttonText: "Try DealNest Free",
        benefits: [
          "Up to 3 teammates",
          "Contact & deal management",
          "Pipeline dashboard",
          "Email support",
        ],
      },
      {
        title: "Team",
        popular: false,
        price: 25,
        description: "Collaborative features for growing teams.",
        buttonText: "Start Team Plan",
        benefits: [
          "Unlimited teammates",
          "Custom fields & filters",
          "Advanced activity timeline",
          "Priority support",
        ],
      },
      {
        title: "Scale",
        popular: false,
        price: 99,
        description: "Best for established sales teams.",
        buttonText: "Get in Touch",
        benefits: [
          "Deep integrations",
          "AI-driven insights",
          "Personalized onboarding",
          "Manager & role settings",
        ],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Talk to the DealNest team",
    description:
      "Want to see DealNest in action? Book a demo, ask a question, or just say hi.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Location", value: "Remote-first • Global" },
      phone: { label: "Phone", value: "" },
      email: { label: "Email", value: "chirag@bidx.ai" },
      hours: { label: "Hours", value: ["Monday - Friday", "9AM - 6PM"] },
    },
    formSubjects: ["Book a Demo", "Product Inquiry", "Sales", "Support"],
    formSubmitLabel: "Send message",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Frequently asked questions",
    items: [
      { question: "Is DealNest free to start?", answer: "Absolutely! Small teams can use DealNest for free." },
      { question: "Can I import contacts from another CRM?", answer: "Importing features are on our roadmap. Let us know your needs." },
      { question: "Is my data safe with DealNest?", answer: "Yes—data is hosted securely with world-class cloud infrastructure." },
      { question: "Can I integrate email with DealNest?", answer: "Yes! Email integration is coming soon." },
      { question: "How do I contact support?", answer: "Just fill out the contact form or email chirag@bidx.ai." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "DealNest",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com" },
          { label: "X", href: "https://x.com" },
        ],
      },
    ],
    copyright: "\u00a9 2026 DealNest. All rights reserved.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "DealNest",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#testimonials", label: "Testimonials" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "DealNest preview" },
    features: [
      { title: "Manage Contacts", description: "Keep everyone on your team in sync with your customer list." },
      { title: "Pipeline Tracking", description: "Visualize and update deals through every sales stage." },
      { title: "Team Collaboration", description: "Assign, tag, and comment to close more deals together." },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Sign Up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com", ariaLabel: "View on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

// Keep this function export for backward compatibility with older imports.
export function getHomeContent(): HomeContent {
  return homeContent;
}