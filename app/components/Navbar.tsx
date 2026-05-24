"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (target: string) => {
    setIsMobileMenuOpen(false);
    if (target.startsWith("/")) {
      window.location.href = target;
      return;
    }
    if (isHome) {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = `/#${target}`;
    }
  };

  const navLinks = [
    { label: "Home", target: "/" },
    { label: "Services", target: "/services" },
    { label: "Inspiration", target: "/inspiration" },
    { label: "Blog", target: "/blog" },
    { label: "About Sarvada", target: "/about" },
  ];

  const linkStyle = {
    fontFamily: "'Cormorant Garamond', serif",
    color: "#2E1018",
    fontSize: "17px",
    background: "none",
    border: "none",
    cursor: "pointer",
    letterSpacing: "0.02em",
    opacity: 0.8,
    textDecoration: "none",
  } as React.CSSProperties;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled
          ? "rgba(253, 250, 248, 0.97)"
          : "rgba(253, 250, 248, 0.92)",
        boxShadow: scrolled ? "0 1px 24px rgba(136,72,88,0.07)" : "none",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid rgba(176,104,120,0.12)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3"
          style={{ textDecoration: "none" }}
        >
          <Image
            src="/images/38fc5bcc3e49edd16a18a7591438640458e76381.png"
            alt="Sarvada Events Logo"
            width={44}
            height={44}
            className="h-9 w-9 md:h-11 md:w-11 object-contain"
          />
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              letterSpacing: "0.03em",
              color: "#884858",
              fontWeight: 500,
            }}
          >
            Sarvada
            <span style={{ color: "#9A7878" }}>: </span>
            <span style={{ color: "#2E1018", fontStyle: "italic" }}>Events</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, target }) => (
            <button
              key={label}
              onClick={() => handleNavClick(target)}
              style={linkStyle}
              className="hover:opacity-100 transition-opacity"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("/contact")}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              backgroundColor: "#B06878",
              color: "#FDFAF8",
              fontSize: "16px",
              padding: "10px 26px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.04em",
            }}
            className="hover:opacity-90 transition-opacity"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M6 6L18 18M6 18L18 6" stroke="#2E1018" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="#2E1018" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden px-6 py-5 flex flex-col gap-4"
          style={{
            backgroundColor: "#FDFAF8",
            borderTop: "1px solid rgba(176,104,120,0.12)",
          }}
        >
          {navLinks.map(({ label, target }) => (
            <button
              key={label}
              onClick={() => handleNavClick(target)}
              className="text-left"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "18px",
                color: "#2E1018",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px 0",
              }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("/contact")}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              backgroundColor: "#B06878",
              color: "#FDFAF8",
              fontSize: "17px",
              padding: "12px 0",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
              textAlign: "center",
              marginTop: "4px",
            }}
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
