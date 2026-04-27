import React from "react";

/* ─── Icons ──────────────────────────────────────────────── */
const AwardIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="8" fill="#EFF6FF" />
    <path d="M18 8L20.5 14.5H27L22 18.5L24 25L18 21L12 25L14 18.5L9 14.5H15.5L18 8Z"
      stroke="#1877F2" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
    <rect x="14" y="25" width="8" height="2" rx="1" fill="#1877F2" />
    <rect x="16" y="27" width="4" height="2" rx="1" fill="#1877F2" />
  </svg>
);

const CertifiedIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="8" fill="#EFF6FF" />
    <circle cx="18" cy="17" r="8" stroke="#1877F2" strokeWidth="1.8" fill="none" />
    <path d="M14 17L17 20L22 14" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 23L11 27M23 23L25 27" stroke="#1877F2" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

/* ─── About Us Page ───────────────────────────────────────── */
const Aboutus = () => {
  return (
    <div className="bg-white w-full overflow-x-hidden">

      <section
        style={{
          position: "relative",
          padding: "80px 0 100px",
          overflow: "hidden",
          background: "#fff",
        }}
      >
        {/* Circuit — top right */}
        <img
          src="/image 650.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "260px",
            opacity: 0.9,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />

        {/* Circuit — bottom left (flipped) */}
        <img
          src="/image 650.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "220px",
            opacity: 0.9,
            transform: "rotate(180deg)",
            pointerEvents: "none",
            userSelect: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            padding: "0 40px",
            display: "flex",
            alignItems: "center",
            gap: "72px",
            position: "relative",
            zIndex: 1,
            width: "100%",
          }}
        >
          {/* ── LEFT: Photo + Satisfaction Card ── */}
          <div
            style={{
              flexShrink: 0,
              position: "relative",
              width: "430px",
            }}
          >
            {/* Team Photo */}
            <img
              src="/image 649.png"
              alt="Azhizen Team"
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                borderRadius: "16px",
                display: "block",
              }}
            />

            {/* 100% Satisfaction card — overlapping bottom-right */}
            <div
              style={{
                position: "absolute",
                bottom: "-28px",
                right: "-28px",
                width: "165px",
                height: "165px",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(24,119,242,0.35)",
              }}
            >
              <img
                src="/Group 407.png"
                alt="100% Overall client satisfaction"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div style={{ flex: 1 }}>
            {/* "About us" badge */}
            <span
              style={{
                display: "inline-block",
                background: "#1877F2",
                color: "#fff",
                fontSize: "13px",
                fontWeight: "600",
                padding: "4px 14px",
                borderRadius: "4px",
                marginBottom: "18px",
                letterSpacing: "0.02em",
              }}
            >
              About us
            </span>

            {/* Heading */}
            <h1
              style={{
                fontSize: "36px",
                fontWeight: "700",
                color: "#111827",
                lineHeight: "1.25",
                marginBottom: "16px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Scaling{" "}
              <span style={{ color: "#1877F2" }}>Engineering Teams</span>
              <br />
              for Growing IT Companies
            </h1>

            {/* Subtext */}
            <p
              style={{
                color: "#4B5563",
                fontSize: "15px",
                lineHeight: "1.75",
                marginBottom: "22px",
                maxWidth: "480px",
              }}
            >
              Helping IT Companies Scale faster with expert engineering talent
              and flexible development support.
            </p>

            {/* Bullet points */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 32px 0",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {[
                "24/7 Call Service Support",
                "Expert Team Members",
                "faster project Completion",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#374151",
                    fontSize: "15px",
                  }}
                >
                  <span
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      backgroundColor: "#1877F2",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            {/* Feature Cards row */}
            <div style={{ display: "flex", gap: "36px", flexWrap: "wrap" }}>
              {/* Award Ceremony */}
              <div style={{ display: "flex", gap: "12px", maxWidth: "230px" }}>
                <div style={{ flexShrink: 0, marginTop: "2px" }}>
                  <AwardIcon />
                </div>
                <div>
                  <p
                    style={{
                      fontWeight: "700",
                      color: "#111827",
                      fontSize: "15px",
                      marginBottom: "5px",
                      margin: "0 0 5px 0",
                    }}
                  >
                    Award Ceremony
                  </p>
                  <p style={{ color: "#6B7280", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
                    Proud recepient of industry for innovation and excellence in
                    It Service
                  </p>
                </div>
              </div>

              {/* Certified Company */}
              <div style={{ display: "flex", gap: "12px", maxWidth: "230px" }}>
                <div style={{ flexShrink: 0, marginTop: "2px" }}>
                  <CertifiedIcon />
                </div>
                <div>
                  <p
                    style={{
                      fontWeight: "700",
                      color: "#111827",
                      fontSize: "15px",
                      margin: "0 0 5px 0",
                    }}
                  >
                    Certified Company
                  </p>
                  <p style={{ color: "#6B7280", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
                    Trusted and Certified for delivering quality IT Solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive styles */}
        <style>{`
          @media (max-width: 900px) {
            .about-inner { flex-direction: column !important; gap: 60px !important; }
            .about-photo  { width: 100% !important; }
          }
        `}</style>
      </section>

    </div>
  );
};

export default Aboutus;