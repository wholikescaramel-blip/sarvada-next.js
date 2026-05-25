import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Sarvada Events",
  description: "Full-service wedding planning in Jaipur — venue curation, décor, guest experience and more.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}