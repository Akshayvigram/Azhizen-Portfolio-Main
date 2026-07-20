import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = () => {
  const navigate = useNavigate();
  const [btnHovered, setBtnHovered] = useState(false);
  const [contactHovered, setContactHovered] = useState(false);

  return (
    <section
      id="cta-section"
      className="relative py-[48px] px-6 sm:px-8 lg:px-12 w-full overflow-hidden text-white flex items-center"
      style={{
        backgroundImage: "url('/image 1161.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#0B132B", // fallback
      }}
    >
      {/* Background Overlay for better text readability */}
      <div className="absolute inset-0 bg-[#0B132B]/30 z-0 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4">
        
        {/* Left Side: Call to Action Texts */}
        <div className="max-w-xl text-left flex flex-col gap-2.5">
          <span className="text-[#00A3FF] text-[13px] lg:text-[14px] font-extrabold tracking-wider font-[Poppins] uppercase">
            Ready to start
          </span>
          <h2 
            className="text-[26px] sm:text-[30px] lg:text-[34px] font-bold font-[Poppins] leading-tight mb-0.5"
            style={{ color: "#ffffff" }}
          >
            Ready to Build Your Next Big Project?
          </h2>
          <p className="text-slate-300/90 text-[13px] sm:text-[14px] font-[Poppins] leading-relaxed max-w-[460px]">
            Let’s discuss your ideas and turn them into a successful digital Solutions
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mt-3">
            <button
              onClick={() => navigate("/contact-us")}
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              className="px-6 py-[10px] font-bold text-[13px] rounded-full transition-all duration-300 font-[Poppins] flex items-center justify-center shadow-[0_4px_16px_rgba(0,115,230,0.25)]"
              style={{
                backgroundColor: btnHovered ? "#0084FF" : "#006EE6",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Book Consultation
            </button>
            <button
              onClick={() => navigate("/contact-us")}
              onMouseEnter={() => setContactHovered(true)}
              onMouseLeave={() => setContactHovered(false)}
              className="px-6 py-[10px] font-bold text-[13px] rounded-full transition-all duration-300 font-[Poppins] flex items-center justify-center border bg-transparent"
              style={{
                borderColor: "#ffffff",
                color: contactHovered ? "#0B132B" : "#ffffff",
                backgroundColor: contactHovered ? "#ffffff" : "transparent",
                cursor: "pointer",
              }}
            >
              Contact us
            </button>
          </div>
        </div>

        {/* Right Side: Contact Info Capsule Box */}
        <div 
          className="w-full lg:w-auto bg-[#030712]/50 border border-white/15 rounded-[12px] p-5 sm:p-6 flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10 items-start sm:items-center justify-center max-w-[800px] mx-auto lg:mx-0 shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
        >
          {/* Item 1: Mail */}
          <div className="flex items-center gap-3 group">
            <div className="w-[44px] h-[44px] shrink-0">
              <img
                src="/Frame 1565.png"
                alt="Mail icon"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-[13px] lg:text-[14px] font-[Poppins] text-white">
                Mail
              </span>
              <a 
                href="mailto:Azhizensolutions@azhizen.com"
                className="text-[#cbd5e1] text-[12px] font-[Poppins] leading-tight hover:text-[#00A3FF] transition-colors"
              >
                Azhizensolutions<br />@azhizen.com
              </a>
            </div>
          </div>

          {/* Item 2: Phone */}
          <div className="flex items-center gap-3 group">
            <div className="w-[44px] h-[44px] shrink-0">
              <img
                src="/Frame 1566.png"
                alt="Phone icon"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-[13px] lg:text-[14px] font-[Poppins] text-white">
                Phone
              </span>
              <a 
                href="tel:+919632587410"
                className="text-[#cbd5e1] text-[12px] font-[Poppins] leading-tight hover:text-[#00A3FF] transition-colors"
              >
                +91 9632587410
              </a>
            </div>
          </div>

          {/* Item 3: Location */}
          <div className="flex items-center gap-3 group">
            <div className="w-[44px] h-[44px] shrink-0">
              <img
                src="/Frame 1567.png"
                alt="Location icon"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-[13px] lg:text-[14px] font-[Poppins] text-white">
                Location
              </span>
              <span className="text-[#cbd5e1] text-[12px] font-[Poppins] leading-tight">
                Thiruchengodu
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;
