import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saylog.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "SayLog — Voice Calorie Tracker for Indian Food | Log Meals by Speaking",
    template: "%s | SayLog",
  },
  description:
    "SayLog is the easiest calorie tracker. Log meals by speaking in 11 Indian languages. Instant calorie and macro breakdowns for home-cooked Indian food, street food, and restaurant dishes. No typing, no barcodes — just speak.",
  keywords: [
    "saylog",
    "voice calorie tracker",
    "voice based calorie tracker",
    "easiest calorie tracker",
    "calorie tracker for Indian food",
    "best calorie counter app India",
    "Indian food calorie counter",
    "voice meal logging",
    "calorie tracker Hindi",
    "nutrition tracker India",
    "macro tracker app",
    "calorie tracker without barcode",
    "best calorie tracker app",
    "Indian food nutrition tracker",
    "voice food diary",
  ],
  authors: [{ name: "RWE Labs" }],
  creator: "RWE Labs",
  publisher: "RWE Labs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "SayLog",
    title: "SayLog — Voice Calorie Tracker for Indian Food",
    description:
      "Log meals by speaking in 11 Indian languages. Instant calorie and macro breakdowns for home-cooked Indian food. No typing, no barcodes — just speak.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SayLog — Voice Calorie Tracker for Indian Food",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SayLog — Voice Calorie Tracker for Indian Food",
    description:
      "Log meals by speaking in 11 Indian languages. Instant calorie and macro breakdowns. No typing, no barcodes.",
    images: ["/og-image.png"],
    creator: "@303zion",
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  category: "Health & Fitness",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SayLog",
  alternateName: "SayLog App",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Voice-first calorie tracker built for Indian food and real eating habits.",
  founder: {
    "@type": "Person",
    name: "Raj Vishwakarma",
  },
  sameAs: [
    "https://www.instagram.com/rajvishwakarmafr/",
    "https://x.com/303zion",
    "https://www.linkedin.com/in/rajvishwakarma1/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "rwelabs@gmail.com",
    contactType: "customer support",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SayLog",
  alternateName: "SayLog — Voice Calorie Tracker",
  url: siteUrl,
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "SayLog",
  description:
    "Voice-first calorie tracker built for Indian food. Log meals by speaking in 11 Indian languages. Get instant macro breakdowns for home-cooked meals, street food, and restaurant dishes.",
  applicationCategory: "HealthApplication",
  operatingSystem: "Android, iOS",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    availability: "https://schema.org/PreOrder",
  },
  featureList: [
    "Voice-based meal logging in under 5 seconds",
    "11 Indian language support including Hindi, Tamil, Telugu, Bengali",
    "500+ Indian dish database",
    "Instant macro breakdown (calories, protein, carbs, fat, fiber)",
    "Personalized nutritional insights and weekly reports",
    "No barcode scanning required",
    "Code-switching support (mix languages in one sentence)",
  ],
  inLanguage: [
    "en",
    "hi",
    "bn",
    "ta",
    "te",
    "gu",
    "kn",
    "ml",
    "mr",
    "pa",
    "or",
  ],
  screenshot: `${siteUrl}/image.png`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does voice logging actually work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: 'You tap the mic button, say what you ate in plain language — like "2 roti with dal and a bowl of rice" — and SayLog converts that into a full calorie and macro breakdown. No searching through databases or weighing food.',
      },
    },
    {
      "@type": "Question",
      name: "Does it understand Indian food properly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: 'Yes. SayLog is built specifically for Indian food — home-cooked meals, street food, mixed thalis, regional dishes. It understands portions the way Indians describe them: "1 plate", "1 katori", "half a roti", etc.',
      },
    },
    {
      "@type": "Question",
      name: "Which languages are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SayLog supports 11 Indian languages: Hindi, English, Bengali, Tamil, Telugu, Gujarati, Kannada, Malayalam, Marathi, Punjabi, and Odia. You can speak in the language you're most comfortable with.",
      },
    },
    {
      "@type": "Question",
      name: "Is this just calorie counting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. SayLog tracks calories and macros, but the real value is in the insights — weekly trends, eating patterns, nutritional gaps, and health reports that help you make better food decisions over time.",
      },
    },
    {
      "@type": "Question",
      name: "I've tried calorie tracking before and couldn't stick with it. How is SayLog different?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most trackers fail because logging is tedious. SayLog takes about 5 seconds per meal — just speak and you're done. No typing, no photo scanning, no scrolling through food lists. Less friction means you actually keep using it.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best calorie tracker app for Indian food?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SayLog is built specifically for Indian food tracking. Unlike MyFitnessPal or HealthifyMe, it uses voice input and understands 500+ Indian dishes, home-cooked meals, and regional recipes across 11 Indian languages.",
      },
    },
    {
      "@type": "Question",
      name: "Can I track calories without typing or scanning barcodes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: 'Yes. SayLog is a voice-first calorie tracker. You speak what you ate in natural language — for example, "maine 2 roti aur dal khaya" — and it instantly logs the calories and macros. No typing, no barcode scanning, no database searching.',
      },
    },
    {
      "@type": "Question",
      name: "How accurate is calorie counting for home-cooked Indian food?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SayLog's food database is built from scratch around Indian cuisine, accounting for cooking methods like tempering (tadka), ghee usage, and regional variations. It understands that homestyle dal differs from restaurant dal and adjusts accordingly.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={appJsonLd} />
        <JsonLd data={faqJsonLd} />
      </head>
      <body>{children}</body>
    </html>
  );
}
