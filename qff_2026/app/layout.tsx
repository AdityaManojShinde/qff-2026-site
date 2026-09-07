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
  title: "Qiskit Fall Fest 2026 | MIT ADT University, Pune",
  description: "Qiskit Fall Fest 2026 is a college festival celebrating technology, creativity, innovation, and campus culture with exciting events, competitions, and activities for students.",
  icons: {
    icon: "./favicon.svg",
    apple: "./favicon.svg",
  },
  keywords: [
    "Qiskit Fall Fest 2026",
    "Qiskit Fall Fest 2026",
    "Qiskit Fest",
    "Qiskit 2026",
    "Qiskit fest Pune",
    "Qiskit MIT ADT",
    "mit adt qiskit fall fest",
    "pune qiskit fall fest",
    "student festival",
    "technical fest 2026",
    "tech fest Pune",
    "annual college fest",
    "inter college fest 2026",
    "college tech event",
    "college fest Pune",
    "tech fest Pune 2026",
    "MIT ADT University fest",
    "fest in Pune September 2026",
    "student events Pune",
    "engineering college fest Maharashtra",
    "quantum computing fest",
    "Qiskit workshop",
    "quantum computing hackathon",
    "quantum computing college event",
    "AI ML fest 2026",
    "coding fest Pune",
    "hackathon 2026 Pune",
    "hackathon registration 2026",
    "tech workshops for students",
    "coding competition 2026",
    "guest lecture tech fest",
    "paper presentation competition",
    "gaming and esports fest",
    "best college fest to attend 2026",
    "upcoming tech fest near me",
    "how to register for Qiskit fest",
    "college fest events list 2026",
    "student tech competitions India",
    "quantum computing events for students India",
    "Qiskit fest registration",
    "register for Qiskit Fall Fest",
    "Qiskit fest tickets",
    "Qiskit fest schedule",
    "Qiskit fest 2026 date"
  ],
  openGraph: {
    title: "Qiskit Fall Fest 2026",
    description: "MIT ADT University's flagship quantum computing festival powered by IBM Qiskit.",
    siteName: "Qiskit Fall Fest 2026",
    images: [
      {
        url: "/banner/banner.png",
        width: 1200,
        height: 630,
        alt: "Qiskit Fall Fest 2026 Banner",
        type: "website",
      }
    ]
  }
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
