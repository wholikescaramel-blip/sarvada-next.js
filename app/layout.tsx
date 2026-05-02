import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Sarvada Events | Wedding & Event Planner in Jaipur',
  description: 'Sarvada Events is a Jaipur-based wedding and event planning company specialising in personalised weddings, pre-wedding events, and celebrations across Rajasthan.',
  openGraph: {
    title: 'Sarvada Events | Wedding & Event Planner in Jaipur',
    description: 'Celebrating Togetherness — weddings and events crafted with soul in Jaipur, Rajasthan.',
    url: 'https://www.sarvadaevents.in',
    siteName: 'Sarvada Events',
    locale: 'en_IN',
    type: 'website',
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
