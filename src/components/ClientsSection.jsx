import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
  <div className="testimonial-stars" style={{ display: "flex", gap: "6px", marginBottom: "12px" }}>
    {Array.from({ length: count }).map((_, i) => (
      <span
        key={i}
        style={{
          color: "#FF8A00",
          fontSize: "30px",
          lineHeight: 1,
        }}
      >
        ★
      </span>
    ))}
  </div>
);

const REVIEWS = [
  {
    id: 1,
    name: "Alexander",
    title: "Coo, Nexa Solutions.",
    stars: 5,
    text: "“The Level Of Professionalism And Commitment Shown By Azhizen Is Outstanding. From Planning To Execution, Everything Was Handled Seamlessly.”",
    image: "/What our Clients say.webp"
  },
  {
    id: 2,
    name: "Priya Sharma",
    title: "Lead R&D, BioTech Solutions.",
    stars: 5,
    text: "“Azhizen delivered advanced biomedical prototyping with extreme accuracy. Their firmware integration and technical guidance were crucial to our project's success.”",
    image: "/client_priya_sharma.png"
  },
  {
    id: 3,
    name: "Marcus",
    title: "Director, Apex Academy.",
    stars: 5,
    text: "“The cohort programs at Azhizen Academy are incredibly well-structured. We bridge the academic gap and create highly skilled, placement-ready engineers.”",
    image: "/client_marcus.png"
  },
  {
    id: 4,
    name: "Emily Watson",
    title: "Founder, AgroAutomation.",
    stars: 5,
    text: "“EaseMilker's smart automated system was refined and brought to production thanks to Azhizen's outstanding IoT and hardware prototyping capabilities.”",
    image: "/client_emily_watson.png"
  },
  {
    id: 5,
    name: "David K.",
    title: "Creative Head, Vanguard Media.",
    stars: 5,
    text: "“From creative storytelling to professional digital branding, Azhizen Media translates complex technical ideas into highly engaging business stories.”",
    image: "/client_david_k.png"
  }
];

