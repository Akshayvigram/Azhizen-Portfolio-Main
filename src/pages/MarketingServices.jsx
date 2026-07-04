import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Palette, Smartphone, Check } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { marketingServices } from '../data/marketingServices';

// Standard up-right arrow icon
const ArrowUpRight = ({ className = "w-[16px] h-[16px]" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
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
    <div className="font-poppins bg-[#F8FAFC] w-full min-h-screen overflow-x-hidden">
      
      {/* ── HERO SECTION ── */}
      <div 
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat pt-[120px] pb-[160px] flex flex-col items-center justify-between text-center overflow-visible"
        style={{
          backgroundImage: "url('/093d9e168be8563656ac2661688920c1fda133cf.png')"
        }}
      >
        {/* Spacer to push content down on desktop */}
        <div className="hidden lg:block h-6"></div>

        {/* Centered Heading & CTA */}
        <div className="max-w-[1320px] mx-auto w-full px-6 flex flex-col items-center relative z-10">
          <motion.h1 
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            className="font-poppins font-bold text-[36px] sm:text-[48px] lg:text-[64px] text-white leading-[1.1] max-w-[950px] mb-8 text-center"
          >
            Next-Gen Digital Marketing<br />by Azhizen Media
          </motion.h1>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAcademyClick}
            className="bg-gradient-to-r from-[#1877F2] to-[#006EE6] hover:from-[#1565C0] hover:to-[#005cb3] text-white font-poppins font-semibold text-[16px] px-8 py-3.5 rounded-[50px] transition-all duration-300 shadow-[0_8px_20px_rgba(24,119,242,0.35)] flex items-center gap-2 cursor-pointer mb-[70px] border-none"
          >
            Explore Azhizen Acedemy <ArrowUpRight />
          </motion.button>
        </div>

        {/* Three Floating Cards Container */}
        <motion.div 
          variants={cardsContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12 lg:gap-[40px] w-full max-w-[1100px] px-6 relative z-20 mt-4 mb-8"
        >
          
          {/* Left Card: Dark Image Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="relative w-[320px] md:w-[330px] h-[320px] md:h-[330px] shrink-0 order-1 lg:order-1"
          >
            <img 
              src="/63f3b2d49cbe4d045aafdb6f4177d911f7ed72ff.png" 
              alt="Website & UI/UX" 
              className="w-full h-full object-cover rounded-3xl shadow-[0_15px_45px_rgba(0,0,0,.15)]"
            />
            {/* Website Development badge */}
            <FloatingBadge className="absolute -left-6 bottom-[40px] z-30 flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-100/30" delay={0} duration={3}>
              <span className="flex items-center justify-center bg-purple-100 text-purple-600 rounded-lg w-7 h-7">
                <Laptop className="w-4 h-4" />
              </span>
              <span className="text-slate-800 font-poppins font-semibold text-[13px] whitespace-nowrap">
                Website Development
              </span>
            </FloatingBadge>
            {/* UI/UX Design badge */}
            <FloatingBadge className="absolute left-[110px] -bottom-[20px] z-30 flex items-center gap-2 bg-white pl-2 pr-4 py-2 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-100/30" delay={0.4} duration={3.2}>
              <div className="bg-[#1877F2] text-white text-[9px] font-bold rounded-full w-8 h-8 flex items-center justify-center font-poppins shrink-0">
                UI/UX
              </div>
              <span className="text-slate-800 font-poppins font-semibold text-[13px] whitespace-nowrap">
                UI/UX Design
              </span>
            </FloatingBadge>
          </motion.div>

          {/* Center Card: White Rounded Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="relative w-[320px] md:w-[330px] bg-white rounded-3xl shadow-[0_15px_45px_rgba(0,0,0,.15)] shrink-0 p-6 flex flex-col items-center justify-between min-h-[440px] lg:-translate-y-6 order-3 lg:order-2 z-20"
          >
            {/* Azhizen Media Badge */}
            <FloatingBadge className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 flex items-center bg-white px-6 py-2 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-slate-100/80" delay={0.2} duration={2.8}>
              <span className="text-[#050505] font-poppins font-semibold text-[13px]">
                Azhizen Media
              </span>
            </FloatingBadge>

            <h3 className="font-poppins font-bold text-[22px] text-[#050505] mt-4 leading-snug text-center">
              Providing 10+<br />Marketing Service
            </h3>
            
            <div className="flex items-start gap-2.5 my-5 text-left w-full px-2">
              <Check className="w-5 h-5 text-[#1877F2] shrink-0 mt-0.5 stroke-[3.5]" />
              <span className="text-[14px] text-gray-700 font-poppins font-medium leading-relaxed">
                grow your business<br />
                through Digital platform<br />
                to get Sucess
              </span>
            </div>
            
            <div className="w-full px-2 pb-2">
              <img 
                src="/Frame 1268.png" 
                alt="Digital Marketing Preview" 
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Right Card: White Rounded Card */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="relative w-[320px] md:w-[330px] bg-white rounded-3xl shadow-[0_15px_45px_rgba(0,0,0,.15)] shrink-0 p-6 flex flex-col items-center justify-between min-h-[380px] order-2 lg:order-3"
          >
            <h3 className="font-poppins font-bold text-[18px] text-[#050505] leading-snug mt-2 text-center w-full">
              Advanced Billing System<br />for Modern Businesses
            </h3>
            
            <div className="w-full flex justify-center py-4">
              <img 
                src="/64e37823845fcd721b630868cf1244cdfca89c9d.png" 
                alt="Billing Dashboard" 
                className="h-[120px] w-auto object-contain"
              />
            </div>
            
            <div className="font-poppins font-bold text-[14px] text-slate-800 mt-2 mb-2 text-center w-full">
              Grow your Business
            </div>

            {/* Logo And Poster Design badge */}
            <FloatingBadge className="absolute -right-10 -top-6 z-30 flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-100/30" delay={0.1} duration={3.4}>
              <span className="flex items-center justify-center bg-blue-50 text-blue-500 rounded-lg w-7 h-7">
                <Palette className="w-4 h-4" />
              </span>
              <span className="text-slate-800 font-poppins font-semibold text-[13px] whitespace-nowrap">
                Logo And Poster Design
              </span>
            </FloatingBadge>

            {/* Mobile App Development badge */}
            <FloatingBadge className="absolute -left-12 -bottom-6 z-30 flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-100/30" delay={0.3} duration={3}>
              <span className="flex items-center justify-center bg-blue-50 text-blue-500 rounded-lg w-7 h-7">
                <Smartphone className="w-4 h-4" />
              </span>
              <span className="text-slate-800 font-poppins font-semibold text-[13px] whitespace-nowrap">
                Mobile App Development
              </span>
            </FloatingBadge>
          </motion.div>

        </motion.div>

        {/* Large White Vector Path (Visually bridging into the next section) */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[82%] w-[380px] md:w-[600px] lg:w-[1000px] xl:w-[1200px] z-[5] pointer-events-none">
          <img 
            src="/Vector 131 (1).png" 
            alt="White Center Path" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* ── SECTION 2 ── */}
      <section
        id="services-section"
        className="bg-[#F8FAFC] pt-[180px] pb-[120px] w-full flex flex-col items-center relative z-10"
      >
        <div className="max-w-[1320px] mx-auto w-full px-6 flex flex-col items-center">
          
          {/* Centered Badge (Lavender/Soft Blue BG and Dark Blue Text/Icon) */}
          <div className="bg-[#DFE5EE] text-[#0F2C59] font-poppins font-medium text-[14px] px-5 py-1.5 rounded-full inline-flex items-center gap-2 mb-6">
            <svg className="w-4 h-4 text-[#0F2C59]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
            </svg>
            Services Designed for Results
          </div>

          {/* Heading with explicit line breaks and wider container to enforce two lines */}
          <h2 className="font-poppins font-bold text-[32px] sm:text-[40px] md:text-[48px] text-[#050505] leading-tight max-w-[1200px] text-center mb-4 mx-auto">
            Delivering strategic, creative, and data-<br className="hidden md:block" />
            driven services to grow your business.
          </h2>

          {/* Paragraph with explicit line breaks */}
          <p className="font-poppins font-normal text-[15px] text-gray-500 max-w-[700px] text-center mb-8 leading-relaxed mx-auto">
            We offer a comprehensive suite of creative services designed to<br className="hidden md:block" />
            elevate your brand and captivate your audience.
          </p>

          {/* Explore Button */}
          <button
            className="!bg-[#1877F2] hover:!bg-[#1565C0] text-white font-poppins font-semibold text-[16px] px-8 py-3.5 rounded-[12px] transition-all duration-200 shadow-[0_4px_14px_rgba(24,119,242,0.3)] flex items-center gap-2 cursor-pointer mb-16"
          >
            Explore Azhizen Media <ArrowUpRight />
          </button>

          {/* ── SERVICES GRID ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-4">
            {marketingServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>

        </div>
      </section>
      
    </div>
  );
};

export default MarketingServices;
