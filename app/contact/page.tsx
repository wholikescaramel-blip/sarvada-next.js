"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  backgroundColor: "#F5EDE8",
  border: "1px solid rgba(176,104,120,0.2)",
  borderRadius: "2px",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.9rem",
  color: "#2E1018",
  outline: "none",
  fontWeight: 300,
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "10px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#9A7878",
  fontWeight: 500,
  display: "block",
  marginBottom: "0.4rem",
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventDate: "",
    city: "",
    serviceType: "",
    vision: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/mbdaobzy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch {
      alert("Something went wrong. Please try again or reach us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

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
            Get In Touch
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
          Let&apos;s talk about{" "}
          <em style={{ color: "#B06878", fontStyle: "italic" }}>
            your wedding.
          </em>
        </h1>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1rem",
            color: "#9A7878",
            lineHeight: 1.8,
            fontWeight: 300,
            maxWidth: "420px",
            margin: "0 auto",
          }}
        >
          Fill in the form or reach out directly. We respond to every enquiry within 4 hours.
        </p>
      </div>

      {/* ── SPLIT LAYOUT ── */}
      <section className="px-6 md:px-12" style={{ backgroundColor: "#FDFAF8", padding: "5rem 0" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT — Contact info */}
          <div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.6rem, 2.5vw, 2rem)",
                fontWeight: 500,
                color: "#2E1018",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                marginBottom: "2rem",
              }}
            >
              Reach us directly
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2.5rem" }}>
              {[
                {
                  icon: <Mail size={18} strokeWidth={1.5} />,
                  label: "Email",
                  value: "info@sarvadaevents.in",
                  href: "mailto:info@sarvadaevents.in",
                },
                {
                  icon: <Phone size={18} strokeWidth={1.5} />,
                  label: "Phone",
                  value: "+91 62903 83337 · +91 77499 71559",
                  href: "tel:+916290383337",
                },
                {
                  icon: <MapPin size={18} strokeWidth={1.5} />,
                  label: "Based in",
                  value: "Jaipur, Rajasthan, India",
                  href: null,
                },
              ].map(({ icon, label, value, href }) => (
                <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ color: "#B06878", paddingTop: "2px", flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#9A7878",
                        marginBottom: "3px",
                      }}
                    >
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.9rem",
                          color: "#2E1018",
                          fontWeight: 400,
                          textDecoration: "none",
                        }}
                      >
                        {value}
                      </a>
                    ) : (
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.9rem",
                          color: "#2E1018",
                          fontWeight: 400,
                        }}
                      >
                        {value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/916290383337"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.85rem 1.75rem",
                backgroundColor: "#25D366",
                color: "#fff",
                borderRadius: "2px",
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              <MessageCircle size={16} strokeWidth={2} />
              WhatsApp us directly
            </a>

            {/* Note */}
            <div
              style={{
                marginTop: "2.5rem",
                padding: "1.25rem 1.5rem",
                backgroundColor: "rgba(176,104,120,0.06)",
                borderLeft: "2px solid #B06878",
                borderRadius: "0 4px 4px 0",
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  color: "#9A7878",
                  lineHeight: 1.8,
                  fontWeight: 300,
                  fontStyle: "italic",
                }}
              >
                No commitment needed to get in touch. We&apos;ll respond with a
                personalised note within 4 hours during the day.
              </p>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div>
            {submitted ? (
              <div
                style={{
                  padding: "3rem 2rem",
                  textAlign: "center",
                  backgroundColor: "#F5EDE8",
                  borderRadius: "4px",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>✦</div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.6rem",
                    color: "#2E1018",
                    marginBottom: "0.75rem",
                    fontStyle: "italic",
                  }}
                >
                  Thank you.
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.9rem",
                    color: "#9A7878",
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  We&apos;ve received your enquiry and will be in touch within 4 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Your name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ananya Sharma"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone / WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Wedding month & year</label>
                    <input
                      type="text"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      placeholder="e.g. February 2026"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>City / venue in mind</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Jaipur"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>What kind of help are you looking for?</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer", appearance: "none" }}
                  >
                    <option value="">— Select —</option>
                    <option>Full planning — handle everything</option>
                    <option>Partial planning — need help organising</option>
                    <option>Day-of coordination only</option>
                    <option>Venue sourcing help</option>
                    <option>Not sure yet — want to discuss</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Tell us about your vision</label>
                  <textarea
                    name="vision"
                    value={formData.vision}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your wedding, your family, your vision — or just say hello. There's no right answer here."
                    style={{ ...inputStyle, resize: "vertical", minHeight: "110px" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    backgroundColor: loading ? "#C4909A" : "#B06878",
                    color: "#FDFAF8",
                    fontSize: "13px",
                    fontWeight: 500,
                    padding: "14px",
                    borderRadius: "2px",
                    border: "none",
                    cursor: loading ? "not-allowed" : "pointer",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    transition: "background 0.2s",
                  }}
                >
                  {loading ? "Sending..." : "Send my enquiry →"}
                </button>

                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    color: "#9A7878",
                    textAlign: "center",
                    fontWeight: 300,
                  }}
                >
                  🔒 Your details are private. We never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
