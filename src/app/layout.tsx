import type { Metadata } from "next";
import { Suspense } from "react";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { PostHogPageView } from "@/components/PostHogPageView";
import { PostHogProvider } from "@/provider/PostHog";
import SmoothScroll from "@/components/SmoothScroll";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const fontHeading = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
});

const siteUrl = "https://www.kenneth-ai.vercel.app";

const seoTitle =
  "Kenneth Rizaldy Soriano | Full Stack Engineer | AI Full-Stack Engineer | Remote";
const seoDescription =
  "Kenneth Rizaldy Soriano - AI full-stack engineer building production systems for early-stage startups. 7+ years: RAG, vector DBs, Django, React, TypeScript. Available for remote full-time roles.";
const seoKeywords = [
  "Kenneth Rizaldy Soriano",
  "full stack engineer",
  "AI full stack engineer",
  "full stack developer",
  "AI engineer",
  "remote full stack engineer",
  "hire full stack engineer",
  "early-stage startup engineer",
  "production AI systems",
  "RAG systems",
  "vector databases",
  "Next.js",
  "TypeScript",
  "OpenAI",
  "LangChain",
  "full stack engineer portfolio",
  "AI full stack developer remote",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoTitle,
    template: "%s | Kenneth Rizaldy Soriano",
  },
  description: seoDescription,
  keywords: seoKeywords,
  authors: [{ name: "Kenneth Rizaldy Soriano", url: siteUrl }],
  creator: "Kenneth Rizaldy Soriano",
  publisher: "Kenneth Rizaldy Soriano",
  applicationName: "Kenneth Rizaldy Soriano Portfolio",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "https://www.kenneth-ai.vercel.app",
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: siteUrl,
    siteName: "Kenneth Rizaldy Soriano · Full Stack Engineer Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/opengraph-image.jpg`,
        secureUrl: `${siteUrl}/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Kenneth Rizaldy Soriano - Full Stack Engineer & AI Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    creator: "@KennethSoriano",
    images: [`${siteUrl}/opengraph-image.jpg`],
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
  category: "portfolio",
  icons: {
    icon: "/parbhat-favicon.png",
    apple: "/apple-icon.png",
  },
};

const GoogleAnalytics = () => (
  <>
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-NR203WYBQP"
    />
    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-NR203WYBQP');
      `}
    </Script>
  </>
);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Kenneth Rizaldy Soriano",
      alternateName: "Kenneth Rizaldy Soriano",
      jobTitle: "Full Stack Engineer",
      description: seoDescription,
      url: siteUrl,
      image: `${siteUrl}/Parbhat1.jpg`,
      sameAs: [
        "https://www.linkedin.com/in/kenneth-rizaldy-soriano-7159a0199/",
        "https://github.com/",
        "https://x.com/",
      ],
      knowsAbout: [
        "Full Stack Development",
        "AI/ML Systems",
        "RAG",
        "Next.js",
        "TypeScript",
        "Production AI",
      ],
      knowsLanguage: "en",
      jobLocation: {
        "@type": "Place",
        name: "Remote",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Kenneth Rizaldy Soriano · Full Stack Engineer Portfolio",
      description: seoDescription,
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontHeading.variable}`}>
      <GoogleAnalytics />
      <body suppressHydrationWarning className={`${fontSans.className} font-sans antialiased bg-white dark:bg-[#111827]`}>
        <Suspense fallback={null}>
          <PostHogPageView />
        </Suspense>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            disableTransitionOnChange
          >
            <SmoothScroll>
              <main className="w-full min-h-screen bg-white dark:bg-[#111827]">
                {children}
              </main>
            </SmoothScroll>
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
