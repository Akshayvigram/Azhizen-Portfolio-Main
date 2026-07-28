import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    detailedDesc: "Our comprehensive aptitude training program is designed to sharpen your quantitative, logical reasoning, and verbal skills. These skills are crucial for clearing the initial screening rounds of leading global companies and competitive exams.",
    points: [
      "Quantitative Aptitude (Arithmetic, Algebra, Geometry, Data Interpretation)",
      "Logical & Analytical Reasoning (Puzzles, Coding-Decoding, Syllogisms)",
      "Verbal Ability (Grammar, Reading Comprehension, Vocabulary)",
      "Mock Tests & Simulated Time-Bound Practice Sessions"
    ]
  },
  {
    icon: <MockIcon />,
    title: "Mock Interviews",
    desc: "Build Confidence Through Real Interview Practice.",
    detailedDesc: "Gain realistic interview experience and constructive feedback through structured mock interviews conducted by industry experts. Learn how to articulate your thoughts clearly, structure technical answers, and handle behavioral questions with confidence.",
    points: [
      "1-on-1 Simulated Interviews mimicking top tech and corporate rounds",
      "Comprehensive Technical and HR Question Preparation",
      "Detailed Feedback Reports highlighting strengths and areas of improvement",
      "Communication Skills, Body Language, and Confidence Coaching"
    ]
  },
  {
    icon: <ResumeIcon />,
    title: "Resume Building",
    desc: "Craft Resumes That Stand Out To Recruiters.",
    detailedDesc: "Your resume is your first impression to recruiters. We assist you in creating a high-impact, professional resume that showcases your key projects, technical skills, and achievements in an ATS-friendly layout.",
    points: [
      "ATS-Optimized Resumes tailored to your target roles",
      "Highlighting Core Projects, Tech Stack, and Technical Contributions",
      "Action-Verb driven bullet points for maximum impact",
      "LinkedIn Profile Makeover and Professional Branding advice"
    ]
  },
  {
    icon: <LightbulbIcon />,
    title: "Technical & Soft Skills",
    desc: "Develop Technical Knowledge And Workplace Skills.",
    detailedDesc: "Bridging the gap between theory and industry demands. We offer deep-dive training on core CS fundamentals alongside crucial soft skills like public speaking, business etiquette, and teamwork to ensure workplace success.",
    points: [
      "Core Computer Science Fundamentals (OOPs, DBMS, OS, Data Structures)",
      "System Design basics and SDLC methodologies",
      "Effective Workplace Communication, Email Etiquette, and Presentation Skills",
      "Team Collaboration, Problem Solving, and Leadership training"
    ]
  },
];

