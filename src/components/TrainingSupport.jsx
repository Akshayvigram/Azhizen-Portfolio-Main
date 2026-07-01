import React from "react";

/* ─── SVG Icons ────────────────────────────────────────────── */
const TargetIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    {/* Brain lobes with soft blue fill */}
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" fill="#eff6ff" />
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" fill="#eff6ff" />
    
    {/* Cog mechanism lines in center */}
    <path d="M12 7v10M7 12h10" />
    <path d="m8.5 8.5 7 7M15.5 8.5l-7 7" />
    
    {/* Center gear circle (solid background mask) */}
    <circle cx="12" cy="12" r="3" fill="#fff" />
  </svg>
);

const MockIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    {/* First Bubble (Back) */}
    <path d="M5 12l-2 3v-3" fill="#fff" />
    <rect x="2" y="2" width="13" height="10" rx="2" fill="#fff" />
    
    {/* Second Bubble (Front - blocks the back one) */}
    <path d="M19 18l2 3v-3" fill="#fff" />
    <rect x="9" y="8" width="13" height="10" rx="2" fill="#fff" />
  </svg>
);

const ResumeIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="3" width="22" height="30" rx="2" stroke="#7C3AED" strokeWidth="2" fill="none"/>
    <line x1="12" y1="11" x2="24" y2="11" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/>
    <line x1="12" y1="17" x2="24" y2="17" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/>
    <line x1="12" y1="23" x2="19" y2="23" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const LightbulbIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 4a10 10 0 0 1 6 18v2H12v-2A10 10 0 0 1 18 4Z" stroke="#F59E0B" strokeWidth="2" fill="none"/>
    <line x1="14" y1="28" x2="22" y2="28" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
    <line x1="15" y1="31" x2="21" y2="31" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="10" fill="#2563EB"/>
    <path d="M6 11.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ─── Data ─────────────────────────────────────────────────── */
const STATS = [
  { value: "100+", label: "Students" },
  { value: "10+",  label: "College" },
  { value: "90%",  label: "Success Rate" },
  { value: "04",   label: "Year Of Experience" },
];

const MISSION_POINTS = [
  {
    title: "Career Vision",
    desc:  "Every Student Aspires To Build A Successful Career. We Help Them Identify Their Goals And Prepare For The Opportunities Ahead.",
  },
  {
    title: "Industry Readiness",
    desc:  "Students Are Trained With Technical Knowledge, Aptitude Skills, And Professional Competencies Required By Modern Industries.",
  },
  {
    title: "Placement Support",
    desc:  "Comprehensive Placement Assistance, Interview Preparation, And Career Guidance Help Students Secure Their Dream Jobs.",
  },
];

const SERVICES = [
  {
    icon: <TargetIcon />,
    title: "Aptitude Training",
    desc: "Master Reasoning, Aptitude, And Analytical Thinking.",
  },
  {
    icon: <MockIcon />,
    title: "Mock Interviews",
    desc: "Build Confidence Through Real Interview Practice.",
  },
  {
    icon: <ResumeIcon />,
    title: "Resume Building",
    desc: "Craft Resumes That Stand Out To Recruiters.",
  },
  {
    icon: <LightbulbIcon />,
    title: "Technical & Soft Skills",
    desc: "Develop Technical Knowledge And Workplace Skills.",
  },
];

