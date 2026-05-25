"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const TICKER_ITEMS = [
  "Wedding Planning",
  "Venue Curation",
  "Décor & Styling",
  "Mehendi & Sangeet",
  "Guest Experience",
  "Logistics & Travel",
  "Destination Weddings",
  "Artist & Entertainment",
];

export default function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  // Duplicate for seamless infinite scroll
  const tickerItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <>

      {/* ── HERO SPLIT LAYOUT ── */}
      <section
        id="home"
        className="w-full"
        style={{ paddingTop: "72px" }} // offset for fixed nav
      >
        <div
          className="max-w-[1400px] mx-auto min-h-[calc(100vh-72px)] grid md:grid-cols-2 items-center"
          style={{ backgroundColor: "#FDFAF8" }}
        >
          {/* LEFT — Text content */}
          <div
            className="flex flex-col justify-center px-6 md:px-14 lg:px-20 py-16 md:py-0 order-2 md:order-1"
          >
            {/* Eyebrow */}
            <div
              className="flex items-center gap-3 mb-6"
              style={{ opacity: 0, animation: "fadeUp 0.7s ease 0.1s forwards" }}
            >
              <span
                style={{
                  display: "block",
                  width: "2rem",
                  height: "1px",
                  backgroundColor: "#B06878",
                }}
              />
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "13px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#B06878",
                  fontWeight: 500,
                }}
              >
                Jaipur · Rajasthan
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.6rem, 4.5vw, 4rem)",
                fontWeight: 500,
                color: "#2E1018",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                marginBottom: "1.5rem",
                opacity: 0,
                animation: "fadeUp 0.7s ease 0.25s forwards",
              }}
            >
              Your Wedding,
              <br />
              <em style={{ color: "#B06878", fontStyle: "italic" }}>
                Beautifully Orchestrated.
              </em>
            </h1>

            {/* Subheading */}
            <p
              style={{
               fontFamily: "'DM Sans', sans-serif",
               fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
               color: "#9A7878",
               lineHeight: 1.8,
               letterSpacing: "0.01em",
               fontWeight: 300,
               maxWidth: "480px",
               marginBottom: "2.5rem",
                opacity: 0,
                animation: "fadeUp 0.7s ease 0.4s forwards",
              }}
            >
              Wedding planners, deeply familiar with Rajasthan&apos;s finest venues
              and trusted vendors — bringing your celebration together, seamlessly.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{ opacity: 0, animation: "fadeUp 0.7s ease 0.55s forwards" }}
            >
              <button
                onClick={() => scrollToSection("contact")}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  backgroundColor: "#B06878",
                  color: "#FDFAF8",
                  fontSize: "13px",
                  fontWeight: 500,
                  padding: "12px 28px",
                  borderRadius: "2px",
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  transition: "background 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = "#884858";
                  (e.target as HTMLButtonElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.backgroundColor = "#B06878";
                  (e.target as HTMLButtonElement).style.transform = "translateY(0)";
                }}
              >
                <span>Start Planning<br />Your Wedding</span>
              </button>

              <button
                onClick={() => scrollToSection("services")}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  backgroundColor: "transparent",
                  color: "#B06878",
                  fontSize: "13px",
                  fontWeight: 500,
                  padding: "12px 28px",
                  borderRadius: "2px",
                  border: "1px solid #C4909A",
                  cursor: "pointer",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.borderColor = "#884858";
                  (e.target as HTMLButtonElement).style.color = "#884858";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.borderColor = "#C4909A";
                  (e.target as HTMLButtonElement).style.color = "#B06878";
                }}
              >
                Explore Our Services
              </button>
            </div>

            {/* Trust bar */}
            <div
              className="flex gap-8 mt-10 pt-8"
              style={{
                borderTop: "1px solid rgba(176,104,120,0.18)",
                opacity: 0,
                animation: "fadeUp 0.7s ease 0.7s forwards",
              }}
            >
              {[
                { val: "Free", label: "First Consultation" },
                { val: "< 4h", label: "Response Time" },
                { val: "100%", label: "Personal Attention" },
              ].map(({ val, label }) => (
                <div key={label}>
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.7rem",
                      fontWeight: 500,
                      color: "#B06878",
                      display: "block",
                      lineHeight: 1,
                      marginBottom: "4px",
                    }}
                  >
                    {val}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#9A7878",
                      fontWeight: 400,
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Image panel */}
          <div
            className="relative order-1 md:order-2 w-full"
            style={{
              minHeight: "55vw",
              maxHeight: "100vh",
              height: "calc(100vh - 72px)",
            }}
          >
            {/* Placeholder — replace src with your photo */}
            <div
              className="absolute inset-0"
              style={{ borderLeft: "1px solid rgba(176,104,120,0.1)" }}
          >
             <Image
               src="/images/5497f9a19d423981e767096adaac723c05e9b12d.png"
               alt="Wedding planning by Sarvada Events"
               fill
               className="object-cover object-center"
               priority
             />
          </div>
            {/* Floating badge — bottom left overlap */}
            <div
              className="absolute hidden md:block"
              style={{
                bottom: "2.5rem",
                left: "-1.5rem",
                backgroundColor: "#FDFAF8",
                padding: "1rem 1.5rem",
                borderRadius: "4px",
                boxShadow: "0 8px 32px rgba(136,72,88,0.12)",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#9A7878",
                  marginBottom: "4px",
                }}
              >
                Based in
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.1rem",
                  color: "#2E1018",
                  fontWeight: 500,
                }}
              >
                Jaipur, Rajasthan
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER TAPE ── */}
      <div
        style={{
          backgroundColor: "#884858",
          padding: "0.85rem 0",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            gap: "2.5rem",
            animation: "ticker 28s linear infinite",
          }}
        >
          {tickerItems.map((item, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "1rem",
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#F5EDE8",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
              }}
            >
              {item}
              <span
                style={{
                  display: "inline-block",
                  width: "3px",
                  height: "3px",
                  borderRadius: "50%",
                  backgroundColor: "#C8A055",
                  flexShrink: 0,
                }}
              />
            </span>
          ))}
        </div>
      </div>

      {/* ── KEYFRAMES ── */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
}
