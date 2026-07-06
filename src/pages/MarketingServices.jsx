import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Palette, Smartphone, Check } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { marketingServices } from '../data/marketingServicesNew';
// Trigger rebuild with cache-bypassed data source

// Standard up-right arrow icon
const ArrowUpRight = ({ className = "w-[16px] h-[16px]" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.2"
    strokeLinecap="square"
    strokeLinejoin="miter"
  >
    <polyline points="11 6 18 6 18 13" />
    <polyline points="6 11 13 11 13 18" />
  </svg>
);

// Reusable Floating Badge component with custom delay/duration for organic movement
const FloatingBadge = ({ children, className, delay = 0, duration = 3 }) => (
  <motion.div
    className={className}
    animate={{ y: [0, -8, 0] }}
    transition={{
      duration: duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: delay
    }}
  >
    {children}
  </motion.div>
);

const MarketingServices = () => {
  const handleAcademyClick = () => {
    const el = document.getElementById("services-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Entrance animations definition
  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const cardsContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="font-poppins bg-white w-full min-h-screen overflow-x-hidden">
      
      {/* ── HERO SECTION ── */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat overflow-visible"
        style={{
          backgroundImage: "url('/093d9e168be8563656ac2661688920c1fda133cf.png')",
          paddingTop: "96px",
          paddingBottom: "230px",
        }}
      >
        {/* ── Title — centered, white ── */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center px-6 pt-8 pb-5"
        >
          <h1
            style={{ color: '#ffffff' }}
            className="font-poppins font-extrabold text-[28px] sm:text-[38px] lg:text-[44px] leading-tight max-w-[820px] mx-auto"
          >
            Next-Gen Digital Marketing<br />by Azhizen Media
          </h1>
        </motion.div>

        {/* ── THREE-COLUMN LAYOUT (matches Figma exactly) ── */}
        {/*
            LEFT  col : image card  (top = same level as button)
            CENTER col: [button] then [center white card below]
            RIGHT  col: [Logo badge] then [right white card below] then [Mobile badge]
        */}
        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20 w-full max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-10 pb-4"
        >

          {/* ══ LEFT COLUMN : Image Card + badges below ══ */}
          <div className="flex flex-col self-center lg:self-start order-2 lg:order-1 overflow-visible">

            {/* Image card */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="relative w-[260px] h-[260px] shrink-0"
            >
              <img
                src="/63f3b2d49cbe4d045aafdb6f4177d911f7ed72ff.png"
                alt="What We Do — Azhizen"
                className="w-full h-full object-cover rounded-[20px] shadow-[6px_8px_20px_rgba(0,0,0,0.25)]"
              />
            </motion.div>

            {/* Website Development badge — below card, shifted slightly left */}
            <FloatingBadge
              delay={0.2}
              duration={3.2}
              className="mt-3 -ml-4 flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-[6px_8px_12px_rgba(0,0,0,0.18)]"
            >
              <img
                src="/a0ca5728adf4f3483881e71386b34061c9289922.png"
                alt="Website Development"
                className="w-7 h-7 object-contain shrink-0"
              />
              <span className="text-slate-800 font-poppins font-medium text-[12.5px] whitespace-nowrap">
                Website Development
              </span>
            </FloatingBadge>

            {/* UI/UX Design badge — below Website Dev, shifted right */}
            <FloatingBadge
              delay={0.6}
              duration={3.6}
              className="mt-2 ml-[35px] flex items-center gap-2 bg-white pl-2 pr-3 py-1.5 rounded-xl shadow-[6px_8px_12px_rgba(0,0,0,0.18)]"
            >
              <img
                src="/9795a08d13bc8ef72ac67ba281e7618cf4319f00.png"
                alt="UI/UX Design"
                className="w-7 h-7 object-contain rounded-md shrink-0"
              />
              <span className="text-slate-800 font-poppins font-semibold text-[12.5px] whitespace-nowrap">
                UI/UX Design
              </span>
            </FloatingBadge>
          </div>

          {/* ══ CENTER COLUMN : Button → Center Card ══ */}
          <div className="flex flex-col items-center shrink-0 order-1 lg:order-2 self-center lg:self-start">

            {/* Explore Button — sits above center card */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAcademyClick}
              className="bg-[#1877F2] hover:bg-[#1565C0] text-white font-poppins font-semibold text-[15px] px-6 py-3 rounded-md transition-all duration-200 flex items-center gap-2 cursor-pointer border-none mb-5 shadow-[0_4px_14px_rgba(24,119,242,0.35)]"
              style={{ color: '#ffffff', backgroundColor: '#1877F2' }}
            >
              Explore Azhizen Acedemy <ArrowUpRight />
            </motion.button>

            {/* Center white card */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="relative w-[300px] bg-gradient-to-b from-slate-100 to-white rounded-3xl shadow-[0_15px_45px_rgba(0,0,0,.15)] p-6 flex flex-col z-20"
              style={{ minHeight: '390px' }}
            >
              {/* Azhizen Media badge inside the card top (static, no floating animation) */}
              <div
                className="self-center flex items-center bg-white px-5 py-2 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] mb-3"
              >
                <span style={{ color: '#050505' }} className="font-poppins font-semibold text-[14px]">
                  Azhizen Media
                </span>
              </div>

              <h3 style={{ color: '#000000' }} className="font-poppins font-semibold text-[24px] mt-2 leading-tight">
                Providing 10+<br />Marketing Service
              </h3>

              <div className="flex items-start gap-3 mt-3 mb-4">
                <Check className="w-7 h-7 text-[#1877F2] shrink-0 mt-0.5 stroke-[3]" />
                <span className="text-[16px] text-[#000000] font-poppins font-medium leading-relaxed">
                  grow your business<br />
                  through Digital platform<br />
                  to get Sucess
                </span>
              </div>

              <div className="w-full mt-auto">
                <img
                  src="/Frame 1268.png"
                  alt="Digital Marketing Preview"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </motion.div>
          </div>

          {/* ══ RIGHT COLUMN : Logo Badge → Right Card → Mobile Badge ══ */}
          <div className="flex flex-col items-start shrink-0 order-3 self-center lg:self-start">

            {/* Logo And Poster Design badge — ABOVE right card */}
            <FloatingBadge
              delay={0.4}
              duration={3.4}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] mb-4 self-end"
            >
              <img
                src="/f56ccd0b935ef7dfbcda12e105db5f6c6c1db522.png"
                alt="Logo And Poster Design"
                className="w-7 h-7 object-contain shrink-0"
              />
              <span className="text-slate-800 font-poppins font-semibold text-[12.5px] whitespace-nowrap">
                Logo And Poster Design
              </span>
            </FloatingBadge>

            {/* Right white card */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="relative w-[260px] bg-white rounded-[20px] shadow-[-6px_8px_20px_rgba(0,0,0,0.20)] p-6 flex flex-col items-center justify-between"
              style={{ height: '240px' }}
            >
              <h3 style={{ color: '#050505' }} className="font-poppins font-medium text-[15px] leading-snug mt-1 text-center w-full">
                Advanced Billing System<br />for Modern Businesses
              </h3>

              <div className="w-full flex justify-center my-1">
                <img
                  src="/64e37823845fcd721b630868cf1244cdfca89c9d.png"
                  alt="Billing Dashboard"
                  className="w-[120px] h-[125px] object-contain"
                />
              </div>

              <div style={{ color: '#050505' }} className="font-poppins font-medium text-[15px] text-center mt-auto mb-2">
                Grow your Business
              </div>
            </motion.div>

            {/* Mobile App Development badge — BELOW right card */}
            <FloatingBadge
              delay={0.8}
              duration={3.8}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] mt-4 self-start"
            >
              <img
                src="/3f80251d3161d5439bee3d41bea64dbc4b3c2600.png"
                alt="Mobile App Development"
                className="w-7 h-7 object-contain shrink-0"
              />
              <span className="text-slate-800 font-poppins font-semibold text-[12.5px] whitespace-nowrap">
                Mobile App Development
              </span>
            </FloatingBadge>
          </div>

        </motion.div>

        {/* White Vector path bridging into next section */}
        <div className="absolute -bottom-[100px] left-1/2 -translate-x-1/2 w-[450px] md:w-[650px] lg:w-[1300px] xl:w-[1400px] h-[350px] z-[5] pointer-events-none">
          <img
            src="/Vector 131 (1).png"
            alt="White Centre Path"
            className="w-full h-full object-fill"
          />
        </div>
      </div>

      {/* ── SECTION 2 ── */}
      <section
        id="services-section"
        className="bg-[#eef2f6] pt-[70px] pb-[120px] w-full flex flex-col items-center relative z-10 -mt-20"
      >
        <div className="max-w-[1320px] mx-auto w-full px-6 flex flex-col items-center">
          
          {/* Centered Badge (Lavender/Soft Blue BG and Dark Blue Text/Icon) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#DFE5EE] text-[#0F2C59] font-poppins font-medium text-[14px] px-5 py-1.5 rounded-full inline-flex items-center gap-2 mb-6"
          >
            <svg className="w-4 h-4 text-[#0F2C59]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
            </svg>
            Services Designed for Results
          </motion.div>

          {/* Heading with explicit line breaks and wider container to enforce two lines */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-poppins font-bold text-[32px] sm:text-[40px] md:text-[48px] text-[#050505] leading-tight max-w-[1200px] text-center mb-4 mx-auto"
          >
            Delivering strategic, creative, and data-<br className="hidden md:block" />
            driven services to grow your business.
          </motion.h2>

          {/* Paragraph with explicit line breaks */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-poppins font-normal text-[15px] text-gray-500 max-w-[700px] text-center mb-8 leading-relaxed mx-auto"
          >
            We offer a comprehensive suite of creative services designed to<br className="hidden md:block" />
            elevate your brand and captivate your audience.
          </motion.p>

          {/* Explore Button */}
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="!bg-[#1877F2] hover:!bg-[#1565C0] text-white font-poppins font-semibold text-[16px] px-8 py-3.5 rounded-[12px] transition-all duration-200 shadow-[0_4px_14px_rgba(24,119,242,0.3)] flex items-center gap-2 cursor-pointer mb-16"
          >
            Explore Azhizen Media <ArrowUpRight />
          </motion.button>

          {/* ── SERVICES GRID ── */}
          <motion.div
            variants={cardsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-4"
          >
            {marketingServices.map((service, index) => (
              <motion.div key={index} variants={cardVariants} className="h-full">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
      
    </div>
  );
};

export default MarketingServices;
