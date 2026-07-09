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

export const metadata: Metadata = {
  title: "Muhammad Rakha Firdaus — Software Engineer & DJ",
  description:
    "Portfolio of Muhammad Rakha Firdaus (mrakhaf) - Software Engineer specializing in building scalable backend systems with Go, Kafka, and PostgreSQL. Also a DJ.",
  keywords: [
    "Muhammad Rakha Firdaus",
    "mrakhaf",
    "Software Engineer",
    "Go Developer",
    "Backend Engineer",
    "DJ",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Rakha Firdaus", url: "https://github.com/mrakhaf" }],
  openGraph: {
    title: "Muhammad Rakha Firdaus — Software Engineer & DJ",
    description:
      "Portfolio of Muhammad Rakha Firdaus (mrakhaf) - Software Engineer specializing in building scalable backend systems with Go, Kafka, and PostgreSQL. Also a DJ.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
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
      <body className="min-h-full">{children}</body>
    </html>
  );
}
