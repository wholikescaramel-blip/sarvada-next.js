import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarvada Events | Wedding Planner in Jaipur",
  description:
    "Sarvada Events — Jaipur's wedding planning studio. Deeply connected to the city's finest venues and trusted vendors, bringing your celebration together seamlessly.",
  openGraph: {
    title: "Sarvada Events | Wedding Planner in Jaipur",
    description:
      "Wedding planners, deeply familiar with Jaipur's finest venues and trusted vendors — bringing your celebration together, seamlessly.",
    url: "https://www.sarvadaevents.in",
    siteName: "Sarvada Events",
    locale: "en_IN",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