/* ─── Component ─────────────────────────────────────────────── */
const TrainingSupport = () => {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#fff", paddingTop: "64px" }}>

      {/* ══ 1. HERO ══════════════════════════════════════════ */}
      <div
        style={{
          width: "100%",
          height: "calc(100vh - 64px)",
          minHeight: "380px",
          maxHeight: "490px",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#3a5a6e",
        }}
      >
        {/* Full-bleed hero image */}
        <img
          src="/Frame 1165.png"
          alt="Training Support Hero"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "right 30%",
            display: "block",
          }}
        />

        {/* Left gray-blue overlay that fades into image — matches reference */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(58,90,110,1) 0%, rgba(58,90,110,0.85) 22%, rgba(58,90,110,0.4) 38%, transparent 55%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* ══ 2. STATS BAR ════════════════════════════════════ */}
      <div
        style={{
          backgroundColor: "#054E96",
          width: "100%",
          boxSizing: "border-box",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "24px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
        {/* Left label */}
        <div
          style={{
            color: "#fff",
            fontSize: "13px",
            fontWeight: 400,
            lineHeight: 1.7,
            flexShrink: 0,
            width: "160px",
            marginRight: "24px",
          }}
        >
          <span style={{ display: "block" }}>Outcome's of</span>
          <span style={{ display: "block", fontWeight: 700, fontSize: "14px" }}>Azhizen Acedamy</span>
        </div>

        {/* 4 equal-width cards in a grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "12px",
            flex: 1,
          }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              style={{
                backgroundColor: "#fff",
                clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
                padding: "14px 18px",
                textAlign: "center",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <div
                style={{
                  fontSize: "26px",
                  fontWeight: 700,
                  color: "#0d1b2a",
                  lineHeight: 1.1,
                  letterSpacing: "-0.5px",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#374151",
                  marginTop: "4px",
                  fontWeight: 500,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      {/* ══ 3. WHAT WE DO ════════════════════════════════════ */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "64px 32px",
          display: "flex",
          alignItems: "flex-start",
          gap: "56px",
          flexWrap: "wrap",
        }}
      >
        {/* Left image */}
        <div style={{ flex: "0 0 280px" }}>
          <img
            src="/Frame 1510.png"
            alt="Training session"
            style={{
              width: "100%",
              borderRadius: "8px",
              display: "block",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Right content */}
        <div style={{ flex: 1, minWidth: "260px" }}>
          <p style={{ color: "#2563EB", fontSize: "14px", fontWeight: 600, marginBottom: "6px" }}>What We Do</p>
          <h2 style={{ fontSize: "26px", fontWeight: 700, color: "#0a1931", marginBottom: "28px", lineHeight: 1.25 }}>
            Your Success, Our Mission!
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            {MISSION_POINTS.map((pt) => (
              <div key={pt.title} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, marginTop: "2px" }}>
                  <CheckIcon />
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "15px", color: "#0a1931", marginBottom: "4px" }}>
                    {pt.title}
                  </p>
                  <p style={{ fontSize: "13.5px", color: "#4B5563", lineHeight: 1.6 }}>{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ 4. TRANSFORMING SKILLS BANNER ═══════════════════ */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto 48px",
          padding: "0 32px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
          borderTop: "1px solid #e5e7eb",
          paddingTop: "40px",
        }}
      >
        {/* Left */}
        <div>
          <p style={{ fontSize: "22px", fontWeight: 700, color: "#0a1931", lineHeight: 1.25 }}>
            Transforming Skills Into
          </p>
          <p style={{ fontSize: "22px", fontWeight: 700, color: "#2563EB", lineHeight: 1.25 }}>
            Career Opportunities
          </p>
        </div>

        {/* Right */}
        <div style={{ maxWidth: "320px", textAlign: "right" }}>
          <p style={{ fontSize: "13px", color: "#6B7280", marginBottom: "10px", lineHeight: 1.6 }}>
            From Scratch to Upskilled — Explore the Courses That Empower Your Growth.
          </p>
          <a
            href="#services"
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "#2563EB",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
          >
            Explore Now →
          </a>
        </div>
      </div>

      {/* ══ 5. SERVICE CARDS ════════════════════════════════ */}
      <div
        id="services"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 32px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "24px",
        }}
      >
        {SERVICES.map((svc) => (
          <div
            key={svc.title}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "10px",
              padding: "28px 22px",
              backgroundColor: "#fff",
              transition: "box-shadow 0.2s ease, transform 0.2s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(37,99,235,0.12)";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div style={{ marginBottom: "16px" }}>{svc.icon}</div>
            <p style={{ fontWeight: 700, fontSize: "15px", color: "#0a1931", marginBottom: "8px" }}>
              {svc.title}
            </p>
            <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.6, marginBottom: "20px" }}>
              {svc.desc}
            </p>
            <a
              href="#"
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#2563EB",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TrainingSupport;
