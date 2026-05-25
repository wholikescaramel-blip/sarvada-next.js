import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inspiration | Sarvada Events",
  description: "Explore wedding aesthetics and mood boards curated by Sarvada Events.",
};

export default function InspirationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}