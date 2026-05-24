"use client";

export default function HowWeWork() {
  const steps = [
    {
      number: "1",
      title: "Free consultation",
      text: "A relaxed 30-minute call to understand your vision, priorities, and what matters most to you.",
    },
    {
      number: "2",
      title: "Tailored proposal",
      text: "Within 48 hours, we send a detailed proposal scoped specifically to your wedding — no templates.",
    },
    {
      number: "3",
      title: "Planning begins",
      text: "We set up your dedicated planning portal, begin vendor outreach, and build your master timeline.",
    },
    {
      number: "4",
      title: "Regular check-ins",
      text: "Monthly (then weekly) updates so you're always informed — never in the dark about what's happening.",
    },
    {
      number: "5",
      title: "Your perfect day",
      text: "We're on-ground the entire time. You enjoy every moment. We handle everything else.",
    },
  ];

  return (
    <section
      id="how-we-work"
      className="w-full"
      style={{
        backgroundColor: "#F5EDE8",
        padding: "7rem 0",
      }}
    >
      <div className="max-w-[1480px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Small Label */}
        <div
          className="flex items-center gap-4 mb-7"
          style={{
            opacity: 0.9,
          }}
        >
          <span
            style={{
              width: "32px",
              height: "1px",
              backgroundColor: "#B06878",
              display: "block",
            }}
          />

          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#B06878",
              fontWeight: 500,
            }}
          >
            HOW WE WORK
          </span>
        </div>

        {/* Heading */}
        <div className="mb-20">
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.8rem, 5vw, 4.8rem)",
              lineHeight: 0.96,
              color: "#3B241D",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              maxWidth: "650px",
            }}
          >
            From first hello
            <br />
            to{" "}
            <em
              style={{
                color: "#B06878",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              Sarvada:
            </em>
          </h2>

          <p
            style={{
              marginTop: "1.6rem",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.02rem",
              lineHeight: 1.9,
              color: "#7C6763",
              maxWidth: "520px",
              fontWeight: 300,
            }}
          >
            A clear, calm process so you always know where you are and
            what’s coming next.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="grid md:grid-cols-5 gap-12 md:gap-8 relative">
            
            {/* Global Connecting Line */}
            <div
              className="hidden md:block"
              style={{
                position: "absolute",
                top: "32px",
                left: "7%",
                width: "86%",
                height: "1px",
                backgroundColor: "rgba(176,104,120,0.18)",
                zIndex: 0,
              }}
            />

            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center"
              >
                {/* Circle Button */}
                <div
                  style={{
                    width: "66px",
                    height: "66px",
                    borderRadius: "9999px",
                    border: "1px solid rgba(176,104,120,0.22)",
                    backgroundColor: "#F5EDE8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.7rem",
                    position: "relative",
                    zIndex: 2,
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#B06878";
                    e.currentTarget.style.borderColor = "#B06878";

                    const span = e.currentTarget.querySelector("span");

                    if (span) {
                      span.style.color = "#FFFFFF";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#F5EDE8";
                    e.currentTarget.style.borderColor =
                      "rgba(176,104,120,0.22)";

                    const span = e.currentTarget.querySelector("span");

                    if (span) {
                      span.style.color = "#B06878";
                    }
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.7rem",
                      color: "#B06878",
                      transition: "all 0.3s ease",
                      lineHeight: 1,
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1.08rem",
                    lineHeight: 1.45,
                    color: "#2E1018",
                    fontWeight: 500,
                    marginBottom: "0.9rem",
                    letterSpacing: "-0.01em",
                    maxWidth: "220px",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.92rem",
                    lineHeight: 1.9,
                    color: "#8A7470",
                    fontWeight: 300,
                    maxWidth: "235px",
                  }}
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}