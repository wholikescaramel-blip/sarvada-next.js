import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Sarvada Events",
  description:
    "Sarvada Events — a Jaipur-based wedding planning company with deep roots in Rajasthan's finest venues and vendor network.",
};

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "72px" }}>

      {/* ── PAGE HERO ── */}
      <div
        style={{
          backgroundColor: "#FDFAF8",
          padding: "5rem 1.5rem 3rem",
          textAlign: "center",
          borderBottom: "1px solid rgba(176,104,120,0.1)",
        }}
      >
        <div className="flex items-center justify-center gap-3 mb-5">
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
            About Sarvada
          </span>
          <span style={{ display: "block", width: "1.5rem", height: "1px", backgroundColor: "#B06878" }} />
        </div>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.4rem, 4vw, 3.5rem)",
            fontWeight: 500,
            color: "#2E1018",
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            marginBottom: "1rem",
          }}
        >
          A studio built on{" "}
          <em style={{ color: "#B06878", fontStyle: "italic" }}>
            care and craft.
          </em>
        </h1>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1rem",
            color: "#9A7878",
            lineHeight: 1.8,
            fontWeight: 300,
            maxWidth: "480px",
            margin: "0 auto",
          }}
        >
          Sarvada means forever in Sanskrit. And that's exactly how we treat every family that trusts us.
        </p>
      </div>

      {/* ── STORY SECTION ── */}
      <section
        style={{ backgroundColor: "#FDFAF8", padding: "5rem 1.5rem" }}
      >
        <div className="max-w-6xl mx-auto md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            {/* Left */}
            <div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  fontWeight: 500,
                  color: "#2E1018",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                  marginBottom: "1.5rem",
                }}
              >
                Who we are
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1rem",
                  color: "#9A7878",
                  lineHeight: 1.9,
                  fontWeight: 300,
                  marginBottom: "1.25rem",
                }}
              >
                Sarvada Events is a wedding and event planning studio based in Jaipur, Rajasthan.
                We work closely with couples and their families to bring celebrations together — 
                seamlessly, thoughtfully, and without unnecessary excess.
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1rem",
                  color: "#9A7878",
                  lineHeight: 1.9,
                  fontWeight: 300,
                  marginBottom: "1.25rem",
                }}
              >
                We are rooted in India's rich cultural traditions while weaving in contemporary elegance 
                — because the best celebrations honour where you come from while embracing who you are today.
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1rem",
                  color: "#9A7878",
                  lineHeight: 1.9,
                  fontWeight: 300,
                }}
              >
                And when the festivities end, the bond doesn't. Every family that trusts us
                becomes a part of the Sarvada story, carried forward for as long as we exist.
              </p>
            </div>

            {/* Right */}
            <div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  fontWeight: 500,
                  color: "#2E1018",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                  marginBottom: "1.5rem",
                }}
              >
                What we stand for
              </h2>

              {[
                {
                  title: "Connections over transactions",
                  text: "Our vendor relationships are built on years of collaboration and mutual trust — not one-off bookings. That means better outcomes, faster problem-solving, and honest recommendations for your wedding.",
                },
                {
                  title: "Focused attention, always",
                  text: "We take on a considered number of weddings each season so every celebration gets the attention it deserves. Your wedding is never one of many to us.",
                },
                {
                  title: "Beautiful without excess",
                  text: "The best weddings are not the loudest or the most elaborate. They are the ones where every element feels intentional — the atmosphere, the flow, the emotion in the room.",
                },
                {
                  title: "Sarvada — forever",
                  text: "Our name is our promise. We do not plan celebration and move on. Every couple, every family becomes a relationship we carry forward. You'll always find us here.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: "2rem",
                    paddingLeft: "1.25rem",
                    borderLeft: "2px solid rgba(176,104,120,0.25)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "#2E1018",
                      marginBottom: "0.5rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.9rem",
                      color: "#9A7878",
                      lineHeight: 1.85,
                      fontWeight: 300,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FULL WIDTH IMAGE ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/7",
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/aboutimage.png"
          alt="Sarvada Events — wedding ceremony"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* ── DETAILS STRIP ── */}
      <div
        style={{
          backgroundColor: "#F5EDE8",
          padding: "3.5rem 1.5rem",
        }}
        className="px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
            {[
              {
                label: "Based in",
                value: "Jaipur, Rajasthan",
                sub: "Available across India for destination weddings",
              },
              {
                label: "Specialisation",
                value: "Weddings & Celebrations",
                sub: "All functions — sangeet, mehendi, pheras, reception",
              },
              {
                label: "Our promise",
                value: "Direct access, always",
                sub: "You will always have the founders' personal attention",
              },
            ].map(({ label, value, sub }) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#B06878",
                    fontWeight: 500,
                    marginBottom: "0.4rem",
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.15rem",
                    fontWeight: 500,
                    color: "#2E1018",
                    marginBottom: "0.4rem",
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.82rem",
                    color: "#9A7878",
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
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
          Your Sarvada begins here:
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
          Get in touch
        </a>
      </div>
    </div>
  );
}
