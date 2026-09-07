import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL( process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"), // required for resolving image URLs

  title: "Qiskit Fall Fest 2026 | MIT ADT University, Pune",
  description: "Qiskit Fall Fest 2026 is a college festival celebrating technology, creativity, innovation, and campus culture with exciting events, competitions, and activities for students.",

  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  },

  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },

  keywords: [
    "Qiskit Fall Fest 2026",
    "Qiskit Fest",
    "Qiskit 2026",
    "MIT ADT University, Pune Qiskit Fall Fest",
    "Quantum Computing Festival",
    "Qiskit Community",
    "qiskit fall fest 2026 pune",
    "qiskit fall fest 2026 india",
    "qiskit fall fest 2026 event",
    "qiskit fall fest 2026 registration",
    "qiskit fall fest 2026 schedule",
    "qiskit fall fest 2026 speakers",
    // ... add more keywords for SEO optimization
  ],

  authors: [{ name: "MIT ADT University's Qquest Technical Team" }],
  creator: "MIT ADT University",
  publisher: "MIT ADT University",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  openGraph: {
    title: "Qiskit Fall Fest 2026",
    description: "MIT ADT University's flagship quantum computing festival powered by IBM Qiskit.",
    siteName: "Qiskit Fall Fest 2026",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/banner/banner.png",
        width: 1200,
        height: 630,
        alt: "Qiskit Fall Fest 2026 Banner",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Qiskit Fall Fest 2026",
    description: "MIT ADT University's flagship quantum computing festival powered by IBM Qiskit.",
    images: ["/banner/banner.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-screen flex flex-col">
      {/*Navbar*/}
      <Navbar/>
      {/*Main Content*/}
      <main className={"flex-1 mt-16"}>
        {children}
      </main>
      {/*Footer*/}
      <Footer/>
      </body>
    </html>
  );
}
