import Image from "next/image";

export default function WhySarvada() {
  return (
    <section
      id="why-sarvada"
      className="w-full"
      style={{
        backgroundColor: "#FDFAF8",
        padding: "7rem 0",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Top Heading */}
        <div className="mb-16">
          <div
            className="flex items-center gap-3 mb-5"
            style={{
              opacity: 0.9,
            }}
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
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#B06878",
                fontWeight: 500,
              }}
            >
              Why Sarvada
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.8rem, 5vw, 5rem)",
              lineHeight: 1.05,
              color: "#2E1018",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              maxWidth: "700px",
            }}
          >
            The Difference
            <br />
            <em
              style={{
                color: "#B06878",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              Is In The Details
            </em>
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">

          {/* LEFT IMAGE */}
          <div className="relative">
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "0.82",
                overflow: "hidden",
                backgroundColor: "#F5EDE8",
              }}
            >
              <Image
                src="/images/bride_outfit.png"
                alt="Bride with bridesmaids"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-14 pt-2">
            {[
              {
                number: "01",
                title: "You work directly with the people planning your wedding",
                text: "The conversations you have from day one are with the same team guiding your celebration through every detail, every decision, and every event.",
              },
              {
                number: "02",
                title: "Deep roots in Jaipur's trusted vendor network",
                text: "From venues and décor teams to artists and hospitality partners, we collaborate with people we know, trust, and genuinely enjoy working with.",
              },
              {
                number: "03",
                title: "Every wedding receives focused personal attention",
                text: "We intentionally take on a limited number of weddings so each celebration feels thoughtfully handled — never rushed, templated, or overextended.",
              },
              {
                number: "04",
                title: "Elegant execution without unnecessary excess",
                text: "Beautiful weddings are not about doing the most. They are about creating the right atmosphere, flow, emotion, and experience for everyone present.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="grid grid-cols-[70px_1fr] gap-4 md:gap-6"
              >
                {/* Number */}
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "3rem",
                    lineHeight: 1,
                    color: "rgba(176,104,120,0.22)",
                    fontWeight: 500,
                  }}
                >
                  {item.number}
                </div>

                {/* Text */}
                <div>
                  <h3
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "1.45rem",
                      lineHeight: 1.35,
                      color: "#2E1018",
                      fontWeight: 500,
                      marginBottom: "0.9rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "1rem",
                      lineHeight: 1.95,
                      color: "#9A7878",
                      fontWeight: 300,
                      maxWidth: "620px",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}