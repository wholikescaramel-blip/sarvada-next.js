import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Sarvada Events",
  description: "Get in touch with Sarvada Events — we respond to every enquiry within 4 hours.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}