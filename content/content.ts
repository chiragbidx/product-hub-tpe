export type HeroContent = {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export type FeatureItem = {
  title: string;
  description: string;
};

export type TestimonialItem = {
  author: string;
  quote: string;
};

export type CTAContent = {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export type FeaturesContent = {
  title: string;
  items: FeatureItem[];
};

export type TestimonialsContent = {
  title: string;
  items: TestimonialItem[];
};

export type NavbarContent = {
  brand: string;
};

export type SiteContent = {
  hero: HeroContent;
  features: FeaturesContent;
  testimonials: TestimonialsContent;
  cta: CTAContent;
  navbar: NavbarContent;
};

export const defaultContent: SiteContent = {
  hero: {
    title: "The Modern Platform for Digital Agencies",
    subtitle: "Manage clients, projects, and your team—all in one streamlined dashboard.",
    ctaPrimary: "Get Started",
    ctaSecondary: "Book a Demo",
  },
  features: {
    title: "Why AgencyFlow?",
    items: [
      {
        title: "Centralized Client Management",
        description:
          "Keep all your client information organized and accessible from one place.",
      },
      {
        title: "Project Tracking Made Simple",
        description:
          "Stay on top of every project’s progress and deadlines with intuitive tracking tools.",
      },
      {
        title: "Seamless Team Collaboration",
        description:
          "Assign tasks, share updates, and collaborate with your agency team effortlessly.",
      },
    ],
  },
  testimonials: {
    title: "Agencies Love AgencyFlow",
    items: [
      {
        author: "Jane Lee, Creative Director",
        quote:
          "AgencyFlow transformed how we handle clients and projects—our team is more productive than ever.",
      },
      {
        author: "Mark Patel, Agency Owner",
        quote:
          "We finally have a single source of truth for our agency operations. Highly recommended!",
      },
    ],
  },
  cta: {
    title: "Ready to level up your agency?",
    subtitle: "Sign up today and see how AgencyFlow can transform your workflow.",
    ctaPrimary: "Start Free Trial",
    ctaSecondary: "Contact Sales",
  },
  navbar: {
    brand: "AgencyFlow",
  },
};

export const siteContent: SiteContent = defaultContent;

export function getContent(): SiteContent {
  return siteContent;
}