import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://mrakhaf.github.io";
const DESCRIPTION =
  "Portfolio of Muhammad Rakha Firdaus (mrakhaf) — Software Engineer specializing in building scalable backend systems with Go, Kafka, and PostgreSQL. Also a DJ.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "mrakhaf — Software Engineer & DJ",
    template: "%s · mrakhaf",
  },
  description: DESCRIPTION,
  applicationName: "mrakhaf",
  keywords: [
    "Muhammad Rakha Firdaus",
    "mrakhaf",
    "Software Engineer",
    "Go Developer",
    "Golang",
    "Backend Engineer",
    "Kafka",
    "PostgreSQL",
    "Distributed Systems",
    "DJ",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Rakha Firdaus", url: "https://github.com/mrakhaf" }],
  creator: "Muhammad Rakha Firdaus",
  publisher: "Muhammad Rakha Firdaus",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Muhammad Rakha Firdaus — Software Engineer & DJ",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "mrakhaf",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Rakha Firdaus — Software Engineer & DJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Rakha Firdaus — Software Engineer & DJ",
    description: DESCRIPTION,
    creator: "@mrakhaf",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Rakha Firdaus",
  alternateName: "mrakhaf",
  url: SITE_URL,
  image: `${SITE_URL}/rakha.jpg`,
  jobTitle: "Software Engineer",
  description: DESCRIPTION,
  knowsAbout: [
    "Go",
    "Kafka",
    "PostgreSQL",
    "Backend Engineering",
    "Distributed Systems",
    "DJ",
  ],
  sameAs: [
    "https://github.com/mrakhaf",
    "https://linkedin.com/in/mrakhaf",
    "https://instagram.com/mrakhaf",
    "https://youtube.com/@mrakhaf",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