/* ─── Component ─────────────────────────────────────────────── */
const TrainingSupport = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleScrollToServices = (e) => {
    e.preventDefault();
    const element = document.getElementById("services");
    if (element) {
      const navbarHeight = 64; // The navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#fff", paddingTop: "64px", overflowX: "hidden" }}>

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
            background: "linear-gradient(to right, rgba(13,27,42,0.92) 0%, rgba(13,27,42,0.8) 35%, rgba(13,27,42,0.4) 65%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Hero Left Side Content Container */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            zIndex: 10,
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ maxWidth: "580px", textAlign: "left" }}>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 700, lineHeight: 1.25, marginBottom: "16px", color: "#ffffff", textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}
            >
              Academic Training & <br />
              Placement Support
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              style={{ fontSize: "clamp(13.5px, 1.6vw, 15.5px)", color: "#cbd5e1", lineHeight: 1.6, marginBottom: "32px", fontWeight: 400 }}
            >
              Equipping students with industry-relevant technical competencies, aptitude skills, mock interviews, and placement guidance to succeed in modern corporate careers.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              href="#services"
              onClick={handleScrollToServices}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#2563EB",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "14px",
                padding: "12px 24px",
                borderRadius: "6px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 14px rgba(37,99,235,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1d4ed8";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#2563EB";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Explore Our Services
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </motion.a>
          </div>
        </div>
      </div>

      {/* ══ 2. STATS BAR ════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
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
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
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
        </motion.div>

        {/* 4 equal-width cards in a grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "12px",
            flex: 1,
          }}
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={itemVariants}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>

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
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ flex: "0 0 280px" }}
        >
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
        </motion.div>

        {/* Right content */}
        <div style={{ flex: 1, minWidth: "260px" }}>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{ color: "#2563EB", fontSize: "14px", fontWeight: 600, marginBottom: "6px" }}
          >
            What We Do
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontSize: "26px", fontWeight: 700, color: "#0a1931", marginBottom: "28px", lineHeight: 1.25 }}
          >
            Your Success, Our Mission!
          </motion.h2>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: "22px" }}
          >
            {MISSION_POINTS.map((pt) => (
              <motion.div 
                key={pt.title} 
                variants={itemVariants}
                style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}
              >
                <div style={{ flexShrink: 0, marginTop: "2px" }}>
                  <CheckIcon />
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "15px", color: "#0a1931", marginBottom: "4px" }}>
                    {pt.title}
                  </p>
                  <p style={{ fontSize: "13.5px", color: "#4B5563", lineHeight: 1.6 }}>{pt.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ══ 4. TRANSFORMING SKILLS BANNER ═══════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
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
          <p style={{ fontSize: "26px", fontWeight: 700, color: "#0a1931", lineHeight: 1.25 }}>
            Transforming Skills Into
          </p>
          <p style={{ fontSize: "26px", fontWeight: 700, color: "#2563EB", lineHeight: 1.25 }}>
            Career Opportunities
          </p>
        </div>

        {/* Right */}
        <div style={{ maxWidth: "320px", textAlign: "right" }}>
          <p style={{ fontSize: "13px", color: "#6B7280", marginBottom: "10px", lineHeight: 1.6 }}>
            From Scratch to Upskilled — Explore the Courses That Empower Your Growth.
          </p>
          <a
            href="https://academy.azhizen.com/courses"
            target="_blank"
            rel="noopener noreferrer"
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
      </motion.div>

      {/* ══ 5. SERVICE CARDS ════════════════════════════════ */}
      <motion.div
        id="services"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
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
          <motion.div
            key={svc.title}
            variants={itemVariants}
            whileHover={{ y: -6, boxShadow: "0 8px 24px rgba(37,99,235,0.12)", transition: { duration: 0.2 } }}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "10px",
              padding: "28px 22px",
              backgroundColor: "#fff",
              cursor: "default",
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
              onClick={(e) => {
                e.preventDefault();
                setSelectedService(svc);
              }}
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
          </motion.div>
        ))}
      </motion.div>

      {/* ══ 6. SERVICE DETAIL MODAL ════════════════════════ */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(15, 23, 42, 0.6)",
              backdropFilter: "blur(4px)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                width: "100%",
                maxWidth: "580px",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                overflow: "hidden",
                border: "1px solid #f1f5f9",
              }}
            >
              {/* Modal Header */}
              <div 
                style={{ 
                  padding: "20px 24px", 
                  borderBottom: "1px solid #f1f5f9", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "space-between",
                  backgroundColor: "#f8fafc",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ transform: "scale(1.05)" }}>{selectedService.icon}</div>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#0a1931", margin: 0 }}>
                    {selectedService.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "4px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#94a3b8",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#e2e8f0";
                    e.currentTarget.style.color = "#475569";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#94a3b8";
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              {/* Modal Body */}
              <div style={{ padding: "24px", maxHeight: "70vh", overflowY: "auto" }}>
                <p style={{ fontSize: "14px", color: "#4B5563", lineHeight: 1.6, marginBottom: "20px" }}>
                  {selectedService.detailedDesc}
                </p>

                <h4 style={{ fontSize: "14.5px", fontWeight: 700, color: "#0a1931", marginBottom: "12px" }}>
                  Key Topics & Covered Areas:
                </h4>

                <ul style={{ listStyleType: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {selectedService.points.map((pt, index) => (
                    <li key={index} style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "13.5px", color: "#4B5563", lineHeight: 1.5 }}>
                      <div style={{ flexShrink: 0, marginTop: "3px" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Footer */}
              <div 
                style={{ 
                  padding: "16px 24px", 
                  borderTop: "1px solid #f1f5f9", 
                  display: "flex", 
                  justifyContent: "flex-end",
                  backgroundColor: "#f8fafc",
                }}
              >
                <button
                  onClick={() => setSelectedService(null)}
                  style={{
                    backgroundColor: "#054E96",
                    color: "#ffffff",
                    fontWeight: 600,
                    fontSize: "13px",
                    padding: "8px 20px",
                    borderRadius: "6px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(5, 78, 150, 0.2)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#033b72";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#054E96";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default TrainingSupport;
