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
      className="relative py-[48px] w-full overflow-hidden text-white flex items-center"
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

      <div className="max-w-[1280px] mx-auto w-full relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4 px-6">
        
        {/* Left Side: Call to Action Texts */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-xl text-left flex flex-col gap-2.5"
        >
          <span className="text-[#00A3FF] text-[13px] lg:text-[14px] font-extrabold tracking-wider font-[Poppins] uppercase">
            Ready to start
          </span>
          <h2 
            className="text-[26px] sm:text-[30px] lg:text-[34px] font-bold font-[Poppins] leading-tight mb-0.5"
            style={{ color: "#ffffff" }}
          >
            Ready to Build Your <br /> Next Big Project?
          </h2>
          <p className="text-slate-300/90 text-[13px] sm:text-[14px] font-[Poppins] leading-relaxed max-w-[460px]">
            Let’s discuss your ideas and turn them <br /> into a successful digital Solutions
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mt-3">
            <motion.button
              onClick={() => navigate("/contact-us")}
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              whileHover={{ scale: 1.05, shadow: "0 8px 24px rgba(0,115,230,0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-[10px] font-bold text-[13px] rounded-full transition-all duration-300 font-[Poppins] flex items-center justify-center shadow-[0_4px_16px_rgba(0,115,230,0.25)]"
              style={{
                backgroundColor: btnHovered ? "#0084FF" : "#006EE6",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Book Consultation
            </motion.button>
            <motion.button
              onClick={() => navigate("/contact-us")}
              onMouseEnter={() => setContactHovered(true)}
              onMouseLeave={() => setContactHovered(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-[10px] font-bold text-[13px] rounded-full transition-all duration-300 font-[Poppins] flex items-center justify-center border bg-transparent"
              style={{
                borderColor: "#ffffff",
                color: contactHovered ? "#0B132B" : "#ffffff",
                backgroundColor: contactHovered ? "#ffffff" : "transparent",
                cursor: "pointer",
              }}
            >
              Contact us
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side: Contact Info Capsule Box */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="w-full lg:w-auto bg-[#030712]/50 border border-white/15 rounded-[12px] py-6 px-8 sm:px-10 lg:px-12 flex flex-col sm:flex-row gap-8 sm:gap-10 lg:gap-12 items-start sm:items-center justify-center max-w-[850px] mx-auto lg:ml-0 lg:mr-24 shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
        >
          {/* Item 1: Mail */}
          <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-3.5 group cursor-pointer">
            <div className="w-[48px] h-[48px] shrink-0">
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
          </motion.div>

          {/* Item 2: Phone */}
          <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-3.5 group cursor-pointer">
            <div className="w-[48px] h-[48px] shrink-0">
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
          </motion.div>

          {/* Item 3: Location */}
          <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-3.5 group cursor-pointer">
            <div className="w-[48px] h-[48px] shrink-0">
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
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default CTASection;
