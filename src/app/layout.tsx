import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://saylog.xyz"),
  title: "SayLog - Voice Calorie Tracking",
  description:
    "Log meals by speaking in your language. SayLog is a voice-first calorie tracker built for Indian food and real eating habits.",
  keywords: [
    "SayLog",
    "voice calorie tracker",
    "Indian food calorie tracker",
    "macro tracker",
    "diet tracking app",
    "voice logging",
    "nutrition AI",
  ],
  authors: [{ name: "SayLog Team" }],
  creator: "SayLog",
  publisher: "SayLog",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "SayLog - Voice Calorie Tracking",
    description:
      "Log meals by speaking in your language. SayLog is a voice-first calorie tracker built for Indian food and real eating habits.",
    url: "/",
    siteName: "SayLog",
    images: [
      {
        url: "/mockups/home.png", // using an existing mockup image for OpenGraph
        width: 1200,
        height: 630,
        alt: "SayLog App Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SayLog - Voice Calorie Tracking",
    description:
      "Log meals by speaking in your language. SayLog is a voice-first calorie tracker built for Indian food and real eating habits.",
    images: ["/mockups/home.png"],
    creator: "@saylogapp",
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SayLog",
    applicationCategory: "HealthAndFitnessApplication",
    operatingSystem: "Web, iOS, Android",
    description: "Log meals by speaking in your language. SayLog is a voice-first calorie tracker built for Indian food and real eating habits.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    featureList: "Voice logging, Calorie tracking, Macro tracking, Indian food database, Multi-turn conversation support",
  };

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
