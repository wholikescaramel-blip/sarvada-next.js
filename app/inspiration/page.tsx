'use client';

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

// ── DATA ─────────────────────────────────────────────────────────

const moodboards = [
  {
    image: "/images/romantic garden.png",
    title: "Romantic Garden",
    palette: "Sage Green · Cream · Warm Brown",
    tag: "Outdoor Wedding",
    swatches: ["#8FAF87", "#F5F0E8", "#7A5C45"],
  },
  {
    image: "/images/modern elegance.png",
    title: "Modern Elegance",
    palette: "Champagne · White · Silver",
    tag: "Contemporary",
    swatches: ["#D4B896", "#F8F4EE", "#C0C0C0"],
  },
  {
    image: "/images/traditional splendour.png",
    title: "Traditional Splendour",
    palette: "Red · Orange · Rani Pink",
    tag: "Culturally Rich",
    swatches: ["#C0392B", "#E67E22", "#9B59B6"],
  },
  {
    image: "/images/bohemian dream.png",
    title: "Bohemian Dream",
    palette: "Terracotta · Sage · Cream",
    tag: "Boho Chic",
    swatches: ["#C4714A", "#8FAF87", "#F5F0E8"],
  },
  {
    image: "/images/aqua serenity.png",
    title: "Aqua Serenity",
    palette: "Blue · Ivory · Teal",
    tag: "Coastal Wedding",
    swatches: ["#4A9AAA", "#FAF8F3", "#2C6B7A"],
  },
  {
    image: "/images/sunset soiree.png",
    title: "Sunset Soirée",
    palette: "Coral · Peach · Warm Gold",
    tag: "Twilight Wedding",
    swatches: ["#C4714A", "#E8956D", "#C8A055"],
  },
];

const galleryImages = [
  { src: "/images/image1.png", alt: "Wedding aesthetic 1" },
  { src: "/images/image2.png", alt: "Wedding aesthetic 2" },
  { src: "/images/image3.png", alt: "Wedding aesthetic 3" },
  { src: "/images/image4.png", alt: "Wedding aesthetic 4" },
  { src: "/images/image5.png", alt: "Wedding aesthetic 5" },
  { src: "/images/image6.png", alt: "Wedding aesthetic 6" },
  { src: "/images/image7.png", alt: "Wedding aesthetic 7" },
  { src: "/images/image8.png", alt: "Wedding aesthetic 8" },
  { src: "/images/image9.png", alt: "Wedding aesthetic 9" },
];

// ── SCROLL HOOK ───────────────────────────────────────────────────

function useScrollDrag(ref: React.RefObject<HTMLDivElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? (el.scrollLeft / max) * 100 : 0);
    };
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, [ref]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;
    const down = (e: MouseEvent) => {
      isDown = true;
      el.classList.add("cursor-grabbing");
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
    const up = () => { isDown = false; el.classList.remove("cursor-grabbing"); };
    const move = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      el.scrollLeft = scrollLeft - (e.pageX - el.offsetLeft - startX) * 1.2;
    };
    el.addEventListener("mousedown", down);
    el.addEventListener("mouseleave", up);
    el.addEventListener("mouseup", up);
    el.addEventListener("mousemove", move);
    return () => {
      el.removeEventListener("mousedown", down);
      el.removeEventListener("mouseleave", up);
      el.removeEventListener("mouseup", up);
      el.removeEventListener("mousemove", move);
    };
  }, [ref]);

  return progress;
}

// ── EYEBROW ───────────────────────────────────────────────────────

