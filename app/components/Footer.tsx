export default function Footer() {
  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Inspiration", href: "/inspiration" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ];

  const socialStyle = {
    width: "36px", height: "36px", borderRadius: "50%",
    border: "1px solid rgba(253,250,248,0.12)",
    display: "flex", alignItems: "center", justifyContent: "center",
    color: "rgba(253,250,248,0.4)", textDecoration: "none"
  } as React.CSSProperties;

  return (
    <footer style={{ backgroundColor: "#2E1018", padding: "3rem 0 2rem" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div
          className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-8"
          style={{ borderBottom: "1px solid rgba(253,250,248,0.08)" }}
        >
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 500, color: "rgba(253,250,248,0.85)", marginBottom: "0.3rem" }}>
              Sarvada<span style={{ color: "#9A7878" }}>: </span><em style={{ fontStyle: "italic", color: "#B06878" }}>Events</em>
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.1em", color: "rgba(253,250,248,0.3)", textTransform: "uppercase" }}>
              Jaipur · Rajasthan · India
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href}
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", letterSpacing: "0.08em", color: "rgba(253,250,248,0.4)", textDecoration: "none" }}
                className="hover:text-[#B06878] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a href="https://wa.me/916290383337" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={socialStyle} className="hover:border-[#B06878] hover:text-[#B06878] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </a>
            <a href="https://instagram.com/sarvada.events_" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={socialStyle} className="hover:border-[#B06878] hover:text-[#B06878] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://facebook.com/profile.php?id=61582059745730" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={socialStyle} className="hover:border-[#B06878] hover:text-[#B06878] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6">
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "rgba(253,250,248,0.2)", letterSpacing: "0.04em" }}>© 2026 Sarvada Events.</p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "rgba(253,250,248,0.2)", letterSpacing: "0.06em", textTransform: "uppercase" }}>✦ Crafted with care in Jaipur</p>
        </div>
      </div>
    </footer>
  );
}