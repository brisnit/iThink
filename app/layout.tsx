import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookingBar } from "@/components/BookingBar";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Inspire the Young | Motivational School Assemblies`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "school assemblies",
    "motivational speaker for schools",
    "student assembly program",
    "anti-bullying assembly",
    "Red Ribbon Week",
    "leadership training students",
    "iTHINKBIG",
    "Chad Furlong",
  ],
  authors: [{ name: "iTHINKBIG" }],
  openGraph: {
    title: `${site.name} — Inspire the Young`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Inspire the Young`,
    description: site.description,
  },
  alternates: { canonical: site.url },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#07090f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper">
        <JsonLd />
        <Header />
        <main className="flex-1 pb-20 lg:pb-0">{children}</main>
        <Footer />
        <BookingBar />
      </body>
    </html>
  );
}