const ClientsSection = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section style={{ background: "#fff", padding: "36px 0 0" }}>
      {/* ── Heading for Testimonials ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          marginBottom: "40px",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 6vw, 40px)",
            fontWeight: "600",
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
            margin: "0",
          }}
        >
          The Feedback And Reviews That Are Said By The Clients And Customer
        </p>
      </motion.div>

      {/* ── Testimonial Slider Row ── */}
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="slider-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "0 20px 56px",
        }}
      >
        {/* Left Arrow Button */}
        <motion.button
          onClick={prevSlide}
          whileHover={{ 
            scale: 1.1,
            backgroundColor: "#111827",
            borderColor: "#111827",
            color: "#ffffff",
            boxShadow: "0 6px 16px rgba(17, 24, 39, 0.25)"
          }}
          whileTap={{ scale: 0.95 }}
          className="arrow-btn"
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            border: "2px solid #475569",
            backgroundColor: "#ffffff",
            color: "#475569",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            outline: "none",
            flexShrink: 0,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </motion.button>

        {/* Testimonial Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="testimonial-card"
            style={{
              flex: 1,
              position: "relative",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
              background: "#E8F0FE",
              maxWidth: "980px",
            }}
          >
          {/* Background image */}
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
              objectPosition: "center 30%",
              zIndex: 0,
            }}
          />

          {/* Card content */}
          <div
            className="testimonial-content"
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "40px",
              padding: "42px 40px",
            }}
          >
            {/* Left photo */}
            <div
              className="testimonial-photo-wrapper"
              style={{
                flex: "1 1 290px",
                minWidth: "250px",
                maxWidth: "290px",
                margin: "0",
              }}
            >
              <img
                src={REVIEWS[activeIndex].image}
                alt={REVIEWS[activeIndex].name}
                className="testimonial-photo"
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "8px",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                }}
              />
            </div>

            {/* Right content */}
            <div
              className="testimonial-text-wrapper"
              style={{
                flex: "1 1 320px",
                minWidth: "260px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Stars count={REVIEWS[activeIndex].stars} />

              <p
                className="testimonial-text"
                style={{
                  color: "#1e293b",
                  fontSize: "clamp(14.5px, 2vw, 16px)",
                  lineHeight: "1.7",
                  marginBottom: "20px",
                  fontStyle: "normal",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                {REVIEWS[activeIndex].text}
              </p>

              {/* Name Block with thick left black border */}
              <div
                className="testimonial-name-block"
                style={{
                  borderLeft: "8px solid #000000",
                  paddingLeft: "16px",
                  textAlign: "left",
                }}
              >
                <p
                  className="testimonial-name"
                  style={{
                    color: "#1877F2",
                    fontWeight: "800",
                    fontSize: "22px",
                    fontFamily: "Poppins, sans-serif",
                    margin: "0 0 2px 0",
                    lineHeight: 1.2,
                  }}
                >
                  {REVIEWS[activeIndex].name}
                </p>
                <p
                  className="testimonial-title"
                  style={{
                    color: "#475569",
                    fontSize: "14px",
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                    margin: 0,
                  }}
                >
                  {REVIEWS[activeIndex].title}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Right Arrow Button */}
      <motion.button
        onClick={nextSlide}
        whileHover={{ 
          scale: 1.1,
          backgroundColor: "#111827",
          borderColor: "#111827",
          color: "#ffffff",
          boxShadow: "0 6px 16px rgba(17, 24, 39, 0.25)"
        }}
        whileTap={{ scale: 0.95 }}
        className="arrow-btn"
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          border: "2px solid #475569",
          backgroundColor: "#ffffff",
          color: "#475569",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          outline: "none",
          flexShrink: 0,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </motion.button>
    </motion.div>

      {/* ── Heading for Partners ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          marginBottom: "36px",
          marginTop: "48px",
          padding: "0 20px",
        }}
      >
        <h3
          style={{
            fontSize: "clamp(28px, 5vw, 38px)",
            fontWeight: "600",
            color: "#111827",
            fontFamily: "Poppins, sans-serif",
            marginBottom: "0px",
          }}
        >
          Our <span style={{ color: "#1877F2" }}>Partners</span>
        </h3>
      </motion.div>

      {/* ── Marquee Logos ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          padding: "24px 0",
          background: "#f8fafc",
          overflow: "hidden",
          borderTop: "1px solid #f1f5f9",
          borderBottom: "1px solid #f1f5f9",
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
      </motion.div>

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

          .slider-container {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto auto !important;
            gap: 16px !important;
            padding: 0 16px 36px !important;
          }
          
          .testimonial-card {
            grid-column: 1 / span 2 !important;
            grid-row: 1 !important;
            width: 100% !important;
          }
          
          .arrow-btn:nth-of-type(1) {
            grid-column: 1 !important;
            grid-row: 2 !important;
            justify-self: end !important;
            margin-right: 12px !important;
          }
          
          .arrow-btn:nth-of-type(2) {
            grid-column: 2 !important;
            grid-row: 2 !important;
            justify-self: start !important;
            margin-left: 12px !important;
          }

          .testimonial-content {
            padding: 24px 20px !important;
            gap: 20px !important;
          }

          .testimonial-photo-wrapper {
            flex: 1 1 100% !important;
            min-width: 100% !important;
            max-width: 100% !important;
            display: flex !important;
            justify-content: center !important;
          }

          .testimonial-photo {
            height: 180px !important;
            width: 100% !important;
            max-width: 280px !important;
          }

          .testimonial-text-wrapper {
            flex: 1 1 100% !important;
            min-width: 100% !important;
            align-items: center !important;
            text-align: center !important;
          }

          .testimonial-stars {
            justify-content: center !important;
            margin-bottom: 8px !important;
          }

          .testimonial-stars span {
            font-size: 22px !important;
          }

          .testimonial-text {
            text-align: center !important;
            font-size: 14px !important;
            margin-bottom: 16px !important;
            line-height: 1.5 !important;
          }

          .testimonial-name-block {
            border-left: none !important;
            padding-left: 0 !important;
            text-align: center !important;
            width: 100% !important;
          }

          .testimonial-name {
            text-align: center !important;
            font-size: 18px !important;
          }

          .testimonial-title {
            text-align: center !important;
            font-size: 13px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;