function Eyebrow({ label, center = false }: { label: string; center?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 mb-5 ${center ? "justify-center" : ""}`}
    >
      <span style={{ display: "block", width: "1.5rem", height: "1px", backgroundColor: "#B06878" }} />
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#B06878",
          fontWeight: 500,
        }}
      >
        {label}
      </span>
      {center && (
        <span style={{ display: "block", width: "1.5rem", height: "1px", backgroundColor: "#B06878" }} />
      )}
    </div>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────

export default function InspirationPage() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const galleryProgress = useScrollDrag(galleryRef);

  return (
    <div style={{ paddingTop: "72px" }}>

            {/* ── MOOD BOARDS ── */}
      <section
        style={{ backgroundColor: "#F5EDE8", padding: "5rem 0" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            style={{
              paddingBottom: "2.5rem",
            }}
          >

            <Eyebrow label="Mood Boards" />
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: 500,
                  color: "#2E1018",
                  lineHeight: 1.15,
                  letterSpacing: "-0.01em",
                }}
              >
                Find your{" "}
                <em style={{ color: "#B06878", fontStyle: "italic" }}>wedding aesthetic.
                </em>
              </h2>
              <p
               style={{
                 fontFamily: "'DM Sans', sans-serif",
                 fontWeight: 300,
                 color: "#9A7878",
                 fontSize: "0.95rem",
                 lineHeight: 1.8,
                 width: "260px",
                 minWidth: "260px",
                 flexShrink: 0,
                 letterSpacing: "0.01em",
                 textAlign: "right",
               }}
              >
              No two weddings are alike — find the mood that's yours.
            </p>
          </div>
        </div>

          {/* 2-col grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {moodboards.map((board, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#FDFAF8",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 28px rgba(136,72,88,0.1)",
                  border: "none",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={board.image}
                    alt={board.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div style={{ padding: "1.25rem 1.5rem" }}>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.3rem",
                        fontWeight: 500,
                        color: "#2E1018",
                        lineHeight: 1.2,
                        fontStyle: "italic",
                      }}
                    >
                      {board.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "10px",
                        fontWeight: 500,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        backgroundColor: "transparent",
                        color: board.swatches[0],
                        padding: "4px 10px",
                        borderRadius: "99px",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                        border: `1px solid ${board.swatches[0]}`,
                      }}
                    >
                      {board.tag}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      {board.swatches.map((color, j) => (
                        <div
                          key={j}
                          style={{
                            width: "13px",
                            height: "13px",
                            borderRadius: "50%",
                            backgroundColor: color,
                            border: "1px solid rgba(0,0,0,0.08)",
                          }}
                        />
                      ))}
                    </div>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "12px",
                        color: "#9A7878",
                        fontWeight: 300,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {board.palette}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY SCROLL ── */}
      <section
        style={{ backgroundColor: "#F5EDE8", padding: "5rem 0" }}
      >
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
          <Eyebrow label="Gallery" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 500,
                color: "#2E1018",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
              }}
            >
              A glimpse of{" "}
              <em style={{ color: "#B06878", fontStyle: "italic" }}>
                what&apos;s possible.
              </em>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.95rem",
                color: "#9A7878",
                lineHeight: 1.8,
                fontWeight: 300,
                maxWidth: "320px",
                letterSpacing: "0.01em",
              }}
            >
              Scroll right to explore the styles and moments that inspire our work.
            </p>
          </div>
        </div>

        {/* Scroll area */}
        <div className="relative">
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 h-full w-8 md:w-20 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to right, #F5EDE8 0%, rgba(245,237,232,0) 100%)",
            }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to left, #F5EDE8 0%, rgba(245,237,232,0) 100%)",
            }}
          />

          <div
            ref={galleryRef}
            className="flex gap-4 overflow-x-auto px-6 md:px-12 pb-2 cursor-grab select-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 overflow-hidden"
                style={{
                  width: "340px",
                  height: "260px",
                  borderRadius: "12px",
                  position: "relative",
                  boxShadow: "0 4px 20px rgba(136,72,88,0.08)",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="340px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="px-6 md:px-12 mt-5 max-w-7xl mx-auto">
          <div
            style={{
              height: "1.5px",
              width: "100%",
              backgroundColor: "rgba(176,104,120,0.15)",
              borderRadius: "99px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${galleryProgress}%`,
                backgroundColor: "#B06878",
                borderRadius: "99px",
                transition: "width 0.15s ease",
              }}
            />
          </div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#9A7878",
              fontWeight: 400,
              marginTop: "0.5rem",
              textAlign: "right",
            }}
          >
            Scroll to explore
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <div
        style={{
          backgroundColor: "#FDFAF8",
          padding: "4rem 1.5rem",
          textAlign: "center",
          borderTop: "1px solid rgba(176,104,120,0.1)",
        }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            color: "#2E1018",
            fontWeight: 400,
            fontStyle: "italic",
            marginBottom: "1.5rem",
          }}
        >
          Found your aesthetic? Let&apos;s bring it to life.
        </p>
        <a
          href="/contact"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            backgroundColor: "#B06878",
            color: "#FDFAF8",
            fontSize: "13px",
            fontWeight: 500,
            padding: "12px 28px",
            borderRadius: "2px",
            textDecoration: "none",
            display: "inline-block",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Start planning your wedding
        </a>
      </div>

    </div>
  );
}
