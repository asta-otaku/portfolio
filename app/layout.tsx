import type React from "react";
import type { Metadata } from "next";
import { DM_Sans, Space_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asta-otaku.vercel.app"),
  title: {
    default: "Ibrahim Afolabi — Full Stack Engineer",
    template: "%s | Ibrahim Afolabi",
  },
  description:
    "Frontend-focused full stack engineer with 4+ years building dashboards, e-commerce platforms, real-time apps, and multilingual products with React, Next.js, and TypeScript.",
  keywords: [
    "Full Stack Engineer",
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Ibrahim Afolabi",
    "asta-otaku",
    "Lagos",
  ],
  authors: [{ name: "Ibrahim Afolabi", url: "https://asta-otaku.vercel.app" }],
  creator: "Ibrahim Afolabi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://asta-otaku.vercel.app",
    siteName: "asta-otaku",
    title: "Ibrahim Afolabi — Full Stack Engineer",
    description:
      "Frontend-focused full stack engineer building scalable web products with React, Next.js, and TypeScript.",
    images: [
      {
        url: "/seo.png",
        width: 1200,
        height: 630,
        alt: "Ibrahim Afolabi — Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibrahim Afolabi — Full Stack Engineer",
    description:
      "Frontend-focused full stack engineer with 4+ years shipping web products in React and Next.js.",
    creator: "@Afolabi69093815",
    images: ["/seo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
