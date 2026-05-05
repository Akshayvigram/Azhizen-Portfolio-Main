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





// import React from "react";
// import { Link } from "react-router-dom";

// const AboutUsPage = () => {
//   return (
//     <div className="bg-white min-h-screen pt-24 pb-12 w-full flex flex-col overflow-hidden" style={{ fontFamily: "Poppins, sans-serif" }}>
//       {/* Top Section */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row justify-between items-center mt-12 gap-12 lg:gap-8">

//         {/* Left Text & Stats */}
//         <div className="flex-1 max-w-2xl">
//           <h1 className="text-3xl lg:text-4xl font-semibold capitalize text-black leading-tight mb-6">
//             Where innovation meets excellence and{" "}
//             <span className="text-blue-500" style={{ color: "#1877F2" }}>ideas evolve into impactful solutions.</span>
//           </h1>
//           <p className="text-neutral-600 text-lg lg:text-xl font-medium capitalize leading-8 mb-12">
//             Azhizen drives innovation through advanced R&amp;D, precision manufacturing, and smart product development across biomedical, AI/ML, edutech, and green tech—transforming ideas into scalable, real-world solutions.
//           </p>

//           {/* Stats */}
//           <div className="flex flex-wrap gap-12">
//             <div>
//               <div className="text-blue-500 text-4xl font-bold capitalize mb-2" style={{ color: "#1877F2" }}>15+</div>
//               <div className="text-neutral-400 text-xl font-semibold capitalize">Team Members</div>
//             </div>
//             <div>
//               <div className="text-blue-500 text-4xl font-bold capitalize mb-2" style={{ color: "#1877F2" }}>10+</div>
//               <div className="text-neutral-400 text-xl font-semibold capitalize">Happy Clients</div>
//             </div>
//             <div>
//               <div className="text-blue-500 text-4xl font-bold capitalize mb-2" style={{ color: "#1877F2" }}>99%</div>
//               <div className="text-neutral-400 text-xl font-semibold capitalize">Client Satisfaction</div>
//             </div>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="flex-1 w-full lg:max-w-[500px] xl:max-w-[600px] flex justify-end">
//           <img
//             src="/image 698.png"
//             alt="Team collaboration"
//             className="w-full h-auto object-cover rounded-xl shadow-lg"
//           />
//         </div>
//       </div>

//       <div className="h-px bg-neutral-200 max-w-7xl mx-auto w-full mt-24 mb-24"></div>

//       {/* Bottom Section */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-24">

//         {/* Left Image with overlay */}
//         <div className="flex-1 relative w-full lg:max-w-lg xl:max-w-xl">
//           <img
//             src="/image.png"
//             alt="CEO working"
//             className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-lg"
//           />
//           {/* Overlay Box */}
//           <div className="absolute -right-6 sm:-right-10 lg:-right-16 top-[25%] lg:top-[30%] bg-white px-6 py-4 rounded-2xl shadow-2xl border border-gray-100 z-10 w-max">
//             <div className="text-[15px] font-bold text-gray-800">Mr. Bharath R</div>
//             <div className="text-blue-500 text-[13px] font-semibold mt-1" style={{ color: "#1877F2" }}>CEO - Azhizen</div>
//           </div>
//         </div>

//         {/* Right Text */}
//         <div className="flex-1 mt-12 lg:mt-0 pl-0 lg:pl-12">
//           <h3 className="text-blue-500 text-base font-bold uppercase tracking-wider mb-3" style={{ color: "#1877F2" }}>Our Mission</h3>
//           <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
//             Solutions that stick with you <span className="text-blue-500" style={{ color: "#1877F2" }}>always</span>
//           </h2>
//           <p className="text-gray-600 text-lg leading-relaxed mb-8">
//             At Azhizen, we transform bold ideas into groundbreaking realities with creativity, integrity, and a passion for quality. We exceed expectations, delivering innovative biomedical, engineering, and tech solutions that shape a smarter, sustainable future—one project at a time.
//           </p>
//           <Link
//             to="/carrer"
//             className="inline-block text-white font-semibold py-3 px-8 rounded-full transition-all hover:brightness-110"
//             style={{ background: "linear-gradient(135deg, #1877F2 0%, #0F5FD4 100%)" }}
//           >
//             Join Our Team
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUsPage;