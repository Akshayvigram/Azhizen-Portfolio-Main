import React from "react";

const SERVICES = [
  {
    id: 1,
    image: "/service1.png",
    title: "CUSTOM HARDWARE DESIGN",
    description:
      "We Deliver Advanced Hardware Prototyping With Custom PCB Design, Tailored Solution For Embedded Systems And IoT Innovation.",
  },
  {
    id: 2,
    image: "/service2.png",
    title: "AI/ML & FIRMWARE INTEGRATION",
    description:
      "We Integrate AI/ML Capabilities And Firmware Updates. Smart, Adaptable Systems Built For The Future",
  },
  {
    id: 3,
    image: "/service3.png",
    title: "RESEARCH & DEVELOPMENT",
    description:
      "Experts In Research And Development Employ Rigorous Methodologies And Validation Processes.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      style={{
        background: "#0B1120",
        padding: "72px 32px 80px",
      }}
    >
      {/* ── Heading ── */}
      <div style={{ textAlign: "center", marginBottom: "52px" }}>
        <h2
          style={{
            color: "#ffffff",
            fontSize: "38px",
            fontWeight: "700",
            fontFamily: "Poppins, sans-serif",
            marginBottom: "12px",
          }}
        >
          Our Service
        </h2>
        <p
          style={{
            color: "#94A3B8",
            fontSize: "15px",
            fontWeight: "400",
          }}
        >
          these are the core service that we provide to you
        </p>
      </div>

      {/* ── Cards ── */}
      <div
        style={{
          display: "flex",
          gap: "28px",
          justifyContent: "center",
          flexWrap: "wrap",
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        {SERVICES.map(({ id, image, title, description }) => (
          <div
            key={id}
            style={{
              background: "#131C2E",
              borderRadius: "16px",
              overflow: "hidden",
              width: "320px",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.25s, box-shadow 0.25s",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 12px 36px rgba(24,119,242,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
            }}
          >
            {/* Image */}
            <div style={{ width: "100%", height: "240px", overflow: "hidden" }}>
              <img
                src={image}
                alt={title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            {/* Content */}
            <div
              style={{
                padding: "24px 20px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                flex: 1,
              }}
            >
              <h3
                style={{
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: "700",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  margin: 0,
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  color: "#94A3B8",
                  fontSize: "13px",
                  lineHeight: "1.65",
                  margin: 0,
                  flex: 1,
                  textAlign: "center",
                }}
              >
                {description}
              </p>

              {/* View Course button */}
              <button
                style={{
                  marginTop: "14px",
                  width: "100%",
                  padding: "11px 0",
                  background: "#1877F2",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  letterSpacing: "0.01em",
                  transition: "filter 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.15)")}
                onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1)")}
              >
                View Course
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          #services > div:last-child {
            flex-direction: column;
            align-items: center;
          }
          #services > div:last-child > div {
            width: 100% !important;
            max-width: 360px;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
