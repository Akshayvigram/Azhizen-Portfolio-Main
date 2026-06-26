import React from "react";
import { useNavigate } from "react-router-dom";

/* ── Distinct Logos ── */
const LOGOS = [
  { src: "/Frame 1098.png",                                                          alt: "Azhizen Media" },
  { src: "/logo.jpg",                                                                 alt: "Azhizen" },
  { src: "/Group 22.png",                                                             alt: "Ease Milker" },
  { src: "/ChatGPT_Image_Feb_14__2026__11_46_43_AM-removebg-preview 2 (1).png",      alt: "Azhizen Academy", customHeight: "72px" },
];

/* Duplicate multiple times to ensure the marquee fills even ultra-wide monitors without gaps */
const TICKER_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

/* ── Stars ── */
const Stars = ({ count = 5 }) => (
  <div style={{ display: "flex", gap: "6px", marginBottom: "12px" }}>
    {Array.from({ length: count }).map((_, i) => (
      <span
        key={i}
        style={{
          color: "#FF8A00",
          fontSize: "28px",
          lineHeight: 1,
        }}
      >
        ★
      </span>
    ))}
  </div>
);

const ClientsSection = () => {
  const navigate = useNavigate();

  return (
    <section style={{ background: "#fff", padding: "72px 0 0" }}>
      {/* ── Heading ── */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 6vw, 40px)",
            fontWeight: "800",
            color: "#111827",
            fontFamily: "Poppins, sans-serif",
            marginBottom: "10px",
          }}
        >
          What Our Clients Say
        </h2>

        <p
          style={{
            color: "#6B7280",
            fontSize: "15px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          The Feedback And Reviews That Are Said By The Clients And Customer
        </p>
      </div>

      {/* ── Testimonial card ── */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            position: "relative",
            borderRadius: "6px",
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            background: "#E8F0FE",
          }}
        >
          {/* Background */}
          <img
            src="/background.png"
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
          />

          {/* Card content */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "32px",
              padding: "24px",
            }}
          >
            {/* Left photo */}
            <div
              style={{
                flex: "1 1 320px",
                minWidth: "260px",
                maxWidth: "360px",
                margin: "0 auto",
              }}
            >
              <img
                src="/What our Clients say.webp"
                alt="Gladson — client"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "6px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              />
            </div>

            {/* Right content */}
            <div
              style={{
                flex: "1 1 320px",
                minWidth: "260px",
              }}
            >
              <Stars count={5} />

              <p
                style={{
                  color: "#1877F2",
                  fontWeight: "700",
                  fontSize: "clamp(26px, 5vw, 32px)",
                  marginBottom: "16px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Gladson
              </p>

              <p
                style={{
                  color: "#111827",
                  fontSize: "clamp(15px, 3vw, 20px)",
                  lineHeight: "1.7",
                  marginBottom: "28px",
                  fontStyle: "normal",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500",
                }}
              >
                “The Level Of Professionalism And Commitment Shown By Azhizen
                Is Outstanding. From Planning To Execution, Everything Was
                Handled Seamlessly.”
              </p>

              <button
                onClick={() => navigate("/about")}
                style={{
                  background: "#F97316",
                  color: "#fff",
                  border: "none",
                  borderRadius: "2px",
                  padding: "12px 32px",
                  fontSize: "18px",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "background 0.2s",
                  letterSpacing: "0.02em",
                  fontFamily: "Poppins, sans-serif",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#EA580C")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#F97316")
                }
              >
                Learn About Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Marquee Logos ── */}
      <div
        style={{
          marginTop: "52px",
          borderTop: "1px solid #E5E7EB",
          padding: "40px 0",
          background: "#fff",
          overflow: "hidden",
        }}
      >
        <div
          className="logo-ticker"
          style={{
            display: "flex",
            alignItems: "center",
            width: "max-content",
            gap: "80px",
            paddingRight: "80px",
            animation: "ticker-scroll 35s linear infinite",
          }}
        >
          {TICKER_LOGOS.map(({ src, alt, customHeight }, i) => (
            <img
              key={i}
              src={src}
              alt={alt}
              style={{
                height: customHeight || "44px",
                width: "auto",
                objectFit: "contain",
                opacity: 0.9,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .logo-ticker:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {

          .logo-ticker {
            gap: 40px !important;
            padding-right: 40px !important;
          }

        }
      `}</style>
    </section>
  );
};

export default ClientsSection;